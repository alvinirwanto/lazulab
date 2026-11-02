import type { Metadata } from "next";
import { siteConfig, siteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Use the title as-is instead of applying the "| Lazulab" template. */
  absoluteTitle?: boolean;
  /** Share image path. Detail pages pass their own generated opengraph-image. */
  image?: `/${string}`;
};

/**
 * Per-page metadata. Open Graph is set per page because Next.js replaces,
 * rather than merges, a parent's openGraph object.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle,
  image = "/opengraph-image",
}: PageMetadataInput): Metadata {
  // Google shows roughly 60 characters; drop the "| Lazulab" suffix when it would push past that.
  const fitsWithSuffix = title.length + siteConfig.name.length + 3 <= 60;
  return {
    title: absoluteTitle || !fitsWithSuffix ? { absolute: title } : title,
    description,
    // Only declare a canonical URL once the production domain is known.
    alternates: siteUrl ? { canonical: path } : undefined,
    openGraph: {
      type,
      siteName: siteConfig.name,
      locale: "id_ID",
      title,
      description,
      url: path,
      // Re-declared here: a page-level openGraph object drops the inherited image,
      // and an explicit image also wins over a route's own opengraph-image file.
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
