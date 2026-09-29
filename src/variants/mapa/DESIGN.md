---
name: Civilsul · Mapa de Quantidades
description: The builder's bill of quantities as a website. Numbered articles, ink rules, a blue pen, one yellow highlighter.
colors:
  paper: "#f4f6f5"
  sheet: "#fcfdfc"
  ink: "#121417"
  ink-2: "#3a4047"
  ink-3: "#555c64"
  rule: "rgb(18 20 23 / 0.16)"
  rule-2: "rgb(18 20 23 / 0.34)"
  pen: "#0b84cf"
  pen-text: "#0a669f"
  highlighter: "#ffe11a"
  error: "#b42318"
  plate-void: "#dfe3e1"
typography:
  display:
    fontFamily: "Sofia Sans Condensed Variable, Sofia Sans Condensed, Sofia Sans Variable, sans-serif"
    fontSize: "clamp(3rem, 1.9rem + 3.9vw, 5.25rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    fontFeature: "'tnum' 1, 'lnum' 1"
  headline:
    fontFamily: "Sofia Sans Condensed Variable, Sofia Sans Condensed, sans-serif"
    fontSize: "clamp(2.75rem, 1.8rem + 3.6vw, 5rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  headline-sm:
    fontFamily: "Sofia Sans Condensed Variable, Sofia Sans Condensed, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.5vw, 3.75rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Sofia Sans Condensed Variable, Sofia Sans Condensed, sans-serif"
    fontSize: "clamp(1.55rem, 1.25rem + 1vw, 2.15rem)"
    fontWeight: 760
    lineHeight: 0.98
  article-code:
    fontFamily: "Sofia Sans Condensed Variable, Sofia Sans Condensed, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 1.8vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 0.9
    fontFeature: "'tnum' 1, 'lnum' 1"
  lead:
    fontFamily: "Sofia Sans Variable, Sofia Sans, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.4vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Sofia Sans Variable, Sofia Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum' 1, 'lnum' 1"
  small:
    fontFamily: "Sofia Sans Variable, Sofia Sans, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
  label:
    fontFamily: "Sofia Sans Variable, Sofia Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 3.2vw, 48px)"
  section: "clamp(4.5rem, 3rem + 6vw, 9rem)"
  header: "76px"
  row: "0.7rem"
  article: "clamp(1.5rem, 1rem + 1.2vw, 2.5rem)"
  plate-offset: "8px"
components:
  cta-highlighter:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.55em 1.05em 0.55em 0.9em"
    height: "56px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6em 1.05em"
    height: "48px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "0.6em 1.05em"
    height: "48px"
  input:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.9rem"
    height: "54px"
  option-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.75rem 0.6rem 0.5rem"
    height: "58px"
  plate-code:
    textColor: "{colors.pen-text}"
    typography: "{typography.title}"
  action-bar:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    height: "58px"
---

# Design System: Civilsul · Mapa de Quantidades

Scope: this file governs only the `mapa` world (`src/variants/mapa/**`, routed by `src/pages/mapa/[...path].astro`). All tokens are scoped under `.v-mapa` in `styles.css`.

## Overview

**Creative North Star: "The Builder's Bill of Quantities"**

The site is the document a serious Portuguese builder hands over: a mapa de quantidades. Services are numbered articles (1–6, sub-items 1.1…), works are plates in Anexo A (A.01–A.13), the company facts are a filled table, and the quote form writes its own A4 "Pedido de orçamento" sheet as the visitor types. Everything reads as paper, ink and pen: a cool sheet-white ground, 1px ink rules as the grammar, a blue pen for anything that is a number, a link or an active item.

Density is that of a working document, not a brochure: tight rows, tabular lining numerals everywhere, condensed display type set large. Colour is almost absent; state is drawn with 45° section hatching, the way cut elements are drawn on construction plans. The single loud mark is a hand-drawn yellow highlighter band, reserved for the primary action and the newest filled row on the quote sheet.

Motion is document motion only: table rules draw left to right once on first view (900ms, 55ms stagger, first 24 rules), annex plates open with a clip-path wipe (1100ms). Nothing else moves; reduced motion leaves everything in its final state.

**Key Characteristics:**
- Ink rules (1px) as the structural grammar; no cards, no radius anywhere.
- Every service, work and quote row carries a durable article code in blue pen.
- Hatching, not tint, for hover, selected and current states.
- One highlighter band per view: the primary action (or the newest quote row).
- Photographs are annex plates with registration corner marks and a caption row.

