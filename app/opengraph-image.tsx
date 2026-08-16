import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gas'Lam Energy Group — Power On. Every Hour.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          backgroundImage:
            "linear-gradient(rgba(244,241,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,235,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
              background: "#14181F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M13.5 2 5 13.2h5.2L9.2 22 19 9.8h-5.4L13.5 2Z" fill="#F5A524" />
            </svg>
          </div>
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
