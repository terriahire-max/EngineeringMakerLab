# Product Management

Engineering Maker Lab uses two permanent catalog actions:

- Add: `publishing/prompts/add-product.md`
- Remove: `publishing/prompts/remove-product.md`

`website/src/data/products.ts` is the catalog and affiliate source of truth. Keep one record, ID, product route, affiliate mapping, documentation mapping, and description per product.

## Add a product

Use the Add Product prompt. Inspect the official product page, check for an existing ID or equivalent product, write an original factual summary, and use only the supplied verified affiliate URL.

To place one product in several collections, keep one record:

```ts
primaryCollection: 'robotics',
collections: ['robotics', 'raspberry-pi'],
```

Use `collectionPriority` only when explicit ordering is needed. Never duplicate a product record for collection placement.

## Permanently remove a product

Use the Remove Product prompt. You only need the displayed product name; the workflow finds its internal ID, slug, route, mappings, collections, and references automatically. It stops without editing when no product matches or when multiple products are plausible.

Example:

```text
PRODUCT_NAME:
Exact displayed product name

OPTIONAL_REPLACEMENT_PRODUCT_NAME:

OPTIONAL_NOTES:
Optional removal context.
```

The workflow deletes the centralized record and product-specific mappings, removes all repository references, ensures its generated or dedicated route disappears, and deletes only assets confirmed to be unused. A replacement is identified by its displayed product name and applied only when explicitly supplied, uniquely matched, and verified.

## Affiliate URLs

Affiliate mappings live in `website/src/data/products.ts`. Never construct a referral URL, replace an existing verified URL, or use the generic SunFounder homepage referral for a product CTA. Keep documentation URLs separate.

### Current Affiliate Policy

- SunFounder is the only active affiliate program.
- Every SunFounder product must use a verified product-specific SunFounder affiliate URL.
- Other-brand products may remain informational without purchase links.
- ELEGOO, iFixit, Amazon, and other affiliate programs can be added later.
- Do not insert placeholder affiliate URLs.
- Do not use a generic vendor homepage referral URL for a product purchase button.

Search for unresolved placeholders with:

```sh
rg "AFFILIATE_LINK_|AFFILIATE_URL_REQUIRED" website/src
```

## Validate and test locally

```sh
cd website
npm run audit:products
npm run check
npm run build
npm run dev
```

Review the direct product route and every assigned collection.

## Publish

After local review:

```sh
git status
git add .
git commit -m "Describe product update"
git push
```

Cloudflare automatically deploys after the GitHub push.
