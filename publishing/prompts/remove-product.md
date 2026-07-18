# Remove a Product

Replace only these values:

PRODUCT_NAME:

OPTIONAL_REPLACEMENT_PRODUCT_NAME:

OPTIONAL_NOTES:

## Purpose

Permanently remove the named product from Engineering Maker Lab because it is no longer offered or should no longer be part of the catalog.

Do not merely deactivate, hide, or mark the product unavailable.

## Product identification

Search `website/src/data/products.ts` and related centralized data for `PRODUCT_NAME`.

Prefer an exact, case-insensitive displayed-name match. When necessary, also search known aliases, titles, slugs, and repository references. Determine the product's internal ID, slug, route, affiliate mapping key, collection assignments, documentation mapping, related assets, and references automatically.

Before editing, report the matched:

- product name
- product ID
- product route

If no product matches, stop and report that nothing was changed. If more than one plausible product matches, stop and list the candidates. Never guess which product the user intended, including when `PRODUCT_NAME` is abbreviated.

## Requirements

### A. Remove centralized product data

Remove the matched product record and all product-specific centralized data, including:

- product object
- product-specific affiliate mapping
- documentation mapping
- featured mappings
- comparison data
- collection-specific references

Do not modify unrelated products or affiliate URLs.

### B. Remove the product route

Remove the product page or generated route associated with the matched product. Ensure the removed product no longer produces a public product page.

### C. Remove public references

Search the entire repository using:

- `PRODUCT_NAME`
- matched product ID
- matched slug
- known aliases found in the repository

Remove obsolete references from homepage sections, collection pages, featured-product areas, recommended-products pages, buying guides, comparison tables, project recommendations, related-product sections, search indexes, structured data, SEO metadata, navigation, and manually maintained lists.

### D. Replacement behavior

If `OPTIONAL_REPLACEMENT_PRODUCT_NAME` is supplied:

- identify it by exact, case-insensitive product-name matching
- verify that exactly one product matches and exists in the catalog
- verify that it has a valid product-specific affiliate URL
- use its existing internal ID automatically
- replace obsolete recommendations only where the replacement is genuinely relevant
- stop without editing if the replacement is missing or ambiguous

Do not ask the user for the replacement ID. If `OPTIONAL_REPLACEMENT_PRODUCT_NAME` is blank, remove obsolete recommendations and do not invent a replacement.

### E. Remove unused assets

Delete product-specific local assets only when they are no longer referenced, including images, icons, markdown, JSON, media, and metadata. Do not delete shared assets.

### F. Clean code

Remove unused imports, exports, mappings, arrays, helpers, and references caused by the deletion.

### G. Apply notes

Use `OPTIONAL_NOTES` only as additional removal instructions. Do not treat those notes as verified product data unless supported by the repository or official product information.

### H. Validation

Run from `website`:

```sh
npm run audit:products
npm run check
npm run build
```

Fix all errors caused by the removal.

### I. Final report

Report:

- matched product name
- matched product ID
- matched product route
- product removed
- files deleted
- files modified
- collections updated
- project or guide references changed
- replacement applied, if any
- validation results
- local URLs that should be reviewed

Do not commit. Do not push. Do not deploy automatically.
