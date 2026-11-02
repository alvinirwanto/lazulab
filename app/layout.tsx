import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { footerLinks, navigation } from "@/content/site-content";
import { absoluteUrl, homeTitle, siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "jasa pembuatan website",
    "jasa web development",
    "jasa desain website",
    "website WordPress",
    "website custom",
    "website UMKM",
    "website company profile",
  ],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${outfit.variable} antialiased`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-control focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Langsung ke konten
        </a>
        <SiteHeader items={navigation} />
        <main id="main">{children}</main>
        <SiteFooter links={footerLinks} />
      </body>
    </html>
  );
}
