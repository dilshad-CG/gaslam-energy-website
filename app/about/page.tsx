import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Container, SectionHeading, Eyebrow } from "@/components/ui/primitives";
import { Reveal, Stagger } from "@/components/ui/motion";
import { ServiceCard } from "@/components/ui/cards";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Stat } from "@/components/ui/Stat";
import { site, whyGaslam, stats, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Established 2017, Randburg",
  description:
    "Gas'Lam Energy Group is a South African energy solutions provider established in 2017, headquartered in Randburg with a national partner network. Mission, vision and what we stand for.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Gas'Lam"
        title="A South African energy partner, built for uptime."
        lead={site.description}
        image={images.engineer}
        imageAlt="Gas'Lam technician on site"
      />

      {/* Story */}
      <section className="bg-bone py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Who we are" title="Established 2017. Grown into a name procurement trusts." />
              <div className="mt-6 space-y-5 text-body-lg text-slate">
                <p>
                  Gas&rsquo;Lam Energy Group is a South African energy solutions provider
                  specialising in mobile power generation, fuel management, and lubricants &
                  filtration. Since {site.established}, we&rsquo;ve grown into a trusted
                  partner for corporates, telecommunications and industrial clients who demand
                  reliable uptime, compliance and cost transparency.
                </p>
                <p>
                  We run from Randburg, Gauteng, with a partner network that extends
                  nationally — positioned to keep operations powered as South Africa&rsquo;s
                  energy landscape keeps shifting.
                </p>
              </div>
            </div>
            <Reveal delay={0.15}>
              <ImageReveal src={images.control} alt="Engineering documentation and planning" className="aspect-[3/4]" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ink py-section text-bone">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-card border border-white/10 bg-carbon p-8 lg:p-10">
              <Eyebrow tone="dark" className="mb-6">Mission</Eyebrow>
              <p className="font-display text-[1.6rem] font-medium leading-snug text-bone">
                {site.mission}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-card border border-white/10 bg-green-deep p-8 lg:p-10">
              <Eyebrow tone="dark" className="mb-6">Vision</Eyebrow>
              <p className="font-display text-[1.6rem] font-medium leading-snug text-bone">
                {site.vision}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-12 lg:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} prefix={s.prefix} suffix={s.suffix} isYear={s.format === "year"} tone="dark" />
            ))}
          </div>
        </Container>
      </section>

      {/* What we stand for = why gaslam reframed */}
      <section className="bg-carbon py-section text-bone">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="The reasons clients keep us on the list." tone="dark" />
          <Stagger className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {whyGaslam.map((w, i) => (
              <ServiceCard key={w.title} title={w.title} body={w.body} index={String(i + 1).padStart(2, "0")} tone="dark" />
            ))}
          </Stagger>
        </Container>
      </section>

      <CTA />
    </>
  );
}
