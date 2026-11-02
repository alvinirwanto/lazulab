import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

/** Mid-page prompt: dark panel with a phone preview breaking out of the top edge. */
export function CtaBanner() {
  return (
    <section aria-labelledby="cta-banner-title" className="py-16 sm:py-24">
      <Container>
        <div className="on-dark reveal relative overflow-hidden rounded-panel bg-ink text-white lg:overflow-visible">
          <svg aria-hidden="true" viewBox="0 0 800 300" className="absolute inset-0 h-full w-full opacity-[0.08]" preserveAspectRatio="none">
            {Array.from({ length: 14 }, (_, i) => (
              <line key={i} x1="560" y1="150" x2={i * 62 - 20} y2={i % 2 ? 0 : 300} stroke="white" strokeWidth="1" />
            ))}
          </svg>
          <svg aria-hidden="true" viewBox="0 0 140 90" fill="none" className="absolute top-14 left-0 hidden w-36 text-white lg:block">
            <path d="M0 80C30 50 50 0 70 10s0 60 30 55 30-25 40-20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>

          <div className="relative grid grid-cols-1 items-center gap-10 px-6 py-12 sm:px-12 lg:grid-cols-12 lg:py-16">
            <div className="lg:col-span-7 lg:pl-28">
              <h2 id="cta-banner-title" className="text-heading font-semibold text-balance">
                Punya ide? Mari rancang website Anda.
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Jadwalkan konsultasi gratis dan dapatkan rencana, jadwal, serta penawaran harga yang jelas. Tanpa kewajiban.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/#kontak" variant="light">
                  Minta konsultasi
                </ButtonLink>
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="outline-light">
                  Kirim email
                </ButtonLink>
              </div>
            </div>
            <div aria-hidden="true" className="relative hidden lg:col-span-5 lg:block">
              <PhonePreview />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PhonePreview() {
  return (
    <div className="absolute -top-36 left-1/2 w-56 -translate-x-1/2 rotate-3 rounded-[2rem] bg-white p-4 text-ink shadow-float">
      <div className="h-24 rounded-2xl bg-lazuardi p-3">
        <div className="h-2.5 w-20 rounded bg-ink" />
        <div className="mt-2 h-2 w-28 rounded bg-ink/30" />
        <div className="mt-5 h-6 w-16 rounded-md bg-ink" />
      </div>
      <p className="mt-4 text-[0.65rem] text-muted">Pratinjau mobile</p>
      {["Layanan", "Harga", "Kontak"].map((label) => (
        <div key={label} className="mt-2 flex items-center justify-between rounded-xl border border-line px-3 py-2.5 text-xs">
          {label}
          <span className="h-1.5 w-10 rounded bg-mist" />
        </div>
      ))}
      <div className="mt-4 grid grid-cols-3 gap-1.5">
        <div className="h-12 rounded-lg bg-mist" />
        <div className="h-12 rounded-lg bg-ink" />
        <div className="h-12 rounded-lg bg-mist" />
      </div>
    </div>
  );
}
