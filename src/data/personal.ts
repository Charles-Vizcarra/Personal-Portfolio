import type { SocialLink } from "@/types";

export const personal = {
  name: "Charles Justin R. Vizcarra",
  initials: "CV",
  role: "BSIT Student & Full-Stack Developer",
  introduction:
    "I’m an Information Technology student at the Technological University of the Philippines who builds web, mobile, and AI-assisted projects.",
  about:
    "I’m pursuing a Bachelor of Science in Information Technology at the Technological University of the Philippines. Through academic and collaborative projects, I’ve contributed to full-stack applications, mobile and web experiences, AI-assisted tools, and UI/UX design.",
  education: "BS Information Technology · 2023–Present",
  location: "Parañaque City, Philippines",
  email: "charlesjustinrvizcarra@gmail.com",
  phone: "09762158152",
  socials: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/Charles-Vizcarra",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/charles-justin-vizcarra/",
    },
  ] satisfies SocialLink[],
} as const;
