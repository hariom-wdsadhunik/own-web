import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { Reveal } from '@/components/motion/Reveal';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 overflow-hidden">
      <div className="space-y-6 sm:space-y-8 max-w-4xl relative z-10">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <Badge variant="icy" dot className="w-fit">
              AVAILABLE FOR SELECT INQUIRIES
            </Badge>
            <span className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              // HARI OM PORTFOLIO
            </span>
          </div>
        </FadeIn>

        <div className="space-y-2 sm:space-y-4">
          <Reveal delay={0.2}>
            <h1 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
              PRODUCT THINKING.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white leading-[1.1] sm:leading-[1.05]">
              UI/UX &amp; WEB CRAFT.
            </h1>
          </Reveal>
        </div>

        <FadeIn delay={0.4}>
          <p className="font-sans text-sm sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-normal">
            Creating high-performance digital products, scalable web platforms, and experimental AI interface architectures with extreme visual restraint.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              href="#work"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] justify-center"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              EXPLORE WORK →
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] justify-center"
              icon={<Terminal className="w-4 h-4" />}
            >
              START A PROJECT ↗
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}