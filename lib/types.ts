export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  bookingUrl: string;
  email: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PackageTier {
  id: string;
  name: string;
  startingPrice: string;
  tagline: string;
  bullets: string[];
  ctaLabel: string;
  popular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  clientType: string;
  description: string;
  tags: string[];
  imageUrl: string | null;
  liveUrl: string | null;
  detailsUrl: string | null;
  comingSoon?: boolean;
}

export interface Social {
  platform: string;
  label: string;
  url: string;
  icon: string;
}
