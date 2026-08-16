import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal, Stagger } from "@/components/ui/motion";
import { ComplianceBadge } from "@/components/ui/cards";
import { complianceIcons } from "@/components/ui/icons";
import { compliance, images } from "@/lib/site";
import { ImageReveal } from "@/components/ui/ImageReveal";

export const metadata: Metadata = {
  title: "Safety & Compliance — OHS Act, Certified Crews",
  description:
    "Gas'Lam adheres to the OHS Act, environmental standards and quality management. Certified crews: Wireman's Licence, First Aid & Firefighting, Risk Assessment, Working at Heights and Defensive Driving.",
};

export default function SafetyCompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Safety & Compliance"
        title="Safety isn't a checkbox. It's how we operate."
        lead={compliance.intro}
        image={images.engineer}
        imageAlt="Certified technician working safely on site"
      />

      {/* Standards statement */}
      <section className="bg-bone py-section-sm">
        <Container>
          <div className="grid gap-8 border-b border-[#e5e0d5] pb-12 md:grid-cols-3">
            {[
              { k: "OHS Act", v: "Occupational health & safety built into every SOP." },
              { k: "Environmental", v: "Registered used-oil handling and disposal standards." },
              { k: "Quality", v: "ISO-aligned procedures with sign-off at each step." },
            ].map((s) => (
              <Reveal key={s.k}>
                <span className="data-label text-amber-deep">{s.k}</span>
                <p className="mt-3 text-body text-slate">{s.v}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="bg-ink py-section text-bone">
        <Container>
          <SectionHeading
            eyebrow="Trained & certified"
            title="Qualified people, not just equipment."
            lead="Every deployment is run by crews trained for the work in front of them. Certification is verified during procurement — we don't publish licence numbers or expiry dates here."
            tone="dark"
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {compliance.certifications.map((c, i) => {
              const Icon = complianceIcons[i % complianceIcons.length];
              return <ComplianceBadge key={c.title} title={c.title} body={c.body} icon={<Icon />} />;
            })}
          </Stagger>
        </Container>
      </section>

      {/* Documentation */}
      <section className="bg-carbon py-section text-bone">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ImageReveal src={images.control} alt="Compliance documentation and records" className="aspect-[4/3]" overlay />
            <div>
              <SectionHeading
                eyebrow="The paperwork"
                title="If it isn't documented, it didn't happen."
                lead="Commissioning records, service logs, risk assessments and used-oil trails — closed out and handed over. It's what your auditors ask for, and what keeps your own compliance intact."
                tone="dark"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTA
        headline="Compliance you can hand to an auditor."
        body="Ask us how we document a deployment. We'll show you exactly what you'd receive."
      />
    </>
  );
}
