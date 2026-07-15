# Content production workflow

This workflow turns an approved idea into a technically verified, discoverable, measurable publication. It complements the developer publishing instructions in `docs/PublishingWorkflow.md`.

## Roles

One person may hold several roles, but each responsibility must be completed.

| Role | Primary responsibility | Approval authority |
|---|---|---|
| Content owner | Audience, scope, schedule, and business outcome | Brief and publication priority |
| Technical builder | Circuit, code, measurements, safety, troubleshooting | Technical accuracy |
| Writer/editor | Structure, clarity, voice, and metadata | Editorial quality |
| Media producer | Photography, diagrams, optimization, and rights | Media readiness |
| Commercial reviewer | Product fit, disclosure, affiliate links, freshness | Commercial claims and links |
| Publisher | Repository changes, validation, preview, deployment | Release execution |

## Status vocabulary

Use one status everywhere: `Idea`, `Approved`, `Building`, `Drafting`, `Media`, `Review`, `Scheduled`, `Live`, `Refreshing`, or `Retired`.

## Stage 1 — Intake and prioritization

1. Capture the reader problem, proposed content type, learning-path fit, primary query, and business value.
2. Score the idea from 1–5 for learner value, strategic fit, search opportunity, commercial relevance, production effort, and maintenance burden.
3. Approve only ideas with a clear audience and an achievable technical proof.
4. Assign owner, reviewers, target date, and 30/60/90-day measurement dates.

**Gate:** Content owner approves the assignment and calendar slot.

## Stage 2 — Production brief

1. Copy the matching file from `templates/` into the working production folder.
2. Complete scope, search intent, CTA, technical requirements, media plan, links, and success measure.
3. For buying guides, freeze evaluation criteria before comparing products.
4. Identify safety and compliance risks before building or purchasing.

**Gate:** Technical and editorial reviewers approve the brief. Target turnaround: two business days.

## Stage 3 — Technical proof and research

1. Build the circuit or reproduce the worked example using the specified hardware and software.
2. Record versions, measurements, substitutions, faults, and resolutions.
3. Save datasheets, research notes, receipts, and rights evidence in the private source folder.
4. For product content, verify compatibility and document limitations independently of affiliate status.

**Gate:** Technical reviewer can reproduce the result from the recorded configuration.

## Stage 4 — Drafting

1. Generate the schema-valid Markdown scaffold from `website/` using `npm run content:new`.
2. Draft from the verified build and approved brief, not from memory.
3. Add explicit safety boundaries, expected results, troubleshooting, and next steps.
4. Complete the writing checklist before editorial review.

**Gate:** Draft contains no unresolved prompts and satisfies the approved scope.

## Stage 5 — Media production

1. Capture the approved shot list after the final circuit is verified.
2. Draw the circuit diagram from the final wiring and have a second person trace it.
3. Store source, working, web, and social files according to `docs/MediaAssetStructure.md`.
4. Complete photography and diagram checklists.

**Gate:** Media is accurate, licensed, optimized, accessible, and mapped to the article.

## Stage 6 — Integration and quality review

1. Add final assets and metadata to the content file.
2. Verify internal relationships, product IDs, affiliate disclosure, structured data, and update dates.
3. Complete affiliate and SEO checklists.
4. Run content checks, TypeScript checks, and the production build.
5. Review the generated page on mobile and desktop using keyboard navigation.

**Gate:** Technical, editorial, media, commercial, and publisher approvals are recorded.

## Stage 7 — Scheduling and launch

1. Freeze publication-candidate content except for release-blocking corrections.
2. Add the analytics-tracker row and scheduled review dates.
3. Merge through the normal repository review process and deploy the static build.
4. Spot-check the live URL, metadata, assets, links, disclosures, sitemap, and robots output.

**Gate:** Publisher marks the item `Live` only after the production URL passes the final checklist.

## Stage 8 — Distribution and measurement

1. Link the article from relevant existing content during the same release.
2. Schedule one launch mention and one follow-up based on the article's practical result.
3. Record organic and affiliate metrics monthly; annotate promotions, ranking changes, and link updates.
4. At 30 days, check indexing and early engagement. At 60 days, improve weak titles, intros, or links only when data supports a change. At 90 days, decide to maintain, expand, consolidate, or retire.

## Maintenance cadence

| Content type | Routine review | Immediate review trigger |
|---|---|---|
| Project | Every 12 months | Library, board, safety, or component change |
| Tutorial | Every 12–18 months | Standard, terminology, or linked-project change |
| Buying guide | Every 3 months | Product discontinuation, specification, price-position, or affiliate change |
| High-traffic page | Monthly metric review | Material traffic, ranking, or conversion decline |

## Operating metrics

Track throughput (published per month), cycle time, first-pass approval rate, refresh backlog, organic impressions/clicks, engagement, affiliate clicks, and conversion outcomes. Quality gates must not be bypassed to improve publishing volume.
