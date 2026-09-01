'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, Terminal, Sparkles, Star, ShieldCheck, Code, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { Reveal } from '@/components/motion/Reveal';
import { ContactModal } from '@/components/contact/ContactModal';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { DecryptedText } from '@/components/reactbits/DecryptedText';
import { CONTACT_INFO } from '@/content/contact';

export function Hero() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const codeSnippet = `import { ProductArchitect } from '@/portfolio';

const architect = new ProductArchitect({
  name: "Hari Om",
  role: "UI/UX & Web Engineering",
  performance: "60 FPS Canvas",
  lighthouse: 100,
  stack: ["Next.js", "React", "TypeScript", "Tailwind"]
});

export default architect.build();`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-[85svh] sm:min-h-[95vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-28 overflow-hidden select-none"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
        >
          {/* Left Column: Headline & Controls */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* ReactBits Pill Badge */}
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <Badge variant="icy" dot className="text-[11px] sm:text-xs px-3.5 sm:px-4 py-1.5 font-mono shadow-xl shadow-purple-500/20 border border-purple-500/50 bg-purple-950/50 text-purple-200">
                  <DecryptedText text="REACT BITS POWERED // 2026" speed={40} />
                </Badge>
                <span className="font-mono text-[11px] sm:text-xs text-fuchsia-400 uppercase tracking-widest px-3 sm:px-3.5 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 font-bold">
                  <DecryptedText text="HARI OM PORTFOLIO" speed={35} />
                </span>
              </div>
            </FadeIn>

            {/* ReactBits Style Headline */}
            <div className="space-y-3 sm:space-y-4">
              <Reveal delay={0.2}>
                <h1 className="font-display text-3xl sm:text-6xl lg:text-[5.25rem] font-black tracking-tight text-white leading-[1.05] sm:leading-[1.02]">
                  Digital Products for{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
                    <ShinyText text="creative developers" speed={4} />
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.35}>
                <p className="font-sans text-sm sm:text-xl text-slate-300 max-w-xl leading-relaxed font-normal">
                  <span className="hidden sm:inline">Engineering high-performance web products, interactive Web3/AI platforms, and expressive visual interface systems with rich editorial craft.</span>
                  <span className="sm:hidden">Engineering high-speed mobile &amp; web applications with 60 FPS performance and rich visual interface systems.</span>
                </p>
              </Reveal>
            </div>

            {/* Action Buttons matching reactbits.dev */}
            <FadeIn delay={0.45}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
                <a
                  href="#creative-work"
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[50px] px-8 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-500 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs font-mono font-extrabold flex items-center justify-center gap-2.5 shadow-2xl shadow-purple-500/30 transition-all active:scale-95"
                >
                  <span>EXPLORE WORK →</span>
                </a>

                <a
                  href={CONTACT_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[50px] px-8 rounded-full border border-purple-500/40 bg-slate-950/80 hover:bg-purple-950/40 text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center justify-center gap-2.5 transition-all shadow-xl hover:border-purple-400"
                >
                  <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
                  <span>STAR ON GITHUB</span>
                </a>

                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[50px] px-6 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono font-bold text-slate-400 hover:text-white transition-colors"
                >
                  CONNECT ↗
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: ReactBits Style Syntax Highlighted Code Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.3}>
              <div className="rounded-2xl border border-purple-500/30 bg-[#0c0817]/90 p-4 sm:p-6 shadow-2xl shadow-purple-500/15 relative overflow-hidden group">
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-purple-500/20 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span className="font-bold text-purple-300">architect.config.ts</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="p-1.5 rounded bg-purple-950/50 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 transition-colors flex items-center gap-1.5 text-[11px]"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Terminal className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>

                <pre className="pt-3 sm:pt-4 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto select-text">
                  <code>
                    <span className="text-purple-400">import</span> &#123; ProductArchitect &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;@/portfolio&apos;</span>;{'\n\n'}
                    <span className="text-purple-400">const</span> architect = <span className="text-purple-400">new</span> <span className="text-cyan-300">ProductArchitect</span>(&#123;{'\n'}
                    {'  '}name: <span className="text-emerald-300">&quot;Hari Om&quot;</span>,{'\n'}
                    {'  '}role: <span className="text-emerald-300">&quot;UI/UX &amp; Web Engineering&quot;</span>,{'\n'}
                    {'  '}performance: <span className="text-emerald-300">&quot;60 FPS Canvas&quot;</span>,{'\n'}
                    {'  '}lighthouse: <span className="text-amber-300">100</span>,{'\n'}
                    {'  '}stack: [<span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>]{'\n'}
                    &#125;);{'\n\n'}
                    <span className="text-purple-400">export default</span> architect.<span className="text-cyan-300">build</span>();
                  </code>
                </pre>
              </div>
            </FadeIn>
          </div>
        </motion.div>
      </section>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}