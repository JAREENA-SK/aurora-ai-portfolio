"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="mb-3 text-cyan-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mb-8 text-5xl font-bold">
            My Story
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            I enjoy solving technical problems,
            supporting business applications,
            managing projects,
            and continuously learning
            modern technologies.
          </p>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-10">

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-[#0F172A] p-6 text-center">
                <h3 className="text-4xl font-bold text-cyan-400">
                  3+
                </h3>
                <p className="mt-2 text-gray-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl bg-[#0F172A] p-6 text-center">
                <h3 className="text-4xl">
                  🛠
                </h3>
                <p className="mt-2 text-gray-400">
                  Senior Software Engineer
                </p>
              </div>

              <div className="rounded-2xl bg-[#0F172A] p-6 text-center">
                <h3 className="text-4xl">
                  💼
                </h3>
                <p className="mt-2 text-gray-400">
                  Project Management
                </p>
              </div>

              <div className="rounded-2xl bg-[#0F172A] p-6 text-center">
                <h3 className="text-4xl">
                  📚
                </h3>
                <p className="mt-2 text-gray-400">
                  Looking for an Oppertunity
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}