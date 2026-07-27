"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Project Management Professional Training",
    issuer: "Professional Learning Academy",
    skills: ["Project Management", "Agile", "Scrum", "Leadership"],
    link: "#",
  },
  {
    title: "Python Programming",
    issuer: "Professional Learning Academy",
    skills: ["Python", "Automation", "Problem Solving"],
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Certifications & Achievements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Continuous learning and professional development through technical
            and leadership training programs.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,212,255,0.25)]"
            >
              {/* Icon */}

              <div className="mb-6 text-5xl">🏆</div>

              {/* Title */}

              <h3 className="text-2xl font-bold">
                {cert.title}
              </h3>

              {/* Issuer */}

              <p className="mt-2 text-lg text-cyan-400">
                {cert.issuer}
              </p>

              {/* Skills */}

              <div className="mt-6 flex flex-wrap gap-3">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-xl bg-[#6C63FF] px-6 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-[#5A52E0]"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}