"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Micron Technology",
    role: "Software Engineer",
    duration: "3 Months",
    tech: ["Python", "Jenkins", "Bitbucket", "Jira", "Linux"],
    points: [
      "Developed Python automation scripts",
      "Worked with Jenkins CI/CD pipelines",
      "Managed code using Bitbucket",
      "Tracked issues in Jira",
      "Worked in Linux environments",
    ],
  },
  {
    company: "Qualcomm",
    role: "Software Engineer II",
    duration: "1.5 Years",
    tech: ["C", "Python", "Git", "Jira", "Linux"],
    points: [
      "Developed software utilities using C and Python",
      "Debugged software issues",
      "Worked with Git version control",
      "Collaborated across engineering teams",
      "Supported Agile development using Jira",
    ],
  },
  {
    company: "Sevitech Systems",
    role: "Senior Software Engineer",
    duration: "4 Months",
    tech: ["Leadership", "Project Management", "Team Coordination"],
    points: [
      "Led a software development team",
      "Managed project planning",
      "Coordinated client communication",
      "Delivered projects on schedule",
    ],
  },
  {
    company: "Technical Trainer & Project Mentor",
    role: "Engineering Colleges",
    duration: "1 Year",
    tech: ["Python", "Career Guidance", "Projects"],
    points: [
      "Mentored engineering students",
      "Conducted mock interviews",
      "Guided final-year projects",
      "Prepared students for placements",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Professional Journey
          </h2>

        </div>

        <div className="relative border-l-2 border-cyan-500/40">

          {experiences.map((job, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative mb-16 ml-10"
            >

              <div className="absolute -left-[51px] top-6 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#00D4FF]" />

              <div className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,212,255,0.25)]">

                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <h3 className="text-3xl font-bold">
                      {job.company}
                    </h3>

                    <p className="text-cyan-400 text-lg">
                      {job.role}
                    </p>

                  </div>

                  <div className="rounded-full bg-[#0F172A] px-5 py-2 text-sm text-gray-300">
                    {job.duration}
                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-3">

                  {job.tech.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <ul className="mt-8 space-y-3">

                  {job.points.map((point) => (

                    <li
                      key={point}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-1 text-cyan-400">✓</span>
                      {point}
                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}