import type { SiteConfig, NavLink } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Jatin Mishra",
  tagline: "I build websites that get results, not just ones that look good.",
  description:
    "Freelance web development and business consulting. I help businesses grow by building fast, polished websites and fixing the strategy behind them.",
  bookingUrl: "/#contact", // replace with Calendly/Cal.com URL before launch
  email: "jatinmsd07@gmail.com",
};

export const navLinks: NavLink[] = [
  { label: "Services",  href: "#services"  },
  { label: "Process",   href: "#process"   },
  { label: "Work",      href: "#work"      },
  { label: "Solutions", href: "#solutions" },
  { label: "About",     href: "#about"     },
  { label: "Contact",   href: "#contact"   },
];
