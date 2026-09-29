# Civilsul · variante "Padrão do setor" (padrao)

The category standard played straight: photography first, clear services, portfolio, process, strong quote action.

## Tokens (styles.css, scoped to `.v-padrao`)
- Ground: white `#FFFFFF` and stone `#F3F2EF`, alternating by section. Ink navy `#0F1B2D`; secondary text `#3D4A5C`, notes `#5A6576`.
- Brand blue `#0B84CF` for focus rings, icons and rules only; link text uses `#0A6DAD` (5.4:1 on white). `#0B84CF` fails AA as body text (4.0:1), so it is never used for small text.
- Logo yellow `#FFD400`: the primary button (and the primary cell of the mobile action bar) only.
- Type: Manrope Variable. Hero `clamp(2.5rem…4.5rem)` 800, -0.03em; h1 800; h2 750, -0.028em; body 17px/1.65 weight 450.
- Spacing on an 8px grid; sections `clamp(5rem…8rem)`. Radius 14px on images, buttons, panels. Shadow only on the sticky header after scroll.
- Icons: authored inline SVG line icons (Icon.astro), 24 grid, 1.75 stroke.

## Motion
One grammar, exponential ease-out `cubic-bezier(.16,1,.3,1)`: hero photo settles 1.06→1 over 1.6s; header goes transparent→white with a soft shadow on scroll; sections below the fold fade up 12px once (JS marks only off-screen elements, so nothing is hidden without JS); works filter uses View Transitions where available. `prefers-reduced-motion` disables all of it.

## Structure
- Layout.astro (Head, Header, Footer, mobile action bar, scripts/site.ts), pages/*.astro per page type, one catch-all route in src/pages/padrao/[...path].astro.
- Shared pieces: WorkCard, QuoteBand, Process, Facts, Trades, PageIntro.

## Provenance
Every raster is one of the 14 client photos in src/assets/obras (from the current civilsul.pt portfolio), served through `astro:assets` Picture (AVIF/WebP). No generated or stock imagery.
