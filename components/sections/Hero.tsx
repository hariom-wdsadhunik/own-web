'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, Terminal, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { Reveal } from '@/components/motion/Reveal';
import { ContactModal } from '@/components/contact/ContactModal';

export function Hero() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-[90svh] sm:min-h-[95vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 overflow-hidden select-none"
      >
        {/* Kinetic Neon Aura Backdrops */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-purple-500/15 blur-[170px] pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="space-y-8 sm:space-y-12 max-w-6xl relative z-10"
        >
          {/* Top Ticker Array */}
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="icy" dot className="text-xs px-3.5 py-1 font-mono shadow-xl shadow-cyan-500/15 border border-cyan-400/50 bg-cyan-950/40">
                AWWWARDS INSPIRED // 2026 EDITION
              </Badge>
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30">
                // HARI OM PORTFOLIO
              </span>
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-bold">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                SYSTEM 99.9% OPERATIONAL
              </span>
            </div>
          </FadeIn>

          {/* Oversized Awwwards Headline Layout */}
          <div className="space-y-4 sm:space-y-6">
            <Reveal delay={0.2}>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-tight text-white leading-[0.98] drop-shadow-2xl">
                DIGITAL <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">PRODUCT</span>
                <br />
                <span className="text-slate-200">ARCHITECT.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cyan-300/90 leading-tight flex items-center gap-3 flex-wrap">
                <span>UI/UX Architecture &amp; Web Engineering</span>
                <Sparkles className="w-7 h-7 text-purple-400 hidden sm:inline animate-pulse" />
              </p>
            </Reveal>
          </div>

          <FadeIn delay={0.45}>
            <p className="font-sans text-base sm:text-2xl text-slate-300 max-w-3xl leading-relaxed font-normal border-l-4 border-cyan-400/80 pl-4 sm:pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-r-xl">
              Engineering high-performance digital products, interactive Web3/AI platforms, and expressive visual interface systems with rich editorial craft.
            </p>
          </FadeIn>

          {/* Action Button Bar */}
          <FadeIn delay={0.55}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-4">
              <Button
                href="#creative-work"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] px-8 justify-center text-sm font-extrabold shadow-2xl shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border-none"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                EXPLORE WORK →
              </Button>

              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="w-full sm:w-auto min-h-[52px] px-8 rounded-xl border border-cyan-400/40 bg-slate-900/80 text-sm font-bold text-slate-200 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-cyan-500/10"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>START A PROJECT ↗</span>
              </button>
            </div>
          </FadeIn>

          {/* Bottom Proof Bar */}
          <FadeIn delay={0.65}>
            <div className="pt-8 flex items-center gap-6 sm:gap-10 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>VERIFIED COMMERCIAL DELIVERY</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-emerald-400 font-bold">
                <span>100/100 LIGHTHOUSE PERFORMANCE</span>
              </div>
            </div>
          </FadeIn>
        </motion.div>
      </section>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}