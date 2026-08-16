"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav, routeThemeClass } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const theme = routeThemeClass(pathname);

  return (
    <header
      className={`${theme} fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        solid
          ? "bg-bone/90 backdrop-blur-md border-b rule-light shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container flex h-[68px] items-center justify-between gap-6">
        <Logo variant={solid ? "light" : "dark"} />

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 text-small font-medium transition-colors ${
                    solid ? "text-ink/80 hover:text-ink" : "text-bone/80 hover:text-bone"
                  }`}
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <span className={`text-[0.6rem] transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`} aria-hidden>
                    ▾
                  </span>
                </button>
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-4"
                    >
                      <div className="overflow-hidden rounded-card border rule-light bg-paper shadow-lift">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="group flex flex-col gap-0.5 border-b rule-light px-5 py-4 last:border-b-0 transition-colors hover:bg-bone"
                          >
                            <span className="flex items-center gap-2 font-display text-[0.95rem] font-semibold text-ink">
                              {c.label}
                              <span className="text-accent-deep opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>→</span>
                            </span>
                            <span className="text-caption text-slate">{c.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-small font-medium transition-colors ${
                    solid
                      ? pathname === item.href
                        ? "text-ink"
                        : "text-ink/70 hover:text-ink"
                      : pathname === item.href
                        ? "text-bone"
                        : "text-bone/75 hover:text-bone"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" className="!px-5 !py-2.5 !min-h-0 text-[0.85rem]" arrow={false}>
            Request a Solution
          </Button>
        </div>

        <button
          className="relative z-50 grid h-11 w-11 place-items-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className={`block h-[2px] w-6 transition-transform duration-300 ${solid ? "bg-ink" : "bg-bone"} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 transition-opacity duration-300 ${solid ? "bg-ink" : "bg-bone"} ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 transition-transform duration-300 ${solid ? "bg-ink" : "bg-bone"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 h-[100dvh] bg-bone lg:hidden"
          >
            <div className="container flex h-full flex-col pt-24 pb-10">
              <ul className="flex flex-1 flex-col divide-y rule-light overflow-y-auto">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={reduce ? undefined : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.children ? (
                      <div className="py-4">
                        <span className="data-label text-slate">{item.label}</span>
                        <div className="mt-3 flex flex-col gap-3 pl-1">
                          {item.children.map((c) => (
                            <Link key={c.href} href={c.href} className="font-display text-2xl font-medium text-ink">
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link href={item.href} className="block py-4 font-display text-2xl font-medium text-ink">
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" className="mt-8 w-full">
                Request a Solution
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
