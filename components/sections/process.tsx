import { processSteps } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="proses" aria-labelledby="process-title" className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
        <div aria-hidden="true" className="reveal relative mx-auto w-full max-w-md lg:sticky lg:top-32 lg:col-span-5">
          <TimelineCard />
        </div>

        <div className="lg:col-span-7">
          <SectionHeading id="process-title" title="Dari konsultasi pertama sampai website online">
            Enam tahap yang jelas. Setiap tahap menghasilkan sesuatu yang bisa Anda tinjau dan setujui sebelum lanjut.
          </SectionHeading>

          <ol className="mt-10 space-y-3">
            {processSteps.map((step, i) => (
              <li key={step.title} className="reveal group flex gap-5 rounded-card p-5 transition-colors hover:bg-mist sm:p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mist text-sm font-semibold tabular-nums transition-colors group-hover:bg-lazuardi group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-title font-medium">{step.title}</h3>
                    <p className="text-sm text-muted">
                      Anda dapat: <span className="font-medium text-ink">{step.outcome}</span>
                    </p>
                  </div>
                  <p className="mt-1.5 text-muted">{step.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/** Black project card on a tilted lazuardi backing, echoing the hero screens. */
function TimelineCard() {
  const bars = [38, 52, 46, 64, 58, 76, 70, 88, 82, 96];
  return (
    <div className="relative pt-6 pl-4">
      <div className="absolute inset-0 -rotate-3 rounded-[1.75rem] bg-lazuardi" />
      <div className="relative rotate-1 rounded-[1.75rem] bg-ink p-7 text-white shadow-float">
        <div className="flex items-baseline justify-between">
          <p className="font-medium">Timeline proyek</p>
          <p className="text-sm text-lazuardi-bright">Minggu 6 dari 8</p>
        </div>
        <div className="mt-8 flex h-40 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-lazuardi-bright" : "bg-white/20"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
          {["Desain", "Bangun", "Uji"].map((label, i) => (
            <span key={label} className={`rounded-lg py-2 ${i === 1 ? "bg-white text-ink" : "bg-white/10 text-white/70"}`}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
