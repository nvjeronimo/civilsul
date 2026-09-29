---
name: Civilsul · Mostruário
description: A builder's material sample board. Real crops of Civilsul's own works mounted on charcoal, each with a printed tag, that open into the finished house.
colors:
  board: "#1c1e1d"
  board-2: "#262927"
  lime: "#f6f6f3"
  lime-2: "#ebebe6"
  field: "#ffffff"
  ink: "#1c1e1d"
  ink-2: "#4b4f4c"
  paper-2: "#b8bcb7"
  sun: "#ffe500"
  blue: "#0a6dad"
  blue-b: "#6bbcf1"
  hair-b: "#ffffff22"
  hair-b2: "#ffffff40"
  hair-l: "#1c1e1d1f"
  hair-l2: "#1c1e1d40"
  error: "#b42318"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 3.4vw, 4.6rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.4rem + 3.1vw, 4.25rem)"
    fontWeight: 760
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline-sm:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.95rem, 1.25rem + 2.1vw, 3.1rem)"
    fontWeight: 760
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.1rem + 0.6vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.3rem)"
    fontWeight: 420
    lineHeight: 1.5
  body:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 420
    lineHeight: 1.6
  small:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 420
  tag:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.01em"
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
  sticker: "50%"
spacing:
  gutter: "clamp(1rem, 0.4rem + 3vw, 2.75rem)"
  section: "clamp(4rem, 2.8rem + 4.5vw, 7.5rem)"
  container: "1360px"
  header: "76px"
  header-mobile: "64px"
  wall-gap: "1.5rem 1.25rem"
  tag-gap: "0.7rem"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.board}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.35rem"
    height: "50px"
  button-primary-on-lime:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.lime}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.35rem"
    height: "50px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.lime}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.35rem"
    height: "50px"
  button-sm:
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
    height: "44px"
  sticker-dot:
    backgroundColor: "{colors.sun}"
    rounded: "{rounded.sticker}"
    size: "0.7rem"
  sample-chip-tag:
    textColor: "{colors.paper-2}"
    typography: "{typography.tag}"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.9rem"
    height: "52px"
  option:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.9rem"
    height: "52px"
  filter-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.lime}"
    rounded: "{rounded.none}"
    padding: "0.45rem 1rem"
    height: "44px"
  action-bar:
    backgroundColor: "{colors.board}"
    textColor: "{colors.lime}"
    height: "56px"
  action-bar-quote:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    height: "56px"
---

# Design System: Civilsul · Mostruário

Scope: this file governs only the `mostruario` world (`src/variants/mostruario/**`, routed by `src/pages/mostruario/[...path].astro`). Portuguese only. All tokens are scoped under `:root.v-mos` in `styles.css`; the two grounds are the `.board` and `.lime` classes, which re-point the local roles (`--bg`, `--fg`, `--fg-2`, `--hair`, `--hair-2`, `--link`, `--ring`, `--rest`, `--lift`).

## Overview

**Creative North Star: "The Showroom Sample Board"**

The site is the material board in a good builder's showroom. Every service is shown as physical samples: square or 4:5 photographic chips cut, in CSS, from Civilsul's own finished works (timber cladding, pool water, terracotta roof, lime-white wall with a blue band, patterned floor tile, blue facade), each mounted with a hairline frame and a small printed tag beneath it: "Ref. S-01", the material as seen in the photo, and "Aplicado em" + the work it came from. Touch a sample and it opens into the whole house. The proof is material, not adjectives.

Two grounds alternate by section: a charcoal mounting board for the first viewport, page heads, the home services list, the closing call and the footer; a lime-white reading ground for works, company, process, trades and the quote. Colour is otherwise withheld so the photographs carry it. The logo's yellow appears only as a small round sticker; the logo's blue appears only as links and focus.

Motion is one gesture: sample to house. The crop animates out to the full photograph inside the same frame (700ms, expo-out) while the tag swaps the material line for the work title. On the works wall each sample resolves to the house once as it enters the viewport. Reduced motion shows full photographs with no transitions.

**Key Characteristics:**
- Sample chips (crop + hairline frame + printed tag below) are the primary unit on every page.
- Two grounds, charcoal board and lime white, alternate by section and re-point every colour role.
- One family (Schibsted Grotesk) for everything; the tag is the only small type and it sits under what it labels.
- Square corners; the only circles are the sticker dot, list bullets and step numbers.
- No new rasters: every image is a real work photo, cropped by `object-position` + `scale`.

## Colors

A charcoal-and-lime neutral pair with the logo's two colours rationed: yellow as a sticker, blue as ink for links.

### Primary
- **Sticker Yellow** (sun): the logo's circle. Round dot on the primary "Pedir orçamento" action (header, hero, menu, mobile bar), on the first sample of the hero wall, and as the fill that marks a chosen thing: the selected quote type, the checked option, a completed quote step, the pressed works filter, the consent tick. Also text selection and the skip link. Never a surface, never text.

