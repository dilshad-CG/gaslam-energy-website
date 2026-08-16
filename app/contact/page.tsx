import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Request a Solution",
  description:
    "Request a power, fuel or lubrication solution from Gas'Lam Energy Group. Head office: 5 1st Ave, Bordeaux, Randburg, Gauteng.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a solution."
        lead="Tell us what you run and where. We'll come back with a plan built around your uptime — not a generic quote."
      />

      <section className="bg-bone py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Details */}
            <div className="flex flex-col gap-10">
              <Reveal>
                <span className="data-label text-amber-deep">Head office</span>
                <p className="mt-3 font-display text-h3 text-ink">{site.hq.line}</p>
                <p className="mt-1 text-body text-slate">{site.hq.city}, {site.hq.province}, South Africa</p>
              </Reveal>

              <Reveal delay={0.1}>
                <span className="data-label text-amber-deep">Online</span>
                <p className="mt-3">
                  <a href={site.url} className="link-underline font-display text-h3 text-ink">
                    {site.domain}
                  </a>
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <span className="data-label text-amber-deep">Coverage</span>
                <p className="mt-3 max-w-sm text-body text-slate">
                  Randburg head office with a national partner network. Rapid response of 1–4
                  hours across Gauteng.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-card border border-[#e5e0d5] bg-paper p-6">
                  <p className="text-small text-slate">
                    A direct phone line is being finalised and will be published here shortly.
                    In the meantime, the fastest route to us is the form — it reaches the team
                    directly.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
