"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Project Management Professional Training",
    issuer: "Professional Learning Academy",
    skills: [
      "Project Management",
      "Agile",
      "Scrum",
      "Leadership",
      "Team Coordination",
    ],
    link: "#",
  },
  {
    title: "Python Programming",
    issuer: "Professional Learning Academy",
    skills: [
      "Python",
      "Automation",
      "Programming Fundamentals",
      "Problem Solving",
    ],
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Certifications & Professional Learning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Professional training that strengthened my project-management,
            leadership, programming, automation, and problem-solving skills.
          </p>
        </motion.div>

        {/* Certification Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-7 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_35px_rgba(0,212,255,0.18)] sm:p-9"
            >
              {/* Icon */}

              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-[#0F172A] text-cyan-400">
                <Award size={34} />
              </div>

              {/* Certificate Information */}

              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                {certificate.title}
              </h3>

              <p className="mt-3 text-lg font-medium text-cyan-400">
                {certificate.issuer}
              </p>

              <p className="mt-5 leading-7 text-gray-400">
                This certificate was awarded to Shaik Jareena after completing
                professional training and demonstrating learning in the
                following areas.
              </p>

              {/* Skills */}

              <div className="mt-7 flex flex-wrap gap-3">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Button */}

              {certificate.link !== "#" ? (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#6C63FF] px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#5A52E0]"
                >
                  View Certificate
                  <ExternalLink size={18} />
                </a>
              ) : (
                <span className="mt-9 inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-500">
                  Certificate Preview Coming Soon
                </span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}