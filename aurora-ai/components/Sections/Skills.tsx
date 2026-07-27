"use client";

import { motion } from "framer-motion";

const skills = [
  {
    icon: "💻",
    title: "Technical Support",
    description: "Troubleshooting, issue resolution, customer support",
  },
  {
    icon: "📁",
    title: "Project Management",
    description: "Planning, coordination and delivery",
  },
  {
    icon: "⚛️",
    title: "React",
    description: "Modern component-based UI development",
  },
  {
    icon: "▲",
    title: "Next.js",
    description: "Full-stack React framework",
  },
  {
    icon: "🎨",
    title: "Tailwind CSS",
    description: "Utility-first responsive styling",
  },
  {
    icon: "🐍",
    title: "Python",
    description: "Learning automation and programming",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            My Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Technologies & Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Technologies and professional skills I use to build reliable
            solutions and continuously improve my knowledge.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-8 transition duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,212,255,0.25)]"
            >
              <div className="mb-6 text-5xl">
                {skill.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {skill.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}