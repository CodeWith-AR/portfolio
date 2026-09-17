# 🎨 Therapy Nest — Web Design System Specification
> Universal design token system, component catalog, and visual standards for the Therapy Nest web platform (HTML5, Vanilla CSS3, Vanilla JS).
> Adapted from `DESIGN-claude.md` with editorial warmth, clinical authority, and responsive perfection.

---

## 1. Brand Identity & Visual Philosophy

Therapy Nest's web experience is built as a **warm, editorial, and clinically grounded portal** for stroke survivors, aphasia patients, families, clinicians, and researchers. It explicitly rejects the cold, sterile SaaS look (pure white `#FFFFFF`, neon gradients, generic blue buttons) and the sloppy "vibe-coding" trap in favor of:

1. **Tinted Cream Canvas (`--color-canvas`: `#FAF9F5`)**: The core foundational floor. Deliberately warm, calming, and easy on patient eyes.
2. **Slab-Serif Display Headlines**: Literary, thoughtful, and authoritative typography with tight negative tracking (`-0.02em` to `-0.03em`) at regular 400 weight (never aggressive bold).
3. **Warm Coral (`#CC785C`) & Calm Blue (`#2B7BC8`) Accent Trinity**: Primary action energy with medical trust.
4. **Dark Navy Product Surfaces (`#181715` / `#1A2744`)**: Real clinical chrome, live interactive demo mockups, code windows, and a permanent dark footer.
5. **Color-Block Elevation Over Heavy Shadows**: Depth is created through surface contrast (Cream $\rightarrow$ Surface Card $\rightarrow$ Dark Surface), not artificial blurred drop-shadows.
6. **Strict WCAG 2.1 AA Accessibility**: Minimum 4.5:1 text contrast, 48px minimum touch targets, visible focus indicators, and full screen-reader semantic landmarks.

---

## 2. Design Tokens (`tokens.css` / `:root`)

All design tokens are defined **once** as CSS Custom Properties in `:root` and imported globally. **Hardcoding inline hex codes, arbitrary pixel paddings, or ad-hoc durations in component CSS is strictly forbidden.**

