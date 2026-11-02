import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Cover } from "@/components/ui/cover";
import { icons } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portofolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({ title: project.title, description: project.summary, path: `/portofolio/${slug}`,
    image: `/portofolio/${slug}/opengraph-image`,
  });
}

export default async function ProjectPage({ params }: PageProps<"/portofolio/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const facts = [
    { label: "Kategori", value: project.category },
    { label: "Layanan", value: project.services.join(", ") },
    { label: "Teknologi", value: project.stack.join(", ") },
    { label: "Status", value: project.isPlaceholder ? "Contoh konsep" : "Proyek klien" },
  ];

  return (
    <>
      <article aria-labelledby="project-title">
        <Container className="pt-4 pb-10">
          <Breadcrumbs
            items={[
              { label: "Beranda", href: "/" },
              { label: "Portofolio", href: "/portofolio" },
              { label: project.title, href: `/portofolio/${project.slug}` },
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="rounded-full bg-lazuardi-soft px-3 py-1 text-sm font-medium">{project.category}</span>
              <h1 id="project-title" className="enter mt-5 text-display font-semibold text-balance">
                {project.title}
              </h1>
              <p className="enter mt-6 max-w-2xl text-lede text-muted">{project.summary}</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-card bg-mist p-6 lg:col-span-5">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="mt-1 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>

        <Container>
          <Cover
            accent={project.accent}
            seed={index}
            image={project.image}
            priority
            className="tilt-enter aspect-[16/9] rounded-panel sm:aspect-[21/9]"
          />
        </Container>

        <Container className="grid grid-cols-1 gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-12 lg:col-span-7">
            <section aria-labelledby="challenge-title" className="reveal">
              <h2 id="challenge-title" className="text-heading font-semibold">
                Tantangan
              </h2>
              <p className="mt-5 text-lede text-muted">{project.challenge}</p>
            </section>
            <section aria-labelledby="solution-title" className="reveal">
              <h2 id="solution-title" className="text-heading font-semibold">
                Solusi
              </h2>
              <p className="mt-5 text-lede text-muted">{project.solution}</p>
            </section>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <section aria-labelledby="features-title" className="reveal rounded-panel bg-mist p-8">
              <h2 id="features-title" className="text-title font-semibold">
                Fitur utama
              </h2>
              <ul className="mt-5 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lazuardi text-white">
                      <icons.check className="size-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="goals-title" className="reveal rounded-panel bg-ink p-8 text-white">
              <h2 id="goals-title" className="text-title font-semibold">
                Tujuan proyek
              </h2>
              <ul className="mt-5 space-y-3 text-white/80">
                {project.goals.map((goal) => (
                  <li key={goal} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-lazuardi-bright" />
                    {goal}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </Container>
      </article>

      <section aria-labelledby="next-project-title" className="py-8">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="next-project-title" className="text-heading font-semibold">
              Proyek berikutnya
            </h2>
            <Link href="/portofolio" className="inline-flex items-center gap-2 font-medium hover:underline">
              Semua portofolio
              <icons.arrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 max-w-xl">
            <ProjectCard project={next} seed={index + 1} headingLevel="h3" />
          </div>
        </Container>
      </section>

      <CtaBanner />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary,
          url: absoluteUrl(`/portofolio/${project.slug}`),
          inLanguage: "id-ID",
          creator: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl() },
          keywords: project.stack.join(", "),
        }}
      />
    </>
  );
}
