# Gas'Lam Energy Group — Design System

**Brand line:** Power On. Every Hour.
**Positioning:** South African mobile power, fuel management, lubricants & filtration for operations that can't afford downtime.

The site is built for procurement, facilities, operations and engineering managers evaluating an uptime partner. Every decision below serves one read: *these people understand critical infrastructure.*

---

## 1. Design principles

1. **Structure over decoration.** Grids, rules, and generous negative space carry the layout. No floating blobs, no glassmorphism, no decorative gradients.
2. **Dark/light contrast as rhythm.** The scroll alternates deep charcoal "operations" sections with warm off-white "document" sections. Contrast is the transition, not animation gimmicks.
3. **Amber is a signal, not a wash.** Orange/amber marks the live, energised element — a CTA, an active step, a data point. It is never a background fill for whole sections.
4. **Numbers are typography.** Response windows, kVA ratings, founding year and division counts are set large and monospaced — the site reads like a spec sheet, not a brochure.
5. **Motion communicates precision.** Reveals are short, eased, and directional. Nothing bounces. Everything respects `prefers-reduced-motion`.

---

## 2. Colour

| Token | Hex | Role |
|---|---|---|
| `ink` | `#0C0F14` | Primary dark base (hero, operations sections) |
| `carbon` | `#14181F` | Dark surface / cards on dark |
| `graphite` | `#1E242E` | Raised dark surface, borders on dark |
| `slate` | `#2A313D` | Hairlines, muted dark UI |
| `steel` | `#3B434F` | Disabled / tertiary on dark |
| `bone` | `#F4F1EB` | Warm off-white section background |
| `paper` | `#FBFAF8` | Lightest surface / cards on light |
| `amber` | `#F5A524` | Energy accent — CTAs, active state, data |
| `amber-bright` | `#FFB93D` | Hover / highlight |
| `amber-deep` | `#C57C10` | Amber text on light for contrast (AA) |
| `navy` | `#16305C` | Brand secondary — trust blocks, links on light |
| `navy-deep` | `#0F2140` | Deep navy panels |
| `moss` | `#2E8B57` | Logo green — whisper only (mark, tiny accents) |

Text on dark: `#F4F1EB` primary, `rgba(244,241,235,.66)` muted.
Text on light: `#14181F` primary, `#4A5361` muted.
Amber on light uses `amber-deep` for AA contrast; amber on dark uses `amber`.

---

## 3. Typography

Two families, self-hosted via `next/font`.

- **Display / headings — Space Grotesk.** Technical grotesk with mechanical detailing. Weights 500/700.
- **Body — Inter.** Neutral, highly legible at small sizes.
- **Data — Space Grotesk (tabular) / mono fallback** for large numbers and eyebrows.

Scale (fluid, `clamp`):

| Token | Size | Use |
|---|---|---|
| `display` | 3 → 7rem | Hero headline |
| `h1` | 2.25 → 4rem | Page titles |
| `h2` | 1.75 → 2.75rem | Section titles |
| `h3` | 1.25 → 1.6rem | Card / block titles |
| `eyebrow` | 0.78rem, tracked 0.22em, uppercase | Section labels |
| `body-lg` | 1.15rem | Lead paragraphs |
| `body` | 1rem | Default |
| `small` / `caption` | 0.875 / 0.75rem | Meta, legal |

Line lengths capped at ~68ch. Headlines set tight (-0.02 to -0.03em).

---

## 4. Spacing & grid

- 8px base. Section rhythm: `section` = clamp(5–9rem), `section-sm` = clamp(3.5–6rem).
- Container max 1360px, 20px gutters mobile / 32px desktop.
- 12-column mental model; most layouts resolve to 1 / 2 / 3-up or an asymmetric 5:7 split.

## 5. Radius, borders, shadow

- Radius: `card` 6px (restrained — not pill-soft), `pill` for tags/buttons only.
- Borders do the work: 1px hairlines (`slate` on dark, `#E4DFD4` on light).
- Shadows are subtle and warm; used only on light-surface cards and hover lift.

---

## 6. Components

- **Button** — `primary` (amber fill, ink text), `secondary` (outline), `ghost`, `link`. Magnetic hover + sheen on primary. 48px min touch target.
- **SectionHeading** — eyebrow + h2 + optional lead, left-aligned default.
- **ServiceCard / IndustryCard** — bordered, hover lift + amber rule reveal.
- **CaseStudyCard** — client name, sector tag, outcome sentence (source-supported only).
- **StatBlock** — large tabular number + label, count-up on view.
- **ProcessStep** — number, title, body; scroll-linked progress spine.
- **ComplianceBadge** — icon tile + label for OHS / certifications.
- **CTA** — full-bleed ink band, amber primary action.
- **ImageReveal** — clip-path mask reveal on scroll.
- **AnimatedText** — word/line stagger on view.

## 7. Motion tokens

| Preset | Behaviour |
|---|---|
| `fadeUp` | y:24 → 0, opacity, 0.6s out-expo |
| `fadeIn` | opacity 0.5s |
| `staggerChildren` | 0.08s between children |
| `imageReveal` | clip-path inset(0 0 100% 0) → 0, 0.9s |
| `hoverLift` | y:-4, shadow, 0.3s |
| `parallax` | ±6–10% on scroll, spring-smoothed |
| `pageTransition` | opacity + 8px, 0.35s |

Global easing `out-expo` = cubic-bezier(0.16, 1, 0.3, 1). Durations 0.35–0.9s. All gated by `prefers-reduced-motion`.

## 8. Breakpoints & responsive

- Mobile 390 (base) → Tablet 768 → Laptop 1280 → Desktop 1440+.
- Mobile is redesigned, not collapsed: hero headline drops to `h1` scale, split sections stack, process becomes a vertical spine, nav becomes a full-screen sheet.

## 9. Imagery

Real, industrial, cinematic, South African where possible — generators, infrastructure, engineers, lubricants, telecom sites. No AI-looking people. Photography is self-hosted in `/public/images` and centralised in `lib/site.ts` so any asset is a one-line swap when real Gas'Lam photography arrives.
