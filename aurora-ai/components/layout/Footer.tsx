"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#070B16] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-14 lg:flex-row">
        {/* Personal Branding */}

        <div className="text-center lg:text-left">
          <a
            href="#top"
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent"
          >
            SJ | Portfolio
          </a>

          <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
            Senior Software Engineer
          </p>

          <p className="mt-4 max-w-md leading-7 text-gray-400">
            Building reliable software solutions, supporting project delivery,
            and creating meaningful digital experiences.
          </p>
        </div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-7 text-gray-300">
          <a
            href="#about"
            className="transition-colors duration-300 hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition-colors duration-300 hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="transition-colors duration-300 hover:text-cyan-400"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="transition-colors duration-300 hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#certifications"
            className="transition-colors duration-300 hover:text-cyan-400"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-cyan-400"
          >
            Contact
          </a>
        </div>

        {/* Back to Top */}

        <a
          href="#top"
          aria-label="Back to top"
          className="rounded-full bg-cyan-500 p-4 text-black transition-all duration-300 hover:scale-110 hover:bg-cyan-400"
        >
          <ArrowUp size={22} />
        </a>
      </div>

      {/* Bottom Copyright */}

      <div className="border-t border-cyan-500/20 px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Shaik Jareena. Designed and developed with
        Next.js, React, Tailwind CSS and Three.js.
      </div>
    </footer>
  );
}