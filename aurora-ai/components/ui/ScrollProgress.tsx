"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: smoothProgress }}
      className="fixed left-0 top-0 z-[9999] h-[5px] w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(0,212,255,0.8)]"
    />
  );
}