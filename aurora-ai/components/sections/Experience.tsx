"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
} from "lucide-react";

const experience = [
  {
    company: "Qualcomm",
    role: "Software Engineer II",
    period: "1.5 Years",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
    skills: ["Linux", "Python", "Git", "Jira"],
  },
  {
    company: "Micron Technology",
    role: "Software Engineer",
    period: "Software Automation",
    icon: BriefcaseBusiness,
    color: "from-purple-500 to-pink-500",
    skills: ["Jenkins", "Bitbucket", "Python", "Automation"],
  },
  {
    company: "Sevitech",
    role: "Senior Software Engineer",
    period: "Team Leadership",
    icon: BriefcaseBusiness,
    color: "from-green-500 to-cyan-500",
    skills: ["Leadership", "Planning", "Mentoring"],
  },
  {
    company: "HireReady Program",
    role: "Career Mentor",
    period: "Training & Placement",
    icon: GraduationCap,
    color: "from-orange-500 to-pink-500",
    skills: [
      "Project Management",
      "Interview Prep",
      "Career Guidance",
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
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative border-l border-cyan-500/30 pl-12">
          {experience.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.company}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="relative mb-16"
              >
                <div
                  className={`absolute -left-[58px] flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                >
                  <Icon size={20} />
                </div>

                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold">
                        {item.company}
                      </h3>

                      <p className="mt-2 text-xl text-cyan-400">
                        {item.role}
                      </p>
                    </div>

                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                      {item.period}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-500/20 px-4 py-2 text-sm text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}