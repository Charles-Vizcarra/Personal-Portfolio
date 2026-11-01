"use client";

import { useEffect, useRef } from "react";

export function CosmicEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const hasFinePointer = window.matchMedia("(pointer: fine)");

    function updateProgress() {
      const scrollableHeight =
        root.scrollHeight - document.documentElement.clientHeight;
      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    }

    function updatePointer(event: PointerEvent) {
      if (
        !hasFinePointer.matches ||
        prefersReducedMotion.matches ||
        (event.pointerType !== "mouse" && event.pointerType !== "pen")
      ) {
        return;
      }

      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="scroll-progress"
      aria-hidden="true"
    />
  );
}
