# Netlify Deployment Guide

This project is configured for Netlify. The build output uses the Next.js runtime adapter.

---

## Prerequisites

- A Netlify account at [netlify.com](https://netlify.com)
- The repository pushed to GitHub (or GitLab / Bitbucket)
- `NEXT_PUBLIC_SITE_URL` ready (see [env-vars.md](env-vars.md))

---

## Step 1 — Connect the Repository

1. Log in to Netlify.
2. Click **Add new site → Import an existing project**.
3. Choose your Git provider and authorise Netlify.
4. Select the repository for this project.

---

## Step 2 — Configure Build Settings

Set the following in the **Build & Deploy** settings:

| Setting | Value |
|---------|-------|
| Base directory | *(leave blank — project root)* |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | `20` |

> To set Node version: go to **Site Settings → Build & Deploy → Environment → Node.js version**
> and enter `20`. Alternatively, Netlify respects the `.nvmrc` file in the root which already specifies `20`.

---

## Step 3 — Add Environment Variables

Before deploying, add the required variable:

1. Go to **Site Settings → Environment variables**.
2. Click **Add variable** and add:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` (the real production domain) |

> Do not use a Netlify preview URL for `NEXT_PUBLIC_SITE_URL`. Use only the final custom domain.

---

## Step 4 — Enable Netlify Forms

The contact form uses Netlify Forms. After the first successful deploy:

1. Go to **Site → Forms** in the Netlify dashboard.
2. Confirm a form named **contact** appears in the list.
3. Click the form to configure notifications:
   - Go to **Form notifications → Add notification → Email notification**.
   - Set the notification email to `jatinmsd07@gmail.com`.
4. Test by submitting the contact form on the live site once.
5. Confirm the submission appears under **Forms → contact** in the dashboard.
6. Confirm the email notification arrives at `jatinmsd07@gmail.com`.

> Netlify Forms detects the form automatically from the rendered HTML at build time.
> No additional configuration or plugin is required.

---

## Step 5 — Deploy

1. Click **Deploy site** (or trigger a deploy from the Deploys tab).
2. Watch the build log for errors.
3. A successful deploy shows a green status and a Netlify preview URL.

---

## Step 6 — Add a Custom Domain

See [domain-dns.md](domain-dns.md) for setting up a custom domain after the initial deploy succeeds.

---

## Continuous Deployment

Netlify auto-deploys on every push to the default branch (usually `main`).  
To disable auto-deploy temporarily: **Site Settings → Build & Deploy → Continuous deployment → Stop auto publishing**.

---

## Deploy Previews

Every pull request gets a unique preview URL. These previews use the env vars set in the Netlify dashboard, so `NEXT_PUBLIC_SITE_URL` in previews will point to the production domain. This is expected — preview URLs are for visual review, not canonical SEO testing.

---

## Plugin Note

This project does **not** use the `@netlify/plugin-nextjs` plugin explicitly — Netlify auto-detects Next.js and applies the correct adapter. If a `netlify.toml` is added in future, ensure it does not override the build settings above.

---

## Build Time

A cold build takes approximately 60–120 seconds. Subsequent builds use Netlify's cache and are faster.

---

## Checking a Deploy

After deploy:
- Visit the Netlify preview URL (shown in the deploy log).
- Check `/sitemap.xml` and `/robots.txt` return valid content.
- Submit the contact form once and confirm it appears in the Netlify Forms dashboard.

See [post-launch-validation.md](post-launch-validation.md) for the full validation checklist.
