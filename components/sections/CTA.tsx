import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { AnimatedText } from "@/components/ui/motion";

export function CTA({
  headline = "Keep your operation powered.",
  body = "Tell us what you run and where. We'll come back with a solution built around your uptime — not a generic quote.",
}: {
  headline?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-section text-bone">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-[100%] bg-amber/10 blur-3xl"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <AnimatedText
            as="h2"
            text={headline}
            className="text-h1 uppercase text-bone"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-body-lg text-bone/65">{body}</p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a Solution
            </Button>
            <Button href="/contact" variant="secondary" arrow={false} className="text-bone">
              Contact Gas&rsquo;Lam
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
