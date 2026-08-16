import type { Config } from "tailwindcss";

/**
 * Gas'Lam Energy Group — design tokens.
 * Industrial premium: near-black charcoal base, warm off-white light sections,
 * amber energy accent, deep brand navy as secondary, green used only as a whisper.
 * See .stitch/DESIGN.md for the full rationale.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        // Dark base
        ink: "#0C0F14",
        carbon: "#14181F",
        graphite: "#1E242E",
        slate: "#2A313D",
        steel: "#3B434F",
        // Light surfaces
        bone: "#F4F1EB",
        paper: "#FBFAF8",
        // Energy accent
        amber: {
          DEFAULT: "#F5A524",
          bright: "#FFB93D",
          deep: "#C57C10",
        },
        // Brand secondary (from the Gas'Lam identity)
        navy: {
          DEFAULT: "#16305C",
          deep: "#0F2140",
        },
        // Green — logo whisper only, used sparingly
        moss: "#2E8B57",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // fluid display scale
        display: ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "700" }],
        h1: ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.025em", fontWeight: "700" }],
        h2: ["clamp(1.75rem, 3.4vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        h3: ["clamp(1.25rem, 2vw, 1.6rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        eyebrow: ["0.78rem", { lineHeight: "1", letterSpacing: "0.22em", fontWeight: "600" }],
        "body-lg": ["1.15rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
        "section-sm": "clamp(3.5rem, 6vw, 6rem)",
      },
      borderRadius: {
        card: "6px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(12,15,20,0.06), 0 12px 40px -18px rgba(12,15,20,0.18)",
        lift: "0 20px 60px -24px rgba(12,15,20,0.35)",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "sheen": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        sheen: "sheen 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
