---
name: vanilla-web-architecture
description: >
  Use this skill when building, extending, styling, or auditing the Therapy Nest
  responsive multi-page website platform (HTML5, Vanilla CSS3, Vanilla JS).
  Covers architectural principles, BEM CSS organization, design token bindings,
  accessible interactive components (navigation drawer, tabs, accordions, modals),
  legal page compliance (Privacy, Terms, Support, Licenses, Research), SEO/meta
  standards, and deployment to Vercel/GitHub Pages.
stack: HTML5 · Vanilla CSS3 (Tokens/BEM) · Modern ES6+ JavaScript · Zero external dependencies · Vercel / GitHub Pages
---

# 🌐 Therapy Nest — Web Architecture & Engineering Skill

## 1. Architectural Principles (Non-Negotiable)

### Rule A — Strict Separation of Concerns
- **HTML5:** Semantic document structure and accessible landmarks only — no inline presentation (`style=""`), no inline scripts (`onclick=""`).
- **Vanilla CSS3:** All presentation, layout, typography, and visual pacing — strictly powered by CSS Custom Properties (`tokens.css`) and modular BEM classes.
- **Vanilla ES6+ JavaScript:** Interactive behavior, DOM event delegation, accessible state management (`aria-*` updates), and progressive enhancement only.

### Rule B — Zero Dependency / Native Modern Web Platform
- **Zero build pipelines required for development** — pure native web standards run directly in modern browsers.
- No bulky UI frameworks (React/Vue/Angular), no CSS bloat (Tailwind/Bootstrap), no jQuery.
- Use native APIs: `IntersectionObserver`, `ResizeObserver`, CSS Grid, Flexbox, native `<dialog>`, `CSS Custom Properties`, and `scroll-behavior: smooth`.

### Rule C — Absolute Design System Fidelity (`design-web.md`)
- Every color, font, spacing unit, border radius, shadow, and motion timing must come from `tokens.css`.
- Strict prohibition of the "vibe-coding" trap: no random hex colors, no mismatched button shapes, no unstyled hover states, no jarring mobile layouts.

### Rule D — Single Source of Truth for Legal Compliance
- All public policy pages (`/privacy.html`, `/terms.html`, `/support.html`, `/licenses.html`) must contain accurate, legally sound, and clinically transparent content specifically written for Therapy Nest's offline-first on-device ASR model.
- Direct alignment with Google Play Health & Medical apps policy and COPPA/HIPAA guidelines.

### Rule E — WCAG 2.1 AA Accessibility & Semantic Rigor
- Every page must have one and only one `<h1>`.
- Visible `:focus-visible` outlines on all interactive elements.
- Accessible keyboard navigation: `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Escape`.
- Screen-reader landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.

---

## 2. Project Folder Structure

All website files live inside `Website Development/Website/`:

```
Website Development/
  ├── Skills/
  │   ├── design-web.md          # Visual tokens, component catalog & style guide
  │   └── skill-web.md           # Architecture rules & engineering standards (this file)
  └── Website/
      ├── index.html              # Homepage / Master App Showcase (A to Z)
      ├── privacy.html            # Public Privacy Policy (Audio, Local Data, COPPA/HIPAA)
      ├── terms.html              # Terms of Service & Medical Practice Disclaimer
      ├── support.html            # Help Center, FAQs, User Guides, Contact Form
      ├── licenses.html           # Open Source MIT, Vosk, Piper, Drift, Datasets
      ├── research.html           # Clinical Science, IRT Adaptive Math, Academic Abstract
      ├── 404.html                # Custom branded error page
      ├── sitemap.xml             # Search engine index map
      ├── robots.txt              # Web crawler directives
      ├── vercel.json             # Vercel deployment configuration & security headers
      ├── css/
      │   ├── tokens.css          # Design system CSS Custom Properties (:root)
      │   ├── reset.css           # Modern box-sizing & baseline reset
      │   ├── base.css            # Base typography, layout grid, surface rhythm
      │   └── components.css      # Reusable BEM components (nav, buttons, cards, footers)
      ├── js/
      │   ├── main.js             # Sticky header, mobile drawer navigation, smooth scroll
      │   ├── interactive-demo.js # Interactive exercise simulator & IRT engine visualization
      │   └── accordion.js        # Accessible FAQ and documentation accordion
      └── assets/
          ├── icons/              # High-res SVG icons (brain-nest logo, speech, memory, etc.)
          └── images/             # App screenshots, architecture diagrams, social banners
```

