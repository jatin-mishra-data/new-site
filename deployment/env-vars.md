# Environment Variables

The application requires exactly one environment variable at build time.  
It is a `NEXT_PUBLIC_*` var — inlined into the client bundle at build.  
**Never put secrets or API keys in `NEXT_PUBLIC_*` variables.**

---

## Variables

### `NEXT_PUBLIC_SITE_URL`

| Property | Value |
|----------|-------|
| Required | **Yes — build fails without it in production** |
| Example | `https://jatinmishra.com` |
| Used for | `metadataBase`, canonical URL, Open Graph `url`, sitemap entries, JSON-LD `url`, `robots.txt` sitemap pointer |

**Rules:**
- Must include the `https://` scheme.
- Must NOT have a trailing slash.
- Must be the final production domain (not a preview URL).
- Do not set this to a Netlify preview URL — it will corrupt all canonical and OG tags.

---

## Where to Set It

### Local development

Copy `.env.example` to `.env.local` and fill in the value:

```bash
# Windows
copy .env.example .env.local

# macOS/Linux
cp .env.example .env.local
```

`.env.local` is git-ignored and never committed.

### Netlify production

Set via **Site Settings → Environment variables → Add variable** in the Netlify dashboard.  
This variable must be set before triggering the first production deploy.

> Netlify re-builds are required after changing environment variable values.
> Existing deploys use the values from when they were built — changing a variable does not update a live deploy automatically.

---

## Build-Time Guard

If `NEXT_PUBLIC_SITE_URL` is missing in a production build (`NODE_ENV=production`),
the build throws:

```
Error: NEXT_PUBLIC_SITE_URL must be set in production
```

This is intentional. It prevents the site from shipping `example.com` or `localhost:3000`
as the canonical URL, which would damage SEO.

In local development (`NODE_ENV=development`), the fallback is `http://localhost:3000`.

---

## `.env.example` Reference

```dotenv
# Copy to .env.local and fill in your values before launch.
# NEXT_PUBLIC_* vars are inlined at build time — never put secrets here.

# Production domain used for Open Graph metadataBase, e.g. https://jatinmishra.com
NEXT_PUBLIC_SITE_URL=
```