```css
:root {
  /* ==========================================================================
     1. COLOR PALETTE
     ========================================================================== */
  
  /* Brand Accents */
  --color-primary: #CC785C;               /* Signature warm coral */
  --color-primary-active: #A9583E;        /* Pressed / active coral */
  --color-primary-disabled: #E6DFD8;      /* Disabled coral tint */
  --color-primary-blue: #2B7BC8;          /* Calm medical blue */
  --color-primary-blue-dark: #1A5490;     /* Deep medical blue */
  --color-primary-blue-light: #E8F3FF;    /* Subtle blue surface wash */

  /* Text & Ink */
  --color-ink: #141413;                   /* Primary headlines & high-emphasis text */
  --color-body-strong: #252523;           /* Lead paragraphs & strong text */
  --color-body: #3D3D3A;                  /* Default running body text */
  --color-muted: #6C6A64;                 /* Secondary descriptions, subtitles */
  --color-muted-soft: #8E8B82;            /* Captions, timestamps, fine print */
  --color-on-primary: #FFFFFF;            /* Text on primary coral/blue buttons */
  --color-on-dark: #FAF9F5;               /* Off-white text on dark surfaces */
  --color-on-dark-soft: #A09D96;          /* Secondary text on dark surfaces & footer */

  /* Backgrounds & Surfaces */
  --color-canvas: #FAF9F5;                /* Default warm cream page background */
  --color-surface-soft: #F5F0E8;          /* Subtle band separators & pill tags */
  --color-surface-card: #EFE9DE;          /* Feature cards & content containers */
  --color-surface-cream-strong: #E8E0D2;  /* Emphasized tabs & highlighted cards */
  --color-surface-white: #FFFFFF;         /* Pure white for selected cards/inputs */
  --color-surface-dark: #181715;          /* Dominant dark navy surface & footer */
  --color-surface-dark-elevated: #252320; /* Elevated modules inside dark bands */
  --color-surface-dark-soft: #1F1E1B;     /* Inner code blocks & sub-panels */

  /* Borders & Hairlines */
  --color-hairline: #E6DFD8;              /* Standard 1px border on cream surfaces */
  --color-hairline-soft: #EBE6DF;         /* Subtle inner dividers */
  --color-hairline-dark: #2F2D29;         /* 1px border on dark navy surfaces */

  /* Semantic Feedback */
  --color-accent-teal: #5DB8A6;           /* Live status, ASR waveforms, accuracy */
  --color-accent-amber: #E8A55A;          /* Streak badges, achievements */
  --color-success: #5DB872;               /* Correct feedback & milestone checks */
  --color-warning: #D4A017;               /* Alert warnings */
  --color-error: #C64545;                 /* Errors & destructive actions */

  /* ==========================================================================
     2. TYPOGRAPHY SCALES
     ========================================================================== */
  
  /* Font Families */
  --font-serif: "Copernicus", "Tiempos Headline", "Cormorant Garamond", "EB Garamond", "Source Serif 4", Georgia, serif;
  --font-sans: "StyreneB", "Inter", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Fluid Display Sizes (Serif Display - 400 weight) */
  --text-display-xl: clamp(2.5rem, 5vw + 1rem, 4rem);      /* 40px -> 64px, h1 */
  --text-display-lg: clamp(2rem, 3.8vw + 0.8rem, 3rem);     /* 32px -> 48px, h2 */
  --text-display-md: clamp(1.625rem, 2.5vw + 0.7rem, 2.25rem); /* 26px -> 36px, h3 */
  --text-display-sm: clamp(1.375rem, 1.8vw + 0.5rem, 1.75rem); /* 22px -> 28px, sub-heads */

  /* Titles & Headings (Sans - 500/600 weight) */
  --text-title-lg: clamp(1.25rem, 1.2vw + 0.8rem, 1.375rem);   /* 20px -> 22px */
  --text-title-md: 1.125rem;                                   /* 18px */
  --text-title-sm: 1rem;                                       /* 16px */

  /* Body Running Text (Sans - 400 weight) */
  --text-body-lg: 1.125rem;                                    /* 18px */
  --text-body-md: 1rem;                                        /* 16px (Base) */
  --text-body-sm: 0.875rem;                                    /* 14px */
  --text-caption: 0.8125rem;                                   /* 13px */
  --text-caption-uppercase: 0.75rem;                           /* 12px */
  --text-code: 0.875rem;                                       /* 14px */

  /* Line Heights */
  --leading-none: 1.0;
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.4;
  --leading-relaxed: 1.6;
  --leading-loose: 1.8;

  /* Letter Spacing */
  --tracking-tighter: -0.03em;
  --tracking-tight: -0.02em;
  --tracking-normal: 0em;
  --tracking-wide: 0.04em;
  --tracking-widest: 0.12em;

  /* ==========================================================================
     3. SPACING SYSTEM (4px Base Grid)
     ========================================================================== */
  --space-xxs: 0.25rem;   /* 4px */
  --space-xs: 0.5rem;     /* 8px */
  --space-sm: 0.75rem;    /* 12px */
  --space-md: 1rem;       /* 16px */
  --space-lg: 1.5rem;     /* 24px */
  --space-xl: 2rem;       /* 32px */
  --space-2xl: 3rem;      /* 48px */
  --space-3xl: 4rem;      /* 64px */
  --space-section: clamp(4rem, 8vw, 6rem); /* 64px -> 96px */

  /* Container Widths */
  --container-max-width: 1200px;
  --container-text-width: 760px;
  --gutter-padding: clamp(1rem, 4vw, 2.5rem);

  /* ==========================================================================
     4. BORDER RADIUS SCALE
     ========================================================================== */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;       /* Buttons, inputs, small tags */
  --radius-lg: 12px;      /* Cards, dialogs, code blocks */
  --radius-xl: 16px;      /* Hero illustration & marquee cards */
  --radius-2xl: 24px;     /* Major modal containers */
  --radius-pill: 9999px;  /* Pill badges, search bars */
  --radius-full: 50%;     /* Avatars, circular icons */

  /* ==========================================================================
     5. ELEVATION & SHADOWS (Color-block first, subtle shadows only)
     ========================================================================== */
  --shadow-none: none;
  --shadow-subtle: 0 1px 3px rgba(20, 20, 19, 0.05);
  --shadow-card: 0 4px 12px rgba(20, 20, 19, 0.04), 0 1px 2px rgba(20, 20, 19, 0.03);
  --shadow-hover: 0 8px 24px rgba(20, 20, 19, 0.08), 0 2px 6px rgba(20, 20, 19, 0.04);
  --shadow-dropdown: 0 12px 32px rgba(20, 20, 19, 0.12);
  --shadow-glow-coral: 0 0 20px rgba(204, 120, 92, 0.25);
  --shadow-glow-blue: 0 0 20px rgba(43, 123, 200, 0.25);

  /* ==========================================================================
     6. MOTION & ANIMATION TOKENS
     ========================================================================== */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --duration-page: 600ms;

  --ease-standard: cubic-bezier(0.2, 0.0, 0.0, 1.0);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1.0);
  --ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Z-Index Hierarchy */
  --z-base: 1;
  --z-card: 10;
  --z-header: 100;
  --z-dropdown: 200;
  --z-modal-backdrop: 900;
  --z-modal: 1000;
  --z-toast: 1100;
}
```

