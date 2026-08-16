import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Gas'Lam Energy Group — Mobile Power, Fuel, Lubricants & Filtration";
const description =
  "Reliable, compliant mobile power for operations that can't stop. Generator rental, refuelling, maintenance and lubricants & filtration across South Africa. Power On. Every Hour.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Gas'Lam Energy Group",
  },
  description,
  keywords: [
    "generator rental South Africa",
    "generator services Gauteng",
    "generator rental Johannesburg",
    "mobile generator solutions",
    "generator maintenance",
    "fuel management",
    "lubricants South Africa",
    "filtration solutions",
    "energy solutions South Africa",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0C0F14",
  colorScheme: "light",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  foundingDate: String(site.established),
  description: site.description,
  slogan: site.tagline,
  areaServed: "ZA",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 1st Ave, Bordeaux",
    addressLocality: "Randburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  knowsAbout: [
    "Mobile power generation",
    "Generator rental",
    "Fuel management",
    "Lubricants and filtration",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
