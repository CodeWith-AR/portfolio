---
name: Obsidian Crimson Luxury Cyber
colors:
  surface: '#131316'
  surface-dim: '#131316'
  surface-bright: '#39393c'
  surface-container-lowest: '#0e0e11'
  surface-container-low: '#1c1b1e'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2d'
  surface-container-highest: '#353438'
  on-surface: '#e5e1e5'
  on-surface-variant: '#e9bcb6'
  inverse-surface: '#e5e1e5'
  inverse-on-surface: '#313033'
  outline: '#af8782'
  outline-variant: '#5e3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#e50914'
  on-primary-container: '#fff7f6'
  inverse-primary: '#c0000c'
  secondary: '#ffb3ae'
  on-secondary: '#68000c'
  secondary-container: '#e00328'
  on-secondary-container: '#fff1f0'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410005'
  on-secondary-fixed-variant: '#930016'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#131316'
  on-background: '#e5e1e5'
  surface-variant: '#353438'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 112px
    fontWeight: '400'
    lineHeight: 100px
    letterSpacing: 0.04em
  display-hero-mobile:
    fontFamily: Anton
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Anton
    fontSize: 52px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 34px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Outfit
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Outfit
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-pill:
    fontFamily: Outfit
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system defines a high-end, futuristic personal portfolio interface merging cinematic dark luxury with cybernetic precision. Tailored for forward-thinking creative technologists, founders, and elite digital creators, the aesthetic communicates mastery, mystery, and bespoke craft.

The visual style blends **Dark Luxury Glassmorphism** with **Futuristic Minimal Brutalism**:
- Deep obsidian and pitch-black backgrounds create an infinite void.
- Hyper-saturated crimson and ruby laser-glow accents slice through the darkness, lending warmth and high-voltage energy.
- Translucent frosted glass layers with hair-thin metallic and golden-tinted rims suspend content in dimensional space.
- Tactile, aerodynamic pill-shaped controllers juxtaposed with massive, architectural typographic statements.

## Colors
The palette balances void-like depth with incandescent crimson highlights and subtle champagne-gold metallic accents:

- **Primary (`#e50914`) & Secondary (`#ff2a3a`):** Pure cinematic ruby and neon crimson. Used for interactive focus, focal key art, glowing dropshadows, dynamic metrics, and primary calls to action.
- **Tertiary (`#d4af37`):** Fine champagne gold, reserved exclusively for micro-borders, luxury pill outlines, badge badges, and subtle status pings.
- **Neutral Base (`#050507` / `#0a0a0d`):** Infinite pitch blacks with subtle blue-purple undertones preventing flat, lifeless surfaces.
- **Surface Overlays:** Translucent layers built with `rgba(255, 255, 255, 0.03)` to `rgba(20, 20, 26, 0.65)` layered over soft directional crimson gradients (`rgba(229, 9, 20, 0.15)` down to `transparent`).
- **Text & Content:** High-contrast Stark White (`#f5f5f7`) for lead headings, balanced with Silver Gray (`#a1a1aa`) and Muted Slate (`#71717a`) for technical details and descriptions.

## Typography
The typographic voice pairs monumentality with high-tech functional clarity:

- **Display & Section Headers (`Anton`):** Heavy, condensed, impact-driven letterforms inspired by theatrical title cards. Rendered in all-caps with positive tracking to accentuate structural presence and raw power.
- **Editorial & Body Text (`Outfit`):** Geometric, ultra-clean modern sans that counterbalances the condensed aggression of the headlines with openness and readability.
- **Metadata, Tags & Metrics (`JetBrains Mono`):** Precision monospaced type indicating performance stats, stack specs, and cybernetic UI status points.

## Layout & Spacing
The layout follows an atmospheric 12-column responsive fluid grid structured around floating focal modules:

