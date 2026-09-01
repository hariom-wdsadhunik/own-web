'use client';

import React, { useRef } from 'react';
import { ArrowRight, Terminal, Sparkles, Cpu, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { Reveal } from '@/components/motion/Reveal';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85svh] sm:min-h-[92vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-28 overflow-hidden"
    >
      {/* Maximalist Ambient Glow Backdrops */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="space-y-6 sm:space-y-10 max-w-5xl relative z-10"
      >
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <Badge variant="icy" dot className="w-fit text-xs px-3 py-1 font-mono shadow-lg shadow-cyan-500/10 border border-cyan-400/40">
              AVAILABLE FOR SELECT INQUIRIES
            </Badge>
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
              // HARI OM PORTFOLIO
            </span>
            <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-widest hidden sm:inline-flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-400" />
              SYSTEM 2026 ONLINE
            </span>
          </div>
        </FadeIn>

        <div className="space-y-3 sm:space-y-5">
          <Reveal delay={0.2}>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black tracking-tight text-white leading-[1.02] drop-shadow-sm">
              PRODUCT <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">THINKING.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cyan-300/95 leading-tight flex items-center gap-3 flex-wrap">
              <span>UI/UX Architecture &amp; Web Engineering</span>
              <Sparkles className="w-6 h-6 text-purple-400 hidden sm:inline" />
            </p>
          </Reveal>
        </div>

        <FadeIn delay={0.45}>
          <p className="font-sans text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal border-l-2 border-cyan-400/60 pl-4 sm:pl-6 py-1">
            Engineering high-performance digital products, interactive Web3/AI platforms, and expressive visual interface systems with rich editorial craft.
          </p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 pt-3 sm:pt-6">
            <Button
              href="#creative-work"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] justify-center text-sm font-bold shadow-xl shadow-cyan-500/20 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-none"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              EXPLORE WORK →
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] justify-center text-sm text-slate-300 hover:text-white border-white/20 hover:border-purple-400/60 hover:bg-purple-500/10"
              icon={<Terminal className="w-4 h-4" />}
            >
              START A PROJECT ↗
            </Button>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}