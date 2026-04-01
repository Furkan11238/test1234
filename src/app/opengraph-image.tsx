import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "MFK Stukadoors — vakmanschap in pleisterwerken en afwerking in Limburg";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

/** Primary blue ≈ hsl(208, 100%, 34%) */
const PRIMARY = "#0066ad";
const PRIMARY_DARK = "#004578";

export default async function Image() {
  const montserratBold = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.2.5/files/montserrat-latin-700-normal.woff",
  ).then((res) => res.arrayBuffer());

  const montserratBlack = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.2.5/files/montserrat-latin-900-normal.woff",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: `linear-gradient(145deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 55%, #0a1628 100%)`,
        padding: 64,
        fontFamily: "Montserrat",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "white",
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            MFK
          </span>
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Stukadoors
          </span>
        </div>
        <p
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: "rgba(255,255,255,0.95)",
            margin: 0,
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          Vakmanschap in Limburg — pleisterwerken, gyproc & renovatie
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "rgba(255,255,255,0.75)",
            margin: 0,
          }}
        >
          Heusden-Zolder · Gratis offerte
        </p>
        <p
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
          }}
        >
          mfkstukadoors.be
        </p>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Montserrat",
          data: montserratBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Montserrat",
          data: montserratBlack,
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}
