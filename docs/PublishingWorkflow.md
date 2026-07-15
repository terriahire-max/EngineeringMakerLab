# Content publishing workflow

This workflow publishes projects, tutorials, and buying guides through the existing Astro content collections. It requires no CMS, database, or new public route configuration.

## 1. Create a working branch

Start from the current main branch and create a branch named for the article. Keep one primary article per branch so editorial and technical review stay focused.

## 2. Generate the content scaffold

From `website/`, run one command:

```sh
npm run content:new -- project "Temperature Monitor"
npm run content:new -- tutorial "Reading Resistor Values"
npm run content:new -- buying-guide "Best Multimeters for Beginners"
```

The generator converts the title to a safe kebab-case slug, refuses to overwrite an existing file, fills every schema-required field, and prints the created locations. Tutorial order is assigned after the highest current order.

Preview and validate a scaffold path without writing files by appending `--dry-run`.

## 3. Add and optimize assets

The generator creates a predictable asset root:

```text
public/images/projects/<slug>/
  hero.webp
  circuit.svg
  steps/
    01-descriptive-name.webp

public/images/tutorials/<slug>/
  hero.webp
  diagrams/

public/images/buying-guides/<slug>/
  hero.webp
  comparisons/
```

Only referenced files are copied into the production build. Use SVG for diagrams when practical and WebP or AVIF for photographs. Remove camera metadata and resize raster images near their maximum rendered dimensions.

## 4. Write and technically verify

Replace every prompt in the generated Markdown. For projects, assemble the published circuit and run the exact code using the stated parts and platform. For tutorials, verify examples and safety boundaries. For buying guides, verify catalog IDs and any time-sensitive claims.

Keep `publishedDate` unchanged after launch and update `updatedDate` only for meaningful editorial or technical revisions. These values drive visible Last Updated text, Article metadata, and sitemap modification dates.

Use the matching checklist:

- `docs/authoring/ProjectChecklist.md`
- `docs/authoring/TutorialChecklist.md`
- `docs/authoring/BuyingGuideChecklist.md`

## 5. Validate locally

From `website/`:

```sh
npm run content:check
npm run build
npm run dev
```

Open the generated route, review desktop and mobile widths, follow every internal link, inspect alternative text, and complete a keyboard-only pass. The filename becomes the route automatically; no layout or route file should be added.

Confirm the page has one descriptive H1, a unique title and description, correct breadcrumbs, an appropriate social image, and complete related-content links.

## 6. Review and publish

Request editorial and technical review. Resolve checklist items, rerun validation, and merge only when the build is clean. Deployment of the static build publishes the article automatically.

## 7. Maintain the article

Recheck projects after hardware or library changes. Review buying guides when product availability, specifications, or affiliate destinations change. Update the changelog when a publication materially changes the learning path or catalog.
