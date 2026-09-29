# Civilsul redesign: common build brief for every variant

Project: /Volumes/1TBHDD/Downloads-HDD/civilsul-redesign (Astro 7, static, base path `/civilsul`, trailingSlash always).
Three visual variants of the SAME site are built in parallel by different agents, over one shared foundation. Read first: PRODUCT.md, your variant's direction contract (.impeccable/surfaces/src-pages-<variant>.md), and the craft floor (/Users/nelsonjeronimo/.claude/skills/impeccable/reference/craft-floor.md).

## Ownership (strict)
- You own ONLY `src/variants/<variant>/**` and `src/pages/<variant>/**`. Create them.
- Shared files are read-only for you: `src/lib/*`, `src/content/*`, `src/scripts/quote.ts`, `src/components/Head.astro`, `src/components/Logo.astro`, `astro.config.mjs`, `package.json`, `public/*`. If one has a real bug, work around it in your own files and report it in your final message. Do not `npm install` anything (fonts available: @fontsource-variable/sofia-sans, sofia-sans-condensed, overpass, manrope).
- Never run `astro build` (other agents share dist/). Verify with your own dev server only.

## Routing
One catch-all page `src/pages/<variant>/[...path].astro` using `getStaticPaths() { return variantPaths(); }` from `src/lib/routes.ts`. Props `{ lang, page, id }` where page ∈ home | services | works | quote | contact | about | privacy (services/works with `id` = detail page). Links: `href(variant, lang, key, slug?)` from `src/lib/site.ts`; language switch: `BASE + variant + '/' + altPath(page, id, otherLang)`.

## Every page
- `<html lang>` = pt-PT / en. `<head>` uses `<Head>` (src/components/Head.astro) with `meta(props)` from src/lib/meta.ts for title/description; pass `jsonLd` extras where useful (BreadcrumbList on detail pages, Service on service pages). Pass a hero image URL (`getImage` result `.src`) as `image` for OG on home/work pages.
- Skip link, header with logo (`<Logo>`), nav (Serviços, Obras, Empresa, Contactos), PT/EN switch, phone, primary "Pedir orçamento". Mobile menu (accessible button with aria-expanded, Escape closes, focus handled). Sticky mobile action bar: Ligar (tel mobile) · WhatsApp (`whatsapp(lang)`) · Orçamento.
- Footer: logo, legal name "Construtora do Sul, Lda.", Alvará nº 4511, address, email, mobile + both landlines EACH followed by its CALL_NOTE (mobile vs landline), nav, privacy link, PT/EN, and a small link "Proposta de redesign · demonstração" to `BASE` (the proposal page at the root).
- UI strings from `UI[lang]` in site.ts; all content from src/content/*. Write any extra copy you need in BOTH languages inside your variant (e.g. `src/variants/<v>/copy.ts`), and it must not add facts (no numbers of works, team size, reviews, durations, prices, awards, guarantees, hours).

## Pages
- Home: hero per contract; services (all six from SERVICES, linking to their pages); selected works (≥6, real photos); company facts (MISSION/WHO/TEAM, since, permit, area); process (PROCESS); the full trade list (TRADES) somewhere findable; final quote/contact block.
- Services index: all six with intro + items, plus TRADES. Service detail: title, intro, items, related works (photos), CTA to quote with `?tipo=` preselect (moradias→moradia, reconstrucao→reconstrucao, remodelacoes→remodelacao, piscinas→piscina, telhados→telhado, obras-publicas→outro), links to other services.
- Works index: all 13 works with filter by KINDS (buttons with aria-pressed, progressive: all visible without JS). Work detail: all photos large, title, kind, place/client when present, related service link, prev/next work, CTA.
- Quote: implement the markup contract documented at the top of `src/scripts/quote.ts` exactly (field names type, property, place, area, timing, state, details, name, phone, email, pref, consent; radios with data-text; 4 `fieldset[data-step]`; `data-i18n` = JSON of `Q[lang]`; `data-wa` = SITE.mobile.wa; `data-email` = SITE.email; error boxes `[data-error-for]`; `[data-summary]` as a <dl>; `[data-send="wa"|"email"]`). Load it with `<script>import '../../scripts/quote.ts'</script>` (adjust relative path). Options from src/content/quote.ts. Pref radio options: telefone/whatsapp/email with labels in both langs. Show `Q[lang].photosNote` and `Q[lang].draft`. Without JS: `action={"mailto:"+SITE.email}` method post enctype text/plain, all steps visible.
- Contact: all channels with call notes, address with "Ver no mapa" link (SITE.mapsUrl; no iframes, CSP blocks them), invitation text (INVITE), link to quote. Do not invent opening hours.
- About (empresa): MISSION, WHO, TEAM, facts, process, trade list, CTA.
- Privacy: PRIVACY[lang] blocks.

## Quality floor
- Images: `Picture` from `astro:assets` with `formats={['avif','webp']}`, sensible `widths` + `sizes`, `alt` from content, hero `loading="eager" fetchpriority="high"`, others lazy. Never CSS background images for content photos.
- Fonts: import only the fontsource variable packages your contract names, in your layout.
- CSS: your own tokens on `:root`-scoped class for the variant (e.g. `.v-mapa`), in `src/variants/<v>/styles.css` (global) + component `<style>` blocks. Theme ::selection, focus-visible, caret, scrollbar, underline offset, tabular numerals. Contrast AA. Tap targets ≥44px. No horizontal overflow at 390px. Light theme only (sunlit phones, outdoor).
- JS: small vanilla `<script>` modules only (processed by Astro, no inline `is:inline` scripts: CSP is script-src 'self'). Everything visible without JS. `prefers-reduced-motion` → no motion.
- Banned: eyebrow/kicker labels above headings; icon+heading+text same-size card grids as structure; gradient text; decorative glass; emoji or unicode arrows as icons (draw SVG); hard offset shadows; monospace as costume; invented facts.
- Motion: only the grammar in your contract, one orchestrated moment, exponential ease-out.

## Verify (bounded: max two capture rounds)
1. Start your dev server in the background: `cd /Volumes/1TBHDD/Downloads-HDD/civilsul-redesign && VITE_CACHE=node_modules/.vite-<variant> npx astro dev --port <port> --ignore-lock` (mapa 4341, mostruario 4342, padrao 4343). Wait until it answers.
2. `node tools/capture.mjs <variant> <port>` → screenshots in `.impeccable/review/<variant>/` plus per-page status/overflow/errors. Open the images (Read tool) and fix everything wrong in one batch; recapture once to confirm. Also click through the quote form once with Playwright or reason it through the contract.
3. Run `/Users/nelsonjeronimo/.claude/skills/impeccable/scripts/impeccable detect --json src/variants/<variant> src/pages/<variant>` once and fix mechanical findings.
4. Stop your dev server. Final message: what you built (files), any shared-file bugs found, remaining known issues. Keep it short.
