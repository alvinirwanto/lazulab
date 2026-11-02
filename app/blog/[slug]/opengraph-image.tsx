import { getPost, posts } from "@/content/posts";
import { renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `Gambar artikel ${siteConfig.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((item) => ({ slug: item.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getPost(slug);
  return renderOgImage({ title: item?.title ?? siteConfig.name, eyebrow: item?.category ?? "Blog" });
}
