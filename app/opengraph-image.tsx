import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Gas'Lam Energy Group — Power On. Every Hour.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read the real logo mark at build time and inline it as a data URI.
const markData = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/gaslam-icon.png")
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0F14",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markData} width={64} height={45} alt="" />
          <div style={{ display: "flex", flexDirection: "column", color: "#F4F1EB" }}>
            <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>GAS&#39;LAM</span>
            <span style={{ fontSize: 13, letterSpacing: "0.2em", color: "rgba(244,241,235,0.55)" }}>ENERGY GROUP</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 15, letterSpacing: "0.22em", color: "#F5A524", textTransform: "uppercase", marginBottom: 20 }}>
            Mobile Power · Fuel · Lubricants & Filtration
          </span>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em", color: "#F4F1EB", textTransform: "uppercase" }}>
            <span>Power On.</span>
            <span style={{ color: "#F5A524" }}>Every Hour.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(244,241,235,0.5)", fontSize: 20 }}>
          <span>Randburg, Gauteng · South Africa</span>
          <span>www.gaslamenergy.co.za</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
