# SEO readiness report

Version 0.9.1 establishes the technical foundation for organic growth without changing the visual design.

## Ready

- Every generated HTML page has one unique title, one unique meta description, a canonical URL, Open Graph and Twitter image metadata, and one H1.
- Projects, tutorials, and buying guides expose publication and modification dates through visible text, Article JSON-LD, and article meta tags.
- Detail and category pages use visible breadcrumbs backed by matching `BreadcrumbList` JSON-LD.
- Projects link to previous and next builds where available, related tutorials, their recommended kit, a related buying guide, and related projects.
- Product JSON-LD describes products that are visibly featured in projects and buying guides. Offers, ratings, and prices are intentionally omitted until verified data exists.
- The Astro sitemap contains all canonical routes and content-aware `lastmod` values. `robots.txt` is generated from the configured site URL and points to the sitemap index.
- Images require descriptive alternative text and explicit dimensions; below-the-fold media loads lazily, and the authoring workflow supports WebP and AVIF assets.
- `npm run audit:build` verifies generated metadata, headings, local images, JSON-LD, internal links and fragments, canonical/sitemap alignment, and placeholder leakage after each production build.

## Deployment checks

- Replace the `.example` fallback with the production `PUBLIC_SITE_URL` before building.
- Validate representative Article, Breadcrumb, and Product markup with Google's Rich Results Test.
- Run Lighthouse against the deployed production origin and investigate any hosting, caching, or real-device findings.
- Submit the sitemap index in Search Console after ownership verification is configured.

## Editorial maintenance

Keep titles and descriptions unique, preserve `publishedDate`, advance `updatedDate` only for meaningful changes, verify all relationship links, and recheck product claims and availability during buying-guide reviews.
