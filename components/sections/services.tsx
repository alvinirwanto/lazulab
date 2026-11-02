import Link from "next/link";
import type { ReactNode } from "react";
import type { Service } from "@/content/types";
import { services } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { TrendScribble } from "@/components/ui/doodles";
import { icons } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  const featured = services.filter((service) => service.featured);
  const supporting = services.filter((service) => !service.featured);

  return (
    <section id="layanan" aria-labelledby="services-title" className="py-16 sm:py-24">
      <Container>
        <SectionHeading id="services-title" title="Website yang benar-benar bekerja untuk bisnis Anda">
          Dua cara membangun, dan semua kebutuhan pendukungnya ditangani oleh satu tim.
        </SectionHeading>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {featured.map((service, i) => (
            <li key={service.title} className="reveal">
              <FeaturedCard service={service} art={i === 0 ? <ShapesArt /> : <ArcArt />} />
            </li>
          ))}
        </ul>

        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {supporting.map((service) => (
            <li key={service.title} className="reveal rounded-card bg-mist p-7">
              <h3 className="text-title font-medium">{service.title}</h3>
              <p className="mt-3 text-muted">{service.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Hasil ${service.title}`}>
                {service.deliverables.map((item) => (
                  <li key={item} className="rounded-lg bg-white px-2.5 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/layanan" variant="dark">
            Lihat semua layanan
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function FeaturedCard({ service, art }: { service: Service; art: ReactNode }) {
  return (
    <article className="group relative flex h-full min-h-72 flex-col overflow-hidden rounded-card bg-gradient-to-br from-mist to-white p-8 pb-48 ring-1 ring-line sm:p-10 lg:pb-10">
      <div className="relative z-10 lg:max-w-[19rem]">
        <h3 className="text-title font-medium">{service.title}</h3>
        <p className="mt-3 text-muted">{service.summary}</p>
      </div>
      <Link
        href={service.href ?? "/layanan"}
        className="relative z-10 mt-auto inline-flex items-center gap-2 pt-8 font-medium"
        aria-label={`Selengkapnya tentang ${service.title}`}
      >
        Selengkapnya
        <icons.arrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
      <div aria-hidden="true" className="absolute right-0 bottom-0 transition-transform duration-500 ease-out-quint group-hover:-translate-y-1">
        {art}
      </div>
    </article>
  );
}

function ShapesArt() {
  return (
    <div className="relative h-44 w-52 sm:h-52 sm:w-60">
      <div className="absolute right-0 bottom-0 h-full w-32 origin-bottom-right skew-x-[-18deg] rounded-tl-[3rem] rounded-tr-2xl bg-lazuardi sm:w-36" />
      <div className="absolute bottom-0 left-6 h-20 w-14 skew-x-[-18deg] rounded-t-[2rem] bg-ink" />
      <svg viewBox="0 0 60 50" className="absolute right-6 bottom-8 w-14 text-ink" fill="none">
        <path d="M16 8c-6 18-2 36 14 34 18-2 20-26 4-26-16 0-26 18-28 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ArcArt() {
  return (
    <div className="relative h-44 w-56 sm:h-52 sm:w-64">
      <svg viewBox="0 0 220 180" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M30 180A110 110 0 0 1 60 75" stroke="var(--color-coral)" strokeWidth="18" strokeLinecap="round" />
        <path d="M78 58a110 110 0 0 1 62-28" stroke="var(--color-lazuardi)" strokeWidth="18" strokeLinecap="round" />
        <path d="M162 28a110 110 0 0 1 58 30" stroke="var(--color-ink)" strokeWidth="18" strokeLinecap="round" />
      </svg>
      <TrendScribble className="absolute right-8 bottom-10 w-24 text-ink" />
    </div>
  );
}