## Colors

A near-monochrome paper-and-ink palette with one working accent (the pen) and one rationed mark (the highlighter).

### Primary
- **Drafting Pen Blue** (pen): the brand blue as a drawing instrument. Focus outlines, caret and form accent colour, the active nav underline, the quote progress bar, hatching tint for selected states, icon strokes in phone links. Graphic use only.
- **Pen Ink for Text** (pen-text): the darker blue used whenever the pen writes text: article codes, plate codes, totals row, links (`.pen`, `.arrowlink`), numbering. Chosen because the brand blue is too light for small text on paper.

### Secondary
- **Highlighter Yellow** (highlighter): the logo's yellow as a marker stroke with an irregular clip-path polygon, never a rectangle. Behind the primary "Pedir orçamento" action, the quote cell of the mobile action bar, the newest row on the quote sheet, text selection and the skip link.

### Neutral
- **Cool Sheet White** (paper): page ground, header, footer, mobile menu.
- **Clean Sheet** (sheet): the slightly brighter surface of a document placed on the page: the closing quote block, the A4 sheet, form inputs, the mobile action bar.
- **Drafting Ink** (ink): body text, 1px strong rules, plate caption rules, the outline button and the inverse ink button.
- **Ink 2 / Ink 3** (ink-2, ink-3): secondary copy (leads, article descriptions) and notes, column heads, meta.
- **Hairline Rule** (rule) and **Firm Rule** (rule-2): table row dividers and form field / option borders respectively.
- **Plate Void** (plate-void): background of a plate before its photo paints.
- **Error Red** (error): invalid field borders and messages.

### Named Rules
**The Pen Rule.** Blue appears only where a pen would write: codes, numbers, links, the current item, focus. Never as a fill for panels or buttons.

**The One Highlighter Rule.** The yellow band marks exactly one thing per view: the primary action (echoed only by the quote cell of the mobile action bar), or the newest quote row. It is always the irregular marker polygon, never a clean rectangle.

## Typography

**Display Font:** Sofia Sans Condensed Variable (with Sofia Sans, sans-serif)
**Body Font:** Sofia Sans Variable (with system-ui, sans-serif)

**Character:** A condensed grotesque set big and heavy for titles and every number, over its own regular-width sibling for reading. One family, two widths, no serif and no monospace; the document feel comes from tabular lining numerals, not from a typewriter face.

### Hierarchy
- **Display** (760, clamp 3–5.25rem, 0.98): the home H1 beside the first plate.
- **Headline** (760, clamp 2.75–5rem, 0.98): page titles and the closing block title; max ~18ch.
- **Headline small** (760, clamp 2.25–3.75rem): section heads (max 16ch) and quote step legends.
- **Title** (760, clamp 1.55–2.15rem): article titles; process steps at 1.6rem.
- **Article code** (800, clamp 2–3.4rem, 0.9, pen-text): the large number that leads each service article.
- **Lead** (400, clamp 1.2–1.4rem, 1.45, ink-2): section and page intros, max 44–46ch.
- **Body** (400, 1.125rem, 1.55): running text, max 66ch.
- **Label** (650, 0.8125rem, 0.08em, uppercase, ink-3): table column heads only (Art. · Descrição · Un. · Qt.; the quote sheet columns).

Facts values, phone numbers and contact channels use the condensed face at 680–720 (1.3–1.45rem) so data reads as filled-in table cells.

### Named Rules
**The Tabular Rule.** Tabular lining numerals are on for the whole world (`tnum`, `lnum`). Numbers must align down a column like a real quantity sheet.

**The Column Head Rule.** Uppercase tracked text exists only as the header row of a table. It never sits above a heading as a label.

## Layout

A 1560px max container with a fluid gutter (16–48px). Sections are separated by generous vertical space (4.5–9rem) and open with a section head: title left (7fr) and lead right (5fr) from 900px. The services map becomes a true four-column table from 900px (5.5rem code · description · 4rem Qt. · 0.9fr annex photo), closed by a totals row with a 3px double ink rule. Trades list in 1 / 2 / 3 columns (640px, 1100px); process in 4 columns from 900px.

First view: text column ~5/12 with H1, a four-row facts table and the actions; the A.01 plate fills the remaining ~7/12 at full viewport height. Mobile puts the plate first.

