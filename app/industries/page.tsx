import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Stagger } from "@/components/ui/motion";
import { IndustryCard } from "@/components/ui/cards";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { industries, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries — Corporate, Telecommunications & Industrial",
  description:
    "Gas'Lam supports corporate, telecommunications and industrial operations that can't afford downtime, with mobile power, fuel and lubrication run as one accountable service.",
};

const sectorDetail = [
  {
    title: "Corporate",
    image: images.fleet,
    imageAlt: "Power infrastructure supporting corporate operations",
    body: "Head offices, banking floors and facilities where an outage stops trade and locks staff out of systems. We hold power through load-shedding and grid faults so business keeps moving.",
  },
  {
    title: "Telecommunications",
    image: images.telecom,
    imageAlt: "Network and data infrastructure",
    body: "RF sites and network infrastructure that has to stay up around the clock. Deployment and corrective maintenance built for 24/7 uptime — the same discipline we bring to ATC and Metro Teleworks.",
  },
  {
    title: "Industrial",
    image: images.industrial,
    imageAlt: "Industrial production facility",
    body: "Plants and operations where lost power means lost production. Generators, fuel and lubrication kept running together, so a single supplier answers for the whole picture.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Built for operations that can't stop."
        lead="We work where downtime carries a hard, immediate cost. Three sectors, one requirement — stay up."
        image={images.industrial}
        imageAlt="Industrial facility"
      />

      <section className="bg-ink py-section-sm text-bone">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {industries.map((ind) => (
              <IndustryCard key={ind.title} {...ind} />
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Detailed sectors, alternating */}
      <section className="bg-bone py-section">
        <Container>
          <div className="space-y-20 lg:space-y-28">
            {sectorDetail.map((s, i) => (
              <div
                key={s.title}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <ImageReveal src={s.image} alt={s.imageAlt} className="aspect-[4/3]" />
                <div>
                  <SectionHeading eyebrow={`0${i + 1} · Sector`} title={s.title} />
                  <p className="mt-5 max-w-prose text-body-lg text-slate">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        headline="Is uptime critical to your operation?"
        body="If a power interruption costs you money the moment it starts, let's talk about backing your site."
      />
    </>
  );
}
