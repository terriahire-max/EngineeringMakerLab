# Publish one project from idea to live website

This playbook is the complete procedure for a single Engineering Maker Lab project.

## 1. Approve the idea

Define the learner, finished result, primary query, learning-path position, required kit, and next action. Confirm that the build can be completed safely with beginner-accessible parts. Assign an owner, technical reviewer, editor, target date, and 90-day success measure.

Copy `templates/ProjectProductionTemplate.md` into the private working folder and complete it before drafting.

## 2. Prove the build

1. Assemble the circuit from a clean workspace.
2. Record exact board, firmware, library, component, voltage, and pin details.
3. Run the final code from a clean board state.
4. Measure or observe the promised result.
5. Deliberately reproduce likely faults and write safe troubleshooting steps.
6. Have a second person reproduce or trace the finished instructions.

Do not begin final photography until the circuit and code are stable.

## 3. Generate the website scaffold

From `website/`:

```sh
npm run content:new -- project "Temperature Monitor"
```

The command creates:

```text
website/src/content/projects/temperature-monitor.md
website/public/images/projects/temperature-monitor/
website/public/images/projects/temperature-monitor/steps/
```

It refuses to overwrite existing content. Use `--dry-run` first when checking a title or slug.

## 4. Draft from verified evidence

Replace every template prompt. Complete metadata, measurable learning goals, exact parts, written circuit connections, tested code, numbered instructions, troubleshooting, FAQ, and related links.

Keep the first `publishedDate`; update `updatedDate` only for meaningful later changes. Reference the recommended product by its central catalog ID. Never place retailer URLs in project Markdown.

Complete `checklists/WritingChecklist.md`.

## 5. Produce media

Use the shot list and `docs/MediaAssetStructure.md`:

1. Capture the finished result and only instructionally necessary steps.
2. Draw the circuit from the final verified wiring.
3. Complete photography and diagram checklists.
4. Export optimized WebP/AVIF photographs and an SVG diagram when practical.
5. Copy only approved web exports to the generated public asset folder.
6. Add accurate paths, alt text, width, and height to the project metadata.

## 6. Complete links, product, and SEO fields

Verify the project links to:

- previous and next projects where applicable;
- at least one relevant tutorial;
- its recommended kit;
- one related buying guide; and
- useful related projects.

Complete affiliate and SEO checklists. Confirm a unique title and meta description, one H1, correct dates, useful social image, canonical URL, breadcrumbs, and accurate structured data.

## 7. Validate locally

From `website/`:

```sh
npm run content:check
npm exec tsc -- --noEmit
npm run build
npm run dev
```

Resolve all errors, warnings, and hints. Review the page at phone, tablet, and desktop widths. Test keyboard navigation, links, anchors, code readability, disclosures, images, and expected project progression.

## 8. Review and approve

Complete `checklists/FinalReviewChecklist.md`. Record technical, editorial, media, commercial, and publisher approval. Create the analytics-tracker row and assign 30-, 60-, and 90-day review dates.

## 9. Merge, deploy, and verify live

Merge through the normal repository review process and deploy the static build. On the production origin, verify:

- page, media, and internal links;
- title, description, canonical, social metadata, and JSON-LD;
- sitemap inclusion and robots sitemap reference;
- affiliate disclosure and active retailer destinations; and
- mobile, keyboard, and performance behavior.

Mark the project `Live` only after this production check passes.

## 10. Measure and maintain

Record monthly search, engagement, and affiliate metrics. At 30 days check discovery and click-through; at 60 days investigate engagement and navigation; at 90 days decide whether to refresh, expand, consolidate, or leave the page unchanged. Recheck immediately after hardware, library, safety, or product changes.
