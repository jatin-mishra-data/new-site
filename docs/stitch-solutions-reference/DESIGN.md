---
name: Synthetic Intelligence
colors:
  surface: '#0e131f'
  surface-dim: '#0e131f'
  surface-bright: '#343946'
  surface-container-lowest: '#080e1a'
  surface-container-low: '#161c28'
  surface-container: '#1a202c'
  surface-container-high: '#242a36'
  surface-container-highest: '#2f3542'
  on-surface: '#dde2f3'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dde2f3'
  inverse-on-surface: '#2b303d'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#89ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#009ada'
  on-tertiary-container: '#002d43'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#0e131f'
  on-background: '#dde2f3'
  surface-variant: '#2f3542'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-x: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 48px
  section-gap: 120px
---

## Brand & Style

This design system is built for a high-performance, AI-driven professional identity. The brand personality is clinical yet visionary—combining the precision of a business analyst with the cutting-edge capabilities of an autonomous builder. It targets high-tier founders and enterprises looking for efficiency without sacrificing aesthetic excellence.

The visual style is a fusion of **Glassmorphism** and **Corporate Futurism**. It draws heavily from the "Linear" aesthetic: deep blacks, subtle border highlights, and concentrated light sources (glows) that guide the eye toward key interactions. The UI should feel like a premium command center—minimal, high-contrast, and impeccably organized.

**Key Principles:**
- **Depth through Luminosity:** Contrast is created via light and blur rather than heavy color blocks.
- **Intentional Friction:** Every element is placed with analyst-level precision; if it doesn't serve a functional purpose, it is removed.
- **The "Glow" State:** Use radiant gradients to signify AI activity or high-priority calls to action.

## Colors

The palette is anchored in a true-dark environment. The primary background (`#030712`) acts as the "void" from which the interface emerges.

- **Primary & Secondary:** A duo of Indigo and Violet used for interactive states and brand accents. These should never be used as flat backgrounds; instead, apply them as soft glows, radial gradients, or thin strokes.
- **Accents:** A tertiary cyan-blue is reserved for data visualization and success states, maintaining the "analytical" feel.
- **Glass Surfaces:** Surface layers use semi-transparent grays with a heavy backdrop blur (20px+) to create a sense of stacked glass panels.
- **Gradients:** Use linear gradients (top-left to bottom-right) from Primary to Secondary for "High-End" moments.

## Typography

Typography focuses on technical clarity and structural hierarchy. 

- **Headlines:** We use **Geist** for its developer-centric, precise aesthetic. Tight letter spacing on large displays creates a "locked-in" professional look.
- **Body:** **Inter** provides maximum legibility for long-form analysis and documentation.
- **Labels/Data:** **JetBrains Mono** is used for metadata, small labels, and data points to reinforce the "analyst" persona.
- **Scaling:** Large display text should shift to a more condensed leading on mobile to maintain impact without breaking layouts.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous white space (or "dark space") to prevent the UI from feeling cluttered.

- **Grid:** Use a 12-column grid for desktop. Elements should frequently span the center 8 columns to create a focused, editorial flow.
- **Sectioning:** Use large vertical gaps (`120px+`) between major sections to allow the glassmorphic effects and background glows room to breathe.
- **Mobile:** Transition to a 4-column grid. Margins reduce to `16px`, but internal padding within glass cards should remain generous to maintain the premium feel.
- **Alignment:** Strictly align all data labels to the top-left of containers, mirroring a technical dashboard.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Luminous Elevation**.

1.  **Level 0 (Base):** The `#030712` background.
2.  **Level 1 (Panels):** Glass containers with `10%` white opacity, `24px` backdrop blur, and a `1px` border of `rgba(255,255,255,0.1)`.
3.  **Level 2 (Interaction):** Hover states trigger a subtle primary color glow (`#6366f1`) behind the element with a large spread (40px) and low opacity (0.2).
4.  **Level 3 (Floating):** Elements like modals use a "rim light" effect—a slightly brighter top-border to simulate a light source coming from above.

## Shapes

The shape language is **Rounded**, striking a balance between approachable modernism and industrial precision.

- **Standard Containers:** Use `0.5rem` (8px) for buttons and inputs.
- **Large Cards:** Use `1rem` (16px) for main glass panels.
- **Outer Shells:** High-level sections or feature blocks may use `1.5rem` to create a nested, "contained" look.
- **Edge Fading:** Image containers must utilize a `mask-image` linear gradient to fade edges into the background, removing harsh corners and blending visuals into the "void."

## Components

- **Glowing Buttons:** Primary buttons feature a subtle gradient background. On hover, the box-shadow expands into a soft violet glow. Text is always high-contrast white.
- **Glass Panels:** These are the bread and butter of the system. They require a `backdrop-filter: blur(20px)` and a thin, semi-transparent border.
- **Faded Image Containers:** Screenshots and graphics should not have hard edges. Use a radial mask so the center is clear and the edges bleed into the background.
- **Analyst Chips:** Small, monospaced labels (JetBrains Mono) inside pill-shaped containers with a 1px border. Used for categorizing tasks or data types.
- **Futuristic Inputs:** Darker than the background, with a "focus" state that illuminates the bottom border in a primary indigo glow.
- **Data Panels:** Minimalist lists with divider lines at `5%` opacity. Key metrics are highlighted in the tertiary Cyan color.