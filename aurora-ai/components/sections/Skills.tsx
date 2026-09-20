"use client";

import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: number;
  label: string;
};

type SkillCategory = {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "AI Automation & Orchestration",
    icon: "🤖",
    description: "Engineering intelligent workflows, agentic systems and production-ready automation.",
    skills: [
      { name: "n8n Orchestration", level: 88, label: "Advanced" },
      { name: "Python Automation", level: 85, label: "Experienced" },
      { name: "Agentic AI Workflows", level: 82, label: "Proficient" },
      { name: "OpenAI API Integration", level: 82, label: "Proficient" },
      { name: "API & Data Pipelines", level: 84, label: "Experienced" },
    ],
  },
  {
    title: "Backend & State Infrastructure",
    icon: "⚙️",
    description: "Scalable backend foundations for stateful automation and AI applications.",
    skills: [
      { name: "Supabase", level: 84, label: "Experienced" },
      { name: "Vercel", level: 82, label: "Proficient" },
      { name: "Cloudflare", level: 78, label: "Proficient" },
      { name: "Next.js", level: 76, label: "Working Knowledge" },
      { name: "TypeScript", level: 70, label: "Working Knowledge" },
    ],
  },
  {
    title: "DevOps & Engineering",
    icon: "🛠️",
    description: "Production software practices, CI/CD, source control and complex debugging.",
    skills: [
      { name: "Git", level: 85, label: "Experienced" },
      { name: "Jenkins / CI/CD", level: 80, label: "Proficient" },
      { name: "Linux", level: 82, label: "Proficient" },
      { name: "Jira", level: 88, label: "Experienced" },
      { name: "Bitbucket", level: 78, label: "Proficient" },
    ],
  },
  {
    title: "Technical Leadership",
    icon: "🎯",
    description: "Leading technical delivery while aligning architecture, execution and business outcomes.",
    skills: [
      { name: "Technical Coordination", level: 88, label: "Experienced" },
      { name: "Sprint & Delivery Leadership", level: 84, label: "Experienced" },
      { name: "Technical Mentoring", level: 90, label: "Experienced" },
      { name: "Problem Solving", level: 88, label: "Experienced" },
      { name: "Stakeholder Communication", level: 82, label: "Proficient" },
    ],
  },
];

function SkillProgress({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="font-medium text-gray-200">{skill.name}</p>

        <span className="text-xs font-medium text-cyan-300">
          {skill.label}
        </span>
      </div>

      <div
        className="h-2.5 overflow-hidden rounded-full bg-[#0B1020]"
        role="progressbar"
        aria-label={`${skill.name}: ${skill.label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.level}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 1,
            delay: index * 0.08,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(0,212,255,0.45)]"
        />
      </div>
    </div>
  );
}

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
            Skills & Professional Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            A combination of software engineering, project coordination,
            technical tools, leadership and mentoring experience.
          </p>
        </motion.div>

        {/* Skill Categories */}

        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.12,
              }}
              whileHover={{
                y: -7,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-7 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,212,255,0.16)] sm:p-9"
            >
              {/* Category Header */}

              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-[#0F172A] text-4xl">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {category.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Progress Bars */}

              <div className="mt-9 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillProgress
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Additional Strengths */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-[#161B2F] to-[#11182C] p-7 sm:p-9"
        >
          <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-purple-300">
                Professional Strengths
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Reliable, adaptable and committed to continuous learning
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
              {[
                "Problem Solving",
                "Communication",
                "Collaboration",
                "Adaptability",
                "Ownership",
                "Continuous Learning",
              ].map((strength) => (
                <motion.span
                  key={strength}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200"
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}