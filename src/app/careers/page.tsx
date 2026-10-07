import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { data } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Vertex800's Global Talent Network - top 5% engineers and consultants.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a global talent network of the top 5%"
        description="Build intelligent software with practitioners who care about craft, partnership, and lasting impact."
        image="Staff.png"
        cta={{ href: "#roles", label: "View Open Roles →" }}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Why Vertex800</p>
            <h2>Culture that compounds excellence</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Global by design", "Collaborate across borders with colleagues who set a high bar for engineering and consulting craft."],
              ["Enterprise impact", "Ship products and platforms that matter - AI, cloud, and full-stack systems at real scale."],
              ["Flexible engagement", "Remote-first opportunities with optional hub presence and client-site engagements when needed."],
            ].map(([title, copy], i) => (
              <Reveal key={title} delay={i * 0.05} className="panel p-6">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Brand Pillars</p>
            <h2>What we stand for</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.brandPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04} className="panel border-t-2 border-t-[var(--signal)] p-6">
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="section scroll-mt-24 pt-0">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Open Roles</p>
            <h2>Current opportunities</h2>
            <p>Don&apos;t see a perfect fit? We&apos;re always interested in exceptional talent.</p>
          </Reveal>
          <div className="space-y-3">
            {data.careers.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.03}>
                <div className="panel flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-display text-xl">{role.title}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                      {role.team} · {role.location} · {role.type}
                    </p>
                  </div>
                  <Link href="/contact" className="btn btn-ghost">
                    Apply →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-[var(--muted)]">
            Send your profile to{" "}
            <a href="mailto:info@vertex800.com" className="font-semibold text-[var(--signal)]">
              info@vertex800.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
