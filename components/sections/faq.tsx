import { faqs } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" title="Pertanyaan yang sering diajukan">
            Seputar harga, durasi, revisi, hosting, dan apa yang terjadi setelah website online.
          </SectionHeading>
          <a href="#kontak" className="mt-6 inline-flex font-medium underline decoration-lazuardi decoration-[3px] underline-offset-6 hover:decoration-ink">
            Tanyakan hal lain
          </a>
        </div>

        <FaqList faqs={faqs} className="lg:col-span-8" />
      </Container>
    </section>
  );
}
