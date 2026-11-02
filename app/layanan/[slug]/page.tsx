import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import { projects } from "@/content/projects";
import { getServicePage, servicePages } from "@/content/service-pages";
import { pricingTiers } from "@/content/site-content";
import { PostCard } from "@/components/blog/post-card";
import { ProjectCard } from "@/components/portfolio/project-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Process } from "@/components/sections/process";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FaqList, faqJsonLd } from "@/components/ui/faq-list";
import { icons } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/layanan/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};
  return pageMetadata({ title: service.metaTitle, description: service.description, path: `/layanan/${slug}`,
    image: `/layanan/${slug}/opengraph-image`,
  });
}

export default async function ServicePage({ params }: PageProps<"/layanan/[slug]">) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const tier = pricingTiers.find((item) => item.id === service.tierId);
  const relatedProjects = projects.filter((project) => service.relatedProjects.includes(project.slug));
  const relatedPosts = posts.filter((post) => service.relatedPosts.includes(post.slug));
  const otherServices = servicePages.filter((item) => item.slug !== service.slug);
  const url = absoluteUrl(`/layanan/${service.slug}`);

  return (
    <>
      <PageIntro
        title={service.title}
        description={service.description}
        breadcrumbs={
          <Breadcrumbs
            tone="light"
            items={[
              { label: "Beranda", href: "/" },
              { label: "Layanan", href: "/layanan" },
              { label: service.name, href: `/layanan/${service.slug}` },
            ]}
          />
        }
      />

      <section aria-labelledby="intro-title" className="py-12 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="intro-title" className="reveal text-heading font-semibold text-balance">
              Kenapa bisnis Anda butuh {service.name.toLowerCase()}?
            </h2>
            <p className="reveal mt-6 text-lede text-muted">{service.intro}</p>
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/#kontak">Konsultasi gratis</ButtonLink>
              <ButtonLink href="/#harga" variant="soft">
                Lihat harga
              </ButtonLink>
            </div>
          </div>
          <aside aria-labelledby="audience-title" className="reveal rounded-panel bg-ink p-8 text-white lg:col-span-5">
            <h2 id="audience-title" className="text-title font-semibold">
              Cocok untuk
            </h2>
            <ul className="mt-5 space-y-3 text-white/85">
              {service.audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lazuardi text-white">
                    <icons.check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section aria-labelledby="includes-title" className="py-12 sm:py-20">
        <Container>
          <SectionHeading id="includes-title" title="Yang Anda dapatkan">
            Semua yang dibutuhkan agar {service.name.toLowerCase()} Anda siap bekerja sejak hari pertama.
          </SectionHeading>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item, i) => (
              <li key={item.title} className="reveal rounded-card bg-mist p-7">
                <span className="grid size-10 place-items-center rounded-full bg-lazuardi text-sm font-semibold text-white tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-title font-medium">{item.title}</h3>
                <p className="mt-2 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {tier ? (
        <section aria-labelledby="tier-title" className="py-12">
          <Container>
            <div className="reveal grid grid-cols-1 items-center gap-8 rounded-panel bg-lazuardi p-8 text-white sm:p-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-white/75">Paket yang biasanya cocok</p>
                <h2 id="tier-title" className="mt-2 text-heading font-semibold">
                  {tier.name}: {tier.approach}
                </h2>
                <p className="mt-4 max-w-xl text-white/80">{tier.audience}</p>
              </div>
              <div className="rounded-card bg-white p-6 text-ink lg:col-span-5">
                <p className="text-3xl font-semibold tracking-tight">{tier.price ?? "Harga custom"}</p>
                <p className="mt-1 text-sm text-muted">{tier.priceNote}</p>
                <div className="mt-6 grid gap-2">
                  <ButtonLink href="/#kontak">{tier.cta}</ButtonLink>
                  <ButtonLink href="/#harga" variant="soft">
                    Bandingkan paket
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <Process />

      {relatedProjects.length > 0 ? (
        <section aria-labelledby="projects-title" className="py-12 sm:py-20">
          <Container>
            <SectionHeading id="projects-title" title="Contoh proyek" />
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} seed={projects.indexOf(project)} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section aria-labelledby="service-faq-title" className="py-12 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <SectionHeading id="service-faq-title" title={`Pertanyaan seputar ${service.name.toLowerCase()}`} className="lg:col-span-4" />
          <FaqList faqs={service.faqs} className="lg:col-span-8" />
        </Container>
      </section>

      {relatedPosts.length > 0 ? (
        <section aria-labelledby="posts-title" className="py-12 sm:py-20">
          <Container>
            <SectionHeading id="posts-title" title="Bacaan terkait" />
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <PostCard post={post} seed={posts.indexOf(post)} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section aria-labelledby="other-services-title" className="py-12">
        <Container>
          <h2 id="other-services-title" className="text-title font-semibold">
            Layanan lainnya
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {otherServices.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/layanan/${item.slug}`}
                  className="group flex h-full items-center justify-between gap-4 rounded-card bg-mist p-6 transition-colors hover:bg-lazuardi hover:text-white"
                >
                  <span className="font-semibold">{item.name}</span>
                  <icons.arrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          serviceType: service.name,
          description: service.description,
          url,
          areaServed: { "@type": "Country", name: "Indonesia" },
          provider: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl() },
        }}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
    </>
  );
}
