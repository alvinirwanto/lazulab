import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { projects } from "@/content/projects";
import { servicePages } from "@/content/service-pages";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = posts[0]?.updatedAt ?? posts[0]?.publishedAt;

  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/layanan"), changeFrequency: "monthly", priority: 0.9 },
    ...servicePages.map((service) => ({
      url: absoluteUrl(`/layanan/${service.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: absoluteUrl("/tentang-kami"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/kebijakan-privasi"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/portofolio"), changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: absoluteUrl(`/portofolio/${project.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: absoluteUrl("/blog"), lastModified: latestPost, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