### Secondary
- **Link Blue on Lime** (blue): links, focus rings, input focus border and caret on the lime ground. The darker text-safe version of the logo blue.
- **Link Blue on Board** (blue-b): the same role on charcoal, lightened for contrast; also the current item in the mobile menu.

### Neutral
- **Mounting Board** (board): charcoal ground for the first viewport, page heads, footer, mobile action bar and blank swatches.
- **Board Shade** (board-2): the empty chip frame behind a photo before it paints.
- **Lime White** (lime): reading ground, and the fill of the primary button on charcoal.
- **Lime Shade** (lime-2): the empty plate behind a photo on lime.
- **Field White** (field): inputs, option boxes and the quote summary tag, so the form reads as paper laid on the lime.
- **Ink** (ink) and **Ink 2** (ink-2): text on lime; ink-2 for leads, descriptions and field hover borders.
- **Tag Grey** (paper-2): secondary text on charcoal (tag refs, support lines).
- **Hairlines** (hair-b / hair-b2 on board, hair-l / hair-l2 on lime): chip frames, row dividers, section borders; the stronger step for button borders, tag rules and spec frames.
- **Error Red** (error): invalid field borders, error text and its dot.

### Named Rules
**The Sticker Rule.** Yellow is only ever a small round dot or the fill inside a small round/square mark. It says "this is the one to press" or "this is chosen". It never fills a button, panel or band.

**The Ground Swap Rule.** Components never hard-code board or lime colours; they use the local roles that `.board` and `.lime` set, so the same chip, button or spec tag works on either ground.

## Typography

**Display Font:** Schibsted Grotesk Variable (with Schibsted Grotesk, system-ui, sans-serif)
**Body Font:** Schibsted Grotesk Variable (same family)

**Character:** One confident grotesque at many weights: 760 and tight tracking for headings, 420 for reading, 500–650 for tags and controls. No serif, no monospace; the "printed tag" feel comes from small size, tabular numerals and the rules above and below, not from a typewriter face.

### Hierarchy
- **Display** (760, clamp 2.5–4.6rem, 0.98, -0.04em): the home H1 only, max 14ch.
- **Headline** (760, clamp 2.4–4.25rem, 1.04, -0.035em): page-head H1s, max 18ch; the closing call H2 uses the same scale.
- **Headline small** (760, clamp 1.95–3.1rem, 1.04): section heads and service-family titles.
- **Title** (700, clamp 1.3–1.6rem, 1.15, -0.02em): H3s, service rows, process steps. Quote step legends sit between this and headline small (740, clamp 1.6–2.2rem).
- **Lead** (420, clamp 1.125–1.3rem, 1.5, fg-2): intros, max 40em.
- **Body** (420, 1.0625rem, 1.6): running text, max 68ch.
- **Small** (420, 0.9375rem): crumbs, spec labels, service item lists, filter buttons.
- **Tag** (500, 0.8125rem, 1.35, tabular numerals): chip refs, figure captions, footer base, fact strips. The chip material/work line sits just above it at 620, 0.9375rem.

### Named Rules
**The Tag Below Rule.** Small type labels things from underneath, like a printed sample tag. Nothing small and tracked sits above a heading; there is no uppercase anywhere in this world.

## Layout

A 1360px container with a fluid gutter (1–2.75rem). Sections breathe at clamp 4–7.5rem; consecutive lime sections are divided by a hairline. Section heads stack title over lead, max 48rem.

First viewport (from 1100px): charcoal board at full height minus the header, copy ~5.6/12 on the left (H1, lead, primary + WhatsApp) with a tag-size fact strip under it, and a 3×2 wall of six sample chips on the right. Below 700px the wall becomes a horizontal scroll-snap row (68% columns) bleeding into the gutters.

Walls: 3 columns by default; the works wall is 2 / 3 / 4 columns (700px, 1100px). Services page alternates text 5fr / samples 7fr, flipping sides per family, with the text column sticky from 1000px. Page heads use a 7/4 or 8/3 split with a sample chip on the right. Quote: form 7.5fr / sticky summary tag 4fr from 1100px.

Below 1100px the header collapses to logo + menu (64px) and a fixed bottom action bar appears (Ligar · WhatsApp · Orçamento, 56px, the quote cell in lime); the body reserves its height.

## Elevation & Depth

Depth belongs to the samples only. A chip is a physical object mounted on a board, so it carries a soft resting shadow and lifts 3px with a deeper shadow when opened. Each ground defines its own pair so the shadow reads on charcoal and on lime. Everything else (buttons, header, spec tag, form, plates) is flat and separated by hairlines.

