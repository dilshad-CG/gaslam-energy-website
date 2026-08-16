import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal, Stagger } from "@/components/ui/motion";
import { CaseStudyCard } from "@/components/ui/cards";
import { caseStudies, images } from "@/lib/site";
import { ImageReveal } from "@/components/ui/ImageReveal";

export const metadata: Metadata = {
  title: "Case Studies — ABSA, ATC & Metro Teleworks",
  description:
    "Real deployments for critical operations: generators for ABSA (via Bidvest FM), telecommunications maintenance for ATC, and RF site power for Metro Teleworks.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Trusted on live, critical sites."
        lead="These are real clients and real deployments. We don't publish invented quotes or numbers — the work speaks."
      />

      <section className="bg-bone py-section">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseStudyCard key={c.client} {...c} />
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Closing statement + image */}
      <section className="bg-carbon py-section text-bone">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="What it proves"
                title="Operational agility, across sectors."
                lead="Banking continuity, telecommunications uptime and RF site power are different problems with the same demand — power that holds and a partner that stays accountable. Delivering across all three is the proof that our model scales."
                tone="dark"
              />
            </div>
            <ImageReveal src={images.telecom} alt="Critical network infrastructure" className="aspect-[4/3]" overlay />
          </div>
        </Container>
      </section>

      <section className="bg-ink pb-section">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-small text-bone/45">
              Client references are provided on request during procurement. We don&rsquo;t
              publish testimonials or performance figures we can&rsquo;t stand behind.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
