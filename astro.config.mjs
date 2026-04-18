import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import pwa from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://MateusDevZip.github.io/Portifolio/',
  base: '/Portifolio/',
  integrations: [
    tailwind(),
    sitemap(),
    pwa({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Mateus — Full-Stack Developer',
        short_name: 'Mateus.dev',
        description: 'Portfólio de desenvolvedor full-stack especializado em React, Node.js e Martech',
        theme_color: '#050505',
        background_color: '#ffffff',
        display: 'minimal-ui',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          {
            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdnjs-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          }
        ]
      }
    })
  ],
  vite: {
    ssr: {
      external: ['lenis']
    }
  }
});
