# Engineering Maker Lab

Engineering Maker Lab is a beginner-focused electronics learning website. It gives new makers a clear starting point through practical project ideas, foundational tutorials, and curated tool and component recommendations. The content and recommendation components are structured to support future affiliate links while keeping disclosures visible.

## Technology stack

- Astro 7 with static site generation
- TypeScript in strict mode
- Tailwind CSS 4
- npm

Node.js 22.12.0 or newer is required.

## Project structure

- `checklists/` - production review checklists
- `docs/` - publishing, brand, SEO, analytics, and business documentation
- `templates/` - production templates for projects, tutorials, and buying guides
- `website/` - the Astro application, content collections, generators, and public assets

The application includes reusable site components plus Markdown-backed project, tutorial, and buying-guide systems. Project files in `website/src/content/projects/` are validated by `website/src/content.config.ts` and rendered through one dynamic route and the shared `ProjectLayout`, avoiding duplicated project-page markup.

## Adding a project

1. From `website/`, run `npm run content:new -- project "Temperature Monitor"`.
2. Complete the generated Markdown and place optimized media in the generated `public/images/projects/temperature-monitor/` folders.
3. Follow `docs/authoring/ProjectChecklist.md`, then run `npm run content:check` and `npm run build`.

No layout, component, route, or TypeScript file needs to be duplicated or edited.

## Adding a product

1. Add one product object to the `products` array in `website/src/data/products.ts`, using a unique kebab-case `id` and one of the defined category IDs.
2. Add its image to `website/public/product-images/` and set the product's `image.src`. Add approved retailer URLs when available; inactive values remain hidden from visitors.
3. Run `npm run check` and `npm run build` from `website/`. Product grids, category pages, and project recommendations reuse the record automatically.

Projects reference catalog products only through `recommendedProductId`; affiliate URLs and product details are never duplicated in project Markdown.

## Optional site integrations

Analytics and Search Console verification are supported but disabled by default. Copy `website/.env.example` to an appropriate local or deployment environment file only after accounts and privacy requirements are approved:

```text
PUBLIC_SITE_URL=https://engineeringmakerlab.example
PUBLIC_GOOGLE_TAG_ID=
PUBLIC_GOOGLE_SITE_VERIFICATION=
```

Empty values produce no Google tag request and no verification meta tag.

## Local development

From the repository root:

```sh
cd website
npm install
npm run dev
```

Astro serves the site at `http://localhost:4321` by default.

## Validation and production build

```sh
cd website
npm run check
npm run build
npm run audit:build
npm run preview
```

`npm run check` performs Astro diagnostics, including TypeScript checks for Astro and TypeScript source files. `npm run audit:build` verifies the generated metadata, headings, images, structured data, internal links, sitemap, robots file, and affiliate-placeholder handling. The production output is generated in `website/dist/`.

## Release status

Version 0.9.1 is the production-readiness audit candidate. It preserves the visual design while hardening the reusable content, SEO, and affiliate infrastructure:

- [x] Responsive shared layout and navigation
- [x] Reusable content and disclosure components
- [x] Production-ready content routes and empty states
- [x] Centralized navigation and affiliate-link readiness
- [x] Centralized SEO metadata, canonical links, sitemap, robots file, and social preview
- [x] Dependency installation, Astro checks, and production build verification
- [x] Typed, Markdown-backed project content collection
- [x] Reusable project detail layout and section components
- [x] LED Night Light sample project with kit conversion panel, build guide, highlighted code, troubleshooting, FAQ, and related projects
- [x] Typed central product database with reusable category and featured-product queries
- [x] Shared product cards, grids, badges, affiliate buttons, and disclosures
- [x] Products index and ten statically generated catalog category pages with clear empty states
- [x] Project-to-product references by stable catalog ID
- [x] Five-project beginner path from blinking an LED through a keypad password lock
- [x] Markdown-backed tutorial and buying-guide collections with reusable layouts
- [x] Start Here journey connecting one recommended kit, five builds, and continued learning
- [x] Collection-driven homepage, project index, and tutorial index cards
- [x] Responsive engineering-inspired logo, standalone mark, and matching favicon
- [x] Centralized color, typography, spacing, radius, shadow, and focus tokens
- [x] Reusable Button, Badge, Card, Icon, and Logo design-system primitives
- [x] Standardized cards, controls, metadata, affiliate disclosures, and UI iconography
- [x] Complete brand and accessibility guidance in `docs/BrandGuidelines.md`
- [x] Reusable trust, recommended-audience, difficulty, same-kit project, and completion CTA components
- [x] Enhanced build-time, cost, skill-level, and platform metadata presentation
- [x] Catalog-driven included-component lists in recommended kit panels
- [x] Metadata-driven five-stage beginner progression and next-project routing
- [x] Disabled-by-default Google tag and Search Console verification configuration
- [x] Mobile navigation, visible active states, skip navigation, and reduced-motion support
- [x] Hidden inactive retailer actions and polished disclosure language
- [x] Centralized learning-path sorting shared by the homepage, Start Here, and project routing
- [x] Responsive image loading and decoding hints
- [x] Dependency-free generators for projects, tutorials, and buying guides
- [x] Schema-complete reusable content templates
- [x] Predictable per-article asset folders and project step-image organization
- [x] Reusable authoring checklists and end-to-end publishing documentation
- [x] Developer content-management guide with architecture and validation contracts
- [x] Unique canonical, Open Graph, Twitter, and description metadata across every route
- [x] Article, Breadcrumb, and context-appropriate Product structured data
- [x] Metadata-driven Last Updated labels and sitemap modification dates
- [x] Project previous/next, tutorial, kit, buying-guide, and related-project links
- [x] Generated environment-aware robots file and XML sitemap index
- [x] Explicit image dimensions, lazy loading, descriptive alt text, and WebP authoring support

Before deployment, set `PUBLIC_SITE_URL` and add only approved affiliate destinations. The generated `robots.txt`, canonical URLs, and sitemap then use the configured production origin automatically.
