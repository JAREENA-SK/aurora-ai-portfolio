"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0B1020]/90 px-5 py-4 shadow-lg backdrop-blur-md sm:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            onClick={() => {
              closeMenu();
              setActiveSection("");
            }}
            className="flex flex-col leading-none"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-xl font-extrabold tracking-wide text-transparent sm:text-2xl">
              SJ <span className="text-white">|</span> Portfolio
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:text-[11px] sm:tracking-[0.28em]">
              Senior Software Engineer
            </span>
          </a>

          <ul className="hidden items-center gap-7 text-gray-300 md:flex">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.sectionId;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`relative py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((currentValue) => !currentValue)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-200 transition hover:border-cyan-400/50 hover:text-cyan-400 md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <ul className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 text-gray-300 md:hidden">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.sectionId;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-xl px-4 py-3 transition-colors duration-300 ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "hover:bg-white/5 hover:text-cyan-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}