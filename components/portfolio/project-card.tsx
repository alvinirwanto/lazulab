import Link from "next/link";
import type { Project } from "@/content/types";
import { Cover } from "@/components/ui/cover";
import { icons } from "@/components/ui/icons";

type ProjectCardProps = {
  project: Project;
  seed?: number;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({ project, seed = 0, headingLevel: Heading = "h2" }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative">
        <Cover
          accent={project.accent}
          seed={seed}
          image={project.image}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[4/3] rounded-panel"
        />
        {project.isPlaceholder ? (
          <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-medium">Contoh konsep</span>
        ) : null}
      </div>
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <Heading className="text-title font-semibold">
          <Link href={`/portofolio/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </Heading>
        <span className="text-sm text-muted">{project.category}</span>
      </div>
      <p className="mt-2 text-muted">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Teknologi">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-md bg-mist px-2.5 py-1 text-sm">
            {tech}
          </li>
        ))}
      </ul>
      <span aria-hidden="true" className="mt-5 inline-flex items-center gap-2 font-medium">
        Lihat detail
        <icons.arrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
