'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function CinematicBackground() {
  const { scrollYProgress } = useScroll();

  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const orb3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050608]">
      {/* Animated Kinetic Neon Glow Orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-[15%] left-[15%] w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[150px]"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[160px]"
        aria-hidden="true"
      />
      <motion.div
        style={{ scale: orb3Scale }}
        className="absolute bottom-[10%] left-[25%] w-[500px] h-[500px] rounded-full bg-emerald-500/8 blur-[140px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-noise opacity-40" aria-hidden="true" />
    </div>
  );
}