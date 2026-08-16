import Image from "next/image";
import { AnimatedText, Reveal } from "@/components/ui/motion";
import { Container, Eyebrow } from "@/components/ui/primitives";

/** Consistent dark interior-page header with optional atmospheric image. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-ink pt-[128px] pb-section-sm text-bone">
      {image && (
        <div className="absolute inset-0" aria-hidden>
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 to-transparent" />
        </div>
      )}
      <div className="grid-lines absolute inset-0 opacity-25" aria-hidden />
      <Container>
        <div className="relative max-w-3xl">
          <Eyebrow tone="dark" className="mb-6">{eyebrow}</Eyebrow>
          <AnimatedText as="h1" text={title} className="text-h1 uppercase text-bone" />
          {lead && (
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-body-lg text-bone/65">{lead}</p>
            </Reveal>
          )}
        </div>
      </Container>
    </header>
  );
}
