import {
  BriefcaseBusiness,
  Camera,
  CodeXml,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import { personal } from "@/data/personal";
import type { SocialPlatform } from "@/types";

const icons: Record<SocialPlatform, LucideIcon> = {
  github: CodeXml,
  linkedin: BriefcaseBusiness,
  instagram: Camera,
  website: Globe2,
};

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const links = personal.socials.filter((social) => social.url.trim().length > 0);

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      {links.map((social) => {
        const Icon = icons[social.platform];

        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className={`grid place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-violet-300/50 hover:bg-violet-400/10 hover:text-white ${
              compact ? "size-9" : "size-11"
            }`}
          >
            <Icon size={compact ? 16 : 18} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
