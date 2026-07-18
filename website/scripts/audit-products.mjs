import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function importTypeScript(relativePath) {
  const sourcePath = path.join(root, relativePath);
  const source = await readFile(sourcePath, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
    fileName: sourcePath,
  }).outputText;
  const dataUrl = `data:text/javascript;base64,${Buffer.from(output).toString('base64')}`;
  return import(dataUrl);
}

const { products, productCollectionIds, isActiveAffiliateLink, getProductPath } = await importTypeScript(path.join('src', 'data', 'products.ts'));
const { productCollections } = await importTypeScript(path.join('src', 'data', 'collections.ts'));

const errors = [];
const warnings = [];
const ids = new Map();
const names = new Map();
const slugs = new Map();
const validCollections = new Set(productCollectionIds);
const validAffiliateOwners = new Map();
const genericSunFounderUrl = 'https://www.sunfounder.com/?ref=tmbxfubs';
const placeholderPattern = /(?:AFFILIATE_LINK_|_AFFILIATE_URL_REQUIRED$)/i;
const genericProductRoute = path.join(root, 'src', 'pages', 'products', 'details', '[id].astro');

const collectionNames = new Map(productCollections.map((collection) => [collection.id, collection.name]));
const collectionName = (id) => collectionNames.get(id) ?? id;
const isValidHttpUrl = (value) => {
  try {
    const url = new URL(value);
    return (url.protocol === 'http:' || url.protocol === 'https:') && Boolean(url.hostname);
  } catch {
    return false;
  }
};
const affiliateUrls = (product) => product.affiliateLinks
  ? [product.affiliateLinks.amazon, product.affiliateLinks.sunfounder, ...Object.values(product.affiliateLinks.additionalVendors ?? {})].filter(Boolean)
  : [];
const activeAffiliateUrls = (product) => affiliateUrls(product).filter(isActiveAffiliateLink);
const isSunFounderProduct = (product) => product.brand?.trim().toLocaleLowerCase() === 'sunfounder';
const isValidSunFounderAffiliateUrl = (value) => {
  if (!isActiveAffiliateLink(value) || !isValidHttpUrl(value) || value === genericSunFounderUrl) return false;
  const url = new URL(value);
  const hostname = url.hostname.toLocaleLowerCase();
  return (hostname === 'sunfounder.com' || hostname === 'www.sunfounder.com')
    && url.pathname.includes('/products/')
    && Boolean(url.searchParams.get('ref'));
};
const hasProductPage = (product) => {
  if (!product.id || !getProductPath(product)) return false;
  if (!product.picoKitProfile) return existsSync(genericProductRoute);
  return existsSync(path.join(root, 'src', 'pages', 'products', `${product.id}.astro`));
};
const addOwner = (map, value, owner) => {
  const owners = map.get(value) ?? [];
  owners.push(owner);
  map.set(value, owners);
  return owners;
};
const duplicateValueCount = (map) => [...map.values()].filter((owners) => owners.length > 1).length;

