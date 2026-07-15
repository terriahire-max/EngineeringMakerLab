# Recommended media asset structure

Keep editable source media outside the public website. Copy only optimized final assets into `website/public/images/`.

## Working library

```text
media/
  projects/
    <slug>/
      00-brief/
        production-brief.md
        shot-list.md
      01-source/
        photos-raw/
        video-raw/
        diagram-source/
        code-proof/
        datasheets/
      02-working/
        photos/
        diagrams/
        social/
      03-web/
        hero.webp
        circuit.svg
        steps/
          01-descriptive-action.webp
        social/
          social-16x9.webp
          social-1x1.webp
      04-rights-and-review/
        licenses.md
        contributor-releases/
        technical-signoff.md
  tutorials/
    <slug>/
      00-brief/
      01-source/
      02-working/
      03-web/
        hero.webp
        diagrams/
      04-rights-and-review/
  buying-guides/
    <slug>/
      00-brief/
      01-source/
      02-working/
      03-web/
        hero.webp
        comparisons/
      04-rights-and-review/
  shared/
    brand/
    component-library/
    licensed-stock/
```

## Public website mapping

```text
media/projects/<slug>/03-web/*
  → website/public/images/projects/<slug>/

media/tutorials/<slug>/03-web/*
  → website/public/images/tutorials/<slug>/

media/buying-guides/<slug>/03-web/*
  → website/public/images/buying-guides/<slug>/
```

Do not copy raw photographs, editable diagram files, rights records, receipts, or rejected assets into `public/`.

## Naming standard

- Use lowercase kebab-case: `03-connect-echo-divider.webp`.
- Prefix step assets with two-digit sequence numbers.
- Name by instructional purpose, not camera sequence: use `servo-shared-ground.webp`, not `img-4821.webp`.
- Keep the public filename stable after publication when replacing an equivalent asset.
- Add a suffix only for a distinct use: `hero`, `circuit`, `social-16x9`, `social-1x1`.

## File standards

| Asset | Preferred format | Typical target | Notes |
|---|---|---|---|
| Hero photograph | WebP or AVIF | 1200×900 | Retain uncropped source privately |
| Social image | WebP or PNG | 1200×630 | Keep text minimal and readable |
| Step photograph | WebP or AVIF | 1200 px long edge | Crop tightly around the action |
| Circuit diagram | SVG | Responsive viewBox | Embed/outline fonts safely |
| Comparison graphic | SVG or WebP | 1200 px wide | Never encode meaning by color alone |

Record exact width and height in content metadata. Strip sensitive metadata, retain color consistency, and verify compression at normal display size.

## Versioning and backup

- Treat `01-source` as immutable; never overwrite originals.
- Working files may use dated versions such as `circuit-2026-08-10-v02.svg`.
- Final public exports use stable names without version numbers.
- Back up source and rights folders in two independent locations.
- Record creator, license, capture date, project, and approval in `licenses.md`.
- When retiring an asset, archive it with its article rather than silently deleting evidence.
