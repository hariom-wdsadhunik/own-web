'use client';

import { ArrowRight, ArrowUpRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px] animate-pulse duration-[8000ms]" />
        <div className="w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[120px] transform translate-x-20 -translate-y-20" />
      </div>

      <div className="space-y-8 max-w-4xl">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL LAB // HARI OM</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08]">
            I BUILD DIGITAL EXPERIENCES THAT FEEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">IMPOSSIBLE.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="font-mono text-xs sm:text-base text-gray-400 max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
            Product Thinking • UI/UX Architecture • Web Engineering • AI Lab
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              href="#work"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              EXPLORE WORK
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              START A PROJECT
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}