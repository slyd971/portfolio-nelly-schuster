import { ImageResponse } from "next/og";
import { nellyPortfolio as portfolio } from "@/data/portfolio";

export const alt = "Nelly Schuster — Juriste droit des affaires et conformité";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const { owner } = portfolio;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0f0e2b",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(31,36,233,0.45), transparent 45%), radial-gradient(circle at 85% 85%, rgba(109,165,255,0.30), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "#6DA5FF",
              fontSize: "28px",
              fontWeight: 600,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {owner.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "32px", color: "#ffffff", fontWeight: 600 }}>
              {owner.name}
            </div>
            <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.55)" }}>
              {owner.headline}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "56px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "980px",
          }}
        >
          Juriste en droit des affaires, conformité, contrats et contentieux
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "44px",
          }}
        >
          {["15+ ans", "Compliance", "Banque · Télécoms · International"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(109,165,255,0.35)",
                backgroundColor: "rgba(109,165,255,0.15)",
                color: "#6DA5FF",
                fontSize: "22px",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
