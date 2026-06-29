import type { MetadataRoute } from "next";

// Required: set NEXT_PUBLIC_SITE_URL in Netlify env vars before production launch
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "production"
    ? (() => { throw new Error("NEXT_PUBLIC_SITE_URL must be set in production"); })()
    : "http://localhost:3000");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