Below 1100px the header collapses to brand + PT/EN + menu, and a fixed bottom action bar (Ligar · WhatsApp · Orçamento, 58px) appears; the body reserves its height. The quote page is a 6/5 two-column layout from 1100px with the A4 sheet sticky; below that the sheet becomes a fixed strip above the action bar that opens into a drawer.

## Elevation & Depth

Flat. Depth is expressed by rules and by the brighter sheet surface, not by shadows. The only shadows in the world belong to the quote sheet: the A4 paper lifts slightly off the page, and the mobile sheet strip casts a short upward shadow over content. Both are paper, not UI chrome.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 1px 1px rgb(18 20 23 / 0.06), 0 12px 32px -12px rgb(18 20 23 / 0.22)`): the A4 "Pedido de orçamento" sheet on desktop.
- **Strip rise** (`box-shadow: 0 -8px 24px -14px rgb(18 20 23 / 0.35)`): the fixed mobile sheet strip.

### Named Rules
**The Paper-Only Shadow Rule.** A shadow is allowed only on something that is a sheet of paper. Buttons, plates, nav and panels stay flat.

## Shapes

Square everywhere (0px radius), including inputs. Form comes from lines: 1px hairline rules between rows, 1px ink rules to open and close tables, a 3px double ink rule under totals. Photos carry registration corner marks (14px ink ticks, set 8px outside the image). The highlighter is the only irregular shape, a ten-point polygon imitating a marker stroke.

## Components

### Buttons
- **Primary (highlighter CTA):** condensed display face 780 at 1.5rem (1.15rem small), ink text on the yellow marker polygon, 56px min height (48px small). Hover / focus lays ink hatching over the yellow inside the same polygon.
- **Outline:** 1px ink border, transparent, body face 650 at 1rem, 48px min. Hover fills with ink hatching.
- **Ink:** ink fill with sheet-white text; hover adds white hatching.
- **Arrow link / pen link:** pen-text, underline at 45–50% pen that goes solid on hover; 44px min target.

### Chips (filter)
- **Style:** the works filter bar uses bordered buttons; the pressed state gets a pen border, pen hatching and 720 weight.

### Cards / Containers
- **No cards.** Content sits in ruled rows. The closing quote block is a full-width sheet band (ink rule above, hairline below).

### Inputs / Fields
- **Style:** sheet background, 1px firm-rule border with a 1.5px ink bottom edge, square, 54px min, body 500 at 1.125rem.
- **Choice rows:** full-width ruled rows (58px) with a 1.6rem square box; hover hatches, checked fills the box with pen-text and hatches the row in pen.
- **Focus:** 2px pen outline. **Error:** error-red borders, the bottom edge thickens to 2px.

### Navigation
- **Header:** a document header row on paper with an ink bottom rule; nav items are index cells separated by hairlines, each with a small condensed pen-text index number. Hover hatches the cell; current gets pen hatching and a 3px pen underline.
- **Mobile:** menu opens a full-width list in the condensed face at 2rem; current item in pen-text.

### Annex Plate (signature)
A photo in a frame with four corner marks, then a caption row under a 1px ink rule: code (condensed 760, pen-text), title (600), place (ink-3, right). Linked plates hatch the image in pen on hover (multiply) and underline the title.

### Quote Sheet (signature)
An A4 sheet (210/297 on desktop) headed by logo and meta, titled "Pedido de orçamento nº …", with numbered rows under ink column rules. Empty rows show their placeholder in rule-2; a filled row turns its number pen-text; the newest row receives the highlighter with a 0.7s left-to-right sweep. A 4-step indicator above the form uses ruled cells with a 3px pen progress bar.

## Do's and Don'ts

### Do:
- **Do** give every service, work and quote row a durable code (1, 1.1, A.01) and use it as the anchor.
- **Do** separate content with 1px rules; close totals with a 3px double ink rule.
- **Do** draw hover, selected and current states with 45° hatching (ink, or pen for selected).
- **Do** use pen-text (not the lighter pen) for any blue text.
- **Do** keep tabular lining numerals on; set numbers in the condensed face.
- **Do** keep all corners square, inputs included.

### Don't:
- **Don't** put the highlighter on more than one element per view (the mobile action bar's quote cell excepted), or draw it as a rectangle.
- **Don't** use blue as a panel or button fill.
- **Don't** add shadows to anything that is not a sheet of paper.
- **Don't** introduce a serif or monospace face.
- **Don't** set uppercase tracked labels above headings; uppercase is for table column heads only.
- **Don't** animate anything beyond the rule draw, the plate wipe and the highlighter sweep.
