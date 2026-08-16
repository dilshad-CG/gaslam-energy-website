import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal, Stagger } from "@/components/ui/motion";
import { ServiceCard } from "@/components/ui/cards";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { lubricantsServices, partners, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lubricants & Filtration — ROWE, MANN-FILTER, WIX, SAKURA",
  description:
    "Authorised ROWE lubricants and MANN-FILTER, WIX and SAKURA filtration, with oil sampling, condition monitoring, registered used-oil collection and secured supply. Bulk, 210 L, 20 L and 5 L.",
};

const packSizes = ["Bulk", "210 L", "20 L", "5 L"];

export default function LubricantsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Division B · Lubricants & Filtration"
        title="The right product, in the right pack, before you need it."
        lead={lubricantsServices.intro}
        image={images.lubricants}
        imageAlt="Oil sampling and condition monitoring"
      />

      {/* Authorised brands */}
      <section className="border-b rule-light bg-bone py-12">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-xs text-small text-slate">
              Authorised supply — genuine product from established brands, not grey imports.
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {partners.map((p) => (
                <span key={p} className="font-display text-xl font-bold tracking-tight text-ink/75">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Capability grid */}
      <section className="bg-bone py-section">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Supply, monitored and secured."
            lead="Product is only half of it. Sampling tells you what's happening inside the machine, and a disciplined stock model means a shortage upstream never becomes your breakdown."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lubricantsServices.items.map((item, i) => (
              <ServiceCard key={item.title} title={item.title} body={item.body} index={String(i + 1).padStart(2, "0")} />
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Packaging + monitoring split */}
      <section className="bg-carbon py-section text-bone">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Packaging"
                title="Matched to how your team draws stock."
                lead="From a 5 L top-up to bulk delivery, product arrives in the format your operation actually uses — no repackaging, no waste."
                tone="dark"
              />
              <Reveal delay={0.2}>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {packSizes.map((p) => (
                    <div key={p} className="rounded-card border border-white/10 bg-ink px-4 py-5 text-center">
                      <span className="font-display text-xl font-bold text-amber">{p}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <ImageReveal
              src={images.control}
              alt="Technical documentation and analysis"
              className="aspect-[4/3]"
              overlay
            />
          </div>
        </Container>
      </section>

      <CTA
        headline="Secure your supply."
        body="Tell us your equipment and volumes. We'll set up product, sampling and a stock plan that keeps you covered."
      />
    </>
  );
}
