import Link from "next/link";
import { servicePages } from "@/content/service-pages";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Process } from "@/components/sections/process";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Cover } from "@/components/ui/cover";
import { icons } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

const description =
  "Layanan pembuatan website untuk bisnis di Indonesia: website company profile, toko online, WordPress, dan website custom, dari perencanaan sampai peluncuran.";

export const metadata = pageMetadata({ title: "Layanan pembuatan website", description, path: "/layanan" });

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Layanan"
        description={description}
        breadcrumbs={
          <Breadcrumbs
            tone="light"
            items={[
              { label: "Beranda", href: "/" },
              { label: "Layanan", href: "/layanan" },
            ]}
          />
        }
      />
      <section aria-label="Daftar layanan" className="pb-8">
        <Container>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {servicePages.map((service, i) => (
              <li key={service.slug} className="reveal">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-panel bg-mist">
                  <Cover accent={service.accent} seed={i} className="aspect-[16/8]" />
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h2 className="text-title font-semibold">
                      <Link href={`/layanan/${service.slug}`} className="after:absolute after:inset-0">
                        {service.name}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 text-muted">{service.description}</p>
                    <span aria-hidden="true" className="mt-6 inline-flex items-center gap-2 font-medium">
                      Lihat detail
                      <icons.arrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Process />
      <CtaBanner />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: servicePages.map((service, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: service.name,
            url: absoluteUrl(`/layanan/${service.slug}`),
          })),
        }}
      />
    </>
  );
}
