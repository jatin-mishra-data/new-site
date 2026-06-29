# Formspree — Legacy Notes

> **Formspree is no longer used.** The contact form now submits via Netlify Forms.
> This file is kept for historical reference only.
> See [netlify.md](netlify.md) for current deployment instructions.

---

## Previous setup (deprecated)

The contact form previously used Formspree with `NEXT_PUBLIC_FORMSPREE_ID`.
That env var is no longer required and has been removed from `.env.example` and all docs.

The form fell back to a `mailto:` link when the env var was not set.
That fallback has also been removed — Netlify Forms handles all submissions.
