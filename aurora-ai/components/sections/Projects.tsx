"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Aurora AI Portfolio",
    description:
      "A premium personal portfolio featuring responsive layouts, smooth animations, an interactive 3D Earth and a working contact form.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Framer Motion",
    ],
    image: "/projects/aurora-ai.png",
    github: "https://github.com/JAREENA-SK/aurora-ai-portfolio",
    demo: "https://aurora-ai-portfolio.vercel.app",
    featured: true,
  },
  {
    title: "HireReady Program",
    description:
      "A career-development initiative designed to support job seekers through resume preparation, interview training, technical mentoring and career guidance.",
    tech: ["Career Mentoring", "Interview Preparation", "Project Planning"],
    image: "",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "IT Support Ticket System",
    description:
      "A planned ticket-management application for creating, assigning, tracking and resolving technical-support requests efficiently.",
    tech: ["Next.js", "React", "Node.js"],
    image: "",
    github: "#",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A collection of projects and initiatives demonstrating technical
            learning, problem-solving, project coordination and modern web
            development.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#161B2F] transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(0,212,255,0.18)]"
            >
              {/* Screenshot or Placeholder */}

              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#6C63FF] via-blue-600 to-cyan-500">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl">💻</span>

                      <p className="mt-4 font-medium text-white/80">
                        Preview coming soon
                      </p>
                    </div>
                  </div>
                )}

                {project.featured && (
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#0B1020]/85 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
                    ⭐ Featured Project
                  </span>
                )}
              </div>

              {/* Project Information */}

              <div className="p-8">
                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#6C63FF] px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#5A52E0]"
                    >
                      <Github size={19} />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white/5 px-6 py-3 font-semibold text-gray-500">
                      <Github size={19} />
                      Coming Soon
                    </span>
                  )}

                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black"
                    >
                      <ExternalLink size={19} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-gray-500">
                      <ExternalLink size={19} />
                      Demo Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}