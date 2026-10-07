import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { data, featuredFooterSlugs } from "@/lib/data";

export function Footer() {
  const { company } = data;
  const featured = data.services.filter((s) =>
    (featuredFooterSlugs as readonly string[]).includes(s.slug)
  );

  return (
    <footer className="relative z-[1] mt-auto border-t border-[var(--line)]">
      <div className="container grid items-center gap-6 border-b border-[var(--line)] py-12 md:grid-cols-[1.4fr_auto]">
        <Reveal variant="left">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-none">
            Ready to build what&apos;s next?
          </h2>
          <p className="mt-3 max-w-xl text-[var(--muted)]">
            Partner with Vertex800 to scale intelligent software, elite talent, and lasting digital
            advantage.
          </p>
        </Reveal>
        <Reveal variant="right">
          <Link href="/contact" className="btn btn-primary btn-pulse">
            Start Your Project →
          </Link>
        </Reveal>
      </div>

      <div className="container grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="Vertex800" width={200} height={56} className="h-12 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            A global consulting and technology firm helping organizations scale with intelligent
            talent and cutting-edge solutions - from AI &amp; Engineering to Cyber, Tax, Audit, and
            Strategy &amp; Transactions.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              ["in", company.social.linkedin],
              ["ig", company.social.instagram],
              ["fb", company.social.facebook],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center border border-[var(--line)] font-mono text-xs text-[var(--ice)] transition hover:border-[var(--signal)] hover:text-[var(--signal)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--ember-soft)]">
            Services
          </h4>
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="text-sm text-[rgba(232,238,248,0.72)] transition hover:text-[var(--signal)]"
            >
              {s.shortTitle}
            </Link>
          ))}
          <Link href="/services" className="link-arrow mt-2">
            View all services →
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--ember-soft)]">
            Quick Links
          </h4>
          {[
            ["/about", "About"],
            ["/services", "Services"],
            ["/industries", "Industries"],
            ["/alliances", "Alliances"],
            ["/insights", "Insights"],
            ["/careers", "Careers"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-[rgba(232,238,248,0.72)] transition hover:text-[var(--signal)]"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h4 className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--ember-soft)]">
            Contact
          </h4>
          <a href={`tel:${company.phone.replace(/\D+/g, "")}`} className="hover:text-[var(--signal)]">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="hover:text-[var(--signal)]">
            {company.email}
          </a>
          <p className="text-[var(--muted)]">{company.address}</p>
          <p className="italic text-[rgba(139,151,171,0.8)]">{company.appointmentNote}</p>
        </div>
      </div>

      <div className="container flex flex-col gap-2 border-t border-[var(--line)] py-5 text-xs text-[var(--muted)] sm:flex-row sm:justify-between">
        <span>{company.copyright}</span>
        <span className="font-mono uppercase tracking-[0.14em]">{company.tagline}</span>
      </div>
    </footer>
  );
}
