export type NavLink = {
  label: string;
  /** Page path ("/blog") or a section on the home page ("/#harga"). */
  href: `/${string}`;
};

export type NavMenuItem = NavLink & { description: string };

/** Top-level header entry: a page link, or a dropdown of home-page sections. */
export type NavItem = NavLink | { label: string; items: NavMenuItem[] };

export type Service = {
  title: string;
  summary: string;
  deliverables: string[];
  /** Featured services get a large card with artwork and link to their page. */
  featured?: boolean;
  href?: `/${string}`;
};

export type Accent = "ink" | "lazuardi" | "coral" | "graphite";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  services: string[];
  accent: Accent;
  challenge: string;
  solution: string;
  features: string[];
  /** What the project is designed to achieve. Not measured results. */
  goals: string[];
  /** Optional screenshot in /public. Without one, a generated cover is shown. */
  image?: { src: string; alt: string };
  /** Marks sample work that should be replaced with a real case study. */
  isPlaceholder?: boolean;
};

export type ProcessStep = {
  title: string;
  summary: string;
  outcome: string;
};

export type PricingTier = {
  id: string;
  name: string;
  approach: string;
  audience: string;
  /** Display string, e.g. "From $1,500". Use null for quote-based tiers. */
  price: string | null;
  priceNote: string;
  features: string[];
  cta: string;
  recommended?: boolean;
};

export type Principle = {
  title: string;
  body: string;
  icon: "spark" | "clipboard" | "search" | "key";
  action: { label: string; href: `/${string}` };
};

export type Faq = {
  question: string;
  answer: string;
};

export type Tool = {
  name: string;
  /** Short mark shown inside the badge. */
  mark: string;
};

/**
 * Article body blocks. Paragraph and list text supports **bold** and
 * [links](/path) inline.
 */
export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  /** Used as the meta description and card summary. */
  excerpt: string;
  category: string;
  accent: Accent;
  /** ISO date, e.g. "2026-11-01". */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  body: PostBlock[];
};

export type Value = {
  title: string;
  body: string;
  icon: "spark" | "clipboard" | "search" | "key";
};

export type TeamMember = {
  name: string;
  role: string;
  /** Optional portrait in /public. Without one, initials are shown. */
  photo?: { src: string; alt: string };
  isPlaceholder?: boolean;
};

export type ServicePage = {
  slug: string;
  /** Short name used in menus and cards. */
  name: string;
  /** Page H1, written around the search term people use. */
  title: string;
  /** Under 60 characters so Google shows it in full. */
  metaTitle: string;
  description: string;
  accent: Accent;
  intro: string;
  audience: string[];
  includes: { title: string; body: string }[];
  /** Pricing tier id this service usually maps to. */
  tierId: string;
  relatedProjects: string[];
  relatedPosts: string[];
  faqs: Faq[];
};
