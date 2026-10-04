// Capturas do primeiro ecrã de cada variante para a página da proposta: node tools/shoot-variants.mjs [porta]
import os from 'node:os'; import path from 'node:path';
import { chromium } from 'playwright-core';
const port = process.argv[2] ?? '4350';
const CHROME = path.join(os.homedir(), 'Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-x64/chrome-headless-shell');
const b = await chromium.launch({ executablePath: CHROME });
for (const v of (process.argv[3] ? process.argv[3].split(',') : ['mapa', 'cal-e-barra', 'luz-em-corte', 'padrao', 'paineis'])) {
  for (const [w, h, label, dpr] of [[1440, 900, 'desktop', 1], [390, 844, 'mobile', 2]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: dpr, reducedMotion: 'reduce' });
    const p = await ctx.newPage();
    await p.goto(`http://localhost:${port}/civilsul/${v}/`, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(600);
    await p.screenshot({ path: `src/assets/proposta/${v}-${label}.png` });
    await ctx.close();
  }
}
await b.close();
