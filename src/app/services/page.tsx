import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { data, imgPath, serviceImage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Vertex800 services - AI & Engineering, Cyber, Audit, Tax, Strategy & Transactions, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Vast services. Rich experience. Real results."
        description="Whether you're scaling a growth company or transforming a global enterprise, tap into our breadth of services to drive progress."
        image="IT.jpg"
        cta={{ href: "/contact", label: "Start Your Project →" }}
      />

      <section className="section">
        <div className="container space-y-14">
          {data.serviceGroups.map((group) => (
            <div key={group.id}>
              <Reveal>
                <h2 className="font-display mb-6 text-2xl text-[var(--signal)] md:text-3xl">
                  {group.label}
                </h2>
              </Reveal>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {data.services
                  .filter((s) => s.group === group.id)
                  .map((s, i) => (
                    <Reveal key={s.slug} delay={i * 0.03}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="panel group block h-full overflow-hidden transition hover:-translate-y-1 hover:border-[var(--line-strong)]"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={imgPath(serviceImage(s.slug))}
                            alt={s.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                            sizes="(max-width:768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,4,10,0.95)] via-transparent to-transparent" />
                        </div>
                        <div className="p-5">
                          <h3 className="font-display text-xl">{s.title}</h3>
                          <p className="mt-2 text-sm text-[var(--muted)]">{s.tagline}</p>
                          {"subAreas" in s && s.subAreas && (
                            <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[rgba(139,151,171,0.85)]">
                              {s.subAreas.map((a) => a.title).join(" · ")}
                            </p>
                          )}
                          <span className="link-arrow mt-4 inline-block">Explore →</span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
