import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Squiggle } from "@/components/ui/doodles";
import { SectionHeading } from "@/components/ui/section-heading";
import { accentClasses } from "@/lib/accents";
import { cssVars } from "@/lib/css-vars";

const tilts = ["3deg", "-2deg", "2.5deg", "-1.5deg"];
const offsets = ["lg:ml-16", "lg:ml-0", "lg:ml-24", "lg:ml-8"];

export function Work() {
  return (
    <section id="portofolio" aria-labelledby="work-title" className="overflow-x-clip py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="work-title" title="Website untuk berbagai jenis bisnis">
            Website booking, toko online, portofolio, hingga marketing produk. Semuanya dirancang untuk satu tujuan:
            mengubah pengunjung menjadi pelanggan.
          </SectionHeading>
          <p className="reveal mt-6 text-sm text-muted">Proyek yang ditampilkan adalah contoh konsep.</p>
          <ButtonLink href="/portofolio" variant="dark" className="reveal mt-8">
            Lihat semua portofolio
          </ButtonLink>
        </div>

        <div className="relative lg:col-span-7">
          <div aria-hidden="true" className="absolute top-1/2 -right-32 size-[26rem] -translate-y-1/2 rounded-full bg-lazuardi sm:size-[30rem] lg:-right-48" />
          <Squiggle delay={300} className="pointer-events-none absolute -top-10 left-1/3 h-[115%] text-ink" />

          <ul className="relative space-y-5 py-8">
            {projects.map((project, i) => (
              <li
                key={project.slug}
                className={`reveal ${offsets[i % offsets.length]} max-w-md`}
              >
                <article
                  className="tilt group relative flex gap-4 rounded-card bg-white p-4 shadow-float transition-transform duration-500 ease-out-quint hover:rotate-0 sm:p-5"
                  style={cssVars({ "--tilt": tilts[i % tilts.length] })}
                >
                  <div
                    className={`relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl text-xl font-semibold ${accentClasses[project.accent].bg} ${accentClasses[project.accent].fg}`}
                  >
                    {project.image ? (
                      <Image src={project.image.src} alt={project.image.alt} fill sizes="56px" className="object-cover" />
                    ) : (
                      <span aria-hidden="true">{project.title.charAt(0)}</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-medium">
                        <Link href={`/portofolio/${project.slug}`} className="after:absolute after:inset-0 group-hover:underline">
                          {project.title}
                        </Link>
                      </h3>
                      <span className="shrink-0 text-xs text-muted">{project.category}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{project.summary}</p>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Teknologi">
                      {project.stack.map((tech) => (
                        <li key={tech} className="rounded-md bg-mist px-2 py-0.5 text-xs">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
