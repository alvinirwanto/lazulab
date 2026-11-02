import { getServicePage, servicePages } from "@/content/service-pages";
import { renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `Gambar halaman ${siteConfig.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return servicePages.map((item) => ({ slug: item.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getServicePage(slug);
  return renderOgImage({ title: item?.title ?? siteConfig.name, eyebrow: "Layanan" });
}
