import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  // Next.js requires unsafe-inline for RSC payloads and inline hydration scripts;
  // unsafe-eval is included for compatibility with Next.js dev/build internals.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  // data: for SVG grain texture data URI; blob: for Next.js image internals
  "img-src 'self' data: blob:",
  // next/font self-hosts Google Fonts at build time — no external font CDN needed
  "font-src 'self'",
  // Contact form posts to the same origin (Netlify Forms)
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options",       value: "nosniff" },
  { key: "X-Frame-Options",              value: "DENY" },
  { key: "Referrer-Policy",              value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",           value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // HSTS only makes sense once the site is actually served over HTTPS in production —
  // sending it during local dev (http://localhost) has no effect but is misleading.
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]
    : []),
  { key: "Content-Security-Policy",      value: csp },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
