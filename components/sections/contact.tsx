import { Container } from "@/components/ui/container";
import { Sparkle } from "@/components/ui/doodles";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="kontak" aria-labelledby="contact-title" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container>
        <SectionHeading
          id="contact-title"
          align="center"
          title={
            <>
              Ayo bangun website Anda
              <Sparkle className="sparkle ml-2 inline-block size-[0.6em] -translate-y-[0.5em] align-middle" />
            </>
          }
        >
          Ceritakan tentang bisnis dan kebutuhan Anda. Kami akan membalas dengan langkah selanjutnya dan menjadwalkan
          konsultasi gratis.
        </SectionHeading>

        <div className="reveal mx-auto mt-12 max-w-3xl rounded-panel bg-mist p-6 sm:p-10">
          <ContactForm />
        </div>

        <p className="mt-8 text-center text-muted">
          Lebih suka email?{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink underline decoration-lazuardi decoration-[3px] underline-offset-6">
            {siteConfig.email}
          </a>
        </p>
      </Container>
    </section>
  );
}
