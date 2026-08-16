"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

const MotionLink = motion.create(Link);

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-[4px] font-display font-semibold text-[0.95rem] px-6 py-3.5 min-h-[48px] transition-colors duration-300 ease-out-expo overflow-hidden";

// Note: no base text-color on secondary/ghost — colour is inherited or set via
// className, to avoid Tailwind text-utility conflicts (e.g. text-current vs text-bone).
const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-bright",
  secondary: "bg-transparent ring-1 ring-inset ring-current/40 hover:ring-current/80",
  ghost: "bg-transparent hover:text-accent-bright",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  arrow = true,
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
>) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setT({ x: (e.clientX - (r.left + r.width / 2)) * 0.18, y: (e.clientY - (r.top + r.height / 2)) * 0.28 });
  }

  const isInternal = href.startsWith("/");
  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/25 opacity-0 group-hover:opacity-100 group-hover:animate-sheen"
        />
      )}
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span className="relative z-10 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" aria-hidden>
          →
        </span>
      )}
    </>
  );

  const motionProps = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: () => setT({ x: 0, y: 0 }),
    animate: { x: t.x, y: t.y },
    transition: { type: "spring" as const, stiffness: 200, damping: 15, mass: 0.4 },
    className: `${base} ${variants[variant]} ${className}`,
  };

  if (isInternal) {
    return (
      <MotionLink href={href} {...motionProps} {...(rest as object)}>
        {inner}
      </MotionLink>
    );
  }
  return (
    <motion.a href={href} {...motionProps} {...rest}>
      {inner}
    </motion.a>
  );
}
