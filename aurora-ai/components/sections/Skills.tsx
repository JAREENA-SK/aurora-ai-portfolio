"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Software Development",
    icon: "💻",
    skills: ["C", "Python", "React", "Next.js", "TypeScript"],
    description:
      "Experience with software development, automation, reusable components, and modern web technologies.",
  },
  {
    title: "Project & Operations",
    icon: "📋",
    skills: [
      "Project Planning",
      "Team Coordination",
      "Task Management",
      "Stakeholder Communication",
      "Delivery Tracking",
    ],
    description:
      "Supporting project execution, coordinating teams, monitoring progress, and helping deliver work on schedule.",
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    skills: ["Git", "Bitbucket", "Jenkins", "Jira", "Linux"],
    description:
      "Hands-on experience with source control, automation pipelines, issue tracking, and Linux environments.",
  },
  {
    title: "Leadership & Mentoring",
    icon: "🎯",
    skills: [
      "Team Leadership",
      "Project Mentoring",
      "Technical Training",
      "Interview Preparation",
      "Presentation Skills",
    ],
    description:
      "Experience leading a project team and mentoring students through technical projects and career preparation.",
  },
  {
    title: "Frontend Technologies",
    icon: "⚛️",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    description:
      "Building responsive, animated, and user-friendly interfaces using modern frontend technologies.",
  },
  {
    title: "Professional Strengths",
    icon: "🌟",
    skills: [
      "Problem Solving",
      "Communication",
      "Adaptability",
      "Continuous Learning",
      "Collaboration",
    ],
    description:
      "Professional strengths that support effective teamwork, learning, decision-making, and reliable delivery.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0B1020] px-5 py-24 text-white sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Technologies & Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A combination of software engineering, project coordination,
            technical tools, leadership, and continuous learning.
          </p>
        </motion.div>

        {/* Skill Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-7 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_35px_rgba(0,212,255,0.18)] sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-5xl">{group.icon}</span>

                <span className="rounded-full border border-white/10 bg-[#0F172A] px-3 py-1 text-xs uppercase tracking-wider text-gray-400">
                  Expertise
                </span>
              </div>

              <h3 className="text-2xl font-bold">{group.title}</h3>

              <p className="mt-4 leading-7 text-gray-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}