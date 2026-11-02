import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Contoh website yang kami rancang untuk klinik, toko online, studio kreatif, dan perusahaan teknologi, lengkap dengan tantangan, solusi, dan teknologinya.";

export const metadata = pageMetadata({ title: "Portofolio website", description, path: "/portofolio" });

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        title="Portofolio"
        description={description}
        breadcrumbs={
          <Breadcrumbs
            tone="light"
            items={[
              { label: "Beranda", href: "/" },
              { label: "Portofolio", href: "/portofolio" },
            ]}
          />
        }
      />
      <section aria-label="Daftar proyek" className="pb-8">
        <Container>
          <p className="max-w-2xl text-sm text-muted">
            Proyek di bawah ini adalah contoh konsep untuk menggambarkan jenis website yang kami kerjakan.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((project, i) => (
              <li key={project.slug} className="reveal">
                <ProjectCard project={project} seed={i} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
