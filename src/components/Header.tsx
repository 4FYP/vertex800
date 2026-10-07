"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<"services" | "industries" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mega || open
          ? "bg-[rgba(2,4,10,0.92)] backdrop-blur-xl border-b border-[var(--line)] shadow-[0_8px_40px_rgba(46,242,198,0.06)]"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setMega(null)}
    >
      <div className="container flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="relative z-10 flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Vertex800"
            width={220}
            height={64}
            className="h-14 w-auto transition-transform duration-300 hover:scale-105 md:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link className="px-2.5 py-2 text-[0.92rem] text-[rgba(232,238,248,0.78)] transition hover:text-[var(--signal)]" href="/about">
            About
          </Link>
          <button
            type="button"
            className="cursor-pointer border-0 bg-transparent px-2.5 py-2 font-[inherit] text-[0.92rem] text-[rgba(232,238,248,0.78)] transition hover:text-[var(--signal)]"
            onMouseEnter={() => setMega("services")}
            onFocus={() => setMega("services")}
          >
            Services
          </button>
          <button
            type="button"
            className="cursor-pointer border-0 bg-transparent px-2.5 py-2 font-[inherit] text-[0.92rem] text-[rgba(232,238,248,0.78)] transition hover:text-[var(--signal)]"
            onMouseEnter={() => setMega("industries")}
            onFocus={() => setMega("industries")}
          >
            Industries
          </button>
          <Link className="px-2.5 py-2 text-[0.92rem] text-[rgba(232,238,248,0.78)] transition hover:text-[var(--signal)]" href="/alliances">
            Alliances
          </Link>
          <Link className="px-2.5 py-2 text-[0.92rem] text-[rgba(232,238,248,0.78)] transition hover:text-[var(--signal)]" href="/insights">
            Insights
          </Link>
          <Link className="px-2.5 py-2 text-[0.92rem] text-[rgba(232,238,248,0.78)] transition hover:text-[var(--signal)]" href="/careers">
            Careers
          </Link>
          <Link className="px-2.5 py-2 text-[0.92rem] text-[rgba(232,238,248,0.78)] transition hover:text-[var(--signal)]" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn btn-primary text-sm">
            Start Your Project →
          </Link>
        </div>

        <button
          type="button"
          className="font-mono text-xl text-[var(--signal)] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {mega === "services" && (
        <div className="hidden border-t border-[var(--line)] bg-[rgba(2,4,10,0.98)] lg:block">
          <div className="container py-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Our Services</p>
                <p className="mt-2 text-[var(--muted)]">Vast capabilities. Deep expertise. Real results.</p>
              </div>
              <Link href="/services" className="link-arrow">
                View all services →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.serviceGroups.map((group) => (
                <div key={group.id}>
                  <h4 className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--ember-soft)]">
                    {group.label}
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {data.services
                      .filter((s) => s.group === group.id)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="text-sm text-[rgba(232,238,248,0.72)] transition hover:text-[var(--signal)]"
                          onClick={() => setMega(null)}
                        >
                          {s.shortTitle}
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {mega === "industries" && (
        <div className="hidden border-t border-[var(--line)] bg-[rgba(2,4,10,0.98)] lg:block">
          <div className="container grid gap-8 py-8 md:grid-cols-[2fr_1fr]">
            <div>
              <p className="eyebrow">Industries</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {data.industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries#${ind.slug}`}
                    className="text-sm text-[rgba(232,238,248,0.72)] transition hover:text-[var(--signal)]"
                    onClick={() => setMega(null)}
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-l border-[var(--line)] pl-8">
              <p className="eyebrow">Alliances</p>
              <div className="mt-4 flex flex-col gap-2">
                {data.alliances.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/alliances#${a.slug}`}
                    className="text-sm text-[rgba(232,238,248,0.72)] transition hover:text-[var(--signal)]"
                    onClick={() => setMega(null)}
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
              <Link href="/alliances" className="link-arrow mt-4 inline-block">
                All alliances →
              </Link>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[var(--line)] bg-[rgba(2,4,10,0.98)] px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4 text-lg">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <details>
              <summary className="cursor-pointer">Services</summary>
              <div className="mt-2 flex flex-col gap-2 pl-3 text-base text-[var(--muted)]">
                <Link href="/services" onClick={() => setOpen(false)}>
                  All services
                </Link>
                {data.services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </details>
            <details>
              <summary className="cursor-pointer">Industries</summary>
              <div className="mt-2 flex flex-col gap-2 pl-3 text-base text-[var(--muted)]">
                {data.industries.map((ind) => (
                  <Link key={ind.slug} href={`/industries#${ind.slug}`} onClick={() => setOpen(false)}>
                    {ind.name}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/alliances" onClick={() => setOpen(false)}>
              Alliances
            </Link>
            <Link href="/insights" onClick={() => setOpen(false)}>
              Insights
            </Link>
            <Link href="/careers" onClick={() => setOpen(false)}>
              Careers
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/contact" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>
              Start Your Project →
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
