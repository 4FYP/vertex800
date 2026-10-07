import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { data } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vertex800 - Oak Creek, WI. Phone 414-253-9080. Meetings with appointments only.",
};

export default function ContactPage() {
  const { company } = data;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build what's next - together"
        description="Tell us about your project. Meetings with appointments only."
        image="Mob-Web.jpg"
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)]">Start a conversation</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal className="space-y-5">
            <div className="panel p-6">
              <h3 className="font-display text-2xl">Vertex800</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{company.tagline}</p>
              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[var(--ember-soft)]">
                    Address
                  </p>
                  <p className="mt-1 text-[var(--muted)]">{company.address}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[var(--ember-soft)]">
                    Phone
                  </p>
                  <a
                    href={`tel:${company.phone.replace(/\D+/g, "")}`}
                    className="mt-1 inline-block hover:text-[var(--signal)]"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[var(--ember-soft)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 inline-block hover:text-[var(--signal)]"
                  >
                    {company.email}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[var(--ember-soft)]">
                    Appointments
                  </p>
                  <p className="mt-1 text-[var(--muted)]">{company.appointmentNote}</p>
                </div>
              </div>
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

            <div className="overflow-hidden border border-[var(--line)]">
              <iframe
                title="Vertex800 office location"
                src={mapSrc}
                className="h-64 w-full grayscale invert-[0.88] contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
