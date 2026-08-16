"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Image block. The image paints immediately (never hidden). Motion is limited to a
 * subtle, additive scroll parallax that only shifts position — if no animation frame
 * ever runs, the image simply sits still and fully visible.
 */
export function ImageReveal({
  src,
  alt,
  className = "",
  parallax = true,
  priority = false,
  overlay = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  parallax?: boolean;
  priority?: boolean;
  overlay?: boolean;
  sizes?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], parallax && !reduce ? ["-5%", "5%"] : ["0%", "0%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-card bg-carbon ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-6%]">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </motion.div>
      {overlay && (
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
      )}
    </div>
  );
}
