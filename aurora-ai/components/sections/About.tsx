"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    value: "3+",
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
      className="bg-[#0B1020] px-5 py-24 text-white sm:px-6"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
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
            My Professional Story
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              I am a software engineering professional with experience at
              Micron, Qualcomm, and Sevitech Systems, where I worked across
              automation, software development, technical problem-solving, team
              coordination, and project delivery.
            </p>

            <p>
              My experience includes Python automation, C programming, Git,
              Jenkins, Bitbucket, Jira, Linux, technical debugging, and
              collaboration with engineering teams.
            </p>

            <p>
              I also worked as a technical trainer and project mentor, helping
              graduation students plan projects, improve presentations, prepare
              for interviews, and build confidence for employment.
            </p>

            <p>
              I am currently exploring remote opportunities in project
              management and operations management, where I can combine my
              technical background, leadership experience, and ability to
              coordinate people and processes.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {[
              "Software Engineering",
              "Project Coordination",
              "Team Leadership",
              "Operations Management",
              "Technical Mentoring",
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
          className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-6 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,212,255,0.15)] sm:p-9"
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
                className="rounded-2xl border border-white/5 bg-[#0F172A] p-6 text-center transition-all duration-300 hover:border-cyan-500/30"
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