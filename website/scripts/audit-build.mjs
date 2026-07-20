import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const distDirectory = path.resolve('dist');

if (!fs.existsSync(distDirectory)) {
  throw new Error('Build output is missing. Run npm run build before npm run audit:build.');
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function getAttribute(tag, name) {
  return tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, 'i'))?.[1];
}

function normalizeRoute(pathname) {
  return pathname === '/' ? '/' : pathname.replace(/\/$/, '');
}

const files = walk(distDirectory);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const errors = [];
const values = { titles: [], descriptions: [], canonicals: [] };
const routes = new Map();
const redirectRoutes = new Set();
const schemaCounts = new Map();

for (const file of htmlFiles) {
  const relativePath = path.relative(distDirectory, file).replaceAll('\\', '/');
  const route = relativePath === 'index.html' ? '/' : `/${relativePath.replace(/\/index\.html$/, '')}`;
  routes.set(route, file);
}

for (const [route, file] of routes) {
  const html = fs.readFileSync(file, 'utf8');
  if (/<meta\s+http-equiv="refresh"/i.test(html) && /<meta\s+name="robots"\s+content="noindex"/i.test(html)) {
    redirectRoutes.add(route);
    continue;
  }
  const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim();
  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.trim();
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i)?.[1]?.trim();
  const openGraphUrl = html.match(/<meta\s+property="og:url"\s+content="([^"]*)"/i)?.[1]?.trim();

  if (!title) errors.push(`${route}: missing title`);
  else values.titles.push([title, route]);
  if (!description) errors.push(`${route}: missing description`);
  else values.descriptions.push([description, route]);
  if (!canonical) errors.push(`${route}: missing canonical`);
  else {
    values.canonicals.push([canonical, route]);
    const expectedPath = route === '/' ? '/' : `${route}/`;
    if (new URL(canonical).pathname !== expectedPath) errors.push(`${route}: canonical path does not match generated URL`);
    if (openGraphUrl !== canonical) errors.push(`${route}: Open Graph URL does not match canonical URL`);
  }

  if ((html.match(/<h1\b/gi) ?? []).length !== 1) errors.push(`${route}: expected exactly one h1`);
  for (const property of ['og:title', 'og:description', 'og:image', 'og:image:alt', 'og:url']) {
    if (!html.includes(`property="${property}"`)) errors.push(`${route}: missing ${property}`);
  }
  if (!html.includes('<html lang="en">')) errors.push(`${route}: missing lang="en"`);
  if (!html.includes('name="viewport"')) errors.push(`${route}: missing viewport metadata`);
  if (!html.includes('href="#main-content"') || !html.includes('id="main-content"')) {
    errors.push(`${route}: skip link or main target is missing`);
  }

  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    for (const attribute of ['alt', 'width', 'height']) {
      if (!getAttribute(tag, attribute)) errors.push(`${route}: image is missing ${attribute}`);
    }
    if (!getAttribute(tag, 'loading') && getAttribute(tag, 'fetchpriority') !== 'high') {
      errors.push(`${route}: image lacks lazy loading or high fetch priority`);
    }
    const source = getAttribute(tag, 'src');
    if (source?.startsWith('/')) {
      const assetPath = path.join(distDirectory, source.split(/[?#]/)[0]);
      if (!fs.existsSync(assetPath)) errors.push(`${route}: missing image asset ${source}`);
    }
  }

  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis)) {
    try {
      const data = JSON.parse(match[1]);
      schemaCounts.set(data['@type'], (schemaCounts.get(data['@type']) ?? 0) + 1);
    } catch (error) {
      errors.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const tag of html.match(/<a\b[^>]*>/gi) ?? []) {
    const href = getAttribute(tag, 'href');
    if (!href) {
      errors.push(`${route}: link is missing href`);
      continue;
    }
    if (/^(https?:|mailto:|tel:)/i.test(href)) continue;

    const [rawPath, fragment] = href.split('#');
    const targetPath = rawPath ? new URL(rawPath, `https://audit.invalid${route}/`).pathname : route;
    const targetRoute = normalizeRoute(targetPath);
    const targetFile = routes.get(targetRoute);

    if (!targetFile && !path.extname(targetPath)) errors.push(`${route}: broken internal link ${href}`);
    if (fragment && targetFile) {
      const targetHtml = fs.readFileSync(targetFile, 'utf8');
      const escapedFragment = fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const targetPattern = new RegExp(`(?:id|name)=["']${escapedFragment}["']`);
      if (!targetPattern.test(targetHtml)) errors.push(`${route}: missing fragment target ${href}`);
    }
  }
}

for (const [label, entries] of Object.entries(values)) {
  const seen = new Map();
  for (const [value, route] of entries) {
    if (seen.has(value)) errors.push(`duplicate ${label}: ${route} and ${seen.get(value)}`);
    seen.set(value, route);
  }
}

const generatedText = files
  .filter((file) => /\.(html|xml|txt)$/.test(file))
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');
if (/AFFILIATE_LINK_[A-Z]+/.test(generatedText)) errors.push('affiliate placeholder leaked into generated output');
if (/\b(?:TODO|FIXME|TBD|lorem ipsum|coming soon)\b/i.test(generatedText)) {
  errors.push('unfinished messaging leaked into generated output');
}

const robots = fs.readFileSync(path.join(distDirectory, 'robots.txt'), 'utf8');
const sitemapIndexUrl = robots.match(/^Sitemap:\s*(.+)$/m)?.[1];
if (!sitemapIndexUrl) errors.push('robots.txt does not declare a sitemap');
else {
  const canonicalOrigin = values.canonicals[0] ? new URL(values.canonicals[0][0]).origin : undefined;
  if (canonicalOrigin && sitemapIndexUrl !== `${canonicalOrigin}/sitemap-index.xml`) {
    errors.push('robots.txt sitemap origin does not match canonical origin');
  }
}

const sitemapFile = files.find((file) => /sitemap-\d+\.xml$/.test(file));
const sitemapText = sitemapFile ? fs.readFileSync(sitemapFile, 'utf8') : '';
const sitemapUrls = [...sitemapText.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const contentPageCount = htmlFiles.length - redirectRoutes.size;
if (sitemapUrls.length !== contentPageCount) {
  errors.push(`sitemap has ${sitemapUrls.length} URLs for ${contentPageCount} indexable HTML pages`);
}
const canonicalSet = new Set(values.canonicals.map(([value]) => value));
for (const sitemapUrl of sitemapUrls) {
  if (!canonicalSet.has(sitemapUrl)) errors.push(`sitemap URL is not a page canonical: ${sitemapUrl}`);
}

const report = {
  htmlPages: htmlFiles.length,
  redirectPages: redirectRoutes.size,
  uniqueTitles: new Set(values.titles.map(([value]) => value)).size,
  uniqueDescriptions: new Set(values.descriptions.map(([value]) => value)).size,
  uniqueCanonicals: new Set(values.canonicals.map(([value]) => value)).size,
  sitemapUrls: sitemapUrls.length,
  schemas: Object.fromEntries([...schemaCounts].sort()),
  errors,
};

console.log(JSON.stringify(report, null, 2));
if (errors.length > 0) process.exitCode = 1;
