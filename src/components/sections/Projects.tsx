"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function Projects() {
  return (
    <section id="projects" className="section-space scroll-mt-20">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            Selected transmissions
          </p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="section-title">
              Projects from my{" "}
              <span className="gradient-text">digital universe.</span>
            </h2>
            <p className="max-w-sm pb-1 text-sm leading-6 text-slate-400">
              Academic and collaborative work across web development, AI,
              design, game development, and community technology.
            </p>
          </div>
        </motion.div>
        <ProjectGrid />
      </div>
    </section>
  );
}
