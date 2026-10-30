"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Code2, MapPin, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="section-space scroll-mt-20">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            The person behind the pixels
          </p>
          <h2 className="section-title">
            A little about <span className="gradient-text">my orbit.</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="surface-card relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-9"
          >
            <div className="absolute -right-14 -top-14 size-56 rounded-full border border-violet-200/10 shadow-[0_0_70px_rgba(139,92,246,0.12)]" />
            <div className="absolute -right-5 -top-5 size-40 rounded-full border border-sky-200/10" />
            <div className="relative z-10 grid size-16 place-items-center rounded-2xl border border-violet-200/20 bg-violet-300/10 text-2xl font-semibold text-violet-100">
              {personal.initials}
            </div>
            <div className="relative z-10 mt-12">
              <p className="text-xl font-semibold text-white">{personal.name}</p>
              <p className="mt-2 text-sm text-slate-400">{personal.role}</p>
              <p className="mt-2 text-xs text-slate-500">{personal.education}</p>
              <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <MapPin size={14} aria-hidden="true" />
                {personal.location}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="surface-card rounded-3xl p-7 sm:p-9"
          >
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {personal.about}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300">
                <Code2 size={14} className="text-violet-300" aria-hidden="true" />
                Curious by default
              </span>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition hover:border-violet-200/30 hover:text-white"
              >
                See what I’m building
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
