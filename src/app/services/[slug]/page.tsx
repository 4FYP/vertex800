import type { Metadata } from "next";
import { InsightsFilter } from "@/components/InsightsFilter";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thought leadership from Vertex800 on AI, cloud, cyber, tax, and digital transformation.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on technology, talent, and transformation"
        description="Thought leadership from Vertex800 practitioners - practical frameworks for AI, cloud, and digital transformation."
        image="Business_Intelligence.png"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <InsightsFilter />
          </Reveal>
        </div>
      </section>
    </>
  );
}
