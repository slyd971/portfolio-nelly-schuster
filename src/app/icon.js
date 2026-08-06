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
          borderRadius: "8px",
          backgroundColor: "#0f0e2b",
          color: "#6DA5FF",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        NS
      </div>
    ),
    { ...size }
  );
}
