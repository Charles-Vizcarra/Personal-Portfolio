"use client";

import { motion } from "motion/react";
import {
  Braces,
  Boxes,
  Code2,
  Database,
  Network,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/skills";

const groupIcons: LucideIcon[] = [Braces, Code2, Network, Database, Wrench, Boxes];

export function Skills() {
  return (
    <section id="skills" className="section-space scroll-mt-20">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="eyebrow">
              <span className="size-1.5 rounded-full bg-sky-300 shadow-[0_0_10px_#7dd3fc]" />
              My technical constellation
            </p>
            <h2 className="section-title">
              Tools for the <span className="gradient-text">journey.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            A clear picture of my skills matters more than a long list. These
            groups are ready for the tools and technologies I’ve actually used.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index] ?? Code2;

            return (
              <motion.article
                key={group.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="surface-card group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200/25"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-10 place-items-center rounded-xl border border-violet-200/15 bg-violet-300/[0.08] text-violet-200 transition group-hover:bg-violet-300/[0.14]">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[0.62rem] tracking-[0.18em] text-slate-600">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-100">
                  {group.name}
                </h3>
                <p className="mt-2 min-h-10 text-sm leading-6 text-slate-400">
                  {group.description}
                </p>
                <div className="mt-4 flex min-h-7 flex-wrap gap-2">
                  {group.skills.length > 0 ? (
                    group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-600">
                      Add tools in src/data/skills.ts
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
