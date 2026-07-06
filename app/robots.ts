import type { MetadataRoute } from "next";

// Required: set NEXT_PUBLIC_SITE_URL in Netlify env vars before production launch.
// Guard only fails on an actual deployment platform (Netlify sets NETLIFY=true; CI covers
// other CI runners) — a plain local `next build` verification still needs to work without
// that var set, so it falls back to localhost there instead of throwing.
const isDeployedBuild = process.env.NETLIFY === "true" || process.env.CI === "true";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (isDeployedBuild
    ? (() => { throw new Error("NEXT_PUBLIC_SITE_URL must be set in production deployments"); })()
    : "http://localhost:3000");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
