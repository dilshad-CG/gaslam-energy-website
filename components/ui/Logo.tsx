import Link from "next/link";
import { brand } from "@/lib/site";

/**
 * Gas'Lam logo — the official flame-"G" + bolt mark (green/amber, transparent PNG)
 * paired with a theme-aware wordmark so it stays legible on both dark and light
 * navigation. The mark colour is fixed brand; only the wordmark switches.
 */
export function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const wordColor = variant === "light" ? "text-ink" : "text-bone";
  const subColor = variant === "light" ? "text-slate/70" : "text-bone/55";

  return (
    <Link
      href="/"
      aria-label="Gas'Lam Energy Group — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {/* Vector mark — crisp at any size. eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brand.iconSvg}
        alt=""
        width={51}
        height={36}
        className="h-9 w-auto transition-transform duration-500 ease-out-expo group-hover:scale-[1.05]"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight text-[1.02rem] ${wordColor}`}>
          GAS&rsquo;LAM
        </span>
        <span className={`font-display font-medium tracking-[0.2em] text-[0.5rem] mt-0.5 ${subColor}`}>
          ENERGY GROUP
        </span>
      </span>
    </Link>
  );
}