---

## 3. Typography Hierarchy & Rules

| Typography Token | CSS Properties | Recommended Use | Voice & Guidance |
|---|---|---|---|
| **`display-xl`** | `font-family: var(--font-serif); font-size: var(--text-display-xl); font-weight: 400; line-height: 1.08; letter-spacing: var(--tracking-tight);` | Homepage main hero headline | Considered, literary, human. Never bolded. |
| **`display-lg`** | `font-family: var(--font-serif); font-size: var(--text-display-lg); font-weight: 400; line-height: 1.12; letter-spacing: var(--tracking-tight);` | Major page sections, Feature titles | Clear, authoritative section headings. |
| **`display-md`** | `font-family: var(--font-serif); font-size: var(--text-display-md); font-weight: 400; line-height: 1.2; letter-spacing: var(--tracking-tight);` | Sub-section headings, domain titles | Grouping headers. |
| **`display-sm`** | `font-family: var(--font-serif); font-size: var(--text-display-sm); font-weight: 400; line-height: 1.25;` | Callout card headlines, Pricing/Tier titles | Warm headline inside cards. |
| **`title-lg`** | `font-family: var(--font-sans); font-size: var(--text-title-lg); font-weight: 600; line-height: 1.3;` | Feature card headlines, modal titles | Crisp humanist sans. |
| **`title-md`** | `font-family: var(--font-sans); font-size: var(--text-title-md); font-weight: 600; line-height: 1.4;` | Card section titles, list group titles | Compact header. |
| **`title-sm`** | `font-family: var(--font-sans); font-size: var(--text-title-sm); font-weight: 600; line-height: 1.4;` | Table headers, navigation categories | Small UI headings. |
| **`body-lg`** | `font-family: var(--font-sans); font-size: var(--text-body-lg); font-weight: 400; line-height: var(--leading-relaxed);` | Lead paragraphs, intro blurbs | Highly readable, inviting. |
| **`body-md`** | `font-family: var(--font-sans); font-size: var(--text-body-md); font-weight: 400; line-height: var(--leading-relaxed);` | Default body copy, legal clauses, FAQs | Clear, unhurried running text. |
| **`body-sm`** | `font-family: var(--font-sans); font-size: var(--text-body-sm); font-weight: 400; line-height: var(--leading-normal);` | Footer links, secondary descriptions | Secondary information. |
| **`caption`** | `font-family: var(--font-sans); font-size: var(--text-caption); font-weight: 500; line-height: var(--leading-normal);` | Badges, date tags, metadata | Metadata labels. |
| **`caption-uppercase`**| `font-family: var(--font-sans); font-size: var(--text-caption-uppercase); font-weight: 600; letter-spacing: var(--tracking-widest); text-transform: uppercase;` | Overlines, "NEW", "100% FREE", categories | Structured eyebrow indicators. |
| **`code`** | `font-family: var(--font-mono); font-size: var(--text-code); font-weight: 400; line-height: var(--leading-relaxed);` | IRT mathematical formulas, JSON samples | Clear tabular & technical display. |

---

## 4. Component Catalog & CSS Architecture

Every component is defined with clear, modular classes adhering strictly to BEM (`block__element--modifier`) principles.

### 4.1 Header & Navigation (`.c-header`)
- **Structure**: Sticky navigation bar pinned to page top with a subtle backdrop blur on scroll (`backdrop-filter: blur(12px)`).
- **Height**: 68px.
- **Background**: `var(--color-canvas)` (solid) or `rgba(250, 249, 245, 0.92)` (scrolled).
- **Border**: 1px bottom border `var(--color-hairline)`.
- **Contents**:
  1. **Brand Cluster**: Combined Brain+Nest SVG Mark + "Therapy Nest" in `var(--font-serif)` 20px.
  2. **Desktop Nav Links**: "Overview", "Clinical Evidence", "Therapy Modules", "Research", "Docs", "Support".
  3. **Action Cluster**: "Get the App" (`.btn--primary`) + Mobile Hamburger Toggle (`.c-nav-toggle`).