- **Desktop (1200px+):** 12 columns with `1.5rem` gutters and generous `4rem` horizontal margins, allowing negative space to amplify high-contrast glowing elements.
- **Tablet (768px - 1199px):** 8 columns with `1.25rem` gutters and `2.5rem` margins.
- **Mobile (<768px):** 4 columns with `1rem` gutters and `1.25rem` margins. Cards and floating floating elements collapse to full-width stacks while floating navigation docks compress into bottom-anchored or top-pinned floating pills.
- **Rhythm & Padding:** Sections breathe through deep vertical intervals (`space-xl` scaled dynamically up to `6rem` between major portfolio movements).

## Elevation & Depth
Depth is created through luminosity and atmospheric absorption rather than standard drop shadows:

- **Background Void:** Pitch-black background (`#050507`) punctuated by ambient radial gradients of deep crimson glow (`rgba(229, 9, 20, 0.2)` at 400px–600px blur radius) anchored behind key artwork or cards.
- **Glassmorphic Paneling:** Translucent slate panels (`rgba(15, 15, 20, 0.6)`) paired with `backdrop-filter: blur(20px) saturate(180%)`.
- **Borders & Edges:** Instead of heavy outlines, interfaces leverage 1px semi-transparent borders:
  - Default: `rgba(255, 255, 255, 0.08)`.
  - Luxury Accent: Hairline gold `rgba(212, 175, 55, 0.35)`.
  - Active Glow: `rgba(229, 9, 20, 0.6)` combined with `box-shadow: 0 0 24px rgba(229, 9, 20, 0.3)`.

## Shapes
The design language is defined by the tension between razor-sharp typography and organic, pill-shaped tactile geometry:

- **Pill Badges & Buttons:** Fully curved pill capsules (`roundedness: 3` / 9999px border-radius) for interactive triggers, floating badges, and status pills.
- **Surface Cards:** Subtly rounded rectangular enclosures (`rounded-lg: 2rem` or `rounded-xl: 3rem`) maintaining a smooth, unified cockpit-like aesthetic.
- **Detail Elements:** Circular icon nodes and capsule progress meters evoking luxury automotive HUDs and futuristic instrumentation.

## Components

### Floating Navigation Bar
A detached, floating frosted pill header centered at the top or bottom of the viewport:
- Glass background (`rgba(10, 10, 14, 0.75)` with `backdrop-filter: blur(24px)`).
- Rimmed with a hairline gradient border transitioning from `rgba(255,255,255,0.15)` to `rgba(212,175,55,0.2)`.
- Interactive items styled with subtle red dot indicators on active routes.

### Primary & Secondary Buttons
- **Primary Action:** Solid crimson-to-ruby linear gradient (`linear-gradient(135deg, #e50914 0%, #ff2a3a 100%)`) inside a pill container. White bold typography, illuminated by a diffuse ruby halo (`0 8px 30px rgba(229, 9, 20, 0.45)`).
- **Secondary / Ghost Pill:** Translucent obsidian fill (`rgba(255, 255, 255, 0.04)`) with a crisp 1px perimeter border in hairline gold or muted white. Hover states shift the border to crimson glow.

### Chips & Feature Badges
- Floating status badges inspired by on-device engine indicators: pill shape, dark gray tint (`rgba(20, 20, 24, 0.9)`), bordered by a distinctive 1px golden outline (`#d4af37` at 40% opacity).
- Contains an icon node followed by high-contrast white text and optional monospaced status flags.

### Glassmorphic Project Cards
- Subdued dark panels hovering over subtle ambient crimson backlights.
- Inner padding set to `space-lg` or `space-xl`.
- Subtle top-edge linear highlight giving a polished glass refraction look.
- Interactive hover triggers a slow expansion of the ruby ambient glow and an inner border brightening.

### Form Inputs & Code Snippets
- Inverted dark fields with inner soft shadows.
- Text in clean monospaced or modern sans, with caret and active border glowing in primary ruby red (`#ff2a3a`).
- Checkboxes and toggles styled as miniature mechanical switches with glowing red state dots.