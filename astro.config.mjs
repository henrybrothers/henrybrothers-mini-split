import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
export default defineConfig({
  site: 'https://thehenrybros.com',
  integrations: [
    react({ include: ['**/keystatic/**'] }),
    markdoc(),
    keystatic(),
    sitemap({
      filter: (page) =>
        !page.includes('/schedule') && !page.includes('/keystatic'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
