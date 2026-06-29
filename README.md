# Jatin Mishra — Freelance Website

Personal freelance and business-consulting landing page built for lead generation.

## Tech stack

- Next.js 16 (App Router) · TypeScript · Tailwind CSS 4
- Static CSS/SVG hero — no Three.js or WebGL

## Prerequisites

- Node 20 (`nvm use` if you have nvm)

## Local development

```bash
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
```

Edit `.env.local` and fill in:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production domain, e.g. `https://jatinmishra.com` |
| `NEXT_PUBLIC_FORMSPREE_ID` | Your Formspree form ID (the part after `/f/`) |

```bash
npm run dev   # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Netlify deployment

1. Connect the repo in Netlify.
2. Build command: `npm run build` — Publish directory: `.next`
3. Add environment variables in **Site Settings → Environment variables**:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_FORMSPREE_ID`
4. Redeploy after adding env vars.

---

Phase 1 — single landing page.
