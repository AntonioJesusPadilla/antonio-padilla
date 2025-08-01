import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import iconify from '@iconify/astro';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
    iconify({
      include: ['mdi:github', 'mdi:linkedin', 'mdi:email']
    })
  ],
  vite: {
    server: {
      hmr: true // Fast refresh
    }
  }
});