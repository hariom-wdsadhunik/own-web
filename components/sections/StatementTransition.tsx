'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from '@/components/motion/FadeIn';

const MODES = [
  { id: 'design', label: 'DESIGN', statement: 'I DESIGN SCALABLE DIGITAL SYSTEMS.' },
  { id: 'build', label: 'ENGINEER', statement: 'I BUILD HIGH-PERFORMANCE WEB PRODUCTS.' },
  { id: 'experiment', label: 'EXPERIMENT', statement: 'I ARCHITECT ARTIFICIAL INTELLIGENCE INTERFACES.' },
];

export function StatementTransition() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 sm:py-32 border-y border-white/10 overflow-hidden bg-[#07090e]">
      {/* Kinetic Infinite Text Ticker Marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap opacity-30 select-none pb-8 sm:pb-12">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="inline-flex gap-8 font-display text-4xl sm:text-7xl font-black text-cyan-400/40 tracking-widest uppercase"
        >
          <span>PRODUCT THINKING // UI/UX ARCHITECTURE // HIGH PERFORMANCE ENGINEERING // AI EXPERIMENTATION //</span>
          <span>PRODUCT THINKING // UI/UX ARCHITECTURE // HIGH PERFORMANCE ENGINEERING // AI EXPERIMENTATION //</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full w-fit mx-auto border border-cyan-400/30">
              // OPERATING PHILOSOPHY
            </p>

            <h2 className="font-display text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              I DON&apos;T JUST MAKE WEBSITES.
            </h2>

            {/* Mode Switcher */}
            <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
              {MODES.map((mode, idx) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`min-h-[44px] px-4 py-2 rounded-xl font-display text-xs font-bold tracking-wider transition-all border ${
                    activeTab === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-lg shadow-cyan-500/10 scale-105'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="min-h-[60px] flex items-center justify-center pt-2">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-xl sm:text-4xl font-bold text-cyan-300 tracking-tight"
                >
                  {MODES[activeTab].statement}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}