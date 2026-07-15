# Buying guide authoring checklist

## Scope and metadata

- [ ] The guide serves a clearly defined reader, budget, platform, or use case.
- [ ] Title, description, summary, audience, product IDs, and tags are complete.
- [ ] Publication and update dates are accurate; an optional social image includes alt text and dimensions.
- [ ] Every `productId` matches `website/src/data/products.ts`.
- [ ] Product names, specifications, images, and retailer URLs exist only in the central catalog, not the guide.

## Recommendation quality

- [ ] Evaluation criteria are stated before recommendations.
- [ ] Each recommendation explains who it suits, why it fits, and its meaningful limitations.
- [ ] Compatibility, included parts, documentation, safety, durability, and total cost are considered.
- [ ] Price-sensitive or time-sensitive claims are verified near publication and phrased with appropriate context.
- [ ] The guide distinguishes tested facts, manufacturer claims, and editorial judgment.
- [ ] The conclusion gives a clear decision path without manufactured urgency.

## Trust, media, and release

- [ ] Affiliate relationships do not influence inclusion or ranking.
- [ ] The shared affiliate disclosure appears before product actions; no affiliate URL is hardcoded in Markdown.
- [ ] Assets are stored in `website/public/images/buying-guides/<slug>/`; comparison graphics go in `comparisons/`.
- [ ] Alternative text describes comparison information without relying on color alone.
- [ ] Template prompts, unsupported superlatives, and unfinished language are removed.
- [ ] `npm run content:check` and `npm run build` pass.
- [ ] Product cards, disclosures, and links are manually reviewed before deployment.
