# KD Design System — build conventions

KD is the brand of Kieran Duffy, Dublin brand & digital designer. One mark, one blue, one typeface. Editorial, not corporate. Every screen you build must read that way.

## Wrapping — required

Wrap every screen in exactly one `KdProvider` (`theme="light" | "dark"`; light is the default). It applies the Instrument Sans typography scope and the theme's `--kd-*` tokens. **Without it, text renders in browser-default fonts and token lookups fail.**

```jsx
<KdProvider theme="light">
  <PillNav links={[{ label: "Work", href: "#", active: true }, { label: "About", href: "#" }]} cta={{ label: "Contact", href: "#" }} />
  <main style={{ padding: "var(--kd-section) var(--kd-pad)" }}>
    <Label style={{ color: "var(--kd-blue)" }}>01 — Services</Label>
    <Heading role="title" accent="perform.">Built to</Heading>
    <p style={{ color: "var(--kd-muted)", maxWidth: "52ch" }}>Supporting copy is always muted.</p>
    <Button>Start a project</Button>
  </main>
</KdProvider>
```

## Styling idiom — tokens, not invented values

Style your own layout glue with inline styles referencing `var(--kd-*)` tokens (defined in `styles.css` → `_ds_bundle.css`). Never hardcode hex colours, radii, or font sizes. Key tokens:

- Colour: `--kd-blue` (the ONLY brand colour), `--kd-bg`, `--kd-text`, `--kd-muted`, `--kd-line`, `--kd-surface`, `--kd-surface-2`, `--kd-error`, `--kd-ink`
- Space: `--kd-pad` (page gutter), `--kd-section` (section rhythm), steps `--kd-s1`…`--kd-s8`
- Shape: `--kd-radius` (18px, containers), `--kd-radius-sm`, `--kd-pill` (100px, anything pressable)
- Type sizes: `--kd-fs-hero|display|title|heading|subhead|lede|body|label` (prefer the `Heading` component over raw sizes)
- Motion: `--kd-ease` — the house curve for every transition
- Art: `--kd-grad-placeholder` (deep-blue media placeholder), `--kd-grad-footer`

## Brand rules the components assume

- **Blue is scarce.** ~2% of any screen: the accented word, the primary CTA, active states. One `Heading` `accent` word per heading, one primary `Button` per view.
- **Pill vs card:** everything interactive is a full pill; everything that contains is an 18px-radius surface (`Card`).
- **`Chip` filters (interactive); `Tag` describes (static).** Don't swap them.
- **Body copy is `--kd-muted`**, headings are `--kd-text`, measures capped (~52–62ch).
- Dark surfaces (footers, media scrims) use `--kd-ink` and stay dark in both themes.

## Where the truth lives

Read `styles.css` and its import `_ds_bundle.css` (tokens + component CSS) before inventing any style; each component's API and usage is in `components/general/<Name>/<Name>.d.ts` and `<Name>.prompt.md`.
