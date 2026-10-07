import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { data } from "@/lib/data";

export const metadata: Metadata = {
  title: "Alliances",
  description:
    "Vertex800 alliances with AWS, Google, Oracle, Salesforce, SAP, ServiceNow, and Workday.",
};

export default function AlliancesPage() {
  return (
    <>
      <PageHero
        eyebrow="Alliances"
        title="Technology alliances that accelerate outcomes"
        description="We combine Vertex800 expertise with leading platforms so you get certified depth and faster delivery."
        image="Cloud1.jpg"
        cta={{ href: "/contact", label: "Partner with Us →" }}
      />

      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.alliances.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.04}>
              <article id={a.slug} className="panel scroll-mt-28 h-full p-6">
                <p className="eyebrow">Alliance</p>
                <h2 className="font-display mt-4 text-2xl">{a.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{a.description}</p>
                <Link href="/contact" className="link-arrow mt-5 inline-block">
                  Discuss {a.name} initiatives →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
