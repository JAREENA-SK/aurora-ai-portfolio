"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Globe from "../three/Globe";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden px-5 py-10 sm:px-6 lg:py-0">
      {/* Subtle Hero Glow */}

      <div className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute right-1/4 top-20 -z-10 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl sm:h-80 sm:w-80" />

      {/* Main Hero Container */}

      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="order-1 max-w-2xl text-center lg:text-left"
        >
          {/* Greeting */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mb-4 text-base font-medium text-cyan-400 sm:text-lg"
          >
            👋 Hi, I&apos;m
          </motion.p>

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold leading-[0.95] text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            SHAIK JAREENA
          </motion.h1>

          {/* Typing Roles */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mb-6 min-h-[72px] text-xl font-semibold text-gray-200 sm:min-h-[44px] sm:text-2xl md:text-3xl"
          >
            <TypeAnimation
              sequence={[
                "Senior Software Engineer",
                1800,
                "Project Manager",
                1800,
                "Operations Manager",
                1800,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mb-9 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0"
          >
            Experienced in software engineering, project coordination, team
            leadership, automation, and technical mentoring. Currently open to
            remote opportunities in project management and operations.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <motion.a
              href="/resume/Shaik-Jareena-Resume.pdf"
              download
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl bg-[#6C63FF] px-8 py-3 text-center font-semibold transition-colors duration-300 hover:bg-[#5A52E0]"
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl border border-cyan-400 px-8 py-3 text-center font-semibold text-cyan-400 transition-colors duration-300 hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Globe */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-2 h-[300px] w-[300px] shrink-0 sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] lg:h-[470px] lg:w-[470px]"
        >
          <Globe />
        </motion.div>
      </div>
    </section>
  );
}