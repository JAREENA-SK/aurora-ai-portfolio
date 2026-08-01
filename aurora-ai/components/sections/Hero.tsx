"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

type CounterProps = {
  end: number;
  suffix?: string;
};

function Counter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1200;
    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    const increment = end / totalSteps;

    const timer = window.setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        window.clearInterval(timer);
        return;
      }

      setCount(Math.floor(current));
    }, intervalTime);

    return () => window.clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const statistics = [
  {
    value: 3,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 4,
    suffix: "",
    label: "Professional Roles",
  },
  {
    value: 2,
    suffix: "",
    label: "Certifications",
  },
  {
    value: 100,
    suffix: "%",
    label: "Dedication",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden px-5 py-12 sm:px-6 lg:py-16">
      {/* Background glows */}

      <div className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute right-1/4 top-20 -z-10 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl sm:h-80 sm:w-80" />

      {/* Main layout */}

      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left content */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center lg:text-left"
        >
          {/* Availability badge */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-green-400/25 bg-green-400/10 px-5 py-2 text-sm font-medium text-green-300">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
              </span>

              Available for Remote Opportunities
            </div>
          </motion.div>

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

          {/* Typing roles */}

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
            leadership, automation and technical mentoring. Currently exploring
            remote opportunities in project management and operations.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start"
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
              href="/resume/Shaik-Jareena-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl border border-purple-400 px-8 py-3 text-center font-semibold text-purple-300 transition-colors duration-300 hover:bg-purple-400 hover:text-black"
            >
              Preview Resume
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

          {/* Statistics */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.15 + index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="rounded-2xl border border-cyan-500/15 bg-[#161B2F]/80 px-4 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,212,255,0.12)]"
              >
                <p className="text-2xl font-extrabold text-cyan-400 sm:text-3xl">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>

                <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side: avatar only */}

        <motion.div
          initial={{ opacity: 0, x: 45, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative mx-auto flex w-full max-w-[470px] items-center justify-center"
        >
          {/* Glow behind avatar */}

          <div className="absolute h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl sm:h-96 sm:w-96" />

          <div className="absolute h-64 w-64 translate-x-10 translate-y-8 rounded-full bg-purple-500/15 blur-3xl sm:h-80 sm:w-80" />

          {/* Avatar card */}

          <motion.div
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
              rotate: 1,
            }}
            className="relative z-10 w-full overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-[#161B2F]/90 p-4 shadow-[0_0_45px_rgba(0,212,255,0.24)] backdrop-blur-md sm:p-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0F172A]">
              <Image
                src="/profile/shaik-jareena-avatar.png"
                alt="Illustrated portrait of Shaik Jareena"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 430px"
                className="object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/70 to-transparent px-6 pb-6 pt-16">
                <p className="text-2xl font-bold text-white">
                  Shaik Jareena
                </p>

                <p className="mt-2 text-sm font-medium text-cyan-300 sm:text-base">
                  Senior Software Engineer • Project Manager
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-[#0F172A] px-5 py-4">
              <div>
                <p className="text-sm text-gray-400">Current preference</p>
                <p className="mt-1 font-semibold text-white">
                  Remote Opportunities
                </p>
              </div>

              <span className="relative flex h-4 w-4 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}