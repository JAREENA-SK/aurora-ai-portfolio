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
    hireReady: false,
    salesOs: false,
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
    hireReady: false,
    salesOs: false,
  },
  {
    title: "HireReady — Final Year Project Hub",
    description:
      "A guided project-learning platform for CSE and ECE students that takes teams from project selection through implementation, documentation, reviews and viva preparation. The platform is designed around genuine understanding, remote mentoring and structured project execution rather than simple project submission.",
    tech: ["Career EdTech", "CSE & ECE", "Remote Mentoring", "Project Guidance", "Documentation", "Viva Preparation"],
    image: "",
    github: "#",
    demo: "https://hireready-projecthub-preview.hireready-projecthub.workers.dev/#projects",
    featured: true,
    automation: false,
    aurora: false,
    hireReady: true,
    salesOs: false,
  },
  {
    title: "AI Sales OS — Client Acquisition Platform",
    description:
      "A client-acquisition operating system built to discover prospects, qualify leads, manage outreach, generate lightweight demos, track follow-ups, proposals, payments and onboarding from one dashboard. It combines CRM-style pipeline management with lead scoring, demo generation and sales workflow automation for India, UAE and Kuwait markets.",
    tech: ["Sales Automation", "Lead Discovery", "CRM", "Demo Generation", "Pipeline Management", "Client Onboarding"],
    image: "",
    github: "#",
    demo: "https://ai-sales-os-zeta.vercel.app/",
    featured: true,
    automation: false,
    aurora: false,
    hireReady: false,
    salesOs: true,
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
                ) : project.hireReady ? (
                  <div className="relative flex h-full overflow-hidden bg-[#10233c] px-7 py-7">
                    <div className="absolute right-[-40px] top-[-50px] h-48 w-48 rounded-full bg-teal-300/10 blur-3xl" />
                    <div className="relative z-10 flex w-full items-center justify-between gap-5">
                      <div className="max-w-[58%]">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Final Year Projects • CSE & ECE</p>
                        <h4 className="mt-3 text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
                          Don&apos;t just submit it.
                          <span className="block text-teal-200">Understand it.</span>
                          <span className="block text-teal-300">Build it. Defend it.</span>
                        </h4>
                        <p className="mt-3 text-xs leading-5 text-slate-300">Guided implementation • documentation • reviews • viva preparation</p>
                      </div>

                      <div className="w-[38%] rounded-2xl border border-teal-300/20 bg-[#132b43] p-4 shadow-[0_0_30px_rgba(45,212,191,0.10)]">
                        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300">
                          <span>Interactive ProjectBook</span>
                          <span className="text-emerald-300">● Guided</span>
                        </div>
                        <p className="mt-3 text-lg font-bold text-white">QuantumShield AI</p>
                        <p className="text-xs text-cyan-200">Module 03 • Architecture</p>
                        <div className="mt-3 space-y-2 text-[10px]">
                          <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-emerald-300">✓ Understand</div>
                          <div className="rounded-lg border border-cyan-400/25 bg-cyan-400/5 px-3 py-2 text-cyan-200">• Architecture</div>
                          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-300">○ Setup</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.salesOs ? (
                  <div className="relative h-full overflow-hidden bg-[#0f1730] px-6 py-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.16),transparent_35%)]" />
                    <div className="relative z-10 grid h-full grid-cols-[0.9fr_1.5fr] gap-4">
                      <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4">
                        <p className="text-lg font-bold text-white">AI Sales OS</p>
                        <p className="mt-1 text-[10px] text-slate-400">Client acquisition system</p>
                        <div className="mt-4 space-y-2 text-[10px] text-slate-300">
                          {["Dashboard", "Command Center", "Lead Discovery", "Demo Center", "Follow-ups", "Proposals", "Payments", "Client Onboarding"].map((item, i) => (
                            <div key={item} className={`rounded-lg px-3 py-2 ${i === 0 ? "border border-indigo-400/20 bg-indigo-400/10 text-white" : "bg-white/[0.02]"}`}>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="rounded-2xl border border-white/10 bg-[#111a34] p-4">
                          <p className="text-xl font-bold text-white">Client Acquisition Dashboard</p>
                          <p className="mt-1 text-[10px] text-slate-400">Discover • qualify • demo • propose • onboard</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {["12 Leads", "9 Qualified", "₹72K Pipeline"].map((metric) => (
                            <div key={metric} className="rounded-xl border border-white/10 bg-[#111a34] px-3 py-3 text-center text-xs font-semibold text-white">{metric}</div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-xl border border-white/10 bg-[#111a34] p-3">
                            <p className="text-xs font-bold text-white">Lead Discovery</p>
                            <p className="mt-2 text-[10px] leading-4 text-slate-400">Scored prospects with market, fit and value.</p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-[#111a34] p-3">
                            <p className="text-xs font-bold text-white">Demo Center</p>
                            <p className="mt-2 text-[10px] leading-4 text-slate-400">Generate client-ready previews fast.</p>
                          </div>
                        </div>
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
                    <span className="rounded-full border border-white/20 bg-[#0B1020]/85 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">⭐ Featured Project</span>
                  )}
                  {project.automation && (
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-md">⚡ AI Automation</span>
                  )}
                  {project.salesOs && (
                    <span className="rounded-full border border-indigo-400/25 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-200 backdrop-blur-md">📈 Sales Automation</span>
                  )}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="mt-5 leading-8 text-gray-400">{project.description}</p>

                {project.automation && (
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                    {["Approval Workflows", "Content Calendar", "Video Pipeline", "YouTube Automation", "Analytics", "AI Growth Tools"].map((feature) => (
                      <span key={feature} className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 px-3 py-2 text-center text-emerald-200">{feature}</span>
                    ))}
                  </div>
                )}

                {project.hireReady && (
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                    {["Project Selection", "Guided Build", "Documentation", "Remote Reviews", "Viva Preparation", "CSE & ECE"].map((feature) => (
                      <span key={feature} className="rounded-xl border border-teal-400/15 bg-teal-400/5 px-3 py-2 text-center text-teal-200">{feature}</span>
                    ))}
                  </div>
                )}

                {project.salesOs && (
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                    {["Lead Discovery", "Lead Scoring", "Demo Center", "Follow-ups", "Proposals", "Client Onboarding"].map((feature) => (
                      <span key={feature} className="rounded-xl border border-indigo-400/15 bg-indigo-400/5 px-3 py-2 text-center text-indigo-200">{feature}</span>
                    ))}
                  </div>
                )}

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.tech.map((technology) => (
                    <span key={technology} className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300">{technology}</span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  {project.github !== "#" ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#6C63FF] px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#5A52E0]">
                      <Code2 size={19} /> GitHub
                    </a>
                  ) : project.demo === "#" ? (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white/5 px-6 py-3 font-semibold text-gray-500"><Code2 size={19} /> Coming Soon</span>
                  ) : null}

                  {project.demo !== "#" ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black">
                      <ExternalLink size={19} /> Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-gray-500"><ExternalLink size={19} /> Demo Soon</span>
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
