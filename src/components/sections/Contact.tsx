"use client";

import { motion } from "motion/react";
import { Mail, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="section-space scroll-mt-20">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            Establish a connection
          </p>
          <h2 className="section-title">
            Have something in <span className="gradient-text">mind?</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project, question, or idea to share? Reach out directly or
            find me across the web.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45 }}
          className="surface-card mt-9 flex max-w-2xl flex-col justify-between rounded-3xl p-6 sm:p-8"
        >
          <div>
            <span className="grid size-12 place-items-center rounded-2xl border border-violet-200/20 bg-violet-300/[0.09] text-violet-200">
              <Mail size={21} aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-semibold text-white">
              Find me across the web
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              <a
                className="text-sky-200 underline decoration-sky-200/30 underline-offset-4 hover:text-white"
                href={`mailto:${personal.email}`}
              >
                {personal.email}
              </a>
            </p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
