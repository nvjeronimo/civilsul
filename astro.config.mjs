import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Demo em GitHub Pages: https://nvjeronimo.github.io/civilsul/
// Para produção (civilsul.pt) muda SITE/BASE por variáveis de ambiente.
const SITE = process.env.SITE ?? 'https://nvjeronimo.github.io';
const BASE = process.env.BASE ?? '/civilsul';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
  integrations: [sitemap()],
  // scripts sempre em ficheiro próprio: a CSP (script-src 'self') não permite scripts inline
  vite: {
    build: { assetsInlineLimit: 0 },
    // cache próprio por servidor de dev (permite correr várias variantes em paralelo)
    cacheDir: process.env.VITE_CACHE ?? 'node_modules/.vite',
  },
});
