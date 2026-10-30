import Link from "next/link";
import { ArrowUp, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { CurrentYear } from "@/components/layout/CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="page-shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <Sparkles size={15} className="text-violet-300" aria-hidden="true" />
            {personal.name}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            A work in progress, somewhere among the stars.
          </p>
        </div>
        <div className="flex items-center justify-between gap-5 sm:justify-end">
          <SocialLinks compact />
          <Link
            href="/#top"
            className="inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
          >
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </Link>
        </div>
        <p className="text-xs text-slate-600 sm:text-right">
          © <CurrentYear /> {personal.name}
        </p>
      </div>
    </footer>
  );
}