### 4.2 Button Hierarchy (`.btn`)
All buttons have a minimum height of **44px** (desktop) / **48px** (mobile), with `border-radius: var(--radius-md)`, and `font-family: var(--font-sans)`.

```css
/* Button Base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: 0.625rem 1.25rem;
  font-family: var(--font-sans);
  font-size: var(--text-body-sm);
  font-weight: 600;
  line-height: var(--leading-none);
  text-decoration: none;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
  user-select: none;
  white-space: nowrap;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Primary Variant (Signature Coral) */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border-color: var(--color-primary);
}
.btn--primary:hover {
  background-color: var(--color-primary-active);
  border-color: var(--color-primary-active);
}

/* Primary Blue Variant (Medical CTAs) */
.btn--primary-blue {
  background-color: var(--color-primary-blue);
  color: var(--color-on-primary);
  border-color: var(--color-primary-blue);
}
.btn--primary-blue:hover {
  background-color: var(--color-primary-blue-dark);
  border-color: var(--color-primary-blue-dark);
}

/* Secondary / Outline Variant */
.btn--secondary {
  background-color: var(--color-canvas);
  color: var(--color-ink);
  border-color: var(--color-hairline);
}
.btn--secondary:hover {
  background-color: var(--color-surface-card);
  border-color: var(--color-body);
}

/* Secondary On Dark */
.btn--secondary-on-dark {
  background-color: var(--color-surface-dark-elevated);
  color: var(--color-on-dark);
  border-color: var(--color-hairline-dark);
}
.btn--secondary-on-dark:hover {
  background-color: var(--color-surface-dark-soft);
  border-color: var(--color-muted);
}

/* Destructive Variant */
.btn--destructive {
  background-color: var(--color-error);
  color: var(--color-on-primary);
  border-color: var(--color-error);
}
```

### 4.3 Surface Cards & Containers

#### 1. Feature Card (`.c-card--feature`)
- **Background**: `var(--color-surface-card)` (`#EFE9DE`).
- **Border**: 1px solid `var(--color-hairline)`.
- **Border Radius**: `var(--radius-lg)` (12px).
- **Padding**: `var(--space-xl)` (32px).
- **Elements**: Domain icon pill at top, `title-lg` header, `body-md` text, and footer ability metric.

#### 2. Dark Product Chrome Card (`.c-card--dark`)
- **Background**: `var(--color-surface-dark)` (`#181715`).
- **Border**: 1px solid `var(--color-hairline-dark)`.
- **Border Radius**: `var(--radius-lg)` (12px).
- **Padding**: `var(--space-xl)` (32px).
- **Text Color**: `var(--color-on-dark)`.
- **Used For**: Clinical IRT engine visualizer, on-device Vosk ASR waveform preview, interactive therapy simulator, offline sync engine diagrams.

#### 3. Code Window Card (`.c-code-window`)
- **Background**: `var(--color-surface-dark)`.
- **Header**: 3 window control dots (red, yellow, green) + filename / topic tab in `var(--font-mono)`.
- **Body**: `var(--color-surface-dark-soft)` with syntax-highlighted IRT mathematical models, API endpoints, or database schemas in `var(--font-mono)`.

#### 4. Callout Band (`.c-callout--coral` / `.c-callout--blue`)
- Full-bleed band with rounded container corners (`var(--radius-xl)`).
- Generous internal padding (`var(--space-3xl)` / 48px to 64px).
- High-voltage headline in `var(--font-serif)` with contrasting CTA button.

### 4.4 Form Controls & Accessibility Inputs
- **Inputs & Textareas**: `background-color: var(--color-surface-white); border: 1px solid var(--color-hairline); border-radius: var(--radius-md); font-family: var(--font-sans); font-size: var(--text-body-md); padding: 0.75rem 1rem; min-height: 48px;`.
- **Focus State**: `border-color: var(--color-primary-blue); box-shadow: 0 0 0 3px rgba(43, 123, 200, 0.15); outline: none;`.
- **Labels**: Always rendered in `var(--text-title-sm)` above the input with explicit `for=""` mapping to input `id=""`.

