# Add a Product

Replace only these values:

PRODUCT_NAME: SunFounder ESP32 Ultimate Starter Kit with ESP32 Board, RoHS Compliant

OFFICIAL_PRODUCT_URL:https://www.sunfounder.com/products/sunfounder-esp32-ultimate-starter-kit-with-esp32-camera-extension-board-battery?_pos=1&_sid=842afaf70&_ss=r

VERIFIED_AFFILIATE_URL: https://www.sunfounder.com/products/sunfounder-esp32-ultimate-starter-kit-with-esp32-camera-extension-board-battery?_pos=2&_sid=f1ffbc169&_ss=r&ref=tmbxfubs

PRIMARY_COLLECTION: Miscellaneous

ADDITIONAL_COLLECTIONS: Robotics, AI & Vision

OPTIONAL_NOTES:

Inspect `OFFICIAL_PRODUCT_URL` and the current product interface in `website/src/data/products.ts`. Search for duplicate products and IDs before editing. Add exactly one product record, one stable product-specific affiliate mapping, and create or reuse one product route.

Assign `PRIMARY_COLLECTION` and all relevant `ADDITIONAL_COLLECTIONS` through the single record's `collections` array. Never duplicate a product to place it in multiple collections.

Write an original, concise summary. Do not copy vendor prose or add unverifiable prices, ratings, quantities, popularity, or availability claims. Use `VERIFIED_AFFILIATE_URL` exactly as supplied; never construct, modify, or infer an affiliate URL. Keep documentation and affiliate URLs in separate fields. Preserve every existing verified affiliate URL.

Run from `website`:

```sh
npm run audit:products
npm run check
npm run build
```

Fix structural errors and report modified files, validation results, the product route, and local review URLs for every assigned collection. Apply `OPTIONAL_NOTES` only when supported by verified information.
