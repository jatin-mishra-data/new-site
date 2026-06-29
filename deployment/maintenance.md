# Maintenance Guide

How to make common changes to the site after launch.

---

## Updating the Booking URL

The booking CTA ("Book a Free Call") links to `siteConfig.bookingUrl` in `data/site.ts`.

```ts
// data/site.ts
bookingUrl: "https://cal.com/jatinmishra/free-call",  // update this
```

Change this value to the current Calendly or Cal.com link.  
All booking CTAs across the site (homepage, /solutions, hero, packages section) automatically use this value.

After editing: commit, push — Netlify auto-deploys.

---

## Updating Contact Email

The email address appears in the nav "Email Me" button and is used by Formspree notifications.

```ts
// data/site.ts
email: "jatinmsd07@gmail.com",  // update this
```

If the email changes, also update the Formspree form destination email in the Formspree dashboard.

---

## Adding or Updating Work/Portfolio Items

Edit `data/projects.ts`. Each item has: title, description, tags, image path, and optional URL.  
Images go in `public/images/work/`.

---

## Updating Services

Edit `data/services.ts` for the Services section.

---

## Updating the Hero Copy

Edit `components/sections/Hero.tsx`.  
Trust points (credential chips below the CTAs) are in the `trustPoints` array at the top of the file.  
Only state résumé-verified facts — never invent metrics.

---

## Updating Pricing on /solutions

All package data for `/solutions` is inline in `app/solutions/page.tsx` in the `PACKAGES` constant at the top of the file. All prices are labelled as indicative ranges.

---

## Deploying Changes

Every push to the default branch (`main`) triggers an automatic Netlify deploy.

To deploy manually:
1. Go to the Netlify dashboard → **Deploys** tab.
2. Click **Trigger deploy → Deploy site**.

---

## Updating Environment Variables

If `NEXT_PUBLIC_SITE_URL` or `NEXT_PUBLIC_FORMSPREE_ID` change:
1. Update the value in **Netlify → Site Settings → Environment variables**.
2. Trigger a new deploy — existing deploys use the old baked-in values.

---

## Adding New Pages

1. Create `app/new-page/page.tsx`.
2. Add the new URL to `app/sitemap.ts`.
3. Update `data/site.ts` `navLinks` if it should appear in the nav.
4. Re-submit the sitemap to Google Search Console after deploy.

---

## Updating Images

Images live in `public/images/`.  
Preferred format: `.webp` (AVIF also accepted — Next.js serves the best format the browser supports).  
Recommended max width: 1600px for hero images, 800px for card/section images.

After replacing an image with the same filename: push to trigger a deploy. Netlify's CDN cache will update automatically.

---

## Analytics

No analytics tool is currently installed (Phase 1 decision).  
When adding analytics:
- Prefer a privacy-respecting tool (e.g. Plausible, Fathom, or Vercel Analytics).
- If using a third-party script, add its domain to the `connect-src` directive in `next.config.ts` CSP.
- If using a `<script>` tag from an external CDN, add that domain to `script-src` in `next.config.ts`.

---

## Node Version

The project requires Node ≥ 20 (enforced in `package.json` `engines` field and `.nvmrc`).  
If the local Node version needs updating: use `nvm use` (the `.nvmrc` file handles the rest).

---

## Backups

- All source code is in Git — the repository is the backup.
- Netlify keeps a full deploy history. Any previous deploy can be restored in under a minute. See [rollback.md](rollback.md).
- No database — no database backups needed.
