// Mede peso transferido e tempos de uma página: node tools/weigh.mjs <url> [mobile]
import os from 'node:os'; import path from 'node:path';
import { chromium } from 'playwright-core';
const [url, mode] = process.argv.slice(2);
const CHROME = path.join(os.homedir(), 'Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-x64/chrome-headless-shell');
const b = await chromium.launch({ executablePath: CHROME });
const ctx = await b.newContext(mode === 'mobile' ? { viewport: { width: 390, height: 844 }, isMobile: true } : { viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
let bytes = 0, n = 0; const byType = {};
p.on('response', async (r) => { try { const len = (await r.body()).length; bytes += len; n++; const t = r.request().resourceType(); byType[t] = (byType[t] || 0) + len; } catch {} });
await p.goto(url, { waitUntil: 'networkidle' });
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); } });
await p.waitForTimeout(1500);
const t = await p.evaluate(() => { const n = performance.getEntriesByType('navigation')[0]; const lcp = new Promise(res => new PerformanceObserver(l => { const e = l.getEntries(); res(e[e.length-1]?.startTime); }).observe({ type: 'largest-contentful-paint', buffered: true })); return Promise.race([lcp, new Promise(r=>setTimeout(()=>r(null),500))]).then(l => ({ dcl: Math.round(n.domContentLoadedEventEnd), load: Math.round(n.loadEventEnd), lcp: l && Math.round(l) })); });
console.log(JSON.stringify({ url, requests: n, kb: Math.round(bytes/1024), byType: Object.fromEntries(Object.entries(byType).map(([k,v])=>[k, Math.round(v/1024)])), ...t }));
await b.close();
