"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { personal } from "@/data/personal";
import { SocialLinks } from "@/components/layout/SocialLinks";

const navigation = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Journey", href: "/#journey", id: "journey" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050816]/75 backdrop-blur-xl">
      <nav
        className="page-shell flex h-[4.5rem] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${personal.name} home`}
          onClick={closeMenu}
        >
          <span className="grid size-9 place-items-center rounded-xl border border-violet-300/30 bg-violet-400/10 font-mono text-xs font-bold tracking-widest text-violet-100 shadow-[0_0_24px_rgba(139,92,246,0.12)]">
            {personal.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
            {personal.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={activeSection === item.id ? "location" : undefined}
              className={`rounded-full px-3.5 py-2 text-xs font-medium transition ${
                activeSection === item.id
                  ? "bg-violet-400/15 text-violet-100"
                  : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <SocialLinks compact />
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#080b1b]/95 md:hidden"
          >
            <div className="page-shell flex flex-col gap-1 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-sm transition ${
                    activeSection === item.id
                      ? "bg-violet-400/10 text-violet-100"
                      : "text-slate-300 hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <SocialLinks compact />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
