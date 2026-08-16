/**
 * Single source of truth for Gas'Lam Energy Group site content.
 * Every fact here is drawn from the 2025 company profile. Nothing is invented.
 * Images are placeholders in /public/images and can be swapped one line at a time
 * when real Gas'Lam photography is supplied.
 */

export const site = {
  name: "Gas'Lam Energy Group",
  legalName: "Gas'Lam Energy Group (Pty) Ltd",
  tagline: "Power On. Every Hour.",
  established: 2017,
  url: "https://www.gaslamenergy.co.za",
  domain: "www.gaslamenergy.co.za",
  hq: {
    line: "5 1st Ave, Bordeaux, Randburg",
    city: "Randburg",
    province: "Gauteng",
  },
  // The profile only lists a placeholder number (+123-456-7890). We do not publish it.
  phone: null as string | null,
  email: null as string | null,
  description:
    "South African energy solutions provider specialising in mobile power generation, fuel management, and lubricants & filtration.",
  mission:
    "Deliver reliable, compliant, and scalable energy solutions through innovation, disciplined service, and strong supplier partnerships.",
  vision:
    "To become a leading integrated energy solutions partner in Sub-Saharan Africa, enabling businesses to thrive without power interruption.",
};

export const nav = [
  {
    label: "Solutions",
    href: "/generator-services",
    children: [
      { label: "Generator Services", href: "/generator-services", desc: "Rental, refuelling, maintenance & 24/7 call-outs" },
      { label: "Lubricants & Filtration", href: "/lubricants-filtration", desc: "ROWE oils, MANN-FILTER, WIX, SAKURA" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Safety & Compliance", href: "/safety-compliance" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 2017, label: "Operating since", format: "year" as const },
  { value: 2, label: "Business divisions", suffix: "" },
  { value: 4, label: "Hour response, Gauteng", prefix: "1–", suffix: "" },
  { value: 40, label: "kVA mobile gensets", prefix: "38–", suffix: "" },
];

export const partners = ["ROWE", "MANN-FILTER", "WIX", "SAKURA"];
export const clients = ["ABSA (via Bidvest FM)", "ATC", "Metro Teleworks"];

export const generatorServices = {
  title: "Generator Services",
  eyebrow: "Division A",
  intro:
    "When the grid drops, our fleet keeps your site live. Mobile gensets, refuelling, maintenance and technical documentation — run as one accountable service, not a scramble of contractors.",
  fleet: "Fleet of mobile gensets, 38–40 kVA",
  response: "24/7 call-outs · 1–4 hour rapid response in Gauteng",
  items: [
    { title: "Generator rental & deployment", body: "Mobile gensets in the 38–40 kVA range, delivered and set up for the load your operation actually runs." },
    { title: "Refuelling", body: "Scheduled and on-demand fuel management so a running unit never runs dry mid-shift." },
    { title: "Corrective maintenance", body: "Fault call-outs and repairs handled by qualified technicians, with the paperwork to match." },
    { title: "Load testing", body: "Verification that a unit carries its rated load before it ever backs a live site." },
    { title: "Commissioning", body: "Every deployment commissioned to a checklist, signed off before hand-over." },
    { title: "Technical documentation packs", body: "Commissioning records, service logs and compliance documents your auditors will ask for." },
  ],
};

export const lubricantsServices = {
  title: "Lubricants & Filtration",
  eyebrow: "Division B",
  intro:
    "Authorised supply of oils and filtration, backed by condition monitoring and a stock discipline that keeps you covered. The right product, in the right pack size, before you need it.",
  items: [
    { title: "ROWE oils & lubricants", body: "Official distributor of ROWE. Engine, hydraulic and industrial lubricants from a single accountable supplier." },
    { title: "Filtration — MANN-FILTER, WIX, SAKURA", body: "Air, oil and fuel filtration from three established brands, matched to your equipment." },
    { title: "Oil sampling & condition monitoring", body: "Sample, analyse, act. Catch wear and contamination before it becomes a failure." },
    { title: "Registered used-oil collection", body: "Compliant collection and disposal of used oil, with the trail to prove it." },
    { title: "Security of supply", body: "Demand forecasting, minimum safety stock and dual sourcing so a shortage upstream isn't your problem." },
    { title: "Multiple packaging formats", body: "Bulk, 210 L, 20 L and 5 L — matched to how your team actually draws stock." },
  ],
};

export const processSteps = [
  { n: "01", title: "Pre-check", body: "We assess the site, the load and the access before anything is deployed — no surprises on the day." },
  { n: "02", title: "Establishment", body: "Equipment is delivered, positioned and connected to run your site's real demand." },
  { n: "03", title: "Commissioning", body: "The unit is load-tested, commissioned to checklist and signed off before it carries you." },
  { n: "04", title: "Ongoing support", body: "Refuelling, monitoring and corrective maintenance for the length of the deployment." },
  { n: "05", title: "Demobilisation", body: "Clean removal when the job is done, with the documentation closed out." },
];

export const industries = [
  {
    title: "Corporate",
    body: "Head offices, banking floors and facilities where an outage stops trade. Backup power that holds through load-shedding and grid faults.",
    tag: "Business continuity",
  },
  {
    title: "Telecommunications",
    body: "RF sites and network infrastructure that must stay up around the clock. Deployment and corrective maintenance built for 24/7 uptime.",
    tag: "24/7 uptime",
  },
  {
    title: "Industrial",
    body: "Plants and operations where lost power means lost production. Generators, fuel and lubrication kept running as one service.",
    tag: "Production-critical",
  },
];

export const caseStudies = [
  {
    client: "ABSA",
    via: "via Bidvest FM",
    sector: "Banking",
    outcome:
      "Deployed and maintained generators across critical banking operations, keeping services running through outages.",
  },
  {
    client: "ATC",
    via: "",
    sector: "Telecommunications",
    outcome:
      "Generator deployment and corrective maintenance for telecommunications infrastructure that can't go dark.",
  },
  {
    client: "Metro Teleworks",
    via: "",
    sector: "RF / Networks",
    outcome:
      "Supported RF site power requirements so the communication network stayed reliable.",
  },
];

export const whyGaslam = [
  { title: "Proven demand", body: "Power reliability and efficiency are non-negotiable in South Africa. We work in a market that needs exactly what we run." },
  { title: "Two divisions, one supplier", body: "Generator Services and Lubricants & Filtration under one roof — fewer contracts, fewer hand-off gaps." },
  { title: "Authorised partnerships", body: "Official ROWE distributor; filtration from MANN-FILTER, WIX and SAKURA. Genuine product, not grey supply." },
  { title: "Operational discipline", body: "ISO-aligned SOPs, a safety and compliance culture, and SLAs written around your uptime." },
  { title: "A real track record", body: "Trusted on live sites by ABSA (via Bidvest FM), ATC and Metro Teleworks." },
  { title: "Built to scale", body: "An established fleet, logistics partners and a national footprint to grow into." },
];

export const compliance = {
  intro:
    "Gas'Lam adheres strictly to the OHS Act, environmental standards and rigorous quality management. On site, that shows up as trained people and closed-out paperwork — not promises.",
  certifications: [
    { title: "Wireman's Licence", body: "Licensed electrical work for connection and commissioning." },
    { title: "First Aid & Firefighting", body: "Trained response on site, not a number to call afterwards." },
    { title: "Risk Assessment", body: "Hazards identified and controlled before work begins." },
    { title: "Working at Heights", body: "Certified crews for elevated and structure-mounted work." },
    { title: "Defensive Driving", body: "Fleet and deployment logistics run by trained drivers." },
    { title: "OHS Act adherence", body: "Occupational health and safety built into the standard operating procedure." },
  ],
};

export const serviceOptions = [
  "Generator Rental & Deployment",
  "Generator Maintenance",
  "Refuelling",
  "Load Testing",
  "Lubricants",
  "Filtration",
  "Fuel Management",
  "Other",
];

export const industryOptions = ["Corporate", "Telecommunications", "Industrial", "Other"];

/** Placeholder photography — swap the paths for real Gas'Lam assets when available. */
export const images = {
  heroGenerator: "/images/hero-generator.jpg",
  fleet: "/images/generator-fleet.jpg",
  engineer: "/images/engineer.jpg",
  telecom: "/images/telecom-site.jpg",
  lubricants: "/images/lubricants.jpg",
  industrial: "/images/industrial-facility.jpg",
  maintenance: "/images/maintenance.jpg",
  control: "/images/control.jpg",
};
