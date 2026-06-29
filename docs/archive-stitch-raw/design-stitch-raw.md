# StrategicAI — UI/UX Specification (design.md)

This document serves as the UI source of truth for the StrategicAI portfolio website. It defines the visual philosophy, design tokens, component patterns, and structural rules used across the platform.

---

## 1. Overall Visual Philosophy
**"Strategic Precision meets AI Velocity"**
The design bridges high-level corporate risk analytics (Bank of America heritage) with cutting-edge AI execution. It is authoritative, trustworthy, and technologically advanced. The aesthetic is clean, data-driven, and "executive" in feel, utilizing deep colors and subtle glassmorphism to convey transparency and depth.

---

## 2. Design Language & Tokens

### Color Palette
- **Surface**: `#f8f9ff` (Pure, clean base)
- **Primary (Strategic Navy)**: `#0a192f` (Depth, authority)
- **Secondary (Execution Green)**: `#00695c` (Growth, action)
- **Accent (AI Cyan)**: `#00bcd4` (Innovation, technology)
- **Outline/Border**: `rgba(10, 25, 47, 0.1)`
- **Glass Base**: `rgba(255, 255, 255, 0.7)` with `backdrop-blur: 12px`

### Typography Hierarchy
**Font Family**: Sora (Geometric Sans-Serif)
- **Display**: 64px / 1.1 leading / Bold / -2% tracking
- **Headline (H1)**: 48px / 1.2 leading / Bold
- **Subheadline (H2)**: 32px / 1.3 leading / Semi-Bold
- **Section Title (H3)**: 24px / 1.4 leading / Semi-Bold
- **Body Large**: 18px / 1.6 leading / Regular
- **Body Default**: 16px / 1.6 leading / Regular
- **Label/Caps**: 12px / 1.0 leading / Bold / Uppercase / +5% tracking

### Spacing & Grid
- **Grid**: 12-column Desktop (1200px max-container) | 1-column Mobile.
- **Gutter**: 24px (base).
- **Stacking (Vertical)**: 
  - `stack-lg`: 120px (between sections)
  - `stack-md`: 64px (between components)
  - `stack-sm`: 32px (between elements)
- **Border Radius**: `ROUND_FOUR` (4px) for a sharp, professional finish.

---

## 3. Component Library

### Navigation (TopNavBar)
- **Style**: Fixed, glassmorphic backdrop.
- **Logo**: "StrategicAI" in font-headline-md, weight-bold.
- **Links**: Sora 14px, Uppercase. Active state uses Secondary Green underline.
- **CTA**: Primary action button ("Book a Call").

### Cards
- **Container**: White surface with 1px border (`rgba(0,0,0,0.05)`).
- **Shadow**: `shadow-sm` (Soft, barely visible elevation).
- **Hover**: Scale 1.02, border-color shifts to Primary Navy.

### Buttons
- **Primary**: Solid Execution Green, White text, 4px radius.
- **Secondary**: Outlined Primary Navy, 1px stroke.
- **Ghost**: Text-only with arrow icon.

### Forms & Inputs
- **Inputs**: 48px height, light gray fill, 1px border. Focus state: 2px Emerald border.
- **Validation**: Emerald for success, Crimson for errors.

---

## 4. Section-by-Section Breakdown

### Hero Composition
- **Left**: Split-text layout. H1 with "AI-Assisted" highlighted in Accent Cyan.
- **Right**: Data-visualization widget or abstract 3D geometry representing "Risk vs Reward."
- **Background**: Subtle noise texture or low-opacity grid pattern.

### Services Layout
- **Structure**: 3-column grid.
- **Icons**: Minimalist line art (Tier 2 SVG).
- **Content**: Bold H3 + short paragraph + bullet points of "Key Outcomes."

### Work / Portfolio Section
- **Format**: Case Study cards.
- **Logic**: "The Problem" → "The Solution" → "The Result" (Metric-driven results).
- **Visuals**: Clean high-res mockups of the websites built.

### Contact Section
- **Two-Column**: 
  - **Left**: Content-heavy (Booking calendar/Response time promise).
  - **Right**: Clean inquiry form.

---

## 5. Motion & Animation Rules

- **Entrance**: Fade-in with 20px Y-offset (duration 600ms, ease-out).
- **Interactions**: Button hover transitions (200ms).
- **Ambient**: Subtle gradient shifts in hero background (Tier 1 CSS).
- **Scroll**: IntersectionObserver triggers reveal animations on section entry.

---

## 6. Accessibility & Implementation Standards

- **Contrast**: Maintain AA standards (4.5:1) for all body text.
- **Interactivity**: Keyboard focus rings visible on all buttons/inputs.
- **Imagery**: No generic stock photos; use "High-Fidelity" UI mockups or professional environmental shots of clinics/hospitality if needed.
- **Empty States**: Use "No projects yet — let's build yours" with a direct CTA.
