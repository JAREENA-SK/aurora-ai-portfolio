"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Aurora AI Portfolio",
    description:
      "A premium personal portfolio featuring responsive layouts, smooth animations, a polished illustrated avatar experience and a working contact form.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    image: "",
    github: "https://github.com/JAREENA-SK/aurora-ai-portfolio",
    demo: "https://aurora-ai-portfolio.vercel.app",
    featured: true,
    automation: false,
    aurora: true,
  },
  {
    title: "NoorFlowAI — AI Content Automation Platform",
    description:
      "An end-to-end AI-powered content operations and automation platform designed to manage content creation, approval workflows, metadata, video production, publishing readiness, scheduling and analytics from one centralized dashboard. It includes automated YouTube workflows, content calendar management, version approvals and AI-assisted growth tooling.",
    tech: ["AI Automation", "Next.js", "TypeScript", "Supabase", "YouTube API", "GitHub Actions", "Analytics"],
    image: "/projects/noorflowai-dashboard.png",
    github: "#",
    demo: "https://noor-flow-ai.vercel.app/",
    featured: true,
    automation: true,
    aurora: false,
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
    automation: false,
    aurora: false,
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
    automation: false,
    aurora: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0B1020] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">Projects</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Featured Projects</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A collection of projects and initiatives demonstrating technical learning,
            problem-solving, automation, project coordination and modern web development.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#161B2F] transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(0,212,255,0.18)]"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#10182A] to-[#161B2F]">
                {project.aurora ? (
                  <div className="relative flex h-full items-center justify-between overflow-hidden px-8">
                    <div className="absolute left-10 top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="absolute right-10 bottom-4 h-36 w-36 rounded-full bg-purple-500/10 blur-3xl" />

                    <div className="relative z-10 max-w-[58%]">
                      <p className="text-sm font-medium text-cyan-400">👋 Hi, I&apos;m</p>
                      <h4 className="mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-4xl font-extrabold leading-none text-transparent sm:text-5xl">
                        SHAIK JAREENA
                      </h4>
                      <p className="mt-3 text-lg font-semibold text-white">Senior Software Engineer</p>
                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        Project management • automation • technical mentoring
                      </p>
                    </div>

                    <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-[2rem] border border-cyan-400/20 bg-[#0F172A] p-3 shadow-[0_0_30px_rgba(0,212,255,0.18)] sm:h-48 sm:w-48">
                      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                        <Image
                          src="/profile/shaik-jareena-avatar.png"
                          alt="Shaik Jareena illustrated avatar"
                          fill
                          sizes="200px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                ) : project.image ? (
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
                      <p className="mt-4 font-medium text-white/80">Preview coming soon</p>
                    </div>
                  </div>
                )}

                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  {project.featured && (
                    <span className="rounded-full border border-white/20 bg-[#0B1020]/85 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
                      ⭐ Featured Project
                    </span>
                  )}

                  {project.automation && (
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-md">
                      ⚡ AI Automation
                    </span>
                  )}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="mt-5 leading-8 text-gray-400">{project.description}</p>

                {project.automation && (
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                    {["Approval Workflows", "Content Calendar", "Video Pipeline", "YouTube Automation", "Analytics", "AI Growth Tools"].map((feature) => (
                      <span
                        key={feature}
                        className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 px-3 py-2 text-center text-emerald-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

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
                      <Code2 size={19} />
                      GitHub
                    </a>
                  ) : project.demo === "#" ? (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white/5 px-6 py-3 font-semibold text-gray-500">
                      <Code2 size={19} />
                      Coming Soon
                    </span>
                  ) : null}

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
