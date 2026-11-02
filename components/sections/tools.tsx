import { tools } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Tools() {
  return (
    <section aria-labelledby="tools-title" className="py-16 sm:py-20">
      <Container>
        <SectionHeading id="tools-title" title="Teknologi yang kami gunakan" align="center">
          Platform dan framework teruji, dipilih sesuai kebutuhan proyek Anda.
        </SectionHeading>
        <ul className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          {tools.map((tool) => (
            <li key={tool.name} className="reveal group flex w-20 flex-col items-center gap-3 sm:w-24">
              <span
                aria-hidden="true"
                className="grid size-20 place-items-center rounded-full bg-mist text-lg font-semibold transition-colors duration-300 group-hover:bg-lazuardi group-hover:text-white sm:size-24 sm:text-xl"
              >
                {tool.mark}
              </span>
              <span className="text-center text-sm text-muted">{tool.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
