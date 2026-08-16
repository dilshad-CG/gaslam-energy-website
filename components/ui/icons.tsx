/** Minimal, consistent stroke icons for compliance/capability tiles. */
const props = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icons = {
  bolt: () => (
    <svg {...props} aria-hidden><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>
  ),
  shield: () => (
    <svg {...props} aria-hidden><path d="M12 3l7 3v5c0 4.4-3 8.3-7 10-4-1.7-7-5.6-7-10V6l7-3Z" /><path d="M9 12l2 2 4-4" /></svg>
  ),
  clipboard: () => (
    <svg {...props} aria-hidden><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="M9 11h6M9 15h4" /></svg>
  ),
  height: () => (
    <svg {...props} aria-hidden><path d="M12 3v18" /><path d="M8 7l4-4 4 4" /><path d="M8 17l4 4 4-4" /></svg>
  ),
  truck: () => (
    <svg {...props} aria-hidden><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17.5" cy="18" r="1.6" /></svg>
  ),
  check: () => (
    <svg {...props} aria-hidden><circle cx="12" cy="12" r="9" /><path d="M8.5 12l2.5 2.5L16 9" /></svg>
  ),
};

export const complianceIcons = [
  Icons.bolt,     // Wireman's Licence
  Icons.shield,   // First Aid & Firefighting
  Icons.clipboard,// Risk Assessment
  Icons.height,   // Working at Heights
  Icons.truck,    // Defensive Driving
  Icons.check,    // OHS Act
];
