import { renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — jasa pembuatan website`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({ title: "Website yang ikut tumbuh bersama bisnis Anda", eyebrow: "Jasa pembuatan website" });
}
