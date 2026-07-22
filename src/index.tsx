/**
 * KD Design System — React components.
 * Thin, faithful wrappers over the kd.css class system (css/kd.css + css/tokens.css).
 * The CSS remains the source of truth; these components apply its classes.
 */
import * as React from "react";

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

/** The KD chevron mark as an inline SVG. Blue half is fixed brand blue; ink half follows the current text colour. */
function KdMark({ height = 21 }: { height?: number }) {
  return (
    <svg
      viewBox="0 0 18.62 11.73"
      style={{ height, width: "auto", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon fill="#0339f8" points="18.62 0 12 0 6 5.86 12 11.73 18.62 11.73 12.62 5.86 18.62 0" />
      <polygon fill="currentColor" points="0 0 0 11.72 6 5.86 0 0" />
    </svg>
  );
}

/* ============================================================
   KdProvider
   ============================================================ */

export interface KdProviderProps {
  /** Colour theme. "light" is the KD default (warm paper); "dark" switches every token to the night-studio palette. */
  theme?: "light" | "dark";
  /** App content. */
  children?: React.ReactNode;
}

/**
 * Root wrapper for every KD screen. Applies the base typography scope
 * (Instrument Sans, body sizing) and the theme's design tokens.
 * Wrap the whole page in exactly one KdProvider; without it, components
 * render with browser-default typography.
 */
export function KdProvider({ theme = "light", children }: KdProviderProps) {
  return (
    <div
      className="kd-scope kd-root"
      data-theme={theme}
      style={{ background: "var(--kd-bg)", color: "var(--kd-text)", minHeight: "100%" }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   Button
   ============================================================ */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** "primary" = solid Electric Blue (default). "ghost" = outlined, borrows blue on hover. "nav" = compact pill-nav CTA. */
  variant?: "primary" | "ghost" | "nav";
  /** Render as an anchor with this href instead of a button. */
  href?: string;
}

/**
 * The KD pill button. Primary is the single call-to-action of a view —
 * never place two primaries side by side; pair one primary with ghost buttons.
 */
export function Button({ variant = "primary", href, className, children, ...rest }: ButtonProps) {
  const cls = cx(
    "kd-btn",
    variant === "ghost" && "kd-btn--ghost",
    variant === "nav" && "kd-btn--nav",
    className
  );
  if (href) {
    return (
      <a className={cls} href={href} {...(rest as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

/* ============================================================
   Chip
   ============================================================ */

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected state — filled Electric Blue. */
  active?: boolean;
}

/**
 * Filter chip: small uppercase pill used in filter bars and index rows.
 * Chips are interactive (they filter); for static metadata use Tag instead.
 */
export function Chip({ active, className, children, ...rest }: ChipProps) {
  return (
    <button className={cx("kd-chip", active && "is-active", className)} {...rest}>
      {children}
    </button>
  );
}

/* ============================================================
   Tag
   ============================================================ */

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "glass" = frosted white variant for overlaying on imagery. Default is the quiet outlined tag. */
  variant?: "default" | "glass";
}

/**
 * Metadata tag: tiny uppercase pill describing a thing (discipline, category).
 * Never clickable — interactive filtering is Chip's job.
 */
export function Tag({ variant = "default", className, children, ...rest }: TagProps) {
  return (
    <span className={cx("kd-tag", variant === "glass" && "kd-tag--glass", className)} {...rest}>
      {children}
    </span>
  );
}

/* ============================================================
   Heading
   ============================================================ */

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Typographic role from the KD scale: "hero" (page titles) > "display" (statements) > "title" (section heads) > "heading" (prose blocks) > "subhead" > "lede" (editorial intro). */
  role?: "hero" | "display" | "title" | "heading" | "subhead" | "lede";
  /** The one word (usually the last) rendered in Electric Blue — the KD accent-em signature. One accent per heading. */
  accent?: string;
  /** HTML element to render. Defaults to h2 (h1 for role="hero"). */
  as?: "h1" | "h2" | "h3" | "h4" | "p";
}

/**
 * KD display typography. All display type is Instrument Sans at weight 500
 * with tight tracking; hierarchy comes from the role's size, not from weight.
 * Use `accent` for the blue emphasised word: <Heading accent="perform.">Built to</Heading>
 */
export function Heading({ role = "title", accent, as, className, children, ...rest }: HeadingProps) {
  const El = (as ?? (role === "hero" ? "h1" : "h2")) as React.ElementType;
  const roleClass = {
    hero: "kd-hero-title",
    display: "kd-display",
    title: "kd-title",
    heading: "kd-heading",
    subhead: "kd-subhead",
    lede: "kd-lede",
  }[role];
  return (
    <El className={cx(roleClass, className)} {...rest}>
      {children}
      {accent ? <> <em>{accent}</em></> : null}
    </El>
  );
}

/* ============================================================
   Label
   ============================================================ */

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * Kicker label: small uppercase tracked text used above headings,
 * as section numbers ("01 — Foundations") and slide leads ("I design").
 */
export function Label({ className, children, ...rest }: LabelProps) {
  return (
    <span className={cx("kd-label", className)} {...rest}>
      {children}
    </span>
  );
}

/* ============================================================
   PillNav
   ============================================================ */

export interface PillNavLink {
  label: string;
  href: string;
  /** Current page. */
  active?: boolean;
}

export interface PillNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation links, left to right. */
  links?: PillNavLink[];
  /** Optional call-to-action rendered as the solid blue pill at the end. */
  cta?: { label: string; href: string };
  /** Show the KD mark at the start. Default true. */
  logo?: boolean;
  /** Href for the logo. */
  logoHref?: string;
}

/**
 * The floating pill navigation — frosted glass, full-pill radius.
 * In product it sits fixed, centred, 2rem from the top of the viewport;
 * the component itself is position-agnostic so it can be composed anywhere.
 */
export function PillNav({ links = [], cta, logo = true, logoHref = "#", className, ...rest }: PillNavProps) {
  return (
    <nav className={cx("kd-pillnav", className)} {...rest}>
      {logo && (
        <a href={logoHref} aria-label="Home" style={{ display: "flex", alignItems: "center", height: 26, padding: "0 0.9rem" }}>
          <KdMark />
        </a>
      )}
      {links.map((l) => (
        <a key={l.label} className={cx("kd-pillnav__link", l.active && "is-active")} href={l.href}>
          {l.label}
        </a>
      ))}
      {cta && (
        <Button variant="nav" href={cta.href} style={{ marginLeft: "0.2rem" }}>
          {cta.label}
        </Button>
      )}
    </nav>
  );
}

/* ============================================================
   Card
   ============================================================ */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lift on hover: −4px translate, blue border, soft shadow. Use for cards that link somewhere. */
  lift?: boolean;
}

/**
 * The 18px-radius surface card — the container for anything that groups content.
 * Everything that contains gets this radius; everything you press is a pill.
 */
export function Card({ lift, className, children, ...rest }: CardProps) {
  return (
    <div className={cx("kd-card", lift && "kd-card--lift", className)} {...rest}>
      {children}
    </div>
  );
}

/* ============================================================
   ProjectCard
   ============================================================ */

export interface ProjectCardProps {
  /** Client / project name (bold line under the media). */
  client: string;
  /** Short tagline, muted; turns blue when the card is hovered. */
  tagline?: string;
  /** Link target. */
  href?: string;
  /** Media image URL (3:2). Omit to get the KD placeholder art with the client's initial. */
  image?: string;
  /** Alt text for the image. */
  imageAlt?: string;
  /** Glass tags overlaid top-left on the media. */
  tags?: string[];
}

/**
 * Portfolio project card: 3:2 media (image zooms 1.045 on hover), glass metadata
 * tags over the media, client name and tagline below. With no image it renders
 * the KD placeholder art — deep-blue gradient with a giant italic initial.
 */
export function ProjectCard({ client, tagline, href = "#", image, imageAlt, tags = [] }: ProjectCardProps) {
  return (
    <a className="kd-projcard" href={href}>
      <figure
        className={cx("kd-projcard__media", !image && "kd-media-ph")}
        data-initial={client.charAt(0).toUpperCase()}
      >
        {image && <img src={image} alt={imageAlt ?? client} />}
        {tags.length > 0 && (
          <div className="kd-projcard__tags">
            {tags.map((t) => (
              <Tag key={t} variant="glass">
                {t}
              </Tag>
            ))}
          </div>
        )}
      </figure>
      <h3 className="kd-projcard__client">{client}</h3>
      {tagline && <p className="kd-projcard__tagline">{tagline}</p>}
    </a>
  );
}

/* ============================================================
   ServiceRow
   ============================================================ */

export interface ServiceRowProps {
  /** Index number, e.g. "01". Rendered small, tracked, Electric Blue. */
  num: string;
  /** Service name — display type at weight 500. */
  title: string;
  /** Link target. */
  href?: string;
}

/**
 * Hairline-divided service list row: blue index number, display title, quiet
 * arrow. Hovering indents the row and slides the arrow right in blue.
 * Stack several inside a plain container to build the services list.
 */
export function ServiceRow({ num, title, href = "#" }: ServiceRowProps) {
  return (
    <a className="kd-svcrow" href={href}>
      <span className="kd-svcrow__num">{num}</span>
      <h3 className="kd-svcrow__title">{title}</h3>
      <span className="kd-svcrow__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

/* ============================================================
   Field
   ============================================================ */

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label, rendered small and muted above the input. */
  label: string;
  /** Error message. Presence switches the border to Signal Red and shows the message below — never colour alone. */
  error?: string;
  /** Render a textarea instead of an input. */
  multiline?: boolean;
  /** Rows for the multiline variant. */
  rows?: number;
}

/**
 * KD form field: label + 10px-radius input. Focus shows a blue border with a
 * 22% blue halo; errors switch to Signal Red with a written message.
 */
export function Field({ label, error, multiline, rows = 4, className, ...rest }: FieldProps) {
  return (
    <label className={cx("kd-field", error && "is-error", className)}>
      {label}
      {multiline ? (
        <textarea rows={rows} {...(rest as unknown as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input {...rest} />
      )}
      {error && <em className="kd-field__error">{error}</em>}
    </label>
  );
}

/* ============================================================
   Stat
   ============================================================ */

export interface StatProps {
  /** The number — kept plain and true ("15", "35", "4"). Display type in Electric Blue. */
  value: string | number;
  /** Muted caption below, naturally capped at ~26ch. */
  caption: string;
}

/**
 * Big-number stat: an Electric Blue display figure with a muted caption.
 * Lay several out in a grid for a stats band.
 */
export function Stat({ value, caption }: StatProps) {
  return (
    <div className="kd-stat">
      <span className="kd-stat__big">{value}</span>
      <p>{caption}</p>
    </div>
  );
}

/* ============================================================
   ThemeToggle
   ============================================================ */

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Controlled theme value. Uncontrolled if omitted. */
  theme?: "light" | "dark";
  /** Called with the next theme when clicked. */
  onThemeChange?: (theme: "light" | "dark") => void;
}

/**
 * Circular light/dark toggle from the pill nav — sun icon in light, moon in dark.
 * Pair with KdProvider's `theme` prop to switch the palette.
 */
export function ThemeToggle({ theme, onThemeChange, className, ...rest }: ThemeToggleProps) {
  const [internal, setInternal] = React.useState<"light" | "dark">("light");
  const current = theme ?? internal;
  const next = current === "dark" ? "light" : "dark";
  return (
    <button
      className={cx("kd-theme-toggle", className)}
      aria-label="Switch between light and dark mode"
      onClick={(e) => {
        setInternal(next);
        onThemeChange?.(next);
        rest.onClick?.(e);
      }}
      {...rest}
    >
      {current === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <circle cx={12} cy={12} r={4} />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}
