'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Particles } from '@/components/reactbits/Particles';

export function CinematicBackground() {
  const { scrollYProgress } = useScroll();

  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#040209]">
      {/* React Bits Interactive Particle Field */}
      <Particles />

      {/* Signature ReactBits Purple Radial Glow (Top Right Hero Backlight) */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-[10%] right-[0%] w-[750px] h-[750px] rounded-full bg-purple-600/20 blur-[170px]"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[35%] -left-[10%] w-[650px] h-[650px] rounded-full bg-fuchsia-600/15 blur-[180px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-noise opacity-30" aria-hidden="true" />
    </div>
  );
}