// Pedido de orçamento a meio (variante mapa), a partir do build: node tools/capture-fill.mjs [porta]
import os from 'node:os'; import path from 'node:path';
import { chromium } from 'playwright-core';
const port = process.argv[2] ?? '4350';
const CHROME = path.join(os.homedir(), 'Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-x64/chrome-headless-shell');
const OUT = '.impeccable/review/mapa';
const pick = (p, name, value) => p.evaluate(([n, v]) => { const el = document.querySelector(`input[name="${n}"][value="${v}"]`); el.checked = true; el.dispatchEvent(new Event('input', { bubbles: true })); }, [name, value]);
const b = await chromium.launch({ executablePath: CHROME });
for (const [w, label] of [[1440, 'desktop'], [390, 'mobile']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 500 ? 844 : 1300 }, isMobile: w < 500, hasTouch: w < 500, reducedMotion: 'reduce' });
  const p = await ctx.newPage();
  await p.goto(`http://localhost:${port}/civilsul/mapa/orcamento/`, { waitUntil: 'networkidle' });
  await p.evaluate(() => localStorage.clear());
  await p.reload({ waitUntil: 'networkidle' });
  await pick(p, 'type', 'remodelacao');
  await p.waitForTimeout(400);
  await pick(p, 'property', 'apartamento');
  await p.fill('input[name="place"]', 'Loulé');
  await p.fill('input[name="area"]', '85');
  await p.locator('[data-step][data-active] [data-next], form [data-next]:visible').first().click();
  await p.waitForTimeout(400);
  await pick(p, 'timing', '3m');
  await p.fill('textarea[name="details"]', 'Remodelar cozinha e casa de banho, trocar pavimento.');
  await p.waitForTimeout(700);
  await p.screenshot({ path: `${OUT}/orcamento-fill-${label}.png`, fullPage: w > 500 });
  if (w < 500) {
    const strip = p.locator('[aria-expanded]').filter({ hasText: /nº|artigos/ }).first();
    if (await strip.count()) { await strip.click(); await p.waitForTimeout(500); await p.screenshot({ path: `${OUT}/orcamento-fill-mobile-open.png` }); }
  }
  await ctx.close();
}
await b.close();
console.log('ok');
