import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import critters from 'astro-critters';

export default defineConfig({
  site: 'https://loris-lazulis.com',
  integrations: [
    tailwind(),
    react(),
    mdx(),
    critters()
  ],
  output: 'static'
});
