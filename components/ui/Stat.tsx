"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Count-up number that fires once on view. Non-numeric prefixes/suffixes pass through. */
export function Stat({
  value,
  label,
  prefix = "",
  suffix = "",
  isYear = false,
  tone = "dark",
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  isYear?: boolean;
  tone?: "dark" | "light";
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, reduce]);

  const numColor = tone === "dark" ? "text-bone" : "text-ink";
  const labelColor = tone === "dark" ? "text-bone/55" : "text-slate";

  return (
    <div className="flex flex-col gap-2">
      <div className={`font-display font-bold tracking-tight tabular-nums text-[clamp(2.5rem,5vw,3.75rem)] leading-none ${numColor}`}>
        <span className="text-amber">{prefix}</span>
        {isYear ? value : display}
        <span className="text-amber">{suffix}</span>
      </div>
      <div className={`data-label ${labelColor}`}>{label}</div>
    </div>
  );
}
