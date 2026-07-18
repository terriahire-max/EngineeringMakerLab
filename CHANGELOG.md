# Changelog

All notable changes to Engineering Maker Lab are documented here.

## 0.9.1 - 2026-07-15

### Changed

- Removed the unused legacy `ProductCard` API and unreachable design-system branches.
- Centralized duplicated tutorial and buying-guide article typography.
- Standardized page canonicals on the generated trailing-slash URL convention.
- Hardened nested environment-file ignore rules and corrected documentation paths.
- Removed six verified-empty legacy root directories and documented the actual repository structure.
- Updated application metadata to version 0.9.1.

### Added

- Dependency-free `audit:build` release check for generated metadata, headings, image attributes and assets, JSON-LD, internal links and fragments, sitemap/robots alignment, unfinished messaging, and affiliate-placeholder leakage.

### Verified

- [x] Dependency installation completes successfully.
- [x] Astro diagnostics pass with zero errors, warnings, or hints.
- [x] Standalone TypeScript checking passes.
- [x] Production build completes successfully with 35 generated pages.
- [x] Generated-output audit passes with 35 unique titles, descriptions, canonicals, and sitemap URLs.
- [x] Production dependency audit reports zero known vulnerabilities.

## 0.9.0 - 2026-07-15

### Added

- Reusable visual breadcrumbs with matching `BreadcrumbList` JSON-LD.
- Article structured data for projects, tutorials, and buying guides plus Product data for visibly featured catalog items.
- Published and updated content metadata with automatic Last Updated presentation and article meta tags.
- Explicit project relationships for tutorials and buying guides, plus automatic previous and next project navigation.
- Content-aware sitemap modification dates and environment-aware generated `robots.txt`.
- Optional per-article social images for tutorials and buying guides.
- Technical SEO readiness report.

### Changed

- Expanded Open Graph and Twitter metadata with image alt text and dimensions.
- Corrected landing-page heading structure to use one H1 per page.
- Added explicit project and circuit image dimensions and reinforced WebP/AVIF authoring guidance.
- Replaced generic LED Night Light related links with crawlable existing project routes.
- Updated generators, templates, checklists, and content management documentation for SEO metadata.
- Updated application metadata to version 0.9.0.

### Verified

- [x] Astro and TypeScript diagnostics pass with zero errors, warnings, or hints.
- [x] Production build and 35-URL sitemap generation complete successfully.
- [x] Generated HTML metadata, headings, structured data, links, images, and robots output pass automated audits.

## 0.8.0 - 2026-07-15

### Added

- Dependency-free `content:new` generator for project, tutorial, and buying-guide scaffolds.
- Schema-complete Markdown templates covering every field and article section used by the shared layouts.
- Automatic kebab-case slugs, collision protection, next-order assignment for tutorials, and predictable per-article asset directories.
- Project, tutorial, and buying-guide authoring checklists.
- End-to-end publishing workflow and developer-only content management guide.
- Non-writing `--dry-run` template and path validation.

### Changed

- Added `content:check` as the standard author validation command.
- Updated contributor documentation for the generator-led workflow.
- Updated application metadata to version 0.8.0.

### Verified

- [x] No public page, route, component, or design behavior changed.
- [x] All three templates pass generator and live collection-schema validation.
- [x] Astro and TypeScript diagnostics pass with zero errors, warnings, or hints.
- [x] Production build completes successfully with the existing 35-route count.

## 0.7.0 - 2026-07-15

### Changed

- Clarified the homepage audience, learning promise, build progression, and primary Start Here action.
- Improved mobile navigation with horizontal overflow handling, compact conversion access, and current-page states.
- Centralized canonical and social URL generation behind environment-backed site configuration.
- Hid inactive affiliate destinations and replaced unfinished visitor-facing copy with production-ready disclosures, technical illustration labels, policies, and empty states.
- Centralized project and tutorial learning-path sorting to remove duplicated collection logic.
- Standardized product image loading, decoding, and meaningful alternative text.
- Updated brand guidance and both project READMEs for current production behavior.

### Accessibility and performance

- Added skip navigation, a focusable main landmark, reduced-motion support, clearer focus and active states, and mobile-friendly full-width hero actions.
- Added lazy loading and asynchronous decoding to below-the-fold catalog media, plus priority loading for real project hero images.
- Removed unused legacy favicon and starter documentation.

### Verified

- [x] Existing routes, brand, content collections, and functionality are preserved.
- [x] Visitor-facing TODO and unfinished messaging is removed.
- [x] Astro and TypeScript diagnostics pass with zero errors, warnings, or hints.
- [x] Production build completes successfully with all 35 routes generated.

## 0.6.0 - 2026-07-15

### Added

- Reusable Why Trust Engineering Maker Lab and Recommended For components.
- Consistent Beginner, Easy, Intermediate, and Advanced difficulty badges.
- Catalog-backed sample included-component lists in Recommended Kit panels.
- Automatic More Projects You Can Build With This Kit sections based on shared product IDs.
- Metadata-driven project completion calls to action and next-project routing.
- Optional Google tag and Search Console verification hooks through environment-backed site configuration.
- Empty `.env.example` integration keys; no external account or tag is enabled by default.

