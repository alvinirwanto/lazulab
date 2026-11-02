import type { ReactNode } from "react";
import { Container } from "./container";
import { Sparkle } from "./doodles";

type PageIntroProps = {
  title: string;
  description: string;
  breadcrumbs?: ReactNode;
};

/** Opening panel for inner pages, a smaller sibling of the home hero. */
export function PageIntro({ title, description, breadcrumbs }: PageIntroProps) {
  return (
    <section aria-labelledby="page-title" className="pt-2 pb-12 sm:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-panel bg-lazuardi px-6 text-white py-12 sm:px-12 sm:py-16 lg:px-16">
          {breadcrumbs ? <div className="mb-8">{breadcrumbs}</div> : null}
          <h1 id="page-title" className="enter max-w-3xl text-display font-semibold text-balance">
            {title}
            <Sparkle className="sparkle ml-3 inline-block size-[0.5em] -translate-y-[0.35em] align-middle" />
          </h1>
          <p className="enter mt-6 max-w-2xl text-lede text-white/85 text-pretty">{description}</p>
          <div aria-hidden="true" className="absolute -right-24 -bottom-24 size-72 rounded-full border-[28px] border-white/10 sm:size-96" />
        </div>
      </Container>
    </section>
  );
}
