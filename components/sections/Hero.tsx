import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { Reveal } from '@/components/motion/Reveal';
import { DigitalAvatar } from '@/components/avatar/DigitalAvatar';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
      <div className="space-y-8 max-w-4xl relative z-10">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-4 flex-wrap">
            <DigitalAvatar size="sm" state="idle" />
            <Badge variant="icy" dot>
              AVAILABLE FOR SELECT INQUIRIES
            </Badge>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              // HARI OM PORTFOLIO
            </span>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <Reveal delay={0.2}>
            <h1 className="font-display text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              PRODUCT THINKING.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="font-display text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white leading-[1.05]">
              UI/UX &amp; WEB CRAFT.
            </h1>
          </Reveal>
        </div>

        <FadeIn delay={0.4}>
          <p className="font-sans text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-normal">
            Creating high-performance digital products, scalable web platforms, and experimental AI interface architectures with extreme visual restraint.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              href="#work"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              EXPLORE SELECTED WORK
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<Terminal className="w-4 h-4" />}
            >
              INITIATE CONTACT
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}