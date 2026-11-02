import type { PricingTier } from "@/content/types";
import { pricingTiers } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { icons } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function Pricing() {
  return (
    <section id="harga" aria-labelledby="pricing-title" className="py-16 sm:py-24">
      <Container>
        <SectionHeading id="pricing-title" title="Harga yang jelas dan transparan" align="center">
          Mulai dengan WordPress, pilih full custom, atau bawa kebutuhan yang kompleks. Setiap penawaran bersifat tetap
          dan tertulis sebelum pekerjaan dimulai.
        </SectionHeading>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
          Hosting, domain, dan paket maintenance dihitung terpisah, jadi Anda hanya membayar yang dibutuhkan.
        </p>
      </Container>
    </section>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  const titleId = `tier-${tier.id}`;
  const highlight = tier.recommended;

  return (
    <article
      aria-labelledby={titleId}
      className={`reveal flex flex-col rounded-panel p-8 sm:p-9 ${highlight ? "bg-lazuardi text-white" : "bg-mist"}`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 id={titleId} className="text-2xl font-semibold">
          {tier.name}
        </h3>
        {highlight ? <span className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-white">Direkomendasikan</span> : null}
      </div>
      <p className="mt-1 font-medium">{tier.approach}</p>
      <p className={`mt-3 ${highlight ? "text-white/80" : "text-muted"}`}>{tier.audience}</p>

      <div className={`mt-8 rounded-card p-5 ${highlight ? "bg-white/12" : "bg-white"}`}>
        <p className="text-3xl font-semibold tracking-tight">{tier.price ?? "Harga custom"}</p>
        <p className={`mt-1 text-sm ${highlight ? "text-white/75" : "text-muted"}`}>{tier.priceNote}</p>
      </div>

      <ul className="mt-8 flex-1 space-y-3" aria-label={`Termasuk dalam paket ${tier.name}`}>
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${highlight ? "bg-white text-lazuardi" : "bg-lazuardi text-white"}`}>
              <icons.check className="size-3" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <ButtonLink href="/#kontak" variant={highlight ? "light" : "dark"} className="mt-10 w-full" aria-describedby={titleId}>
        {tier.cta}
      </ButtonLink>
    </article>
  );
}
