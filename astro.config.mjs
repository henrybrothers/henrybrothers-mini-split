import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thehenrybros.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/schedule'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
