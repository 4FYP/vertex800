import Link from "next/link";
import { imgPath } from "@/lib/data";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative min-h-[52vh] overflow-hidden">
      <div
        className="page-hero-media absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imgPath(image)}')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(2,4,10,0.94)_10%,rgba(2,4,10,0.7)_55%,rgba(2,4,10,0.55)_100%)]" />
      <div className="hero-glow" />
      <div className="hero-scan" />

      <div className="container relative z-10 flex min-h-[52vh] flex-col justify-end pb-12 pt-28">
        <p className="eyebrow hero-copy-swap">{eyebrow}</p>
        <h1
          className="font-display mt-4 max-w-4xl text-[clamp(2.4rem,6vw,4.4rem)] leading-[0.98] hero-copy-swap"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>
        <p
          className="mt-4 max-w-2xl text-lg text-[rgba(232,238,248,0.78)] hero-copy-swap"
          style={{ animationDelay: "0.2s" }}
        >
          {description}
        </p>
        {cta && (
          <div className="mt-7 hero-copy-swap" style={{ animationDelay: "0.3s" }}>
            <Link href={cta.href} className="btn btn-primary btn-pulse">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
