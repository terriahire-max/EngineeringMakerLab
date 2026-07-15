import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');

const contentTypes = {
  project: {
    collection: 'projects',
    template: 'project.md',
    assetDirectories: ['', 'steps'],
  },
  tutorial: {
    collection: 'tutorials',
    template: 'tutorial.md',
    assetDirectories: ['', 'diagrams'],
  },
  'buying-guide': {
    collection: 'buying-guides',
    template: 'buying-guide.md',
    assetDirectories: ['', 'comparisons'],
  },
};

const aliases = new Map([
  ['project', 'project'],
  ['tutorial', 'tutorial'],
  ['buying-guide', 'buying-guide'],
  ['buyingguide', 'buying-guide'],
  ['guide', 'buying-guide'],
]);

function showHelp() {
  console.log(`Create Engineering Maker Lab content without adding dependencies.

Usage:
  npm run content:new -- <project|tutorial|buying-guide> "Content title"

Examples:
  npm run content:new -- project "Temperature Monitor"
  npm run content:new -- tutorial "Reading Resistor Values"
  npm run content:new -- buying-guide "Best Multimeters for Beginners"
  npm run content:new -- project "Temperature Monitor" --dry-run

The command never overwrites an existing content file.`);
}

function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getNextTutorialOrder() {
  const tutorialDirectory = path.join(projectRoot, 'src', 'content', 'tutorials');
  const { readdir } = await import('node:fs/promises');
  const files = await readdir(tutorialDirectory);
  const orders = await Promise.all(
    files.filter((file) => file.endsWith('.md')).map(async (file) => {
      const source = await readFile(path.join(tutorialDirectory, file), 'utf8');
      return Number(source.match(/^order:\s*(\d+)\s*$/m)?.[1] ?? 0);
    }),
  );
  return Math.max(0, ...orders) + 1;
}

function renderTemplate(template, values) {
  const rendered = Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{{${key}}}`, String(value)),
    template,
  );

  const remainingToken = rendered.match(/{{[A-Z_]+}}/);
  if (remainingToken) throw new Error(`Template token was not resolved: ${remainingToken[0]}`);
  return rendered;
}

const commandArguments = process.argv.slice(2);
const dryRun = commandArguments.includes('--dry-run');
const [rawType, ...titleParts] = commandArguments.filter((argument) => argument !== '--dry-run');
if (!rawType || rawType === '--help' || rawType === '-h') {
  showHelp();
  process.exit(rawType ? 0 : 1);
}

const type = aliases.get(rawType.toLowerCase());
const title = titleParts.join(' ').trim();
if (!type || !title) {
  showHelp();
  process.exit(1);
}

const slug = slugify(title);
if (!slug) throw new Error('The title must contain at least one letter or number.');

const settings = contentTypes[type];
const contentPath = path.join(projectRoot, 'src', 'content', settings.collection, `${slug}.md`);
const assetRoot = path.join(projectRoot, 'public', 'images', settings.collection, slug);

if (await exists(contentPath)) {
  throw new Error(`Content already exists: ${path.relative(projectRoot, contentPath)}`);
}

const templatePath = path.join(scriptDirectory, 'templates', settings.template);
const template = await readFile(templatePath, 'utf8');
const rendered = renderTemplate(template, {
  TITLE_JSON: JSON.stringify(title),
  HERO_ALT_JSON: JSON.stringify(`Completed ${title} electronics project`),
  CIRCUIT_TITLE_JSON: JSON.stringify(`${title} circuit`),
  CIRCUIT_ALT_JSON: JSON.stringify(`Circuit diagram for the ${title} project`),
  CURRENT_DATE: new Date().toISOString().slice(0, 10),
  SLUG: slug,
  TUTORIAL_ORDER: type === 'tutorial' ? await getNextTutorialOrder() : '',
});

if (dryRun) {
  console.log(`Validated ${type} template for "${title}".`);
  console.log(`  Content: ${path.relative(projectRoot, contentPath)}`);
  console.log(`  Assets:  ${path.relative(projectRoot, assetRoot)}`);
  process.exit(0);
}

await mkdir(path.dirname(contentPath), { recursive: true });
await writeFile(contentPath, rendered, { encoding: 'utf8', flag: 'wx' });
await Promise.all(
  settings.assetDirectories.map((directory) => mkdir(path.join(assetRoot, directory), { recursive: true })),
);

console.log(`Created ${type}:`);
console.log(`  Content: ${path.relative(projectRoot, contentPath)}`);
console.log(`  Assets:  ${path.relative(projectRoot, assetRoot)}`);
console.log('\nNext: complete the authoring checklist, then run npm run content:check.');
