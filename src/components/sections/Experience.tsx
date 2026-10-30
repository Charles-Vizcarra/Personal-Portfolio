"use client";

import { motion } from "motion/react";
import {
  Award as AwardIcon,
  BookOpen,
  BriefcaseBusiness,
  Orbit,
  Sparkles,
} from "lucide-react";
import { experienceEntries } from "@/data/experience";

const kindIcons = {
  Education: BookOpen,
  Experience: BriefcaseBusiness,
  Certification: Sparkles,
  Award: AwardIcon,
};

export function Experience() {
  return (
    <section id="journey" className="section-space scroll-mt-20">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">
            <Orbit size={14} aria-hidden="true" />
            The journey so far
          </p>
          <h2 className="section-title">
            Milestones along the <span className="gradient-text">way.</span>
          </h2>
        </motion.div>

        {experienceEntries.length > 0 ? (
          <div className="relative mt-10 space-y-4 pl-7 before:absolute before:bottom-8 before:left-[10px] before:top-4 before:w-px before:content-[''] timeline-line">
            {experienceEntries.map((entry, index) => {
              const Icon = kindIcons[entry.kind];

              return (
                <motion.article
                  key={entry.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="surface-card relative rounded-2xl p-5 sm:p-6"
                >
                  <span className="absolute -left-[27px] top-6 grid size-[21px] place-items-center rounded-full border border-violet-200/40 bg-[#11132a] text-violet-200">
                    <Icon size={11} aria-hidden="true" />
                  </span>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-violet-300">
                      {entry.kind}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {entry.period}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-100">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm text-sky-200/80">
                    {entry.organization}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {entry.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="surface-card mt-9 flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-lg font-semibold text-slate-100">
                The journey is just beginning.
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Add education, work, training, or extracurricular milestones to
                the experience data file when you’re ready.
              </p>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-sky-200/15 bg-sky-300/[0.07] text-sky-200">
              <Orbit size={20} aria-hidden="true" />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
