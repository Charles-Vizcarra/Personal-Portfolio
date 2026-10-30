"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All projects");
  const categories = useMemo(
    () => ["All projects", ...new Set(projects.map((project) => project.category))],
    [],
  );
  const visibleProjects =
    activeCategory === "All projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div
        className="mt-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
              activeCategory === category
                ? "border-violet-300/35 bg-violet-400/15 text-violet-100"
                : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="surface-card group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-violet-200/25"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block overflow-hidden"
                aria-label={`View ${project.title} project details`}
              >
                <ProjectArtwork project={project} />
              </Link>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-violet-300">
                        {project.category}
                      </p>
                      {project.period && (
                        <span className="text-[0.65rem] text-slate-500">
                          {project.period}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={`Open ${project.title} details`}
                    className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-violet-200/40 hover:text-white"
                  >
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.68rem] text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-white/[0.08] pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-medium text-violet-200 transition hover:text-white"
                  >
                    Explore project
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-white"
                    >
                      <CodeXml size={14} aria-hidden="true" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