### 4.5 Collapsible FAQ Accordion (`.c-accordion`)
- **Container**: `background-color: var(--color-surface-card); border-radius: var(--radius-md); border: 1px solid var(--color-hairline); margin-bottom: var(--space-sm);`.
- **Header Button**: Full-width semantic `<button>` with `aria-expanded="false"`, question in `var(--text-title-sm)`, and animated chevron icon (`transition: transform var(--duration-fast)`).
- **Panel**: Smooth accordion expand/collapse using CSS grid animation (`grid-template-rows: 0fr -> 1fr`).

---

## 5. Surface Pacing Rhythm

Every page on the Therapy Nest web portal must alternate surface modes following the **Surface Pacing Rule**. **Never place two identical surface backgrounds consecutively:**

```
┌────────────────────────────────────────────────────────────┐
│ 1. Header (Canvas + Hairline)                              │
├────────────────────────────────────────────────────────────┤
│ 2. Hero Section (Canvas #FAF9F5 + Serif Headline + CTA)    │
├────────────────────────────────────────────────────────────┤
│ 3. Key Metrics / Stats Band (Surface Soft #F5F0E8)         │
├────────────────────────────────────────────────────────────┤
│ 4. Therapy Domains 3-Column Grid (Surface Card #EFE9DE)    │
├────────────────────────────────────────────────────────────┤
│ 5. Clinical Engine Interactive Preview (Surface Dark #1817)│
├────────────────────────────────────────────────────────────┤
│ 6. Research & Validation Evidence (Canvas #FAF9F5)         │
├────────────────────────────────────────────────────────────┤
│ 7. Pre-Footer Callout Band (Warm Coral #CC785C or Blue)    │
├────────────────────────────────────────────────────────────┤
│ 8. Global Footer (Surface Dark #181715)                    │
└────────────────────────────────────────────────────────────┘
```

---

## 6. Responsive Breakpoints & Layout Rules

```css
/* Breakpoint System */
/* Mobile:   < 768px */
/* Tablet:   768px – 1024px */
/* Desktop:  1024px – 1440px */
/* Wide:     > 1440px */

/* Container */
.l-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--gutter-padding);
  padding-right: var(--gutter-padding);
}

.l-container--text {
  max-width: var(--container-text-width);
}

/* Grids */
.l-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.l-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

@media (max-width: 1024px) {
  .l-grid-3 {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}

@media (max-width: 768px) {
  .l-grid-3,
  .l-grid-2 {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
```

---

## 7. Enforcement & Anti-Vibecoding Checklist

### ✅ Strictly Required
- [ ] Use CSS Custom Properties (`var(--color-*)`, `var(--space-*)`, `var(--text-*)`) for **all** styles.
- [ ] Display headlines (`h1`, `h2`, `h3`) must use `var(--font-serif)` at weight 400 with negative letter spacing (`-0.02em` to `-0.03em`).
- [ ] Body copy and UI controls must use `var(--font-sans)`.
- [ ] All interactive elements must have clear `:hover`, `:active`, and `:focus-visible` states.
- [ ] All touch targets must be at least **44px $\times$ 44px** (WCAG AA).
- [ ] High contrast text: all text must maintain at least 4.5:1 contrast against its immediate background.
- [ ] Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`).
- [ ] Mobile navigation must toggle smoothly with `aria-expanded` and trap keyboard focus when open.
- [ ] Code blocks must be horizontally scrollable and retain readable font size on mobile.

### ❌ Strictly Forbidden
- [ ] **No inline CSS** (`style="..."`) anywhere in HTML.
- [ ] **No hardcoded arbitrary hex colors** (`#ffffff`, `#000000`, `#333`, `#2196f3`) outside `tokens.css`.
- [ ] **No bold serif display headlines** (`font-weight: 700` on serif display makes headlines look heavy and breaks the editorial feel).
- [ ] **No pure white `#FFFFFF` page background** (violates the warm cream canvas requirement).
- [ ] **No generic AI neon blue/purple gradients** or glassmorphism gimmicks that hurt medical legibility.
- [ ] **No bloated CSS frameworks** (Tailwind, Bootstrap) — pure, elegant, clean Vanilla CSS3 only.
- [ ] **No missing alt tags** on images or missing labels on form inputs.
- [ ] **No layout shift (CLS)** from un-sized images or asynchronous font flashes.
