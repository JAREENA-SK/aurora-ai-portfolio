"use client";

import { useEffect, useRef, useState } from "react";
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
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const startVideo = () => {
      void video.play().catch(() => {
        // Browser may delay autoplay until the tab is active.
      });
    };

    startVideo();
    video.addEventListener("canplay", startVideo);
    document.addEventListener("visibilitychange", startVideo);

    return () => {
      video.removeEventListener("canplay", startVideo);
      document.removeEventListener("visibilitychange", startVideo);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden px-5 py-12 sm:px-6 lg:py-16">
      {/* Full hero motion background */}
      <video
        ref={heroVideoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        onLoadedData={(event) => {
          event.currentTarget.muted = true;
          void event.currentTarget.play().catch(() => undefined);
        }}
      >
        <source src="/profile/shaik-jareena-motion.mp4?v=3" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#070B17]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070B17]/95 via-[#070B17]/75 to-[#070B17]/25" />

      {/* Background glows */}

      <div className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute right-1/4 top-20 -z-10 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl sm:h-80 sm:w-80" />

      {/* Main layout */}

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center">
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
            <span>Senior AI Automation Engineer &amp; Workflow Architect</span>
          </motion.div>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mb-9 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0"
          >
            I bridge the gap between production-grade software engineering and cutting-edge Agentic AI. Specializing in advanced n8n orchestration, complex Python data pipelines, and scalable backend infrastructure for autonomous systems.
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

      </div>
    </section>
  );
}