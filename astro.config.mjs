// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lifemomentumscore.com',
  integrations: [
    sitemap({
      // Keep error pages out of the sitemap; everything else is public + indexable.
      filter: (page) => !/\/(404|500)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
