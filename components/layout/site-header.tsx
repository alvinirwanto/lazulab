"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem, NavMenuItem } from "@/content/types";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { icons } from "@/components/ui/icons";
import { Wordmark } from "@/components/ui/wordmark";

type SiteHeaderProps = { items: NavItem[] };

export function SiteHeader({ items }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    const close = () => window.innerWidth >= 1024 && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", close);
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || mobileOpen ? "shadow-[0_1px_0_var(--color-line)]" : ""
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6 lg:h-24">
        <Link href="/" aria-label="Beranda Lazulab" className="rounded-md">
          <Wordmark />
        </Link>

        <nav aria-label="Utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) =>
              "items" in item ? (
                <li key={item.label}>
                  <DesktopDropdown label={item.label} items={item.items} pathname={pathname} />
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="block rounded-full px-4 py-2 text-[0.95rem] transition-colors hover:bg-mist aria-[current]:bg-lazuardi aria-[current]:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Wrapper owns visibility: ButtonLink's own display class would override `hidden`. */}
          <div className="hidden gap-2.5 sm:flex">
            <ButtonLink href="/#harga" variant="soft" size="sm">
              Lihat harga
            </ButtonLink>
            <ButtonLink href="/#kontak" variant="dark" size="sm">
              Konsultasi gratis
            </ButtonLink>
          </div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-control bg-mist lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  mobileOpen ? "top-1.25 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  mobileOpen ? "top-1.25 -rotate-45" : "top-2.5"
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        inert={!mobileOpen}
        className={`absolute inset-x-3 top-full max-h-[calc(100dvh-6rem)] origin-top overflow-y-auto rounded-panel bg-white p-3 shadow-float transition-[opacity,transform] duration-300 ease-out-quint lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <nav aria-label="Navigasi mobile">
          {items.map((item) =>
            "items" in item ? (
              <div key={item.label} className="rounded-card bg-mist p-2">
                <p className="px-3 pt-2 pb-1 text-sm text-muted">{item.label}</p>
                <ul>
                  {item.items.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-2.5 hover:bg-white"
                      >
                        <span className="block font-medium">{sub.label}</span>
                        <span className="block text-sm text-muted">{sub.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="mt-1 flex items-center justify-between rounded-card px-4 py-3.5 text-xl font-medium hover:bg-mist aria-[current]:bg-lazuardi aria-[current]:text-white"
              >
                {item.label}
                <icons.arrowRight className="size-5" />
              </Link>
            ),
          )}
        </nav>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <ButtonLink href="/#harga" variant="soft" onClick={() => setMobileOpen(false)}>
            Lihat harga
          </ButtonLink>
          <ButtonLink href="/#kontak" variant="dark" onClick={() => setMobileOpen(false)}>
            Konsultasi
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

type DesktopDropdownProps = { label: string; items: NavMenuItem[]; pathname: string };

/**
 * Click or hover opens the panel. Escape, clicking outside, focus leaving,
 * or following a link closes it.
 */
function DesktopDropdown({ label, items, pathname }: DesktopDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const panelId = useId();

  // Close when navigating to another page.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const hover = (next: boolean) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(next), next ? 60 : 160);
  };

  return (
    <div
      ref={wrapper}
      className="relative"
      onPointerEnter={(e) => e.pointerType === "mouse" && hover(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && hover(false)}
      onBlur={(e) => !wrapper.current?.contains(e.relatedTarget as Node) && setOpen(false)}
    >
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] transition-colors hover:bg-mist ${open ? "bg-mist" : ""}`}
      >
        {label}
        <svg viewBox="0 0 12 12" aria-hidden="true" className={`size-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <path d="m2.5 4.5 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Padding-top bridges the gap so the pointer can travel into the panel. */}
      <div
        id={panelId}
        inert={!open}
        className={`absolute top-full left-1/2 w-[40rem] -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200 ease-out-quint ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="grid grid-cols-[1fr_14rem] gap-2 rounded-panel bg-white p-2 shadow-float ring-1 ring-line">
          <ul className="p-1">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3 rounded-card px-3 py-2.5 transition-colors hover:bg-mist"
                >
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-line transition-colors group-hover:bg-lazuardi" />
                  <span>
                    <span className="block font-medium">{item.label}</span>
                    <span className="block text-sm text-muted">{item.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="on-dark flex flex-col justify-between rounded-card bg-lazuardi p-5 text-white">
            <div>
              <p className="text-lg font-semibold">Belum yakin butuh apa?</p>
              <p className="mt-2 text-sm text-white/80">Ceritakan kebutuhan Anda, kami bantu pilihkan solusinya.</p>
            </div>
            <Link
              href="/#kontak"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center gap-2 font-medium hover:underline"
            >
              Konsultasi gratis
              <icons.arrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
