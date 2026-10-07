import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { StatCounters } from "@/components/StatCounters";
import {
  data,
  imgPath,
  industryImage,
  normalizeHref,
  offeringImage,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What We Offer</p>
            <h2>Capabilities that scale with ambition</h2>
            <p>
              From AI-native platforms to elite engineering talent, Vertex800 equips enterprises to
              move faster with confidence.
            </p>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {data.offerings.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 4) * 0.07}
                variant={i % 2 === 0 ? "up" : "scale"}
              >
                <Link
                  href={normalizeHref(item.href)}
                  className="panel group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-28 overflow-hidden">
                    <Image
                      src={imgPath(offeringImage(item.title))}
                      alt={item.title}
                      fill
                      loading="lazy"
                      className="media-zoom object-cover"
                      sizes="(max-width:768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,4,10,0.95)] via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <span className="font-mono text-xs text-[var(--ember-soft)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-1.5 text-lg leading-snug">{item.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-snug text-[var(--muted)]">
                      {item.description}
                    </p>
                    <span className="link-arrow mt-3 inline-block">Read More →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container">
          <Reveal className="section-head" variant="left">
            <p className="eyebrow">Expertise Across Technologies</p>
            <h2>Built on the stacks that power modern enterprises</h2>
            <p>
              We engineer with proven platforms and emerging AI capabilities - always with
              scalability and maintainability in mind.
            </p>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-3">
            {data.techCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08} variant="scale" className="panel p-5">
                <h3 className="font-display text-lg">{cat.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{cat.description}</p>
                <div className="mt-3">
                  {cat.icons.map((icon) => (
                    <span key={icon} className="tag">
                      {icon}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="marquee-wrap mt-10">
          <div className="marquee">
            {[...data.techStack, ...data.techStack].map((t, i) => (
              <span key={`a-${t}-${i}`} className="chip">
                {t}
              </span>
            ))}
          </div>
          <div className="marquee marquee-reverse">
            {[...data.techStack, ...data.techStack].reverse().map((t, i) => (
              <span key={`b-${t}-${i}`} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head" variant="right">
            <p className="eyebrow">Industries We Serve</p>
            <h2>Deep domain fluency. Cross-industry impact.</h2>
            <p>
              We partner with leaders across sectors where technology, trust, and transformation
              intersect.
            </p>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {data.industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 4) * 0.06} variant="up">
                <Link
                  href={`/industries#${ind.slug}`}
                  className="tile-lift group relative block h-[200px] overflow-hidden border border-[var(--line)]"
                >
                  <Image
                    src={imgPath(industryImage(i))}
                    alt={ind.name}
                    fill
                    loading="lazy"
                    className="media-zoom object-cover"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,4,10,0.95)] via-[rgba(2,4,10,0.4)] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-lg leading-snug">{ind.name}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-snug text-[rgba(232,238,248,0.7)]">
                      {ind.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href="/industries" className="link-arrow">
              Explore all industries →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--line)] py-12">
        <div className="container">
          <Reveal variant="fade">
            <p className="eyebrow mx-auto mb-6 !flex justify-center">Client Impact</p>
            <StatCounters />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <Reveal variant="left" className="relative aspect-[16/11] overflow-hidden border border-[var(--line)] float-soft">
            <Image
              src={imgPath("Staff.png")}
              alt="Vertex800 team and talent network"
              fill
              loading="lazy"
              className="media-zoom object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal variant="right">
            <div className="section-head mb-0">
              <p className="eyebrow">Our Architecture Philosophy</p>
              <h2>Modular. Scalable. AI-native.</h2>
              <p>
                We design software systems that compound value over time - intelligent enough to
                adapt, beautiful enough to inspire trust, and structured to evolve with your
                business.
              </p>
            </div>
            <blockquote className="panel mt-6 border-l-2 border-[var(--signal)] p-5">
              <p className="font-display text-lg leading-snug text-[var(--text)]">
                “{data.company.founderQuote}”
              </p>
              <footer className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                - {data.company.founderTitle}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
