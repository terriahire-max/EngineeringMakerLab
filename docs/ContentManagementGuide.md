# Developer content management guide

This developer-only guide documents the file-based publishing system. The public site has no authoring UI, CMS, database, authentication layer, or runtime content API.

## System boundaries

- Astro collections and Zod schemas live in `website/src/content.config.ts`.
- Markdown entries live in `website/src/content/projects/`, `tutorials/`, and `buying-guides/`.
- Dynamic route files render every collection entry through shared layouts.
- Products and affiliate destinations live centrally in `website/src/data/products.ts`.
- Generator templates live in `website/scripts/templates/` and are never included in a collection.
- Public content assets live under `website/public/images/<collection>/<slug>/`.

## Generator behavior

`npm run content:new -- <type> "Title"` calls `scripts/new-content.mjs`. The script uses only Node.js built-ins, normalizes the title to a kebab-case slug, checks for collisions, renders a type-specific template, writes with exclusive-create semantics, and creates the asset directories. It never modifies existing content. Append `--dry-run` to validate the template and report target paths without writing anything.

Supported canonical types are `project`, `tutorial`, and `buying-guide`; `guide` and `buyingguide` are accepted aliases. To add a new field, update the collection schema, shared layout or component, generator template, applicable checklist, and existing entries in one change.

## Asset contract

Keep content assets isolated by collection and slug. A project named `Temperature Monitor` uses:

```text
website/src/content/projects/temperature-monitor.md
website/public/images/projects/temperature-monitor/hero.webp
website/public/images/projects/temperature-monitor/circuit.svg
website/public/images/projects/temperature-monitor/steps/01-connect-sensor.webp
```

Paths stored in frontmatter begin at the public root, for example `/images/projects/temperature-monitor/hero.webp`. Empty asset directories are local scaffolding and are not committed until they contain an asset.

## Relationship integrity

- Project `recommendedProductId` and buying-guide `productIds` must match catalog IDs.
- `learningPathOrder` is curated; do not assign it to ordinary projects.
- Tutorial `order` values should remain unique even though the generator selects the next available number.
- Related-content links are authored explicitly and must be verified during review.
- Affiliate URLs never belong in content Markdown.
- Project related tutorials and buying guides are explicit metadata; previous and next projects are derived from learning-path order followed by alphabetical standalone projects.
- `publishedDate` and `updatedDate` power Article JSON-LD, visible update labels, and content-route sitemap `lastmod` values.
- Breadcrumb JSON-LD is generated from the same item array used by visible breadcrumb navigation.

## Validation and recovery

Run `npm run content:check` after editing metadata and `npm run build` before review. Schema failures report the entry and invalid field. If generation used the wrong title, delete only the newly generated file and empty asset directory, then rerun the command; never use the generator to overwrite or repair published work.

Treat generated text as a scaffold, not publishable copy. A clean build confirms structure, not electrical accuracy, editorial quality, accessibility, or product-claim freshness; those remain checklist and review responsibilities.
