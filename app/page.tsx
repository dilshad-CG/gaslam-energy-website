import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTA } from "@/components/sections/CTA";
import { SectionHeading, Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal, Stagger } from "@/components/ui/motion";
import { Stat } from "@/components/ui/Stat";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";
import {
  IndustryCard,
  CaseStudyCard,
  ServiceCard,
  LinkCard,
} from "@/components/ui/cards";
import {
  stats,
  partners,
  clients,
  industries,
  caseStudies,
  whyGaslam,
  generatorServices,
  lubricantsServices,
  images,
  site,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersStrip />
      <ReliabilitySection />
      <DivisionsSection />
      <ProcessTimeline />
      <IndustriesSection />
      <ProofSection />
      <WhySection />
      <SafetyScaleSection />
      <CTA />
    </>
  );
}

/* ── Trust strip: authorised brands + client names ─────────────── */
function PartnersStrip() {
  return (
    <section className="border-b rule-light bg-bone py-10">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <p className="max-w-xs text-center text-small text-slate lg:text-left">
            Authorised supply and a live track record — not marketing claims.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span key={p} className="font-display text-lg font-bold tracking-tight text-ink/70">
                {p}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── RELIABILITY: the trust thesis + stats ─────────────────────── */
function ReliabilitySection() {
  return (
    <section className="bg-bone py-section">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading
            eyebrow="Why it matters"
            title="Power reliability isn't a luxury. It's infrastructure."
            lead="When the grid drops, the cost isn't the outage — it's the stopped trade, the dark RF site, the halted line. Gas'Lam exists to keep that from happening, with equipment and people that show up and stay accountable."
          />
          <Reveal delay={0.15}>
            <p className="text-body text-slate">
              Established in {site.established} and run from Randburg, Gauteng, Gas&rsquo;Lam has
              grown into a trusted partner for corporate, telecommunications and industrial
              clients — backed by a partner network that reaches nationally.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-[#e5e0d5] pt-12 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat
              key={s.label}
              value={s.value}
              label={s.label}
              prefix={s.prefix}
              suffix={s.suffix}
              isYear={s.format === "year"}
              tone="light"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── DIVISIONS: split-screen for the two businesses ────────────── */
function DivisionsSection() {
  return (
    <section className="bg-carbon py-section text-bone">
      <Container>
        <SectionHeading
          eyebrow="What we run"
          title="Two divisions. One accountable supplier."
          lead="Generator Services and Lubricants & Filtration under one roof — fewer contracts, fewer hand-off gaps, one team answering for uptime."
          tone="dark"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <DivisionBlock
            eyebrow={generatorServices.eyebrow}
            title={generatorServices.title}
            body={generatorServices.intro}
            meta={[generatorServices.fleet, generatorServices.response]}
            href="/generator-services"
            image={images.fleet}
            imageAlt="Electrical power infrastructure"
          />
          <DivisionBlock
            eyebrow={lubricantsServices.eyebrow}
            title={lubricantsServices.title}
            body={lubricantsServices.intro}
            meta={["ROWE · MANN-FILTER · WIX · SAKURA", "Bulk · 210 L · 20 L · 5 L"]}
            href="/lubricants-filtration"
            image={images.lubricants}
            imageAlt="Oil sampling and condition monitoring in a lab"
          />
        </div>
      </Container>
    </section>
  );
}

function DivisionBlock({
  eyebrow,
  title,
  body,
  meta,
  href,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  body: string;
  meta: string[];
  href: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <Reveal className="group flex flex-col overflow-hidden rounded-card border border-white/10 bg-ink">
      <ImageReveal src={image} alt={imageAlt} className="aspect-[16/10]" overlay parallax={false} />
      <div className="flex flex-1 flex-col p-8">
        <span className="eyebrow-light">{eyebrow}</span>
        <h3 className="mt-4 text-h2 text-bone">{title}</h3>
        <p className="mt-4 text-body text-bone/60">{body}</p>
        <ul className="mt-6 space-y-2">
          {meta.map((m) => (
            <li key={m} className="flex items-center gap-3 text-small text-bone/75">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden />
              {m}
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-2">
          <Button href={href} variant="ghost" className="!px-0 text-amber">
            Explore {title}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

/* ── INDUSTRIES ────────────────────────────────────────────────── */
function IndustriesSection() {
  return (
    <section className="bg-ink py-section text-bone">
      <Container>
        <SectionHeading
          eyebrow="Who we power"
          title="Built for operations that can't stop."
          lead="We work where downtime has a hard cost. Three sectors, one requirement: stay up."
          tone="dark"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {industries.map((ind) => (
            <IndustryCard key={ind.title} {...ind} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ── PROOF: case studies ───────────────────────────────────────── */
function ProofSection() {
  return (
    <section className="bg-bone py-section">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Proof"
            title="Trusted on live, critical sites."
            lead="Real deployments for organisations that can't afford to go dark. No invented quotes — just the work."
          />
          <Reveal>
            <Button href="/case-studies" variant="ghost" className="!px-0 text-amber-deep">
              All case studies
            </Button>
          </Reveal>
        </div>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.client} {...c} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ── WHY GAS'LAM ───────────────────────────────────────────────── */
function WhySection() {
  return (
    <section className="bg-carbon py-section text-bone">
      <Container>
        <SectionHeading
          eyebrow="Why Gas'Lam"
          title="Six reasons procurement keeps us on the list."
          tone="dark"
        />
        <Stagger className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {whyGaslam.map((w, i) => (
            <ServiceCard key={w.title} title={w.title} body={w.body} index={String(i + 1).padStart(2, "0")} tone="dark" />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ── SAFETY + SCALE: closing double block ──────────────────────── */
function SafetyScaleSection() {
  return (
    <section className="bg-ink pb-section pt-4">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-card border border-white/10 bg-carbon p-8 lg:p-10">
            <Eyebrow tone="dark" className="mb-6">Safety & compliance</Eyebrow>
            <h2 className="text-h2 uppercase text-bone">Safety isn&rsquo;t a checkbox. It&rsquo;s how we operate.</h2>
            <p className="mt-5 max-w-md text-body text-bone/60">
              OHS Act adherence, environmental standards and trained crews — Wireman&rsquo;s
              Licence, First Aid & Firefighting, Risk Assessment, Working at Heights and
              Defensive Driving.
            </p>
            <div className="mt-8">
              <Button href="/safety-compliance" variant="secondary" arrow className="text-bone">
                How we stay compliant
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-card border border-white/10 bg-navy-deep p-8 lg:p-10">
            <div className="grid-lines absolute inset-0 opacity-30" aria-hidden />
            <div className="relative">
              <Eyebrow tone="dark" className="mb-6">National capability</Eyebrow>
              <h2 className="text-h2 uppercase text-bone">Local expertise. National reach.</h2>
              <p className="mt-5 max-w-md text-body text-bone/65">
                Headquartered in Randburg with a partner network and logistics capability
                that extends nationally — and 1–4 hour rapid response in Gauteng.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="ghost" className="!px-0 text-amber">
                  About Gas&rsquo;Lam
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
