import Link from "next/link";
import { StaggerItem } from "./motion";

/** Service line item — bordered, accent rule reveal on hover. */
export function ServiceCard({
  title,
  body,
  index,
  tone = "light",
}: {
  title: string;
  body: string;
  index?: string;
  tone?: "light" | "dark";
}) {
  const surface =
    tone === "dark"
      ? "border-white/10 bg-carbon hover:border-accent/40"
      : "border-[#e5e0d5] bg-paper hover:border-accent/60";
  const titleColor = tone === "dark" ? "text-bone" : "text-ink";
  const bodyColor = tone === "dark" ? "text-bone/60" : "text-slate";
  return (
    <StaggerItem className={`group relative flex flex-col rounded-card border p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 ${surface}`}>
      <span aria-hidden className="absolute left-0 top-6 h-0 w-[3px] bg-accent transition-all duration-500 ease-out-expo group-hover:h-8" />
      {index && <span className="mb-4 font-display text-caption tabular-nums text-accent-deep">{index}</span>}
      <h3 className={`text-h3 ${titleColor}`}>{title}</h3>
      <p className={`mt-2.5 text-body ${bodyColor}`}>{body}</p>
    </StaggerItem>
  );
}

export function IndustryCard({
  title,
  body,
  tag,
}: {
  title: string;
  body: string;
  tag: string;
}) {
  return (
    <StaggerItem className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-card border border-white/10 bg-carbon p-7 transition-all duration-500 ease-out-expo hover:border-accent/40 hover:-translate-y-1">
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
      <span className="inline-flex w-fit items-center gap-2 rounded-pill border border-accent/30 px-3 py-1 text-caption uppercase tracking-wider text-accent">
        {tag}
      </span>
      <div>
        <h3 className="font-display font-bold tracking-tight leading-[1.05] text-[clamp(1.5rem,1rem+1.8vw,2rem)] [overflow-wrap:anywhere] text-bone">
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-body text-bone/60">{body}</p>
      </div>
    </StaggerItem>
  );
}

export function CaseStudyCard({
  client,
  via,
  sector,
  outcome,
}: {
  client: string;
  via: string;
  sector: string;
  outcome: string;
}) {
  return (
    <StaggerItem className="group relative flex flex-col overflow-hidden rounded-card border border-[#e5e0d5] bg-paper p-7 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[1.75rem] font-bold leading-none text-ink">{client}</h3>
          {via && <p className="mt-1.5 text-small text-slate">{via}</p>}
        </div>
        <span className="whitespace-nowrap rounded-pill bg-ink px-3 py-1 text-caption uppercase tracking-wider text-bone">
          {sector}
        </span>
      </div>
      <div className="my-6 h-px w-full bg-[#e5e0d5]" />
      <p className="text-body text-slate">{outcome}</p>
    </StaggerItem>
  );
}

export function ComplianceBadge({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <StaggerItem className="group flex gap-5 rounded-card border border-white/10 bg-carbon p-6 transition-colors duration-500 hover:border-accent/40">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[5px] bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-[1.05rem] font-semibold text-bone">{title}</h3>
        <p className="mt-1.5 text-small text-bone/55">{body}</p>
      </div>
    </StaggerItem>
  );
}

export function LinkCard({
  href,
  eyebrow,
  title,
  body,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between overflow-hidden rounded-card border border-white/10 bg-carbon p-8 transition-all duration-500 ease-out-expo hover:border-accent/40 hover:-translate-y-1"
    >
      <div>
        <span className="eyebrow-light">{eyebrow}</span>
        <h3 className="mt-4 text-h2 text-bone">{title}</h3>
        <p className="mt-3 max-w-md text-body text-bone/60">{body}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 font-display font-semibold text-accent">
        Explore <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
      </span>
    </Link>
  );
}
