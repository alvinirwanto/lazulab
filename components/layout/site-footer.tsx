import { cacheLife } from "next/cache";
import Link from "next/link";
import type { NavLink } from "@/content/types";
import { Container } from "@/components/ui/container";
import { icons } from "@/components/ui/icons";
import { Wordmark } from "@/components/ui/wordmark";
import { siteConfig } from "@/lib/site";

type SiteFooterProps = { links: NavLink[] };

export function SiteFooter({ links }: SiteFooterProps) {
  const social = siteConfig.social.filter((link) => link.href);
  const linkClass = "text-white/60 transition-colors hover:text-white";

  return (
    <footer className="on-dark bg-ink text-white">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Wordmark tone="light" />
          <p className="mt-5 max-w-xs text-white/60">{siteConfig.description}</p>
        </div>

        <nav aria-label="Navigasi footer" className="md:col-span-2">
          <h2 className="font-medium">Jelajahi</h2>
          <ul className="mt-4 space-y-2.5">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="font-medium">Kontak</h2>
          <address className="mt-4 space-y-2.5 not-italic">
            <p>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className={`${linkClass} whitespace-nowrap`}>
                {siteConfig.phone}
              </a>
            </p>
            <p className="text-white/60">{siteConfig.location}</p>
          </address>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-medium">Mulai proyek</h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group mt-4 flex items-center justify-between gap-3 rounded-control py-1.5 pr-1.5 pl-4 ring-1 ring-white/20 transition-colors hover:ring-white/50"
          >
            <span className="truncate text-white/80">{siteConfig.email}</span>
            <span className="grid size-10 shrink-0 place-items-center rounded-[0.6rem] bg-lazuardi text-white">
              <icons.arrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
          {social.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} rel="me noopener" target="_blank" className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-2 border-t border-white/10 py-7 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. Hak cipta dilindungi.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
