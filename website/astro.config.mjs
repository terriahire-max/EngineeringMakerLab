// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

// https://astro.build/config
const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const site = env.PUBLIC_SITE_URL?.trim() || 'https://engineeringmakerlab.example';
const lastModifiedByPath = new Map();

for (const collection of ['projects', 'tutorials', 'buying-guides']) {
  const directory = path.join(process.cwd(), 'src', 'content', collection);
  for (const filename of readdirSync(directory).filter((file) => file.endsWith('.md'))) {
    const source = readFileSync(path.join(directory, filename), 'utf8');
    const updatedDate = source.match(/^updatedDate:\s*["']?(\d{4}-\d{2}-\d{2})/m)?.[1];
    if (updatedDate) {
      const slug = path.basename(filename, '.md');
      lastModifiedByPath.set(`/${collection}/${slug}`, `${updatedDate}T00:00:00.000Z`);
    }
  }
}

export default defineConfig({
  site,
  redirects: {
    '/recommended-kits': '/collections',
    '/buying-guides/best-raspberry-pi-pico-starter-kit': '/collections/raspberry-pi-pico',
    '/products/starter-kits': '/products',
    '/products/raspberry-pi-pico': '/collections/raspberry-pi-pico',
    '/products/arduino': '/collections/arduino',
    '/products/sensors': '/products',
    '/products/displays': '/products',
    '/products/motors': '/products',
    '/products/breadboards': '/products',
    '/products/tools': '/products',
    '/products/power': '/products',
    '/products/accessories': '/products',
  },
  integrations: [sitemap({
    serialize(item) {
      const pathname = new URL(item.url).pathname.replace(/\/$/, '') || '/';
      const lastmod = lastModifiedByPath.get(pathname);
      return lastmod ? { ...item, lastmod } : item;
    },
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
