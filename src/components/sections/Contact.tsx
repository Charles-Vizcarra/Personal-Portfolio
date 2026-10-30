"use client";

import { motion } from "motion/react";
import { Mail, Send, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
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
            Have a project, question, or idea to share? Send a note and let’s
            start a conversation.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
            className="surface-card flex flex-col justify-between rounded-3xl p-6 sm:p-8"
          >
            <div>
              <span className="grid size-12 place-items-center rounded-2xl border border-violet-200/20 bg-violet-300/[0.09] text-violet-200">
                <Mail size={21} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                Find me across the web
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Prefer email?{" "}
                <a
                  className="text-sky-200 underline decoration-sky-200/30 underline-offset-4 hover:text-white"
                  href={`mailto:${personal.email}`}
                >
                  {personal.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-400">
                <a
                  className="transition hover:text-white"
                  href={`tel:${personal.phone}`}
                >
                  {personal.phone}
                </a>
              </p>
              <div className="mt-5">
                <SocialLinks />
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-white/[0.08] pt-5 text-xs text-slate-500">
              <Send size={14} className="text-sky-200" aria-hidden="true" />
              I usually reply as soon as I can.
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="surface-card rounded-3xl p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
