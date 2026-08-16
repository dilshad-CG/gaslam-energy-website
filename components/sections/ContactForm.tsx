"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceOptions, industryOptions } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-[4px] border border-[#d9d3c6] bg-paper px-4 py-3 text-body text-ink placeholder:text-slate/50 transition-colors focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30";
const labelBase = "mb-1.5 block text-small font-medium text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Minimal validation. This static build has no backend to receive the enquiry.
    // Wire delivery here once a destination is available — either a form service
    // (Formspree / Web3Forms POST to their endpoint), or redeploy on a host with
    // an API route / serverless function.
    if (!data.name || !data.company || !data.email) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // Simulated submit so the UX is complete; replace with a real POST when wired.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    form.reset();
  }

  return (
    <div className="relative rounded-card border border-[#e5e0d5] bg-bone p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-amber text-ink">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mt-6 text-h3 text-ink">Request received.</h3>
            <p className="mt-3 max-w-sm text-body text-slate">
              Thanks — your details are with us. A member of the Gas&rsquo;Lam team will be in
              touch to scope your requirement.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 font-display font-semibold text-amber-deep underline-offset-4 hover:underline"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="grid gap-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required autoComplete="name" />
              <Field label="Company" name="company" required autoComplete="organization" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" optional />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField label="Service required" name="service" options={serviceOptions} />
              <SelectField label="Industry" name="industry" options={industryOptions} />
            </div>
            <Field label="Location" name="location" placeholder="e.g. Randburg, Gauteng" optional />
            <div>
              <label htmlFor="message" className={labelBase}>
                Message <span className="text-slate/60">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us what you run, the site, and the window."
                className={inputBase}
              />
            </div>

            {status === "error" && (
              <p role="alert" className="text-small text-red-700">
                Something went wrong sending your request. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group relative mt-1 inline-flex min-h-[52px] items-center justify-center gap-2 overflow-hidden rounded-[4px] bg-ink px-6 py-3.5 font-display font-semibold text-bone transition-colors hover:bg-carbon disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Request a Solution"}
              {status !== "submitting" && (
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              )}
            </button>
            <p className="text-caption text-slate/70">
              We use your details only to respond to this enquiry.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  optional = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelBase}>
        {label} {optional && <span className="text-slate/60">(optional)</span>}
        {required && <span className="text-amber-deep"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputBase}
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className={labelBase}>{label}</label>
      <select id={name} name={name} defaultValue="" className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 fill=%22none%22 stroke=%22%232A313D%22 stroke-width=%222%22><path d=%22M2 4l4 4 4-4%22/></svg>')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}>
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
