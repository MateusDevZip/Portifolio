import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://MateusDevZip.github.io/Portifolio/',
  base: '/Portifolio/',
  integrations: [
    tailwind()
  ],
  vite: {
    ssr: {
      external: ['lenis']
    }
  }
});
