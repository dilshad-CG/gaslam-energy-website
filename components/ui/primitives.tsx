import { type ReactNode } from "react";
import { Reveal, AnimatedText } from "./motion";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-accent" aria-hidden />
      <span className={tone === "dark" ? "eyebrow-light" : "eyebrow"}>{children}</span>
    </div>
  );
}

/** eyebrow + heading + optional lead, with reveal animation. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  className = "",
  as = "h2",
  headingClass = "text-h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
  headingClass?: string;
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start";
  const titleColor = tone === "dark" ? "text-bone" : "text-ink";
  const leadColor = tone === "dark" ? "text-bone/65" : "text-slate";
  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow tone={tone} className="mb-5">{eyebrow}</Eyebrow>}
      <AnimatedText as={as} text={title} className={`${headingClass} ${titleColor}`} />
      {lead && (
        <Reveal delay={0.15}>
          <p className={`mt-5 text-body-lg max-w-prose ${leadColor}`}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
