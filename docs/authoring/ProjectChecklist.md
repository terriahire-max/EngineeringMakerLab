# Project authoring checklist

Use this checklist for every new project before publication.

## Scope and metadata

- [ ] The title describes one build and matches the filename slug.
- [ ] `publishedDate` records first publication and `updatedDate` reflects the latest meaningful review.
- [ ] The description is specific, useful in search results, and approximately 120–160 characters.
- [ ] The summary states what readers will build, what they will learn, and the expected outcome.
- [ ] Difficulty, build time, cost, platform, tags, and recommended audiences are realistic.
- [ ] `recommendedProductId` matches an existing record in `website/src/data/products.ts`.
- [ ] `featured` is `false` unless homepage placement is intentional.
- [ ] `learningPathOrder` is omitted unless the project is deliberately added to Start Here.

## Technical content

- [ ] Every required component has a quantity, precise name, and useful note.
- [ ] Pin names, voltages, component values, and polarity are consistent across metadata, prose, diagram, and code.
- [ ] Instructions start with power disconnected and identify when power may be applied.
- [ ] Code was run on the named platform using the published wiring and file name.
- [ ] Expected behavior is observable and stated clearly.
- [ ] At least two likely failure modes have specific, safe troubleshooting steps.
- [ ] FAQ answers are accurate and do not duplicate troubleshooting verbatim.
- [ ] Related-project links exist and difficulty labels are correct.
- [ ] Related tutorials, the recommended kit, and the related buying guide are accurate and crawlable.

## Images and accessibility

- [ ] Assets are stored in `website/public/images/projects/<slug>/`.
- [ ] The hero image uses a descriptive filename such as `hero.webp`; the circuit uses `circuit.svg` or `circuit.webp`.
- [ ] Step images are stored in `steps/` and named in sequence, such as `01-place-led.webp`.
- [ ] Images are compressed at an appropriate display size and contain no sensitive metadata.
- [ ] Frontmatter width and height match each source image; photographs use WebP or AVIF when practical.
- [ ] Alternative text describes useful visual information without saying “image of.”
- [ ] Diagrams remain understandable without relying on color alone.

## Editorial and release

- [ ] Headings describe actions or questions and follow a logical sequence.
- [ ] Technical terms are defined before use; sentences are concise and beginner-friendly.
- [ ] Product references are educational, not promotional, and affiliate URLs are not placed in Markdown.
- [ ] Placeholder instructions, template prompts, and unverified claims are removed.
- [ ] `npm run content:check` and `npm run build` pass.
- [ ] The generated page is reviewed on mobile and desktop with keyboard navigation.
