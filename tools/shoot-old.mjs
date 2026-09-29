// Capturas do site atual civilsul.pt para a página da proposta (antes). Devagar: o servidor limita pedidos (429).
import os from 'node:os'; import path from 'node:path'; import fs from 'node:fs';
import { chromium } from 'playwright-core';
const CHROME = path.join(os.homedir(), 'Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-x64/chrome-headless-shell');
const out = path.resolve('src/assets/proposta'); fs.mkdirSync(out, { recursive: true });
const b = await chromium.launch({ executablePath: CHROME });
for (const [w, h, label] of [[1440, 900, 'desktop'], [390, 844, 'mobile']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, deviceScaleFactor: w < 500 ? 2 : 1 });
  const p = await ctx.newPage();
  let bad = 0; p.on('response', (r) => { if (r.status() >= 400) bad++; });
  await p.goto('https://civilsul.pt/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(2000);
  console.log(label, 'erros', bad);
  await p.screenshot({ path: path.join(out, `antes-${label}.png`) });
  await p.close(); await ctx.close();
  await new Promise((r) => setTimeout(r, 15000));
}
await b.close();