### Shadow Vocabulary
- **Mounted, on board** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.05), 0 12px 22px -14px rgb(0 0 0 / 0.75)`): chips and blank swatches at rest on charcoal.
- **Lifted, on board** (`box-shadow: 0 24px 38px -20px rgb(0 0 0 / 0.8)`): an opened chip on charcoal, with `translateY(-3px)`.
- **Mounted, on lime** (`box-shadow: 0 1px 1px rgb(28 30 29 / 0.08), 0 12px 20px -14px rgb(28 30 29 / 0.4)`): chips at rest on lime.
- **Lifted, on lime** (`box-shadow: 0 22px 34px -20px rgb(28 30 29 / 0.55)`): an opened chip on lime.

### Named Rules
**The Sample-Only Shadow Rule.** Only a physical sample casts a shadow. Buttons, panels, tags and navigation stay flat; the input focus ring and the checked option's inset line are outlines, not elevation.

## Shapes

Square everywhere (0px): chips, buttons, inputs, options, spec tag, plates. Chip frames are drawn with a 1px inset hairline over the photo. The tag strip under a chip is ruled top (stronger hairline) and bottom (hairline). Blank swatches (no photo) carry a 1px dashed inner border inset 0.6rem, like an empty slot on the board. Circles are reserved for the sticker dot, hollow 0.45rem list bullets, and numbered step discs.

## Components

### Buttons
- **Shape:** square (0px), 1px border, 50px min height (44px small), 620 at 1rem.
- **Primary:** fills with the local foreground (lime on charcoal, ink on lime) with the ground colour as text; the quote action carries the sticker dot. Hover mixes 14% of the ground into the fill.
- **Outline:** transparent with a stronger hairline; hover darkens the border to the foreground.
- **More link:** link colour, 620, arrow icon nudges 3px right on hover; 44px target.

### Chips (filter)
- **Style:** works filter buttons are square outlined pills at small size. **Pressed:** ink fill, lime text, a sun dot before the label.

### Sample Chip (signature)
A square (or 4:5, or 16:10 wide) frame containing a real work photo cropped by `object-position` + `scale` around a focal point, with a hairline inset frame and the mounted shadow; then a tag: ref line ("Ref. S-01", family on the right, tag type), the material line (620), optional foot line. Hover (pointer), keyboard focus or a first tap opens it: the crop animates to the full photograph (700ms expo-out), the frame lifts, and the material line crossfades to "Aplicado em" + work title. Second tap follows the link. On the works wall chips start open without JS and resolve from crop to house once on entering the viewport. The first hero chip carries the sticker dot.

### Blank Swatch
Charcoal card with a dashed inner border and the text printed at the bottom (680 title, tag sub-line). Used where no portfolio photo can honestly represent the service (Obras públicas) and for "Outro trabalho" in the quote.

### Spec Tag
The company facts as one sample tag: stronger hairline frame on the local ground, a head row with the sticker dot and "Ficha da empresa", then label / value rows (small fg-2 label, 620 value) divided by hairlines; single column under 480px.

### Inputs / Fields
- **Style:** field white, 1px stronger hairline, square, 52px min, 1.0625rem. Hover darkens the border to ink-2.
- **Focus:** border and 1px ring in link blue. **Error:** error-red border and a red dot before the message.
- **Type-of-work choice:** each option is a sample chip; checked opens the crop to the house, outlines the frame 2px ink and shows the sticker dot.
- **Options:** square white boxes with a round radio; checked fills the radio with sun, the box gets an inset ink line and 620 weight.

### Quote Summary Tag
A field-white tag with stronger hairline, headed by the sticker dot and "Ref. do pedido" (720, 1.35rem), then filled fields only as tag rows (tag-size label, 600 value); a dashed row lists what is still missing. Sticky beside the form on desktop.

### Navigation
- **Header:** charcoal row with a hairline under it; logo + name, four text links (560) with a 1px underline that draws in from the left (400ms) on hover and stays for the current page, a phone block with its call note, and the small primary quote button.
- **Mobile:** menu opens a list at 1.85rem / 720 with hairline rows; current item in blue-b. Fixed action bar at the bottom.

## Do's and Don'ts

### Do:
- **Do** cut every sample from a real work photo in CSS (focal point x/y, scale, and a "house" framing hx/hy); keep the material line to what is visible in the photo.
- **Do** put the tag under the sample, with a ref code, and link it to the work it came from.
- **Do** use the local roles (`--fg`, `--fg-2`, `--hair`, `--link`, `--rest`, `--lift`) so components work on both grounds.
- **Do** use blue for links and focus only, and the text-safe value for the ground you are on.
- **Do** keep the sample-to-house transition at 700ms on the shared expo-out curve, and show full photos under reduced motion.
- **Do** use a blank swatch rather than a mismatched photo when no real work fits.

### Don't:
- **Don't** generate, stock or re-export images for samples; crops are CSS only.
- **Don't** use yellow as a fill for buttons, panels or text; it is a sticker.
- **Don't** add shadows to anything that is not a sample.
- **Don't** use uppercase or tracked labels above headings; small type sits below.
- **Don't** round corners on rectangles; circles are for the dot, bullets and step numbers.
- **Don't** add a second serif, monospace or display face.
