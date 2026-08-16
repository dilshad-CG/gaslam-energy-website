"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/primitives";

export function ProcessTimeline() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-ink py-section text-bone">
      <div className="container">
        <SectionHeading
          eyebrow="How we deploy"
          title="One process, signed off at every step."
          lead="Every deployment runs the same disciplined route — from the first site check to clean demobilisation. No improvising on a live site."
          tone="dark"
        />

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-0">
          {/* Spine */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" aria-hidden>
            <motion.div
              className="absolute inset-x-0 top-0 w-full origin-top bg-amber"
              style={{ scaleY: reduce ? 1 : scaleY, height: "100%" }}
            />
          </div>

          <ol className="space-y-12 sm:space-y-0">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={step.n}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-12 ${
                    left ? "" : "sm:[&>*:first-child]:col-start-2"
                  } sm:py-8`}
                >
                  {/* Node */}
                  <span
                    className="absolute left-[-25px] top-1.5 z-10 grid h-4 w-4 place-items-center rounded-full bg-ink ring-2 ring-amber sm:left-1/2 sm:top-10 sm:-translate-x-1/2"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  </span>

                  <div className={`${left ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"}`}>
                    <span className="font-display text-[2.5rem] font-bold leading-none tabular-nums text-amber/25">
                      {step.n}
                    </span>
                    <h3 className="mt-2 text-h3 text-bone">{step.title}</h3>
                    <p className={`mt-2 max-w-sm text-body text-bone/60 ${left ? "sm:ml-auto" : ""}`}>
                      {step.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
