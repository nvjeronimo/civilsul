---
name: Civilsul · Livro de Obra (candidata B3)
description: The homepage as the company's site book. An open ruled book on a grey desk, one baseline grid, numbered records in the margin, pasted photographic prints and one rubber stamp.
colors:
  desk: "#2b2e30"
  desk-2: "#222527"
  desk-ink: "#eceeeb"
  desk-mute: "#b9c0bc"
  paper: "#f3f5f2"
  ink: "#1a1d22"
  ink-2: "#4a525b"
  blue: "#0a6dad"
  blue-deep: "#07507f"
  rule: "rgb(157 184 207 / 0.62)"
  margin-rule: "rgb(10 109 173 / 0.4)"
  stamp-sun: "#FFE500"
  print-white: "#fff"
  print-void: "#dfe4e2"
  scrollbar-thumb: "#5d6468"
  desk-hairline: "rgb(255 255 255 / 0.06)"
  desk-hairline-2: "rgb(255 255 255 / 0.07)"
  desk-divider: "rgb(255 255 255 / 0.09)"
  desk-shadow: "rgb(0 0 0 / 0.5)"
  desk-shadow-2: "rgb(0 0 0 / 0.6)"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable"
    weights: "800 (h1), 760 (h2), 700 (h3)"
    letterSpacing: "-0.03em / -0.024em / -0.012em"
  body:
    fontFamily: "Sofia Sans Variable"
    fontFeature: "'tnum' 1, 'lnum' 1"
baseline:
  mobile: "bl 28px · body 17 · small 14 · h3 21 · h2 33/56 · h1 40/56"
  tablet: "bl 30px · body 18 · small 14.5 · h3 22 · h2 40/60 · h1 52/60"
  desktop: "bl 32px · body 19 · small 15 · h3 24 · h2 46/64 · h1 60/64"
---

# Livro de Obra

## Thesis
Every Portuguese site keeps a *livro de obra*. The homepage is Civilsul's: seven openings (14 numbered pages) laid on a desk-grey surround. Structure carries the idea; there are no props beyond the paper, the prints and the stamp.

## The one rule: a single baseline grid
- `--bl` is the only vertical unit. Every block height, margin and padding is a whole multiple of it (headings use 2 × bl line boxes, buttons are centred inside 2 × bl, prints are `--rows × bl`).
- The ruled paper is a `repeating-linear-gradient` whose line sits at `--ry = bl/2 + fb × kb` (rounded to the pixel): the body baseline.
- Every other text style is translated onto the same rule: `translate: 0 calc((n − 1) × bl/2 + fb × kb − fs × k)`, with `kb = 0.27` (Sofia Sans) and `kd = 0.35` (Schibsted Grotesk), the measured (ascent − descent)/2 of each face in Chromium. Measured result: all styles land within ±1px of the rule at 1440 and 390.

## Page anatomy
- Paper `#f3f5f2`, blue rules, a 1px blue margin rule at `--mx` on every page. Record numbers ("Registo 01…18", "Passo 1…4") live in the margin, right-aligned to the rule; on phones only the number shows (the word stays for screen readers).
- Desktop (≥1100): two-page openings with a soft spine shadow, page-edge lines under each opening, folios at the outer corners. Below 1100: one page per opening, folio as a range ("3–4").
- Records run in reading order: 01 the opening print, 02–07 services, 08–16 works, 17 company print, 18 the visitor's own obra (the blank page).
- The blank page (14) is designed like a filled one: four prompts (what, where, when, photos) each followed by a firmer writing line, then WhatsApp / email links pre-filled with the same prompts.

## Prints
White 9px border, square corners, rotation ±0.4–0.9°, soft offset shadow (`0 14px 26px -12px`), no tape. Heights are whole rows so captions fall back on the rule. Real client photos only (src/assets/obras, via WORKS); public works are never illustrated.

## Stamp
Authored SVG (Stamp.astro): double outer ring, inner ring, "CIVILSUL" on the top arc, "ALVARÁ Nº 4511 · DESDE 1985" upright on the bottom arc, the Civilsul mark in the centre with the only use of the yellow sun. One ink colour; texture is only per-part opacity; `mix-blend-mode: multiply` so it inks over paper and photo alike. Rotated −9°, straddling the spine onto the opening print.

## Motion (book.ts)
One moment: on load the opening print settles and, 520ms later, the stamp presses once (scale 1.08 → 1, opacity, 500ms). Later prints settle (lift 14px, extra ∓1.6°, larger shadow → rest, 900ms expo-out) as they enter view. Default state is the final state; reduced motion and no-JS show everything static. book.ts also hides the desk running head while the opening is in view.

## Browser surfaces
`::selection` blue wash (paper) / light blue (desk), blue caret and accent, 2px blue focus ring (light blue on desk), themed scrollbar, tabular lining numerals everywhere, underline offset 0.22em.

## Provenance
All rasters are the client's own portfolio photos from the current civilsul.pt (originais/trabalhos-*.jpg → src/assets/obras). No generated imagery. The logo mark is the shared vector redraw (components/Logo.astro), re-inked in Stamp.astro.
