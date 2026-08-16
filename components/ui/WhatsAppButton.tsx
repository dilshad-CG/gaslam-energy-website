import { site } from "@/lib/site";

/** Fixed WhatsApp contact button, site-wide. Opens a chat with a prefilled message. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappPrefill}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gas'Lam on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-0 overflow-hidden rounded-pill bg-[#25D366] pl-[13px] pr-[13px] py-[13px] text-white shadow-lift transition-all duration-500 ease-out-expo hover:pr-5 hover:gap-2.5 focus-visible:pr-5 focus-visible:gap-2.5 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4z" />
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8.2-8 8.2z" />
      </svg>
      <span className="max-w-0 whitespace-nowrap text-small font-semibold opacity-0 transition-all duration-500 ease-out-expo group-hover:max-w-[140px] group-hover:opacity-100 group-focus-visible:max-w-[140px] group-focus-visible:opacity-100">
        WhatsApp us
      </span>
    </a>
  );
}
