import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { Button } from "@/components/ui/Button";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-bone">
      <div className="grid-lines absolute inset-0 opacity-30" aria-hidden />
      <Container>
        <div className="relative max-w-2xl py-32">
          <span className="font-display text-[clamp(5rem,18vw,12rem)] font-bold leading-none tabular-nums text-amber">
            404
          </span>
          <h1 className="mt-4 text-h2 uppercase text-bone">This page is off the grid.</h1>
          <p className="mt-5 max-w-md text-body-lg text-bone/60">
            The page you&rsquo;re after doesn&rsquo;t exist or has moved. Let&rsquo;s get you back to
            something powered.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/" variant="primary">Back to home</Button>
            <Button href="/contact" variant="secondary" arrow={false} className="text-bone">
              Contact Gas&rsquo;Lam
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="text-small text-bone/55 transition-colors hover:text-amber">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
