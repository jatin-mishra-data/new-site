import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Required: set NEXT_PUBLIC_SITE_URL in Netlify env vars before production launch
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "production"
    ? (() => { throw new Error("NEXT_PUBLIC_SITE_URL must be set in production"); })()
    : "http://localhost:3000");

const META_TITLE = "Jatin Mishra - Freelance Website & Business Consulting";
const META_DESC =
  "Lead generation landing page for Jatin Mishra's freelance and business-consulting services.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: META_TITLE,
  description: META_DESC,
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: "/",
    siteName: "Jatin Mishra",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jatin Mishra - Freelance Website & Business Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jatin Mishra",
    url: SITE_URL,
    description: META_DESC,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jatin Mishra",
    url: SITE_URL,
    jobTitle: "Freelance Website Developer & Business Consultant",
    description: META_DESC,
    // GitHub and X are placeholder — omitted until confirmed
    sameAs: ["https://linkedin.com/in/jatin-mishra-795218192"],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--bg-elevated)] focus:text-[var(--text-primary)] focus:border focus:border-[var(--accent-1)] focus:rounded-[var(--radius-btn)] focus:text-sm focus:font-medium focus:outline-none"
        >
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
