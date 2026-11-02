import type { Faq } from "@/content/types";

/** Accordion of questions built on native <details>, so it needs no JavaScript. */
export function FaqList({ faqs, className = "" }: { faqs: Faq[]; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-card bg-mist transition-colors open:bg-white open:ring-1 open:ring-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-card px-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span aria-hidden="true" className="relative grid size-9 shrink-0 place-items-center rounded-full bg-white transition-colors group-open:bg-lazuardi">
              <span className="absolute h-0.5 w-3.5 rounded bg-ink group-open:bg-white" />
              <span className="absolute h-3.5 w-0.5 rounded bg-ink transition-transform duration-300 group-open:scale-y-0 group-open:bg-white" />
            </span>
          </summary>
          <p className="max-w-prose px-6 pb-6 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQPage structured data for the same questions. */
export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
