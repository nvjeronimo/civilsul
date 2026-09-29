---
name: Civilsul · Padrão do setor
description: The category-standard builder website, played straight at full craft. Photography first, clear services, strong quote action.
colors:
  white: "#ffffff"
  stone: "#f3f2ef"
  stone-2: "#e7e5e0"
  ink: "#0f1b2d"
  ink-hover: "#1c2c44"
  ink-2: "#3d4a5c"
  ink-3: "#5a6576"
  rule: "#dcdad4"
  rule-strong: "#c4c1b9"
  blue: "#0b84cf"
  blue-ink: "#0a6dad"
  blue-on-ink: "#6cc0f2"
  blue-wash: "#f0f8fd"
  yellow: "#ffd400"
  yellow-hover: "#ffe04d"
  on-ink-2: "#c9d1dc"
  error: "#b42318"
typography:
  display:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 3.6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline-sm:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.3rem + 1.9vw, 3rem)"
    fontWeight: 750
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.35vw, 1.375rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem)"
    fontWeight: 450
    lineHeight: 1.55
  body:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.65
  small:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
  note:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.35
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  pill: "999px"
spacing:
  s1: "0.5rem"
  s2: "1rem"
  s3: "1.5rem"
  s4: "2rem"
  s5: "2.5rem"
  s6: "3rem"
  s8: "4rem"
  s10: "5rem"
  s12: "6rem"
  s16: "8rem"
  section: "clamp(5rem, 3rem + 6vw, 8rem)"
  max: "82.5rem"
  header: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-dark-hover:
    backgroundColor: "{colors.ink-hover}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-sm:
    rounded: "{rounded.lg}"
    padding: "0 1.125rem"
    height: "2.75rem"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  choice-checked:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0.875rem 1rem"
    height: "3.5rem"
  filter-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.125rem"
    height: "44px"
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  quote-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink-2}"
    rounded: "{rounded.lg}"
  summary-card:
    backgroundColor: "{colors.stone}"
    rounded: "{rounded.lg}"
    padding: "{spacing.s4}"
---

# Design System: Civilsul · Padrão do setor

Scope: this file governs only the `padrao` world (`src/variants/padrao/**`, routed by `src/pages/padrao/[...path].astro`). All tokens are scoped under `.v-padrao` in `styles.css`. It replaces the builder's earlier notes file; every value below was verified against the shipped CSS.

## Overview

**Creative North Star: "The Architect's Portfolio Builder"**

The builder website a visitor expects, finished at the craft level of premium European residential builders and architecture studios. Convention is the commitment: a full-bleed finished house with a clear promise, trust facts, six services as photo-led tiles, featured works, a four-step process, the company, a closing quote band and a complete footer. No irony and no smuggled quirk; the quality is in proportion, whitespace and exactness.

White and a soft warm stone alternate section by section under a deep navy ink. Brand blue is a functional accent (links, focus, icons, rules). The logo yellow belongs to the primary button alone. Manrope set heavy and tight carries the headlines; generous 14px radii soften images, buttons and panels.

Motion is quiet and single-grammar (exponential ease-out `cubic-bezier(0.16, 1, 0.3, 1)`): the hero photo settles 1.06 → 1 over 1.6s; the header turns from transparent to white with a soft shadow on scroll; below-the-fold sections fade up 12px once (only elements JS marks off-screen, so nothing hides without JS); the works filter uses View Transitions (480ms group). Reduced motion disables all of it.

**Key Characteristics:**
- Photography first: real client photos, large, 14px radius.
- White / stone alternation instead of borders or cards to separate sections.
- Navy ink, blue for function, yellow for the one primary action.
- Heavy, tightly tracked Manrope headings over calm 450-weight body.
- One shadow in the whole system: the scrolled sticky header.

## Colors

Calm architectural neutrals with one functional blue and one rationed yellow.

