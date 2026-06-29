---
name: Executive Tech Narrative
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#44474d'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  accent-serif:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality is a fusion of established executive consulting and cutting-edge digital execution. It targets high-value clients and businesses seeking both strategic growth and technical excellence. The UI must evoke an immediate sense of reliability, precision, and "future-proof" innovation.

The design style follows a **Corporate / Modern** framework with **Tech-Innovation** accents. This is achieved through a high-fidelity interface characterized by ample white space, a disciplined grid, and subtle glassmorphism in interactive elements to signal modern technical capability. The aesthetic is clean and structured, removing unnecessary ornamentation to focus on data, results, and conversion.

## Colors

The palette is anchored by **Deep Navy (#0A192F)**, used for primary surfaces, headings, and foundational elements to establish trust and authority. **Emerald Green (#10B981)** serves as the "Growth" catalyst, reserved for high-impact CTAs, success states, and progress indicators. 

**Crisp White (#FFFFFF)** is the primary background color to maintain a "High-Fidelity" feel, while **Slate Grey (#475569)** provides nuanced secondary text and UI borders. Use Emerald sparingly but intentionally to guide the user's eye toward conversion points and data-informed wins.

## Typography

This design system utilizes a tiered typographic approach. **Sora** is the voice of technology—used for headlines to communicate innovation and geometric precision. **Inter** is the workhorse for body copy and UI labels, ensuring maximum readability and a neutral, professional tone.

**Playfair Display** is used as an "Authority Accent." It should be applied to blockquotes, specific sub-headers, or localized text fragments (like "Strategy First") to inject the feeling of a bespoke, high-end consultancy. Avoid using the serif for long-form reading; it is a stylistic marker of quality.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (12 columns, 1280px max-width) to maintain a controlled, structured environment. On mobile, the grid transitions to a 4-column fluid layout.

Spacing is generous to promote a premium feel. Large vertical gaps (`section-gap-desktop`) separate major service areas, preventing cognitive overload. Information density should be low for marketing sections but increases within "Service Cards" and "Data Tables" to reflect professional efficiency.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 
1. **The Base:** Background is always White or the lightest Tertiary Grey.
2. **The Surface:** Cards and containers use a very subtle 1px border (#E2E8F0) and a soft, diffused shadow (0px 4px 20px rgba(10, 25, 47, 0.05)).
3. **The Tech Layer:** Interactive elements may use a backdrop-blur (12px) with 80% opacity to suggest a "Glassmorphic" digital overlay, specifically for navigation bars or floating action buttons.

Depth should feel shallow and sophisticated, not heavy or floating. Elements should appear to sit "on" the page, not hover far above it.

## Shapes

The design system adopts a **Soft (0.25rem)** roundedness approach. This maintains a "Corporate" edge—sharp enough to feel serious and professional—while the slight rounding prevents the UI from feeling dated or overly aggressive. 

Large-scale components like hero images or service cards may use `rounded-lg` (0.5rem) to soften the overall visual impact, but interactive elements like buttons and inputs must remain crisp at the base rounding level.

## Components

### Lead-Generation CTAs
Primary buttons use the Emerald Green background with White text, utilizing the `label-caps` typography style. They should feature a subtle hover transition that increases the saturation of the green and adds a slight 2px vertical lift.

### Professional Service Cards
Cards are the primary vehicle for service offerings. They feature a white background, a 1px Slate border, and a 24px internal padding. The "Emerald Green" should be used for a small icon or a left-hand accent border to signify growth. Use `headline-sm` for card titles and `body-md` for descriptions.

### Input Fields & Forms
Fields are designed for high conversion: minimal borders, clear `Inter` labels, and a focus state that utilizes a 2px Deep Navy border. Success messages should use Emerald Green text.

### Data Visualizations
Charts and graphs should use the Deep Navy for the primary axis and Emerald Green for the "Trend Line" or "Growth Bar" to visually tie execution to results.