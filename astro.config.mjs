import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marketingsolutionsmx.com',
  integrations: [sitemap()],
});
