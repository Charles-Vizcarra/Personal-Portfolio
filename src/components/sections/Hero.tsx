"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Orbit, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh scroll-mt-24 items-center overflow-hidden pb-16 pt-24 sm:pb-16 sm:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-orbit star-drift" aria-hidden="true" />
      <div className="page-shell relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="eyebrow mb-5">
            <Sparkles size={14} aria-hidden="true" />
            A portfolio in orbit
          </div>
          <p className="mb-3 text-sm text-slate-400">Hello, universe. I’m</p>
          <h1
            id="hero-heading"
            className="gradient-text max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.065em] sm:text-7xl lg:text-[5.5rem]"
          >
            {personal.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-200 sm:text-xl">
            {personal.role}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {personal.introduction} I’m building this space one project at a
            time—come explore what’s taking shape.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="cosmic-button" href="#projects">
              Explore projects <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="quiet-button" href="#contact">
              Get in touch
            </Link>
          </div>

          <div className="mt-6">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-[440px]"
          aria-label="A glowing purple planet surrounded by stars and orbital rings"
          role="img"
        >
          <div className="absolute inset-[7%] rounded-full border border-violet-200/10" />
          <div className="absolute inset-[17%] rounded-full border border-sky-200/10" />
          <div className="absolute inset-[27%] rounded-full border border-violet-200/10" />
          <div className="absolute inset-[16%] rounded-full border border-sky-100/20 [transform:rotate(-30deg)_scaleY(.38)]" />
          <div className="absolute inset-[5%] rounded-full border border-violet-100/15 [transform:rotate(32deg)_scaleY(.58)]" />
          <div className="absolute inset-[19%] overflow-hidden rounded-full border border-fuchsia-200/20 bg-[#090513] shadow-[0_0_75px_rgba(216,64,255,.32)]">
            <Image
              src="/purple-planet.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 350px, 85vw"
              className="scale-[1.3] object-cover object-[46%_51%]"
            />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_72%_46%,transparent_42%,rgba(5,3,14,.12)_76%,rgba(5,3,14,.4))]" />
          </div>
          <div className="absolute left-[13%] top-[23%] grid size-10 place-items-center rounded-full border border-violet-200/20 bg-[#11152d]/80 text-violet-100 shadow-[0_0_24px_rgba(147,111,255,.2)]">
            <Orbit size={18} aria-hidden="true" />
          </div>
          <div className="absolute bottom-[18%] right-[15%] grid size-9 place-items-center rounded-full border border-sky-200/20 bg-[#10172a]/80 text-sky-100 shadow-[0_0_22px_rgba(56,189,248,.2)]">
            <span className="size-2 rounded-full bg-sky-200 shadow-[0_0_12px_#7dd3fc]" />
          </div>
          <div className="surface-card absolute bottom-[8%] left-[3%] rounded-2xl px-4 py-3">
            <p className="font-mono text-[0.62rem] tracking-[0.18em] text-slate-500">
              CURRENT MISSION
            </p>
            <p className="mt-1 text-sm font-medium text-slate-100">
              Build · Learn · Repeat
            </p>
          </div>
          <div className="absolute right-[3%] top-[13%] font-mono text-[0.62rem] tracking-[0.2em] text-slate-500">
            01 / EXPLORATION
          </div>
        </motion.div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-slate-300 sm:flex"
      >
        Scroll to explore
        <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
      </Link>
    </section>
  );
}
