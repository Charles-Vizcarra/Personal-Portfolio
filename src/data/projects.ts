import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "freshly",
    title: "Freshly",
    category: "Web Development",
    period: "September 2026",
    description:
      "A mobile-responsive progressive web app for real-time food expiry monitoring.",
    technologies: ["Vite", "Tailwind CSS", "Real-time backend services"],
    github: "",
    demo: "",
    featured: true,
    artwork: "freshly",
    image: "/images/projects/freshly.png",
    overview:
      "Freshly is a mobile-responsive progressive web app for tracking food expiry, integrating with real-time backend services.",
    highlights: [
      "Real-time food expiry monitoring",
      "Mobile-responsive progressive web app",
      "Built with Vite and Tailwind CSS",
    ],
    contribution:
      "Front-end Developer, responsible for the frontend implementation.",
  },
  {
    slug: "mission-lokal",
    title: "Mission-Lokal",
    category: "AI & Community Technology",
    description:
      "A community incident management and response system with resident reporting, an admin dashboard, and LLM-assisted incident triage.",
    technologies: ["LLM", "Resident mobile app", "Admin dashboard"],
    github: "",
    demo: "",
    featured: true,
    artwork: "mission",
    image: "/images/projects/mission-lokal.png",
    overview:
      "A cross-platform community incident management and response system connecting a resident mobile app with an admin dashboard. An LLM supports incident triage and severity ranking.",
    highlights: [
      "Resident-facing mobile incident reporting",
      "Admin dashboard for incident response",
      "LLM-assisted incident triage and severity ranking",
    ],
    contribution:
      "Full-Stack Developer, contributing to the cross-platform incident system.",
  },
  {
    slug: "grainflow",
    title: "GrainFlow",
    category: "Full-Stack Development",
    period: "May 2026",
    description:
      "A point-of-sale and inventory system for rice retailers, with profit logic, stock forecasting, and an AI chatbot.",
    technologies: ["Laravel", "React", "Vercel", "Supabase"],
    github: "",
    demo: "",
    featured: true,
    artwork: "grainflow",
    image: "/images/projects/grainflow.png",
    overview:
      "GrainFlow is a point-of-sale and inventory system designed for rice retailers. Its features include AI Tubo profit logic, stock forecasting, and an AI chatbot.",
    highlights: [
      "Point-of-sale and inventory management",
      "AI Tubo profit logic and stock forecasting",
      "AI chatbot",
    ],
    contribution:
      "Full-Stack Developer, contributing to the system using Laravel and React.",
  },
  {
    slug: "evacuation-center-capacity-monitor",
    title: "Evacuation Center Capacity Monitor",
    category: "Data & Monitoring",
    period: "December 2025",
    description:
      "A Python and Streamlit dashboard for monitoring live evacuation shelter capacity.",
    technologies: ["Python", "Streamlit", "Streamlit Community Cloud"],
    github: "",
    demo: "",
    featured: true,
    artwork: "dashboard",
    overview:
      "An academic project that uses a Streamlit dashboard to present live shelter-capacity data. The application was deployed through Streamlit Community Cloud.",
    highlights: [
      "Live evacuation shelter capacity data",
      "Dashboard built with Python and Streamlit",
      "Deployed on Streamlit Community Cloud",
    ],
    contribution:
      "Lead Developer, responsible for developing the monitoring dashboard.",
  },
  {
    slug: "closed-open",
    title: "Closed;Open",
    category: "Game Development",
    period: "October 2025",
    description:
      "A psychological horror visual novel with a branching narrative and game-state logic.",
    technologies: [],
    github: "",
    demo: "https://sirdroffilc.itch.io/closedopen",
    featured: true,
    artwork: "visual-novel",
    image: "/images/projects/closed-open.png",
    certificates: [
      {
        src: "/images/projects/closed-open-runner-up.jpg",
        title: "2nd Place · TPG UNLOCK",
        alt: "Second Place award for Worst Generation at TPG UNLOCK, listing Charles Justin R. Vizcarra as a team member.",
      },
      {
        src: "/images/projects/closed-open-special-awards.jpg",
        title: "Special Awards · Technical Achievement & Audience Choice",
        alt: "Closed;Open award poster recognizing Technical Achievement and Audience Choice.",
      },
    ],
    galleryTitle: "Inside Closed;Open",
    galleryDescription:
      "A few moments from our psychological horror visual novel, where unsettling scenes and branching choices shape the story.",
    gallery: [
      {
        src: "/images/projects/closed-open-menu.png",
        alt: "Closed;Open title screen with the protagonist and game menu",
        caption: "The title screen introduces the story and its unsettling world.",
      },
      {
        src: "/images/projects/closed-open-room.png",
        alt: "A dim bedroom scene from Closed;Open with the protagonist and a message that the room is unfamiliar",
        caption: "A quiet moment when the protagonist realizes something is wrong.",
      },
      {
        src: "/images/projects/closed-open-hands.png",
        alt: "Illustrated first-person scene showing hands against a dark wooden surface",
        caption: "A first-person scene from the game's psychological horror story.",
      },
    ],
    overview:
      "A psychological horror visual novel developed for TPG UNLOCK at PUP Manila. Its branching narrative and game-state logic shape the player’s experience.",
    highlights: [
      "Branching psychological horror narrative",
      "Game-state development",
      "Sprites, music, and narrative design",
    ],
    contribution:
      "Lead Developer; also contributed sprite, music, and narrative design.",
  },
  {
    slug: "ecoality",
    title: "ECOAlity",
    category: "UI/UX Design",
    period: "March 2025",
    description:
      "A UI/UX design project developed for the TUP UI/UX HAWKATHON.",
    technologies: ["Figma", "High-fidelity prototyping"],
    github: "",
    demo: "",
    featured: true,
    artwork: "design",
    image: "/images/projects/ecoality.png",
    galleryTitle: "The idea and the people behind it",
    galleryDescription:
      "ECOAlity started with a simple hope: make caring for the planet feel rewarding in everyday life. These snapshots capture both the app concept and the team who brought it to the HAWK-A-THON.",
    certificates: [
      {
        src: "/images/projects/ecoality-participation-certificate.png",
        title: "Certificate of Participation · UI/UX HAWK-A-THON",
        alt: "Certificate of participation awarded to Charles Justin Vizcarra for UI/UX design at the UI/UX Hawk-A-Thon: Designing the Future.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/ecoality-concept.jpg",
        alt: "ECOAlity HAWK-A-THON poster showing the app concept and its student team",
        caption: "The ECOAlity concept: making everyday sustainability rewarding.",
      },
      {
        src: "/images/projects/ecoality-team.jpg",
        alt: "The ECOAlity team presenting their project at the UI/UX HAWK-A-THON",
        caption: "The team sharing ECOAlity at the HAWK-A-THON.",
      },
    ],
    overview:
      "A design project presented at the TUP UI/UX HAWKATHON. The work included high-fidelity Figma prototypes, a project roadmap, and contributions to the final pitch.",
    highlights: [
      "High-fidelity prototypes created in Figma",
      "Contributed to the project roadmap",
      "Contributed to the final pitch",
    ],
    contribution:
      "UI/UX Designer, creating high-fidelity prototypes and contributing to the roadmap and pitch.",
  },
];
