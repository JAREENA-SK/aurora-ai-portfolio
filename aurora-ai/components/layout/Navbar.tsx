"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0B1020]/90 px-5 py-4 shadow-lg backdrop-blur-md sm:px-8">
        <div className="flex items-center justify-between">
          {/* Personal branding */}

          <a
            href="#top"
            onClick={closeMenu}
            className="flex flex-col leading-none"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-xl font-extrabold tracking-wide text-transparent sm:text-2xl">
              SJ <span className="text-white">|</span> Portfolio
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:text-[11px] sm:tracking-[0.28em]">
              Senior Software Engineer
            </span>
          </a>

          {/* Desktop navigation */}

          <ul className="hidden items-center gap-8 text-gray-300 md:flex">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}

          <button
            type="button"
            onClick={() => setMenuOpen((currentValue) => !currentValue)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-200 transition hover:border-cyan-400/50 hover:text-cyan-400 md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}

        {menuOpen && (
          <ul className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 text-gray-300 md:hidden">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-white/5 hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}