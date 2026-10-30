import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";

export const alt = `${personal.name} — developer portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          color: "#f8fafc",
          backgroundColor: "#050816",
          backgroundImage:
            "radial-gradient(ellipse at 82% 30%, rgba(119, 86, 222, .38), transparent 36%), radial-gradient(ellipse at 16% 90%, rgba(56, 189, 248, .13), transparent 34%), linear-gradient(135deg, #080b1b, #0b1026)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              border: "1px solid rgba(196, 181, 253, .48)",
              background: "rgba(167, 139, 250, .14)",
              color: "#e9ddff",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {personal.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 21, fontWeight: 700 }}>{personal.name}</div>
            <div style={{ fontSize: 14, color: "#aab5cd" }}>{personal.role}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              color: "#c4b5fd",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            A PORTFOLIO IN ORBIT
          </div>
          <div
            style={{
              maxWidth: 900,
              color: "#f8fafc",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1.05,
            }}
          >
            Exploring the digital universe.
          </div>
          <div style={{ color: "#b8c2d7", fontSize: 21 }}>
            Projects, technical interests, and what’s next.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(159, 177, 218, .2)",
            paddingTop: 18,
            color: "#8794ae",
            fontSize: 14,
            letterSpacing: 2,
          }}
        >
          <span>BUILD · LEARN · REPEAT</span>
          <span>DEVELOPER PORTFOLIO</span>
        </div>
      </div>
    ),
    size,
  );
}
