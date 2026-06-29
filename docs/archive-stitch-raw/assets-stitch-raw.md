# StrategicAI — Asset Specification (assets.md)

This document serves as the visual asset source of truth for the StrategicAI portfolio website. It lists all required imagery, logos, icons, and graphics based on the existing screens and brand identity.

---

## 1. Core Brand Assets

| Asset Name | Description | Recommended Dimensions | Format | Naming Convention |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Logo** | "StrategicAI" wordmark in Sora Bold. Strategic Navy (`#0a192f`). | 200x48px (aspect) | SVG | `logo-primary.svg` |
| **Favicon** | Geometric "S" icon using Execution Green (`#00695c`) and AI Cyan (`#00bcd4`). | 32x32px / 48x48px | ICO / PNG | `favicon.png` |
| **Social Avatar** | Square version of the brand mark for LinkedIn/Twitter. | 400x400px | PNG / JPG | `brand-avatar.png` |
| **Open Graph (OG)** | Brand banner with headline for social sharing. | 1200x630px | JPG | `og-image-main.jpg` |

---

## 2. Page-Specific Imagery

### Homepage
- **Hero Visualization**: Abstract 3D geometry or data-visualization widget representing "Risk vs. Reward." Professional, high-tech, subtle glassmorphism.
  - *Dimensions*: ~800x600px | *Format*: PNG (Transparent) | *Name*: `hero-strategic-viz.png`
- **Background Grid**: Subtle technical grid pattern for the Hero background (low opacity).
  - *Dimensions*: 1920x1080px | *Format*: SVG / PNG | *Name*: `bg-grid-pattern.svg`

### Services Page
- **Service Icons**: A set of 3 minimalist line-art icons.
  - **Icon 1**: Website Development (Code/Browser).
  - **Icon 2**: Business Consulting (Strategic Chart/Nodes).
  - **Icon 3**: AI Automation (Robot/Circuit).
  - *Dimensions*: 64x64px | *Format*: SVG | *Names*: `icon-web-dev.svg`, `icon-consulting.svg`, `icon-ai-automation.svg`

### Work / Portfolio Page
- **Case Study Mockups**: High-fidelity project screenshots inside device frames (Desktop/Mobile).
  - **Mockup 1**: Boutique Hotel Booking Flow.
  - **Mocku 2**: Private Clinic Patient Portal.
  - **Mockup 3**: E-Commerce Headless Frontend.
  - **Mockup 4**: Financial Services Dashboard.
  - *Dimensions*: 1200x800px | *Format*: JPG (High Quality) | *Names*: `work-hotel-mockup.jpg`, `work-clinic-mockup.jpg`, etc.

---

## 3. Supplementary Graphics & UI Elements

- **Portrait**: Professional headshot of the founder (executive tech style).
  - *Dimensions*: 800x800px | *Format*: JPG | *Name*: `portrait-founder.jpg`
- **Trust Strip Badges**: Small "Risk Analyzed" or "AI-Verified" badges.
  - *Dimensions*: 120x40px | *Format*: SVG | *Name*: `badge-risk-analyzed.svg`
- **Section Dividers**: Subtle noise textures or gradient overlays used between stack-lg sections.
  - *Format*: CSS / SVG | *Name*: `bg-section-texture.svg`

---

## 4. Assets Still Missing / Needed

1.  **Custom Data Visualization**: A bespoke graphic showing the "Bank of America Risk Heritage" link to "AI Speed."
2.  **Testimonial Avatars**: Placeholder or real client headshots for future social proof.
3.  **Process Diagram**: A 4-step sequence icon set (Discovery → Design → Build → Optimize).

---

## 5. Implementation Standards

- **Compression**: All JPG/PNG assets must be ran through TinyPNG or equivalent to maintain performance.
- **Retina Support**: Provide `@2x` versions for all raster images.
- **SVG Optimization**: Run all SVGs through SVGO to remove metadata and minimize file size.
- **Alt Text**: Every asset must have descriptive alt text defined in the `content.md` or implementation code.
