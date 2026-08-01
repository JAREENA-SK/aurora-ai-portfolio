"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Micron Technology",
    role: "Software Engineer",
    duration: "3 Months",
    tech: ["Python", "Jenkins", "Bitbucket", "Jira", "Linux"],
    points: [
      "Developed and maintained Python automation scripts.",
      "Supported automated workflows using Jenkins.",
      "Managed source code and collaboration through Bitbucket.",
      "Tracked defects, tasks, and project activities using Jira.",
      "Worked in Linux-based development and testing environments.",
    ],
  },
  {
    company: "Qualcomm",
    role: "Software Engineer II",
    duration: "1.5 Years",
    tech: ["C", "Python", "Git", "Jira", "Linux"],
    points: [
      "Developed and enhanced software utilities using C and Python.",
      "Investigated and debugged software and validation issues.",
      "Managed source code and collaborative development using Git.",
      "Worked with cross-functional engineering teams.",
      "Tracked development tasks and technical issues using Jira.",
    ],
  },
  {
    company: "Sevitech Systems",
    role: "Senior Software Engineer",
    duration: "4 Months",
    tech: [
      "Team Leadership",
      "Project Coordination",
      "Task Management",
      "Delivery",
    ],
    points: [
      "Led a software team during project planning and execution.",
      "Assigned responsibilities and coordinated work among team members.",
      "Monitored project progress, risks, and delivery timelines.",
      "Supported communication between stakeholders and the project team.",
      "Helped ensure timely and quality project delivery.",
    ],
  },
  {
    company: "Technical Trainer & Project Mentor",
    role: "Engineering Colleges",
    duration: "1 Year",
    tech: [
      "Project Mentoring",
      "Technical Training",
      "Presentations",
      "Interview Preparation",
    ],
    points: [
      "Guided graduation students through academic and technical projects.",
      "Helped students plan, document, and present their project work.",
      "Conducted technical training and career-readiness sessions.",
      "Supported students with mock interviews and communication practice.",
      "Mentored students in developing confidence and workplace skills.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0B1020] px-5 py-24 text-white sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A career journey combining software engineering, automation,
            technical problem-solving, project leadership, and student
            mentoring.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative border-l-2 border-cyan-500/30 pl-8 sm:pl-12">
          {experiences.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="relative mb-14 last:mb-0"
            >
              {/* Timeline Dot */}

              <div className="absolute -left-[42px] top-7 h-5 w-5 rounded-full border-4 border-[#0B1020] bg-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.85)] sm:-left-[58px]" />

              {/* Experience Card */}

              <div className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-[0_0_35px_rgba(0,212,255,0.16)] sm:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold sm:text-3xl">
                      {job.company}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-cyan-400">
                      {job.role}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-[#0F172A] px-5 py-2 text-sm font-medium text-gray-300">
                    {job.duration}
                  </span>
                </div>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-3">
                  {job.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Responsibilities */}

                <ul className="mt-8 space-y-4">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 leading-7 text-gray-300"
                    >
                      <span className="mt-1 font-bold text-cyan-400">✓</span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}