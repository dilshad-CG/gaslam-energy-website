import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0C0F14",
          borderRadius: 6,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M13.5 2 5 13.2h5.2L9.2 22 19 9.8h-5.4L13.5 2Z" fill="#F5A524" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
