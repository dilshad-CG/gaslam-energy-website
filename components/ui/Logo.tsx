import Link from "next/link";

/**
 * Gas'Lam wordmark. A geometric bolt monogram (amber energy + green whisper from
 * the brand identity) paired with the wordmark. Vector so it stays crisp and is a
 * clean stand-in until the official logo files are supplied.
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
      <BoltMark />
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

function BoltMark() {
  return (
    <span className="relative grid h-9 w-9 place-items-center rounded-[5px] bg-ink ring-1 ring-inset ring-white/10 overflow-hidden transition-transform duration-500 ease-out-expo group-hover:scale-[1.04]">
      <span className="absolute inset-0 bg-gradient-to-br from-moss/25 via-transparent to-amber/25" />
      <svg
        viewBox="0 0 24 24"
        className="relative h-5 w-5"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13.5 2 5 13.2h5.2L9.2 22 19 9.8h-5.4L13.5 2Z"
          fill="#F5A524"
        />
        <path
          d="M13.5 2 5 13.2h5.2L9.2 22 19 9.8h-5.4L13.5 2Z"
          stroke="#FFB93D"
          strokeWidth="0.4"
        />
      </svg>
    </span>
  );
}
