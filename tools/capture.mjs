// Capturas de revisão de uma variante a correr em dev: node tools/capture.mjs <variante> <porta> [desktop|mobile|both]
// Saída: .impeccable/review/<variante>/<página>-<desktop|mobile>.png (movimento reduzido = estado final das animações)
import os from 'node:os'; import path from 'node:path'; import fs from 'node:fs';
import { chromium } from 'playwright-core';
const [variant, port = '4321', which = 'both'] = process.argv.slice(2);
if (!variant) { console.error('uso: node tools/capture.mjs <mapa|aviso|padrao> <porta>'); process.exit(1); }
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = path.join(root, '.impeccable/review', variant);
fs.mkdirSync(OUT, { recursive: true });
const BASE = `http://localhost:${port}/civilsul/${variant}`;
const CHROME = process.env.CHROME ?? path.join(os.homedir(), 'Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-x64/chrome-headless-shell');
const PAGES = [
  ['home', '/'], ['servicos', '/servicos/'], ['servico', '/servicos/remodelacoes/'], ['obras', '/obras/'],
  ['obra', '/obras/moradia-vale-del-rey/'], ['orcamento', '/orcamento/'], ['empresa', '/empresa/'], ['contactos', '/contactos/'], ...(['cal-e-barra', 'luz-em-corte', 'paineis'].includes(variant) ? [] : [['en-home', '/en/']]),
];
const sizes = [[1440, 'desktop'], [390, 'mobile']].filter(([, l]) => which === 'both' || which === l);
const b = await chromium.launch({ executablePath: CHROME });
for (const [vw, label] of sizes) {
  const ctx = await b.newContext({ viewport: { width: vw, height: 900 }, reducedMotion: 'reduce', isMobile: vw < 500, hasTouch: vw < 500, deviceScaleFactor: 1 });
  for (const [name, url] of PAGES) {
    const p = await ctx.newPage();
    const errs = [];
    p.on('pageerror', (e) => errs.push(e.message));
    p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    const res = await p.goto(BASE + url, { waitUntil: 'networkidle' });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } scrollTo(0, 0); await document.fonts.ready; });
    await p.waitForTimeout(500);
    const overflow = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    await p.screenshot({ path: path.join(OUT, `${name}-${label}.png`), fullPage: true, animations: 'disabled', timeout: 120000 });
    console.log(`${label} ${name} ${res?.status()} overflowX=${overflow}${errs.length ? ' ERR ' + errs.join(' | ') : ''}`);
    await p.close();
  }
  await ctx.close();
}
await b.close();
