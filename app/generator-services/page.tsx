import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTA } from "@/components/sections/CTA";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Stagger } from "@/components/ui/motion";
import { ServiceCard } from "@/components/ui/cards";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { generatorServices, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Generator Services — Rental, Refuelling & Maintenance",
  description:
    "Mobile generator rental and deployment (38–40 kVA), refuelling, corrective maintenance, load testing and commissioning. 24/7 call-outs with 1–4 hour rapid response in Gauteng.",
};

export default function GeneratorServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Division A · Generator Services"
        title="When the grid drops, the site stays live."
        lead={generatorServices.intro}
        image={images.engineer}
        imageAlt="Technician working on an electrical power panel"
      />

      {/* Key facts band */}
      <section className="border-b rule-light bg-bone py-10">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <FactBand label="Fleet" value={generatorServices.fleet} />
            <FactBand label="Response" value={generatorServices.response} />
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="bg-bone py-section">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title="Everything a live deployment needs."
            lead="One team owns the whole chain — delivery, fuel, faults and the paperwork. You get uptime and an audit trail, not a list of subcontractors to chase."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {generatorServices.items.map((item, i) => (
              <ServiceCard key={item.title} title={item.title} body={item.body} index={String(i + 1).padStart(2, "0")} />
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Image + rapid response */}
      <section className="bg-carbon py-section text-bone">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ImageReveal
              src={images.maintenance}
              alt="Engineer servicing industrial equipment"
              className="aspect-[4/3]"
              overlay
            />
            <div>
              <SectionHeading
                eyebrow="24/7 call-outs"
                title="1–4 hour rapid response in Gauteng."
                lead="A running unit shouldn't be a gamble. When something faults, our technicians are dispatched fast — and every call-out is documented, load-tested and signed back into service."
                tone="dark"
              />
            </div>
          </div>
        </Container>
      </section>

      <ProcessTimeline />
      <CTA
        headline="Need power that holds?"
        body="Tell us the load, the site and the window. We'll come back with a deployment plan built around your uptime."
      />
    </>
  );
}

function FactBand({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="data-label shrink-0 text-accent-deep">{label}</span>
      <span className="font-display text-[1.05rem] font-medium text-ink">{value}</span>
    </div>
  );
}