### Primary
- **Algarve Blue** (blue): focus rings, icons, the current-nav underline, progress bars, checked choice borders and marks. Graphic use only (4.0:1 on white, too weak for small text).
- **Link Blue** (blue-ink): link text and current mobile nav item (5.4:1 on white).
- **Sky on Navy** (blue-on-ink): icons and focus rings inside the navy quote band.
- **Blue Wash** (blue-wash): background of a checked quote choice.

### Secondary
- **Logo Yellow** (yellow): the primary "Pedir orçamento" button and the primary cell of the mobile action bar, nothing else. Hover lightens to **Soft Yellow** (yellow-hover).

### Neutral
- **White** (white) and **Warm Stone** (stone): alternating section grounds; stone also fills the quote summary card.
- **Deeper Stone** (stone-2): image placeholders and progress-bar tracks.
- **Deep Navy Ink** (ink): text, the dark button, active filter chips, the quote band panel. **Ink hover** (ink-hover) for the dark button hover.
- **Slate** (ink-2): secondary text and leads (8.9:1 on white). **Muted Slate** (ink-3): notes and meta (5.9:1).
- **Rule** (rule) and **Strong Rule** (rule-strong): list dividers; field, choice and chip borders.
- **Mist on Navy** (on-ink-2): body copy on the navy band (11:1).
- **Error Red** (error): invalid fields and messages.

### Named Rules
**The One Yellow Rule.** Yellow appears only on the primary quote button (and its cell in the mobile bar). Never as a highlight, badge, icon or background.

**The Readable Blue Rule.** Any blue text uses blue-ink; the brand blue is for rings, strokes and fills that are not text.

## Typography

**Display Font:** Manrope Variable (with system-ui, sans-serif)
**Body Font:** Manrope Variable, same family

**Character:** A single contemporary geometric grotesque. Headlines at 750–800 with tight but legal tracking (never tighter than -0.03em) feel confident and architectural; body at weight 450 and 1.65 line height reads open and calm.

### Hierarchy
- **Display** (800, clamp 2.5–4.5rem, 1.02, -0.03em): the home hero H1 only, white over the photo, max 15ch.
- **Headline** (800, clamp 2.25–3.75rem, 1.04, -0.03em): page H1s.
- **Headline small** (750, clamp 1.875–3rem, 1.08, -0.028em): section H2s.
- **Title** (700, clamp 1.1875–1.375rem, 1.25, -0.015em): H3s, card titles (work cards at 1.125rem).
- **Lead** (450, clamp 1.125–1.3125rem, 1.55, ink-2): intros, max 40rem.
- **Body** (450, 1.0625rem, 1.65): prose max 42rem.
- **Small / Note** (500, 0.9375rem / 0.8125rem): meta, breadcrumbs, the mandatory call-cost note under phone numbers.

Phone numbers and facts use tabular numerals.

### Named Rules
**The Legal Tracking Rule.** Negative tracking stops at -0.03em; headings are tight, never crushed.

## Layout

An 82.5rem container; gutters 1.25rem, 1.5rem from 40rem, 2.5rem from 64rem. All spacing sits on an 8px grid (s1 0.5rem … s16 8rem). Sections pad clamp(5–8rem) vertically (tight sections clamp 3.5–5.5rem) and alternate white / stone. Section heads put title and lead left (max 44rem) with an optional action right, 2.5–4rem above content.

Home first view: full-bleed photo with a bottom-left legibility gradient, transparent header over it, H1 bottom-left, one support line, yellow primary + ghost-light WhatsApp button; a slim facts strip overlaps the hero's bottom edge. Mobile hero is 80svh with a fixed bottom action bar.

Grids: trades in CSS columns 1 / 2 / 3 (40rem, 64rem); works grid one column rising at breakpoints; quote page 7fr / 4fr from 64rem with a sticky summary. Header nav appears from 60rem, the phone from 80rem. Header height 5rem (5.5rem from 64rem).

## Elevation & Depth

