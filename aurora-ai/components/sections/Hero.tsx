"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Globe from "../three/Globe";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden px-6">

      {/* Aurora Glow Background */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>

      <div className="absolute right-1/4 top-20 -z-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>


      {/* Main Hero Container */}
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">


        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center lg:text-left"
        >

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-lg font-medium text-cyan-400"
          >
            👋 Hi, I'm
          </motion.p>


          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent md:text-8xl"
          >
            SHAIK JAREENA
          </motion.h1>


          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 text-2xl font-semibold text-gray-300 md:text-3xl"
          >

            <TypeAnimation
              sequence={[
                "Senior Software Engineer",
                2000,
                "Project Manager",
                2000,
                "Technology Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </motion.div>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-10 text-lg leading-8 text-gray-400"
          >
            Building reliable solutions, solving technical problems,
            and continuously learning modern technologies.
          </motion.p>


          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col gap-5 sm:flex-row lg:justify-start justify-center"
          >

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-[#6C63FF] px-8 py-3 font-semibold transition"
            >
              Download Resume
            </motion.button>


            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </motion.button>

          </motion.div>


        </motion.div>



        {/* Right Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[350px] w-[350px] md:h-[450px] md:w-[450px]"
        >

          <Globe />

        </motion.div>


      </div>


    </section>
  );
}