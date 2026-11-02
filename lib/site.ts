/**
 * Business details used across the site, metadata and structured data.
 * Values marked TODO are placeholders — replace them with real information.
 */
export const siteConfig = {
  name: "Lazulab",
  tagline: "Jasa desain dan pembuatan website",
  description:
    "Lazulab adalah jasa pembuatan website untuk bisnis di Indonesia, mulai dari website WordPress yang cepat hingga pengembangan website custom.",
  // TODO: replace with the real inbox and phone number.
  email: "hello@example.com",
  phone: "+62 000 0000 0000",
  // TODO: replace with real location, or remove.
  location: "Kota, Indonesia",
  // TODO: fill in a real business address to publish LocalBusiness structured data.
  // Leave as null until the address is confirmed: Google penalises invented details.
  address: null as null | {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  },
  // TODO: replace with real profile URLs. Entries with an empty href are hidden.
  social: [
    { label: "LinkedIn", href: "" },
    { label: "GitHub", href: "" },
    { label: "Instagram", href: "" },
  ],
} as const;

export const homeTitle = `${siteConfig.name} — Jasa Pembuatan Website Profesional`;

/**
 * Production origin, e.g. https://www.lazulab.com. Set NEXT_PUBLIC_SITE_URL in
 * the deployment environment so canonical URLs, the sitemap and Open Graph
 * tags point at the real domain.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

// On Vercel, fall back to the project's production domain so OG tags, robots
// and the sitemap never point at localhost when NEXT_PUBLIC_SITE_URL is unset.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const fallbackOrigin = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl ?? fallbackOrigin).toString();
}