for (const product of products) {
  const label = `${product.id} (${product.name})`;
  const idOwners = addOwner(ids, product.id, product.name);
  if (idOwners.length > 1) errors.push(`Duplicate product id: ${product.id}`);
  addOwner(names, product.name?.trim().toLocaleLowerCase(), product.id);

  const slug = getProductPath(product);
  const slugOwners = addOwner(slugs, slug, product.id);
  if (slugOwners.length > 1) errors.push(`${label}: duplicate product slug/route shared with ${slugOwners[0]}`);

  for (const field of ['id', 'name', 'brand', 'category', 'shortDescription', 'primaryCollection']) {
    if (!product[field]) errors.push(`${label}: missing required field "${field}"`);
  }
  if (!product.affiliateLinks) errors.push(`${label}: missing required affiliateLinks`);

  if (!product.primaryCollection) errors.push(`${label}: missing primaryCollection`);
  if (!Array.isArray(product.collections) || product.collections.length === 0) {
    errors.push(`${label}: collections must contain at least one collection`);
  } else {
    if (!product.collections.includes(product.primaryCollection)) errors.push(`${label}: primaryCollection is not included in collections`);
    for (const collectionId of product.collections) {
      if (!validCollections.has(collectionId)) errors.push(`${label}: unknown collection id "${collectionId}"`);
    }
  }
  if (product.primaryCollection && !validCollections.has(product.primaryCollection)) errors.push(`${label}: unknown primaryCollection "${product.primaryCollection}"`);
  for (const collectionId of product.featuredInCollections ?? []) {
    if (!validCollections.has(collectionId)) errors.push(`${label}: unknown featuredInCollections id "${collectionId}"`);
  }
  for (const collectionId of Object.keys(product.collectionPriority ?? {})) {
    if (!validCollections.has(collectionId)) errors.push(`${label}: unknown collectionPriority id "${collectionId}"`);
  }
  if (!hasProductPage(product)) errors.push(`${label}: product page route is not supported by an Astro page`);

  if (!product.affiliateLinks) continue;
  const urls = affiliateUrls(product);
  const placeholders = urls.filter((url) => placeholderPattern.test(url));
  const invalidUrls = urls.filter((url) => !placeholderPattern.test(url) && !isValidHttpUrl(url));
  const hasValidSunFounderLink = isValidSunFounderAffiliateUrl(product.affiliateLinks.sunfounder);
  if (isSunFounderProduct(product) && !hasValidSunFounderLink) {
    const details = [
      placeholders.length > 0 ? `placeholder values: ${placeholders.join(', ')}` : '',
      invalidUrls.length > 0 ? `invalid values: ${invalidUrls.join(', ')}` : '',
    ].filter(Boolean);
    warnings.push(`${label}: SunFounder product has no valid product-specific SunFounder affiliate URL${details.length > 0 ? ` (${details.join('; ')})` : ''}`);
  } else {
    if (placeholders.length > 0) warnings.push(`${label}: remaining affiliate placeholder values: ${placeholders.join(', ')}`);
    if (invalidUrls.length > 0) warnings.push(`${label}: invalid affiliate URL values: ${invalidUrls.join(', ')}`);
  }
  for (const url of urls) {
    if (url === genericSunFounderUrl) errors.push(`${label}: uses the generic SunFounder homepage referral URL`);
    if (!isActiveAffiliateLink(url)) continue;
    const owner = validAffiliateOwners.get(url);
    if (owner && owner !== product.id) errors.push(`${label}: unexpectedly shares affiliate URL with ${owner}`);
    validAffiliateOwners.set(url, product.id);
  }
}

const sunFounderProducts = products.filter(isSunFounderProduct);
const sunFounderProductsWithValidAffiliateLinks = sunFounderProducts.filter((product) => isValidSunFounderAffiliateUrl(product.affiliateLinks?.sunfounder));
const sunFounderProductsMissingAffiliateLinks = sunFounderProducts.filter((product) => !isValidSunFounderAffiliateUrl(product.affiliateLinks?.sunfounder));
const otherBrandProducts = products.filter((product) => !isSunFounderProduct(product));
const otherBrandProductsWithAffiliateLinks = otherBrandProducts.filter((product) => activeAffiliateUrls(product).length > 0);
const otherBrandProductsWithoutConfiguredPrograms = otherBrandProducts.filter((product) => activeAffiliateUrls(product).length === 0);
const productsInMultipleCollections = products.filter((product) => (product.collections?.length ?? 0) > 1);
const productsWithoutDocumentation = products.filter((product) => !product.documentationUrl);
const productsWithoutProductPages = products.filter((product) => !hasProductPage(product));
const affiliateOwners = new Map();
for (const product of products) {
  for (const url of activeAffiliateUrls(product)) addOwner(affiliateOwners, url, product.id);
}