### Changed

- Project metadata now emphasizes Build Time, Estimated Cost, and Skill Level with standardized icons and cards.
- Start Here now derives its five-stage Beginner-to-Advanced path from project metadata.
- Homepage and Start Here now include transparent trust signals.
- Product records now include reusable sample component lists.
- Updated application metadata to version 0.6.0.

### Verified

- [x] Existing design, routes, content collections, and affiliate placeholders are preserved.
- [x] Astro and TypeScript diagnostics pass.
- [x] Production build completes successfully with external integrations disabled.

## 0.5.0 - 2026-07-15

### Added

- Engineering-inspired hexagonal circuit logo, standalone logo mark, matching SVG favicon, and branded social-preview image.
- Central design token file for brand colors, semantic surfaces, typography, spacing, radii, shadows, and focus treatment.
- Reusable Logo, Icon, Button, Badge, and Card design-system primitives.
- Comprehensive `docs/BrandGuidelines.md` covering identity, usage, voice, accessibility, imagery, and affiliate disclosure presentation.

### Changed

- Standardized shared buttons, badges, cards, inline links, icons, shadows, radii, and disclosure surfaces.
- Replaced mixed Unicode interface symbols with one outline SVG icon system.
- Updated header and footer to use the responsive logo component.
- Removed unused Astro starter components and artwork.
- Updated application metadata to version 0.5.0.

### Verified

- [x] Existing routes and content behavior are preserved.
- [x] Astro and TypeScript diagnostics pass.
- [x] Production build completes successfully.

## 0.4.0 - 2026-07-15

### Added

- Complete project guides for Blink an LED, Traffic Light, Servo Motor Control, Ultrasonic Distance Sensor, and Password Lock.
- Reusable Markdown tutorial system with Breadboard Basics, GPIO Explained, PWM Explained, Servo Motors, and Power Supplies.
- Reusable Markdown buying-guide system with Raspberry Pi Pico kit, beginner electronics kit, and essential electronics tools guides.
- Start Here page connecting one recommended kit to five ordered projects and follow-on tutorials.
- Start Here navigation item.
### Changed

- Homepage project, product, and tutorial cards now use real collection and catalog content.
- Project and tutorial index pages now query their content collections automatically.
- Replaced the hero's implementation placeholder copy with the beginner learning path.
- Updated application metadata to version 0.4.0.

### Verified

- [x] Content collection schemas pass.
- [x] Astro and TypeScript diagnostics pass.
- [x] Production build completes successfully.

## 0.3.0 - 2026-07-15

### Added

- Typed central product database with product IDs, brands, categories, descriptions, images, levels, featured flags, tags, and multi-vendor affiliate links.
- Complete SunFounder Raspberry Pi Pico Ultimate Starter Kit sample product.
- Reusable `ProductCard`, `FeaturedProduct`, `BuyButtons`, `ProductBadge`, `AffiliateDisclosure`, and `ProductGrid` components.
- Products index plus Starter Kits, Raspberry Pi Pico, Arduino, Sensors, Displays, Motors, Breadboards, Tools, Power, and Accessories category routes.
- Placeholder product artwork and safely disabled Amazon and SunFounder placeholder buttons.
- Reusable category and featured-product query helpers for future buying guides.

### Changed

- LED Night Light now references its recommended kit by product ID instead of embedding product or affiliate data.
- Recommended Kits now reads from the central product database.
- Updated application metadata to version 0.3.0.

### Verified

- [x] Dependencies installed.
- [x] Astro and TypeScript diagnostics pass.
- [x] Production build completes successfully.

## 0.2.0 - 2026-07-15

### Added

- Markdown-backed, schema-validated project content collection and statically generated `/projects/[slug]` routes.
- Reusable project layout with summary, build metrics, and persistent section navigation.
- Conversion-focused recommended kit panel with Amazon and SunFounder link placeholders.
- Reusable media placeholders, parts list, numbered instructions, expandable question lists, and related-project cards.
- Shiki-powered syntax highlighting through Astro's built-in `Code` component.
- Complete LED Night Light sample at `/projects/led-night-light`.
- Three-step authoring workflow where future projects require only a new Markdown file and its metadata.

### Changed

- Linked the LED Night Light card on the projects index to its complete build guide.
- Updated application metadata to version 0.2.0.

### Verified

- [x] Astro and TypeScript diagnostics pass.
- [x] Production build completes successfully.

## 0.1.0 - 2026-07-15

### Added

- Astro 7, strict TypeScript, Tailwind CSS 4, and static sitemap configuration.
- Responsive site shell with reusable header, footer, hero, section heading, and affiliate disclosure components.
- Reusable cards for projects, tutorials, and product recommendations.
- Placeholder pages for home, projects, tutorials, recommended kits, about, contact, privacy, and affiliate disclosure.
- Centralized navigation, affiliate placeholders, and footer disclosure copy.
- Canonical, Open Graph, robots, favicon, sitemap, and social-preview metadata.

### Verified

- [x] Dependencies installed.
- [x] Astro and TypeScript diagnostics pass.
- [x] Production build completes successfully.
