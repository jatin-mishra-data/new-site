import type { PackageTier } from "@/lib/types";

// Prices are starting-point placeholders — final quote is always given after a free call.
export const packages: PackageTier[] = [
  {
    id: "starter-site",
    name: "Starter Site",
    startingPrice: "Quote after free call",
    tagline: "Clean single or few-page website, launched without the wait.",
    bullets: [
      "Clean single / few-page website",
      "Mobile-first and fast",
      "Contact / enquiry form",
    ],
    ctaLabel: "Book a Free Call",
    popular: false,
  },
  {
    id: "growth-site",
    name: "Growth Site",
    startingPrice: "Quote after free call",
    tagline: "A more complete online presence for businesses ready to grow.",
    bullets: [
      "Multi-section website",
      "1 SaaS integration (booking / payments / enquiry)",
      "Basic SEO setup",
    ],
    ctaLabel: "Book a Free Call",
    popular: true,
  },
  {
    id: "business-strategy",
    name: "Business + Strategy",
    startingPrice: "Custom quote",
    tagline: "For complex builds, platforms, or ongoing advisory partnership.",
    bullets: [
      "Everything in Growth",
      "Financial / market analysis",
      "Advisory call",
    ],
    ctaLabel: "Book a Free Call",
    popular: false,
  },
];
