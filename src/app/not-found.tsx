import Link from "next/link";
import { ArrowLeft, Orbit } from "lucide-react";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <span className="grid size-16 place-items-center rounded-2xl border border-violet-200/20 bg-violet-300/[0.08] text-violet-200">
        <Orbit size={28} aria-hidden="true" />
      </span>
      <p className="eyebrow mt-7">Signal not found</p>
      <h1 className="gradient-text mt-3 text-5xl font-semibold tracking-[-0.06em]">
        Lost in space?
      </h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
        This page isn’t in the current flight plan. Head back to the portfolio
        and continue exploring.
      </p>
      <Link href="/" className="cosmic-button mt-7">
        <ArrowLeft size={16} aria-hidden="true" />
        Return home
      </Link>
    </main>
  );
}
