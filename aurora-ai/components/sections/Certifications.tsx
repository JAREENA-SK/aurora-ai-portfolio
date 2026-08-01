"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
    image: "/certificates/project-management-certificate.jpg",
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
    image: "/certificates/python-certificate.jpg",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#0B1020] px-5 py-24 text-white sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
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
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#161B2F] transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_35px_rgba(0,212,255,0.18)]"
            >
              <div className="relative h-64 overflow-hidden bg-[#0F172A]">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="p-7 sm:p-9">
                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-lg font-medium text-cyan-400">
                  {certificate.issuer}
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  Awarded to Shaik Jareena after completing professional
                  training and demonstrating learning in the following areas.
                </p>

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

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#6C63FF] px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#5A52E0]"
                >
                  View Certificate
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}