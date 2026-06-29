# Rollback Guide

Netlify keeps a full history of every deploy. Rolling back is instant and does not require a code change.

---

## When to Roll Back

- A deploy caused a visible regression (broken layout, broken form, 500 errors).
- A bad env var change corrupted the production site.
- A content change needs to be reverted immediately before a code fix is ready.

---

## Rollback Steps

1. Log in to [netlify.com](https://netlify.com) and open the site.
2. Go to **Deploys** in the left sidebar.
3. Find the last known-good deploy (look at the timestamp and deploy message).
4. Click on that deploy.
5. Click **Publish deploy** (top-right of the deploy detail page).
6. Confirm. The production URL switches to that build within seconds.

This does not delete any deploys — it just changes which build is served at the production URL.

---

## Verifying the Rollback

After publishing the previous deploy:
- Visit the production URL and confirm the regression is gone.
- Check `/sitemap.xml` and the contact form.
- Note the deploy hash shown in the Netlify dashboard in case it needs to be referenced.

---

## After Rolling Back

Fix the issue in code, commit, and push. The new commit triggers a fresh deploy that replaces the rolled-back version once it succeeds.

Do not leave the site on a rolled-back deploy for longer than necessary — rolled-back deploys may use stale env var snapshots from build time.

---

## Environment Variable Rollback

Netlify does not store a history of env var changes. If a bad env var is set:
1. Go to **Site Settings → Environment variables**.
2. Edit the variable to the correct value.
3. Trigger a new deploy (**Deploys → Trigger deploy → Deploy site**).

The previous rolled-back build still has the old var baked in from its build time, so it is unaffected by env var changes — another reason to fix and redeploy quickly.
