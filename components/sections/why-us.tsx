import { principles } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { icons } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyUs() {
  return (
    <section id="keunggulan" aria-labelledby="why-title" className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <SectionHeading id="why-title" title="Kenapa memilih kami" className="lg:col-span-4">
          Kami mendengarkan dulu, menjelaskan setiap keputusan, dan membangun website yang bisa Anda kelola jauh setelah rilis.
        </SectionHeading>

        <ul className="grid sm:grid-cols-2 lg:col-span-8">
          {principles.map((principle, i) => {
            const Icon = icons[principle.icon];
            return (
              <li
                key={principle.title}
                className={`reveal flex gap-4 border-line py-8 ${i < principles.length - 1 ? "border-b" : ""} ${
                  i < 2 ? "sm:border-b" : "sm:border-b-0"
                } ${i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"}`}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lazuardi text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-title font-medium">{principle.title}</h3>
                  <p className="mt-2 text-muted">{principle.body}</p>
                  <ButtonLink href={principle.action.href} variant="soft" size="sm" className="mt-5">
                    {principle.action.label}
                  </ButtonLink>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
