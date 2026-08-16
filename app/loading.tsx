export default function Loading() {
  return (
    <div className="grid min-h-[100svh] place-items-center bg-ink" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-5">
        <div className="relative grid h-12 w-12 place-items-center rounded-[6px] bg-carbon ring-1 ring-inset ring-white/10">
          <svg viewBox="0 0 24 24" className="h-6 w-6 animate-pulse" fill="none" aria-hidden>
            <path d="M13.5 2 5 13.2h5.2L9.2 22 19 9.8h-5.4L13.5 2Z" fill="#F5A524" />
          </svg>
        </div>
        <span className="data-label text-bone/40">Powering up…</span>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
