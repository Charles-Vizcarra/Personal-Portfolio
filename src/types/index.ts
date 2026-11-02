export type SocialPlatform = "github" | "linkedin" | "instagram" | "website";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface SkillGroup {
  name: string;
  description: string;
  skills: string[];
}

export type ProjectArtwork =
  | "design"
  | "visual-novel"
  | "dashboard"
  | "grainflow"
  | "mission"
  | "freshly";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  period?: string;
  image?: string;
  certificates?: {
    src: string;
    title: string;
    alt: string;
  }[];
  galleryTitle?: string;
  galleryDescription?: string;
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  github: string;
  demo: string;
  featured: boolean;
  artwork: ProjectArtwork;
  overview: string;
  highlights: string[];
  contribution: string;
}

export interface ExperienceEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  kind: "Education" | "Experience" | "Certification" | "Award";
}