console.log('=========================================');
console.log('Engineering Maker Lab Catalog');
console.log('=========================================');
console.log(`Total products: ${products.length}`);
console.log(`Total collections: ${productCollectionIds.length}`);
console.log(`SunFounder products: ${sunFounderProducts.length}`);
console.log(`SunFounder products with valid affiliate links: ${sunFounderProductsWithValidAffiliateLinks.length}`);
console.log(`SunFounder products missing affiliate links: ${sunFounderProductsMissingAffiliateLinks.length}`);
console.log(`Other-brand products: ${otherBrandProducts.length}`);
console.log(`Other-brand affiliate programs not configured: ${otherBrandProductsWithoutConfiguredPrograms.length}`);
console.log(`Products appearing in multiple collections: ${productsInMultipleCollections.length}`);
console.log('=========================================');

console.log('\nCollections\n');
const sortedCollections = [...productCollectionIds]
  .map((id) => ({ id, name: collectionName(id) }))
  .sort((a, b) => a.name.localeCompare(b.name));
const longestCollectionName = Math.max(...sortedCollections.map(({ name }) => name.length));
for (const { id, name } of sortedCollections) {
  const count = products.filter((product) => product.collections?.includes(id)).length;
  console.log(`${name} ${'.'.repeat(longestCollectionName - name.length + 5)} ${count}`);
}

console.log('\nProduct Inventory');
for (const product of [...products].sort((a, b) => a.name.localeCompare(b.name))) {
  const additionalCollections = (product.collections ?? []).filter((id) => id !== product.primaryCollection).map(collectionName);
  console.log(`\n${product.name}`);
  console.log(`Primary: ${collectionName(product.primaryCollection)}`);
  console.log(`Also in: ${additionalCollections.length > 0 ? additionalCollections.join(', ') : 'None'}`);
  const affiliateStatus = isSunFounderProduct(product)
    ? (isValidSunFounderAffiliateUrl(product.affiliateLinks?.sunfounder) ? 'OK' : 'MISSING SUNFOUNDER LINK')
    : (activeAffiliateUrls(product).length > 0 ? 'OK' : 'NOT CONFIGURED');
  console.log(`Affiliate: ${affiliateStatus}`);
  console.log(`Documentation: ${product.documentationUrl ? 'OK' : 'MISSING'}`);
  console.log(`Product Page: ${hasProductPage(product) ? 'OK' : 'MISSING'}`);
  console.log('----------------------------------------');
}

console.log('\nValidation Results');
for (const warning of warnings) console.log(`WARNING: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);

console.log('\nMaintenance Tasks');
if (sunFounderProductsMissingAffiliateLinks.length === 0) console.log('None.');
else for (const product of sunFounderProductsMissingAffiliateLinks) console.log(`- Add a verified product-specific SunFounder affiliate URL for ${product.name}`);

console.log('\nOther Affiliate Programs Not Configured');
console.log('Informational only. These products do not require affiliate links under the current policy.');
if (otherBrandProductsWithoutConfiguredPrograms.length === 0) console.log('None.');
else for (const product of otherBrandProductsWithoutConfiguredPrograms) console.log(`- ${product.name}`);

console.log('\nSummary Statistics');
console.log(`SunFounder products: ${sunFounderProducts.length}`);
console.log(`SunFounder products without valid affiliate links: ${sunFounderProductsMissingAffiliateLinks.length}`);
console.log(`Other-brand products: ${otherBrandProducts.length}`);
console.log(`Other-brand products with affiliate links: ${otherBrandProductsWithAffiliateLinks.length}`);
console.log(`Other-brand products without configured affiliate programs: ${otherBrandProductsWithoutConfiguredPrograms.length}`);
console.log(`Products without documentation: ${productsWithoutDocumentation.length}`);
console.log(`Products without product pages: ${productsWithoutProductPages.length}`);
console.log(`Duplicate affiliate URLs: ${duplicateValueCount(affiliateOwners)}`);
console.log(`Duplicate product names: ${duplicateValueCount(names)}`);
console.log(`Duplicate IDs: ${duplicateValueCount(ids)}`);
console.log(`Duplicate slugs: ${duplicateValueCount(slugs)}`);
console.log(`Validation: ${errors.length} error(s), ${warnings.length} warning(s)`);

if (errors.length > 0) process.exitCode = 1;
