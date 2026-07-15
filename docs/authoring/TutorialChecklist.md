# Tutorial authoring checklist

## Scope and metadata

- [ ] The tutorial answers one focused learning question.
- [ ] Title, description, summary, level, estimated time, tags, and order are complete.
- [ ] Publication and update dates are accurate; an optional social image includes alt text and dimensions.
- [ ] The order value is unique and places the tutorial intentionally in the index.
- [ ] Related tutorial links resolve and form a useful next step.
- [ ] `featured` is enabled only when homepage placement is intentional.

## Instructional quality

- [ ] The opening explains why the concept matters in a real project.
- [ ] Every technical term, unit, symbol, and abbreviation is defined before use.
- [ ] At least one concrete example uses realistic values or measurements.
- [ ] Common misconceptions and failure cases are addressed.
- [ ] Voltage, current, polarity, heat, batteries, and mains-power boundaries are stated where relevant.
- [ ] The closing connects readers to an existing project or safe practice exercise.

## Media, editorial, and release

- [ ] Assets are stored in `website/public/images/tutorials/<slug>/`; diagrams go in `diagrams/`.
- [ ] Alternative text explains the information conveyed by each image or diagram.
- [ ] Claims are technically verified and sources are recorded in editorial notes when needed.
- [ ] Template prompts and draft language are removed.
- [ ] `npm run content:check` and `npm run build` pass.
- [ ] The page is reviewed on mobile, desktop, and with keyboard navigation.
