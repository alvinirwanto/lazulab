import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LoopArrow, Sparkle } from "@/components/ui/doodles";
import { icons } from "@/components/ui/icons";
import { cssVars } from "@/lib/css-vars";
import { HeroMockups } from "./hero-mockups";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-2 pb-16 sm:pb-24">
      <Container>
        <div className="relative rounded-panel bg-lazuardi text-white xl:min-h-[38rem]">
          <div className="relative z-10 px-6 pt-12 pb-10 sm:px-12 sm:pt-16 xl:max-w-[37rem] xl:py-20 xl:pr-0 xl:pl-16">
            <h1 id="hero-title" className="enter text-display font-semibold text-balance">
              <span className="block">Website yang</span>
              ikut tumbuh
              <Sparkle className="sparkle ml-3 inline-block size-[0.55em] -translate-y-[0.35em] align-middle" />
            </h1>
            <p className="enter mt-6 max-w-md text-lede text-white/85 text-pretty" style={cssVars({ "--delay": "100ms" })}>
              Lazulab merencanakan, mendesain, membangun, dan meluncurkan website untuk bisnis yang sedang berkembang.
              WordPress saat Anda butuh cepat, kode custom saat Anda butuh presisi.
            </p>
            <div className="enter relative mt-10 inline-block" style={cssVars({ "--delay": "200ms" })}>
              <ButtonLink href="/#kontak" variant="light">
                Mulai proyek
              </ButtonLink>
              <LoopArrow
                delay={900}
                className="pointer-events-none absolute top-1/2 left-full ml-4 hidden h-28 w-60 -translate-y-[70%] text-white xl:block"
              />
            </div>
            <a
              href="#layanan"
              className="enter group mt-10 flex w-fit items-center gap-2 font-medium underline-offset-4 hover:underline xl:mt-14"
              style={cssVars({ "--delay": "300ms" })}
            >
              Lihat layanan kami
              <icons.arrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <div className="relative h-[25rem] overflow-hidden rounded-b-panel sm:h-[30rem] xl:absolute xl:inset-y-0 xl:right-0 xl:h-auto xl:w-[46%] xl:overflow-visible">
            <HeroMockups />
          </div>
        </div>
      </Container>
    </section>
  );
}