Flat and tonal. Surfaces separate by white / stone alternation and hairline rules. The single elevation in the system is the sticky header once the page scrolls; before that it has only a 1px rule (or nothing, over the hero). Inset box-shadows on checked choices and the 3px focus halo on inputs are state rings, not elevation.

### Shadow Vocabulary
- **Scrolled header** (`box-shadow: 0 6px 24px -10px rgba(15, 27, 45, 0.22), 0 1px 0 rgba(15, 27, 45, 0.06)`): the sticky header after scroll.
- **Input focus halo** (`box-shadow: 0 0 0 3px rgba(11, 132, 207, 0.22)`): focused text fields, with a blue border.

### Named Rules
**The One Shadow Rule.** Only the scrolled header casts a shadow. Cards, images, buttons and panels stay flat.

## Shapes

Gently rounded (14px) on every image, button, input, choice, panel and the quote band. Smaller radii for small parts: 10px on the language button and small thumbnails, 6px on checkboxes, 4px on focus outlines and the progress bar; circles for radio marks, step dots and process numbers; full pills for the works filter chips. Borders are 1.5px on interactive controls, 1px for rules.

## Components

### Buttons
- **Shape:** 14px radius, 3.25rem min height (2.75rem small), 1.5rem side padding, 700 at 1rem.
- **Primary:** logo yellow with navy text; hover soft yellow. Active nudges down 1px.
- **Dark:** navy with white text; hover ink-hover.
- **Line:** transparent with a strong-rule 1.5px border; hover borders in ink.
- **Ghost light:** over photos, navy at 28% with a 70% white border; hover deepens to 50%.
- **More link:** 700 ink text with a blue arrow that moves 4px on hover. All transitions 180ms quart ease-out.

### Chips (filter)
- **Style:** pill, white, 1.5px strong-rule border, 650 at 0.9375rem, 44px min.
- **State:** hover borders in ink; pressed fills navy with white text.

### Cards / Containers
- **Work card:** image (14px radius, 4/3 by default) then title (700, 1.125rem) and meta (ink-3); hover scales the image 1.035 over 900ms and underlines the title. No card background or border.
- **Quote band:** navy panel, 14px radius, text column plus a photo half from 64rem; mist body text, white heading, sky icons.
- **Summary card:** stone, 14px radius, 2rem padding; rows divided by strong rules.

### Inputs / Fields
- **Style:** white, 1.5px strong-rule border, 14px radius, 3.25rem min, 1.0625rem; hover borders in ink-2.
- **Focus:** blue border plus the 3px blue halo.
- **Choices:** 3.5rem boxed options with a round mark; checked = blue border, blue-wash fill, 1px blue inset, filled mark.
- **Error:** error-red border and a message in 600 red.

### Navigation
- **Header:** sticky; transparent with white text and reversed logo over the hero, white with navy text after scroll (280ms). Links 600 at ~0.99rem with a 2px underline that scales in from the left on hover and stays for the current page (blue on the white header).
- **Mobile:** full-screen white menu, 1.75rem 750 rows over rules, current in link blue, contact lines with blue icons; enters with an 8px drop and fade.

### Icons
Authored inline SVG line icons on a 24 grid with a 1.75 stroke, usually in brand blue.

## Do's and Don'ts

### Do:
- **Do** lead with real client photography at generous sizes, 14px radius.
- **Do** alternate white and stone section grounds instead of boxing content.
- **Do** keep spacing on the 8px grid and sections at clamp(5–8rem).
- **Do** use blue-ink for any blue text and the brand blue for rings, icons and marks.
- **Do** keep motion to the single ease-out grammar and switch it off for reduced motion.

### Don't:
- **Don't** use yellow for anything but the primary quote button.
- **Don't** add shadows to cards, images or buttons; only the scrolled header has one.
- **Don't** track headings tighter than -0.03em.
- **Don't** replace service photos with icon cards.
- **Don't** introduce a second typeface.
