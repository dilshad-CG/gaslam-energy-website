import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink text-bone">
      <div className="container relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="dark" />
            <p className="mt-6 font-display text-2xl font-medium leading-tight text-bone">
              Power On.<br />
              <span className="text-accent">Every Hour.</span>
            </p>
            <p className="mt-5 text-small text-bone/55">{site.description}</p>
          </div>

          <div>
            <h3 className="data-label text-bone/45">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-small text-bone/75 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="data-label text-bone/45">Contact</h3>
            <address className="mt-5 space-y-4 not-italic text-small text-bone/75">
              <div>
                <span className="block text-bone/45 text-caption uppercase tracking-wider">Head office</span>
                {site.hq.line}
              </div>
              <div>
                <span className="block text-bone/45 text-caption uppercase tracking-wider">Phone</span>
                <a href={site.phoneHref} className="link-underline transition-colors hover:text-accent">
                  {site.phone}
                </a>
                <span className="mx-2 text-bone/30">·</span>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline transition-colors hover:text-accent">
                  WhatsApp
                </a>
              </div>
              <div>
                <span className="block text-bone/45 text-caption uppercase tracking-wider">Web</span>
                <a href={site.url} className="link-underline transition-colors hover:text-accent">
                  {site.domain}
                </a>
              </div>
              <div>
                <Link href="/contact" className="inline-flex items-center gap-2 font-display font-semibold text-accent">
                  Request a Solution <span aria-hidden>→</span>
                </Link>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-caption text-bone/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>Established {site.established} · Randburg, Gauteng · South Africa</p>
        </div>
      </div>
    </footer>
  );
}
