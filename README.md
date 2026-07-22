# KD Design System · v1.0

The single source of truth for the **Kieran Duffy** brand — extracted from and kept in sync with the portfolio site (`kd-portfolio`).

## What's here

| File | Purpose |
|---|---|
| `index.html` | The living guidelines — open in a browser. Covers foundations, the mark, colour, typography, space & layout, motion, components, imagery, voice & tone, accessibility, and usage. |
| `css/tokens.css` | Every design token as CSS custom properties (`--kd-*`), light + dark themes. Import this first. |
| `css/kd.css` | The component library (`.kd-btn`, `.kd-chip`, `.kd-pillnav`, `.kd-projcard`, `.kd-field`, motion primitives…). Requires `tokens.css`. |
| `css/docs.css` | Styles for the guidelines document itself (not for reuse). |
| `tokens.json` | W3C-format design tokens for tooling (Figma Tokens, Style Dictionary). |
| `assets/` | The KD mark (`kd-mark.svg`) and favicon variants. |

## Quick start

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/kd.css">

<body class="kd-scope">        <!-- light theme -->
<html data-theme="dark">       <!-- dark theme -->
```

## Brand in one paragraph

One mark (the KD chevron), one colour (Electric Blue `#0339F8`), one typeface (Instrument Sans). Warm-paper light theme, night-studio dark theme, Scrim Ink for media and footers. Pill geometry for everything interactive, 18px radius for everything that contains. Motion settles (rise + unblur on `cubic-bezier(0.22, 0.7, 0.2, 1)`), never bounces. Voice: first person, declarative, performance-framed — "Brands. Built to perform."

## Governance

Change the token here first, document it here second, roll it out to the portfolio third. If something can't be built from these tokens, extend the system — don't hardcode.
