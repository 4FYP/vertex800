"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { data, imgPath, normalizeHref } from "@/lib/data";

const HERO_IDS = ["ai-eng", "cyber", "strategy", "operate", "services"] as const;

export function Hero() {
  const slides = useMemo(
    () =>
      data.heroSlides
        .filter((s) => (HERO_IDS as readonly string[]).includes(s.id))
        .map((s) => ({ ...s, href: normalizeHref(s.href) })),
    []
  );

  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [textKey, setTextKey] = useState(0);

  const slide = slides[index];
  const next = slides[(index + 1) % slides.length];

  useEffect(() => {
    setReady(true);
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setTextKey((k) => k + 1);
    }, 5600);
    return () => window.clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    const img = new window.Image();
    img.src = imgPath(next.image);
  }, [next.image]);

  return (
    <section className="relative h-[100svh] max-h-[920px] min-h-[560px] overflow-hidden">
      <div
        key={slide.id}
        className="hero-media"
        style={{ backgroundImage: `url('${imgPath(slide.image)}')` }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(2,4,10,0.9)_8%,rgba(2,4,10,0.62)_52%,rgba(2,4,10,0.45)_100%)]" />
      <div className="hero-glow" />
      <div className="hero-scan" />

      <div className="container relative z-10 flex h-full flex-col justify-center pb-10 pt-24">
        <p className={`eyebrow anim-fade-up ${ready ? "is-on" : ""}`} style={{ transitionDelay: "0.05s" }}>
          {data.company.tagline}
        </p>

        <h1
          className={`font-display mt-3 max-w-4xl text-[clamp(3rem,9vw,6.5rem)] leading-[0.9] tracking-[-0.05em] anim-fade-up ${ready ? "is-on" : ""}`}
          style={{ transitionDelay: "0.15s" }}
        >
          <span className="text-shimmer">VERTEX800</span>
        </h1>

        <div className="mt-5 max-w-xl min-h-[5.5rem]">
          <div key={textKey} className="hero-copy-swap">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ember-soft)]">
              {slide.title}
            </p>
            <p className="mt-2 text-base leading-relaxed text-[rgba(232,238,248,0.84)] md:text-lg">
              {slide.description}
            </p>
          </div>
        </div>

        <div
          className={`mt-7 flex flex-wrap items-center gap-3 anim-fade-up ${ready ? "is-on" : ""}`}
          style={{ transitionDelay: "0.28s" }}
        >
          <Link href="/contact" className="btn btn-primary btn-pulse">
            Start Your Project →
          </Link>
          <Link href={slide.href} className="btn btn-ghost">
            Explore {slide.title}
          </Link>
        </div>

        <div
          className={`mt-8 flex items-center gap-2 anim-fade-up ${ready ? "is-on" : ""}`}
          style={{ transitionDelay: "0.38s" }}
          role="tablist"
          aria-label="Hero slides"
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={s.title}
              aria-selected={i === index}
              onClick={() => {
                setIndex(i);
                setTextKey((k) => k + 1);
              }}
              className={`h-1.5 transition-all duration-300 ${
                i === index
                  ? "w-8 bg-[var(--signal)] shadow-[0_0_12px_rgba(46,242,198,0.7)]"
                  : "w-3 bg-[rgba(232,238,248,0.28)] hover:bg-[rgba(232,238,248,0.5)]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hero-float-ring" aria-hidden />
    </section>
  );
}
