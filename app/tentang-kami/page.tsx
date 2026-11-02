import Image from "next/image";
import Link from "next/link";
import { nameStory, story, team, values } from "@/content/about";
import type { TeamMember } from "@/content/types";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Tools } from "@/components/sections/tools";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { icons } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

const description =
  "Kenali Lazulab, studio desain dan pengembangan website untuk bisnis di Indonesia. Cerita, nilai, dan tim di balik setiap website yang kami bangun.";

export const metadata = pageMetadata({ title: "Tentang kami", description, path: "/tentang-kami" });

const shortcuts = [
  { label: "Layanan kami", description: "WordPress dan website custom", href: "/#layanan" },
  { label: "Proses kerja", description: "Enam tahap dari konsultasi sampai rilis", href: "/#proses" },
  { label: "Portofolio", description: "Contoh website yang kami rancang", href: "/portofolio" },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="Tentang kami"
        description="Kami membantu bisnis di Indonesia memiliki website yang mudah ditemukan, mudah dipahami, dan mudah dikelola."
        breadcrumbs={
          <Breadcrumbs
            tone="light"
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tentang kami", href: "/tentang-kami" },
            ]}
          />
        }
      />

      <section aria-labelledby="story-title" className="py-12 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="story-title" className="reveal text-heading font-semibold text-balance">
              Website seharusnya bekerja untuk bisnis Anda, bukan sebaliknya
            </h2>
            <div className="mt-8 space-y-5 text-lede text-muted">
              {story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="reveal">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside aria-labelledby="name-title" className="lg:col-span-5">
            <div className="reveal on-dark rounded-panel bg-ink p-8 text-white sm:p-10 lg:sticky lg:top-32">
              <h2 id="name-title" className="text-sm text-white/60">
                Arti nama kami
              </h2>
              <p className="mt-4 text-[clamp(2.5rem,2rem+2vw,3.5rem)] leading-none font-semibold tracking-tight">
                {nameStory.parts.map((part, i) => (
                  <span key={part.word} className={i === 1 ? "text-lazuardi-bright" : undefined}>
                    {part.word}
                  </span>
                ))}
              </p>
              <dl className="mt-8 space-y-5">
                {nameStory.parts.map((part, i) => (
                  <div key={part.word} className="flex gap-4">
                    <dt
                      className={`grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                        i === 0 ? "bg-white text-ink" : "bg-lazuardi text-white"
                      }`}
                    >
                      {part.word}
                    </dt>
                    <dd className="pt-2 text-white/80">{part.meaning}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 border-t border-white/15 pt-6 text-white/80">{nameStory.summary}</p>
            </div>
          </aside>
        </Container>
      </section>

      <section aria-labelledby="values-title" className="py-12 sm:py-20">
        <Container>
          <SectionHeading id="values-title" title="Nilai yang kami pegang">
            Empat prinsip yang menentukan cara kami bekerja dengan setiap klien.
          </SectionHeading>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = icons[value.icon];
              return (
                <li key={value.title} className="reveal rounded-card bg-mist p-7">
                  <span className="grid size-11 place-items-center rounded-full bg-lazuardi text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-title font-medium">{value.title}</h3>
                  <p className="mt-3 text-muted">{value.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="team-title" className="py-12 sm:py-20">
        <Container>
          <SectionHeading id="team-title" title="Tim di balik Lazulab">
            Desainer, developer, dan spesialis SEO yang bekerja dalam satu tim untuk proyek Anda.
          </SectionHeading>
          <ul className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {team.map((member, i) => (
              <li key={`${member.role}-${i}`} className="reveal">
                <TeamCard member={member} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Tools />

      <section aria-labelledby="next-title" className="py-12 sm:py-16">
        <Container>
          <h2 id="next-title" className="text-title font-semibold">
            Pelajari lebih lanjut
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {shortcuts.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full items-center justify-between gap-4 rounded-card bg-mist p-6 transition-colors hover:bg-lazuardi hover:text-white"
                >
                  <span>
                    <span className="block font-semibold">{item.label}</span>
                    <span className="mt-1 block text-sm text-muted transition-colors group-hover:text-white/80">
                      {item.description}
                    </span>
                  </span>
                  <icons.arrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `Tentang ${siteConfig.name}`,
          description,
          url: absoluteUrl("/tentang-kami"),
          inLanguage: "id-ID",
          about: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl(), description: siteConfig.description },
        }}
      />
    </>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="h-full">
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-lazuardi-soft">
        {member.photo ? (
          <Image src={member.photo.src} alt={member.photo.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
            {member.isPlaceholder ? (
              <svg viewBox="0 0 80 80" className="w-2/5 text-lazuardi/40">
                <circle cx="40" cy="28" r="16" fill="currentColor" />
                <path d="M8 78c2-18 16-28 32-28s30 10 32 28Z" fill="currentColor" />
              </svg>
            ) : (
              <span className="text-5xl font-semibold text-lazuardi">{initials}</span>
            )}
          </div>
        )}
        {member.isPlaceholder ? (
          <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium">Contoh</span>
        ) : null}
      </div>
      <h3 className="mt-4 font-semibold">{member.name}</h3>
      <p className="text-sm text-muted">{member.role}</p>
    </article>
  );
}
