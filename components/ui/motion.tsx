"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Motion policy (per house rule): pages paint instantly and stay fully readable
 * without waiting on any animation frame. Content is NEVER hidden behind opacity:0
 * or a scroll trigger. These primitives therefore render content statically; the
 * "premium motion" lives where it can't hide content — the hero load sequence,
 * image parallax, count-up stats, the process scroll-spine, magnetic buttons and
 * hover states. Signatures are kept so pages compose unchanged.
 */
const EASE = [0.16, 1, 0.3, 1] as const;

export const presets = {
  fadeUp: { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } } satisfies Variants,
  fadeIn: { hidden: { opacity: 1 }, show: { opacity: 1 } } satisfies Variants,
  hoverLift: { rest: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: EASE } } } satisfies Variants,
};

export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "p" | "li";
}) {
  const Comp = as;
  return <Comp className={className}>{children}</Comp>;
}

export function Stagger({ children, className }: { children: ReactNode; className?: string; gap?: number }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return <div className={className}>{children}</div>;
}

/** Renders the heading statically — always visible, no per-word masking. */
export function AnimatedText({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}) {
  return <Tag className={className}>{text}</Tag>;
}

/** Kept for any callers that want an explicit motion element; not used to hide content. */
export { motion };
