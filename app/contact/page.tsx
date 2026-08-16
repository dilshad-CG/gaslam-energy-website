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
                <span className="data-label text-accent-deep">Head office</span>
                <p className="mt-3 font-display text-h3 text-ink">{site.hq.line}</p>
                <p className="mt-1 text-body text-slate">{site.hq.city}, {site.hq.province}, South Africa</p>
              </Reveal>

              <Reveal delay={0.08}>
                <span className="data-label text-accent-deep">Phone</span>
                <p className="mt-3">
                  <a href={site.phoneHref} className="link-underline font-display text-h3 text-ink">
                    {site.phone}
                  </a>
                </p>
                <a
                  href={site.whatsappPrefill}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-pill bg-[#25D366] px-4 py-2.5 text-small font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm3.5 12.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </Reveal>

              <Reveal delay={0.12}>
                <span className="data-label text-accent-deep">Online</span>
                <p className="mt-3">
                  <a href={site.url} className="link-underline font-display text-h3 text-ink">
                    {site.domain}
                  </a>
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <span className="data-label text-accent-deep">Coverage</span>
                <p className="mt-3 max-w-sm text-body text-slate">
                  Randburg head office with a national partner network. Rapid response of 1–4
                  hours across Gauteng.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-card border border-[#e5e0d5] bg-paper p-6">
                  <p className="text-small text-slate">
                    Prefer to talk it through? Call or WhatsApp us directly — or send the form
                    and we&rsquo;ll come back to you with a scoped response.
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
