'use client';

import React, { useState } from 'react';
import { FadeIn } from '@/components/motion/FadeIn';
import { cn } from '@/lib/utils';

const MANIFESTO_MODES = [
  { id: 'design', label: 'DESIGN', statement: 'I shape interfaces, interactions, and design systems with visual restraint.' },
  { id: 'build', label: 'BUILD', statement: 'I turn complex requirements into high-performance web products.' },
  { id: 'experiment', label: 'EXPERIMENT', statement: 'I explore AI workflows, generative interfaces, and creative technology.' },
];

export function StatementTransition() {
  const [activeMode, setActiveMode] = useState('design');

  return (
    <section className="py-16 sm:py-32 bg-white/[0.01] border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12">
        <FadeIn>
          <span className="font-mono text-[10px] sm:text-xs tracking-widest text-blue-400 uppercase">
            PHILOSOPHY // MANIFESTO
          </span>
        </FadeIn>

        {/* Desktop View */}
        <div className="hidden sm:block space-y-6 max-w-5xl mx-auto font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          <FadeIn delay={0.1}>
            <p className="text-gray-500">I DON'T JUST MAKE WEBSITES.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-300">I DESIGN SCALABLE SYSTEMS.</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white">I ENGINEER DIGITAL PRODUCTS.</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-blue-400">I TURN IDEAS INTO EXPERIENCES.</p>
          </FadeIn>
        </div>

        {/* Dedicated Mobile Interactive View */}
        <div className="sm:hidden space-y-6 max-w-xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-400">
            I DON'T JUST MAKE WEBSITES.
          </h2>

          <div className="flex items-center justify-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
            {MANIFESTO_MODES.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                className={cn(
                  'flex-1 min-h-[44px] py-2 px-3 rounded-lg font-mono text-xs tracking-widest transition-all',
                  activeMode === mode.id
                    ? 'bg-blue-500 text-gray-950 font-bold shadow-md'
                    : 'text-gray-400 hover:text-white'
                )}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#0f1117] border border-blue-400/20 text-left min-h-[100px] flex items-center">
            <p className="font-sans text-sm text-gray-200 leading-relaxed">
              {MANIFESTO_MODES.find((m) => m.id === activeMode)?.statement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}