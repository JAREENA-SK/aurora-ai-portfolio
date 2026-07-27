"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#070B16] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-14 lg:flex-row">

        {/* Logo */}

        <div>

          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Aurora AI
          </h2>

          <p className="mt-4 max-w-md text-gray-400 leading-7">
            Building modern software solutions with clean code,
            thoughtful design, and engaging user experiences.
          </p>

        </div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-8 text-gray-300">

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#experience" className="transition hover:text-cyan-400">
            Experience
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#certifications" className="transition hover:text-cyan-400">
            Certifications
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>

        </div>

        {/* Back to Top */}

        <a
          href="#"
          className="rounded-full bg-cyan-500 p-4 text-black transition hover:scale-110 hover:bg-cyan-400"
        >
          <ArrowUp size={22} />
        </a>

      </div>

      <div className="border-t border-cyan-500/20 py-6 text-center text-gray-500">

        © {new Date().getFullYear()} Aurora AI Portfolio.
        Built with Next.js, React & Tailwind CSS.

      </div>

    </footer>
  );
}