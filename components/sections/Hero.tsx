"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { images, site } from "@/lib/site";

/**
 * Hero. Text paints immediately (never hidden). Motion is additive and scroll-linked:
 * a slow background parallax + scale, a gentle content parallax, and a fade as the
 * hero scrolls away. Nothing here gates the content's visibility on an animation frame.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <Image
          src={images.heroGenerator}
          alt="Industrial power equipment being serviced on site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" aria-hidden />

      <motion.div style={{ y: textY, opacity: fade }} className="container relative flex h-full flex-col justify-end pb-[10vh] pt-28">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="eyebrow-light">South African Energy Solutions Provider</span>
        </div>

        <h1 className="mt-6 max-w-5xl text-display uppercase text-bone">
          Power On. <span className="text-accent">Every Hour.</span>
        </h1>

        <p className="mt-7 max-w-xl text-body-lg text-bone/70">
          Reliable, compliant mobile power for operations that can&rsquo;t afford to stop.
          Generators, fuel, lubricants and filtration — run as one accountable service.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">Request a Solution</Button>
          <Button href="/generator-services" variant="secondary" arrow={false} className="text-bone">
            Explore Our Services
          </Button>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden
      >
        <span className="data-label text-bone/40">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
