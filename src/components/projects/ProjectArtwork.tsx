import {
  Building2,
  ChartNoAxesCombined,
  Clapperboard,
  LayoutDashboard,
  Palette,
  Refrigerator,
} from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types";

const artworkDetails = {
  design: {
    icon: Palette,
    label: "Interface design",
    marker: "DESIGN / 01",
  },
  "visual-novel": {
    icon: Clapperboard,
    label: "Branching narrative",
    marker: "STORY / 02",
  },
  dashboard: {
    icon: ChartNoAxesCombined,
    label: "Live capacity",
    marker: "MONITOR / 03",
  },
  grainflow: {
    icon: LayoutDashboard,
    label: "Retail operations",
    marker: "GRAINFLOW / 04",
  },
  mission: {
    icon: Building2,
    label: "Community response",
    marker: "MISSION / 05",
  },
  freshly: {
    icon: Refrigerator,
    label: "Expiry tracking",
    marker: "FRESHLY / 06",
  },
};

export function ProjectArtwork({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const artwork = artworkDetails[project.artwork];
  const Icon = artwork.icon;

  return (
    <div
      className={`project-art project-art--${project.artwork} ${
        large ? "min-h-[280px] sm:min-h-[380px]" : ""
      }`}
      role={project.image ? undefined : "img"}
      aria-label={
        project.image ? undefined : `${project.title} abstract project artwork`
      }
    >
      {project.image && (
        <Image
          src={project.image}
          alt={`${project.title} game title screen`}
          fill
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="bg-black/60 object-cover"
        />
      )}
      {!project.image && (
        <>
          <div className="art-orbit" aria-hidden="true" />
          <div className="art-icon" aria-hidden="true">
            <Icon size={large ? 42 : 34} strokeWidth={1.4} />
          </div>
          <div className="art-caption" aria-hidden="true">
            <span>{artwork.label}</span>
            <span>{artwork.marker}</span>
          </div>
        </>
      )}
    </div>
  );
}
