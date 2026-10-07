import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StatCounters } from "@/components/StatCounters";
import { data, imgPath } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vertex800 - our mission, philosophy, and commitment to intelligent software.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vertex800"
        title="A digital innovation partner for ambitious enterprises"
        description="For over a decade, Vertex800 has helped organizations scale with intelligent talent and cutting-edge software - specializing in AI, automation, and full-stack development."
        image="D.jpg"
      />

      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden border border-[var(--line)]">
            <Image
              src={imgPath("Staff.png")}
              alt="Vertex800 people and culture"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal className="section-head mb-0">
            <p className="eyebrow">Our Story</p>
            <h2>Built for lasting partnership</h2>
            <p>Vertex800 was founded on a simple conviction: software should be intelligent, beautiful, and built to evolve.</p>
            <p className="mt-4 text-[var(--muted)]">
              As a global IT consulting and software development company, we embed with client teams
              as true partners - aligning delivery to business outcomes, not just tickets closed.
            </p>
            <p className="mt-4 text-[var(--muted)]">
              Our model blends a curated global talent network of top 5% engineers with AI-native
              architecture practices, enabling faster go-to-market without compromising quality or
              governance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Mission & Philosophy</p>
            <h2>Modular. Scalable. AI-native.</h2>
            <p>
              Every engagement is guided by systems thinking - designing for change, intelligence,
              and long-term maintainability.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.brandPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} className="panel border-t-2 border-t-[var(--signal)] p-6">
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--line)] bg-[rgba(255,255,255,0.015)]">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)]">
              Guided by a clear point of view
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Our leadership sets a high bar for craftsmanship, partner accountability, and the
              responsible application of AI.
            </p>
          </Reveal>
          <Reveal>
            <blockquote className="panel border-l-2 border-[var(--ember)] p-6">
              <p className="font-display text-xl leading-snug">“{data.company.founderQuote}”</p>
              <footer className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                - {data.company.founderTitle}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head mx-auto text-center">
            <p className="eyebrow !justify-center">Culture & Values</p>
            <h2>How we show up for clients and each other</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Excellence without ego", "We hold a high standard for craft while remaining collaborative and curious."],
              ["Outcomes over output", "Success is measured in business impact - speed, quality, adoption, and lasting systems."],
              ["Intelligence with integrity", "We apply AI thoughtfully, with governance, transparency, and respect for people."],
            ].map(([title, copy], i) => (
              <Reveal key={title} delay={i * 0.05} className="panel p-6">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{copy}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 border-t border-[var(--line)] pt-10">
            <StatCounters />
          </div>
        </div>
      </section>
    </>
  );
}
