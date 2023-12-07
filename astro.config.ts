import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://zyruks.com',
  integrations: [mdx(), sitemap()],
  adapter: vercel(),
});
