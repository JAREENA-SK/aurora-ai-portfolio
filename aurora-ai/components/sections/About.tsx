"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    value: "3.5+",
    label: "Years of Experience",
  },
  {
    value: "3",
    label: "Software Companies",
  },
  {
    value: "1 Year",
    label: "Project Mentoring",
  },
  {
    value: "Remote",
    label: "Opportunities Preferred",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B1020] px-5 py-24 text-white sm:px-6"
    >
      {/* Keep the portrait at its natural aspect ratio on the right instead of zooming it with bg-cover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] overflow-hidden lg:block"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
        }}
      >
        <img
          src="/profile/about-jareena.png"
          alt=""
          className="h-full w-full object-contain object-right"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/profile/about-jareena.png')] bg-cover bg-[position:64%_center] bg-no-repeat opacity-35 lg:hidden"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B1020] from-0% via-[#0B1020]/95 via-40% to-[#0B1020]/5 to-68%" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020]/35 via-transparent to-transparent" />
      <div className="pointer-events-none absolute right-[18%] top-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[35%] top-1/2 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* About Content */}

        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            AI Automation Engineering
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              I am a Senior Software Engineer with 3.5+ years of experience engineering core automation, infrastructure pipelines, and intelligent workflows at enterprise scale (Micron, Qualcomm).
            </p>
            <p>
              Unlike traditional low-code configuration builders, my approach to AI Automation is deeply rooted in production-grade software practices. I leverage a robust foundational background in Python, CI/CD (Jenkins), Git version control, and complex debugging to architect highly reliable, scalable AI agent systems.
            </p>
            <p>
              My sweet spot lies in engineering advanced n8n workflow frameworks, state-management architectures via Supabase, and designing custom Python nodes to handle edge-case data transformations. Additionally, my background as a technical coordinator and mentor allows me to seamlessly manage complex technical project lifecycles, lead development sprints, and align technical architecture directly with business delivery goals.
            </p>
            <p>
              <span className="font-semibold text-white">Active Stack &amp; Tooling:</span> n8n, Python, Supabase, Vercel, Cloudflare, OpenAI API, Git, Jira, Jenkins, Linux.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {[
              "AI Automation",
              "n8n Orchestration",
              "Python",
              "Supabase",
              "Agentic AI",
              "Technical Leadership",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-cyan-400/25 bg-[#11182A]/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,212,255,0.15)] sm:p-9 lg:translate-y-48"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-[#0F172A]/85 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40"
              >
                <p className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">
                  {highlight.value}
                </p>

                <p className="mt-3 leading-6 text-gray-400">
                  {highlight.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}