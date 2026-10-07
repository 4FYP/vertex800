import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { data, imgPath, industryImage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Vertex800 industries: Consumer, Financial Services, Life Sciences, TMT, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain expertise across the sectors that shape tomorrow"
        description="We bring technology fluency and industry context to every engagement."
        image="Cloud.jpg"
        cta={{ href: "/contact", label: "Talk to an Expert →" }}
      />

      <section className="section">
        <div className="container space-y-8">
          {data.industries.map((ind, i) => (
            <Reveal key={ind.slug}>
              <article
                id={ind.slug}
                className="grid scroll-mt-28 overflow-hidden border border-[var(--line)] lg:grid-cols-[1.1fr_1.2fr]"
              >
                <div className="relative min-h-[240px]">
                  <Image
                    src={imgPath(industryImage(i))}
                    alt={ind.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,4,10,0.85)] to-transparent" />
                  <h2 className="font-display absolute bottom-5 left-5 text-3xl">{ind.name}</h2>
                </div>
                <div className="bg-[rgba(255,255,255,0.02)] p-7 md:p-10">
                  <p className="text-lg text-[rgba(232,238,248,0.88)]">{ind.description}</p>
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    From strategy through delivery, we help {ind.name} organizations adopt AI,
                    modernize platforms, and scale with our global talent network.
                  </p>
                  <Link href="/contact" className="btn btn-ghost mt-6">
                    Discuss your initiative →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
