# Gas'Lam Energy Group — Website

Corporate website for **Gas'Lam Energy Group (Pty) Ltd** — a South African energy
solutions provider specialising in mobile power generation, fuel management, and
lubricants & filtration.

> **Power On. Every Hour.**

Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Stack

- **Next.js 14** (App Router, RSC)
- **TypeScript**
- **Tailwind CSS** — design tokens in `tailwind.config.ts`
- **Framer Motion** — reusable motion presets in `components/ui/motion.tsx`
- Dynamic OG image + favicon via `next/og`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/                     Routes (home + 7 pages), API, SEO, OG, 404, loading
  api/contact/           Contact endpoint (see "Contact form" below)
components/
  sections/              Page-level building blocks (Hero, Navbar, Footer, CTA, …)
  ui/                    Reusable primitives (Button, cards, motion, Stat, …)
lib/site.ts              Single source of truth for all copy + image paths
public/images/           Photography (placeholder — see below)
.stitch/DESIGN.md        Design system
```

## Content source of truth

All copy is drawn from the **Gas'Lam Energy Group 2025 company profile**. Nothing is
invented. Notable deliberate omissions:

- **Phone number** — the profile lists a placeholder (`+123-456-7890`), so no phone
  number is published. The contact page notes a line is being finalised.
- **Email** — none supplied, so none is invented. Enquiries route through the form.

Edit `lib/site.ts` to update any text, service, stat or client.

## Images

`public/images/` holds **placeholder** industrial photography, wired through
`lib/site.ts`. Every slot is a one-line swap — drop real Gas'Lam photography in with
the same filenames (or update the paths) and the whole site updates.

## Contact form

`components/sections/ContactForm.tsx` validates client-side and shows a success
state. Because this is a **static export** (no server), delivery isn't wired yet.
To make it send: POST to a form service (Formspree / Web3Forms) inside
`handleSubmit`, or redeploy on a host with a serverless function.

## Deployment (GitHub Pages — static export)

The site builds to a fully static `out/` folder (`output: "export"`) and deploys
via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

- **Live at:** `https://dilshad-cg.github.io/gaslam-energy-website/`
- Repo → **Settings → Pages → Source: GitHub Actions** (one-time).
- The project is served under the `/gaslam-energy-website` subpath. `basePath`,
  `assetPrefix`, image paths and metadata all read from `deploy` in `lib/site.ts`.

### Moving to the custom domain `gaslamenergy.co.za`

1. In `lib/site.ts`, set `deploy.origin` to `https://www.gaslamenergy.co.za` and
   `deploy.basePath` to `""`.
2. Add a `public/CNAME` file containing `www.gaslamenergy.co.za`.
3. Point the domain's DNS at GitHub Pages and set the custom domain under
   **Settings → Pages**.

## Accessibility & performance

- Semantic landmarks, skip link, visible focus states, labelled controls.
- `prefers-reduced-motion` respected globally and per-animation.
- `next/image` optimisation, `next/font` self-hosted fonts, code-split routes.