---

## 3. CSS Architecture & File Separation

Styles are split into four logical files to maintain clean modularity:

```
tokens.css (Variables) ──► reset.css (Baseline) ──► base.css (Typography & Layout) ──► components.css (BEM Blocks)
```

### 3.1 `css/tokens.css`
Contains the complete CSS Custom Property dictionary defined in `design-web.md` (`--color-*`, `--font-*`, `--text-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--duration-*`).

### 3.2 `css/reset.css`
A bulletproof modern CSS reset:
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  color-scheme: light;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  text-rendering: optimizeSpeed;
  font-family: var(--font-sans);
  background-color: var(--color-canvas);
  color: var(--color-body);
  overflow-x: hidden;
}

img, picture, svg, video {
  display: block;
  max-width: 100%;
  height: auto;
}

input, button, textarea, select {
  font: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 3.3 `css/base.css`
Implements global typographic rendering, container layouts, grid utilities, and surface rhythm bands (`.surface--canvas`, `.surface--card`, `.surface--dark`, `.surface--soft`, `.surface--coral`, `.surface--blue`).

### 3.4 `css/components.css`
Houses self-contained BEM component blocks:
- Header & Navigation (`.c-header`, `.c-nav`, `.c-nav-drawer`)
- Buttons (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--primary-blue`, `.btn--destructive`)
- Cards (`.c-card`, `.c-card--feature`, `.c-card--dark`, `.c-card--outline`)
- Code Window Mockups (`.c-code-window`)
- Interactive Simulation Cards (`.c-demo-card`, `.c-waveform`)
- Domain Tabs (`.c-tabs`, `.c-tab-btn`, `.c-tab-panel`)
- Accordion (`.c-accordion`, `.c-accordion__header`, `.c-accordion__body`)
- Badges & Pills (`.badge`, `.badge--coral`, `.badge--teal`, `.badge--amber`)
- Forms (`.form-group`, `.form-label`, `.form-input`, `.form-textarea`, `.form-error`)
- Footer (`.c-footer`)

---

## 4. Multi-Page Site Specifications & Page Catalog

### 4.1 Page 1: Master Homepage (`index.html`)
- **Title**: `Therapy Nest — Free, Offline-First Cognitive & Speech Therapy App`
- **Purpose**: Showcase the entire Therapy Nest platform from A to Z with clinical rigor and editorial beauty.
- **Key Sections**:
  1. **Sticky Header**: Logo, Nav links, "Download App" CTA.
  2. **Hero Band**: Serif headline (*"Evidence-based cognitive and speech rehabilitation, accessible to everyone."*), sub-headline, primary APK/Store download buttons, and a live Interactive Clinical Simulator card on the right.
  3. **Problem & Mission Band (Surface Soft)**: Highlighting the global crisis (15M annual strokes, $30/month commercial therapy barriers) and our 100% Free Open-Source commitment.
  4. **The 7 Clinical Domains Grid (Surface Card)**: Interactive 7-tab switcher showcasing Language & Naming, Memory, Attention, Speech (ASR), Reading & Writing, Math & Numeracy, and Auditory Comprehension.
  5. **Offline-First & On-Device AI Showcase (Surface Dark)**: Explaining how Vosk on-device speech processing protects privacy and works on 2GB RAM budget Android phones with zero internet.
  6. **The Adaptive IRT Engine Band (Canvas)**: Explaining the Elo $\rightarrow$ 2PL Item Response Theory mathematical foundation.
  7. **Milestones & Recovery Tracking (Surface Soft)**: Visualizing functional landmarks and recovery trajectories.
  8. **Callout CTA Band (Warm Coral)**: *"Start your recovery practice today — 100% free, forever."*
  9. **Global Footer (Surface Dark)**.

---

### 4.2 Page 2: Privacy Policy (`privacy.html`)
- **Title**: `Privacy Policy — Therapy Nest`
- **Purpose**: Legally sound, compliant with Google Play Health Apps Declaration, GDPR, CCPA, and COPPA.
- **Key Clauses**:
  - **1. Zero Cloud Audio Policy**: Vosk ASR processes all microphone audio strictly on-device in volatile memory. No voice data or recordings are ever transmitted to or stored on our servers.
  - **2. What Data We Collect**: Account email, optional profile preferences (conditions, goals), and numerical session accuracy/$\theta$ scores.
  - **3. What We Never Do**: No third-party ad networks, no data selling, no tracking pixels.
  - **4. Data Storage & Security**: Supabase PostgreSQL with Row Level Security (RLS) and AES-256 encryption at rest.
  - **5. User Rights & Account Deletion**: Clear step-by-step instructions on how users can export their data or trigger permanent account deletion inside the app or via support email.
  - **6. Children's Privacy (COPPA)**: Clarifying 18+ adult recovery target audience and parental consent safeguards.

---

### 4.3 Page 3: Terms of Service & Medical Disclaimer (`terms.html`)
- **Title**: `Terms of Service & Medical Disclaimer — Therapy Nest`
- **Purpose**: Legal terms of use and clinical liability boundaries.
- **Key Clauses**:
  - **1. Clinical Position & Medical Disclaimer**: Explicit declaration that Therapy Nest is a **self-guided practice companion** designed to supplement therapy, not a medical diagnostic device or direct clinical prescription.
  - **2. Emergency Care Notice**: Clear statement that Therapy Nest is not for acute medical emergencies.
  - **3. Open Source MIT License Terms**: Clarifying software usage rights and limitations of liability.
  - **4. User Conduct & Responsible Use**: Guidelines for patient and caregiver interaction.
  - **5. Modifications to Service**: Policy regarding software updates and offline database caches.

---

### 4.4 Page 4: Help Center & Support (`support.html`)
- **Title**: `Help Center & Support — Therapy Nest`
- **Purpose**: User guide, troubleshooting, comprehensive FAQ accordion, and direct contact form.
- **Key Sections**:
  - **1. Quick Start Guides**: How to complete the Baseline Assessment, set practice schedules, and download offline exercise packs.
  - **2. Interactive FAQ Accordion**:
    - *How does the offline mode work?*
    - *Why is Therapy Nest completely free?*
    - *How does speech recognition work without sending audio to the cloud?*
    - *Can my speech-language pathologist (SLP) view my progress?*
    - *How do I adjust font sizes or turn on High Contrast Mode?*
    - *How do I delete my account and data?*
  - **3. Interactive Contact Form**: Accessible form with client-side validation (Name, Email, Category, Message) and instant feedback.
  - **4. Direct Support Email & GitHub Issue Tracker links**.

---

### 4.5 Page 5: Open Source & Third-Party Licenses (`licenses.html`)
- **Title**: `Open Source & Licenses — Therapy Nest`
- **Purpose**: Academic and open-source transparency, acknowledging core libraries and datasets.
- **Key Sections**:
  - **1. Therapy Nest MIT License Text**.
  - **2. Core Open Source Technologies**:
    - Vosk Offline Speech Recognition (Apache 2.0)
    - Flutter & Dart (BSD-3-Clause)
    - Drift SQLite Database (MIT)
    - Supabase (Apache 2.0 / PostgreSQL)
    - FastAPI & Python (MIT / BSD)
    - Piper TTS & Silero VAD (MIT)
  - **3. Clinical Dataset & Academic Acknowledgments**:
    - Western Aphasia Battery–Revised (WAB-R) clinical framework
    - OpenImages Dataset (CC-BY-4.0)
    - AphasiaBank & TalkBank research acknowledgment

---

### 4.6 Page 6: Clinical Science & Research Whitepaper (`research.html`)
- **Title**: `Clinical Science & IRT Adaptive Engine — Therapy Nest`
- **Purpose**: Academic credibility, publishable overview for JMIR (Journal of Medical Internet Research).
- **Key Sections**:
  - **1. Abstract & Clinical Background**: Neuroplasticity principles in stroke & aphasia rehabilitation.
  - **2. 2-Parameter Logistic (2PL) Item Response Theory (IRT) Math**:
    $$P_i(\theta) = \frac{1}{1 + e^{-1.702 \cdot a_i (\theta - b_i)}}$$
    - Explanation of $\theta$ (patient ability), $b_i$ (item difficulty), and $a_i$ (discrimination).
  - **3. Elo-Style Real-Time Calibration Formula**:
    $$\theta_{\text{new}} = \theta_{\text{old}} + K \cdot (\text{Outcome} - \text{Expected})$$
  - **4. Cueing Hierarchy & Clinical Scoring**: Level 0 (independent) to Level 4 (full model).
  - **5. On-Device Edge Computing Architecture Diagram**.

---

## 5. Modern Vanilla JavaScript Engineering

All JavaScript in `js/` follows modern ES6+ standards, zero dependencies, and event delegation patterns.

### 5.1 Main Controller (`js/main.js`)
Handles:
1. **Header Scroll State**: Adds `.c-header--scrolled` class when scroll position $> 20px$.
2. **Accessible Mobile Navigation Drawer**:
   - Toggles `.c-nav-drawer--open` on hamburger click.
   - Updates `aria-expanded="true/false"`.
   - Traps Tab key focus inside the drawer when open.
   - Closes automatically on `Escape` key press or link click.
3. **Smooth In-Page Scrolling**: For hash links with proper offset compensation for the fixed header.

### 5.2 Interactive Simulation & Waveform Demo (`js/interactive-demo.js`)
Handles:
1. **Therapy Domain Tab Switcher**: Switches active panel with `aria-selected` and smooth fade transition.
2. **ASR Waveform Animation**: Pure JavaScript Canvas API or CSS keyframes visualizer simulating on-device speech processing.
3. **Interactive IRT Ability Slider**: Lets visitors drag an ability score ($\theta$) to see how recommended exercises adapt in real-time.

### 5.3 Accessible Accordion (`js/accordion.js`)
Handles:
1. Multi-panel or single-panel accordion behavior on `/support.html`.
2. Keyboard support: Up/Down arrow key navigation between accordion triggers.

---

## 6. Vercel & GitHub Pages Deployment Guide

### 6.1 Vercel Configuration (`vercel.json`)
```json
{
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 6.2 Deployment Command via Git
1. Initialize repository inside `Website Development/Website/`.
2. Push to GitHub (`main` branch).
3. Connect repository in [Vercel Dashboard](https://vercel.com) $\rightarrow$ select Root Directory as `./` $\rightarrow$ Click **Deploy**.
4. Output: `https://therapy-nest.vercel.app` (or custom domain).

---

## 7. Quality Assurance & Anti-Vibecoding Checklist

Before shipping any web page, verify every item:

| Check | Requirement | Verification Method |
|---|---|---|
| **Design Fidelity** | Background is warm cream `#FAF9F5`; headlines are serif regular with negative letter-spacing. | Visual review against `design-web.md` |
| **Token Integrity** | Zero hardcoded inline hex codes or arbitrary pixel margins in CSS. | Search codebase for `#` outside `tokens.css` |
| **Contrast Ratio** | Text-to-background contrast $\ge 4.5:1$ across all cards and buttons. | Chrome DevTools Lighthouse Audit |
| **Mobile Drawer** | Menu opens smoothly, traps keyboard focus, closes on `ESC`. | Manual keyboard navigation test |
| **Touch Targets** | All buttons and links have $\ge 48\text{px} \times 48\text{px}$ tappable area. | Mobile responsive viewport test |
| **Form UX** | Inputs show clear labels, active blue focus ring, and validation messages. | Manual form submission test |
| **No Console Errors** | Zero JavaScript errors or unhandled exceptions in browser console. | Inspect console |
| **Clean URLs** | Pages link seamlessly (`/privacy`, `/terms`, `/support`, `/licenses`, `/research`). | Link verification |
