"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

const homeSections = [
  { id: "hero", label: "Старт" },
  { id: "contrast", label: "Контраст" },
  { id: "showcase", label: "Демо" },
  { id: "scenarios", label: "Сценарии" },
  { id: "features", label: "Система" },
  { id: "proof", label: "Доверие" },
  { id: "pricing", label: "Тарифы" }
];

export function SectionProgress() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.2
  });
  const [activeSection, setActiveSection] = useState(homeSections[0]?.id ?? "hero");

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = homeSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.55]
      }
    );

    elements.forEach((element) => observer.observe(element as Element));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-px bg-white/10">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-accent via-white/80 to-accent"
          style={{ scaleX }}
        />
      </div>

      {pathname === "/" ? (
        <div className="fixed right-4 top-1/2 z-[55] hidden -translate-y-1/2 xl:flex xl:flex-col xl:gap-3">
          {homeSections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="group flex items-center justify-end gap-3"
                aria-label={section.label}
              >
                <span
                  className={`text-xs transition ${
                    isActive ? "text-white/82" : "text-white/0 group-hover:text-white/58"
                  }`}
                >
                  {section.label}
                </span>
                <span
                  className={`rounded-full border transition ${
                    isActive
                      ? "h-3.5 w-3.5 border-accent/55 bg-accent/70"
                      : "h-2.5 w-2.5 border-white/18 bg-white/10 group-hover:border-white/38"
                  }`}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
