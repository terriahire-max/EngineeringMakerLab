# Engineering Maker Lab website

This directory contains the Astro application for Engineering Maker Lab, a beginner-focused electronics learning site with reusable project, tutorial, product, and buying-guide systems.

## Commands

Run these commands from this directory:

```sh
npm install
npm run dev
npm run check
npm run build
npm run audit:build
npm run content:new -- project "Temperature Monitor"
```

The static production output is written to `dist/`. Copy `.env.example` to the appropriate environment configuration and set `PUBLIC_SITE_URL` before deployment. Analytics and Search Console settings remain optional and disabled when their values are empty.

See the repository-level `../README.md` and `../docs/PublishingWorkflow.md` for content authoring instructions. The generator also supports `tutorial`, `buying-guide`, and a non-writing `--dry-run` option.
