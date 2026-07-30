"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Aurora AI Portfolio",
    description:
      "A premium portfolio website featuring modern UI, animations, responsive layouts, and 3D experiences.",
    tech: ["Next.js", "React", "Tailwind", "Three.js", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "HireReady Program",
    description:
      "A career development platform focused on resume building, interview preparation, and technical mentoring.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "IT Support Ticket System",
    description:
      "A ticket management application for tracking, assigning, and resolving technical support requests.",
    tech: ["Next.js", "React", "Node.js"],
    github: "#",
    demo: "#",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A collection of projects demonstrating problem-solving,
            modern web development, and software engineering practices.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#161B2F] transition-all hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,212,255,0.25)]"
            >
              {/* Placeholder Image */}

              <div className="flex h-56 items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]">
                <span className="text-6xl">💻</span>
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="mt-10 flex gap-4">

                  <a
                    href={project.github}
                    className="rounded-xl bg-[#6C63FF] px-6 py-3 font-semibold transition hover:scale-105"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}