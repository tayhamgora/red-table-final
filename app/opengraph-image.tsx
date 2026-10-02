import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Red Table Catering & Events";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f3eee4",
          color: "#1c1b18",
        }}
      >
        {/* OG generation requires a raw img element */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          width={220}
          alt="Red Table"
        />
        <div
          style={{
            marginTop: 48,
            fontSize: 58,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Artisanal Hospitality & Event Logistics
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#746e62",
          }}
        >
          Catering & Events · Lahore
        </div>
      </div>
    ),
    size,
  );
}
