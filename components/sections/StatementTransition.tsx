'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from '@/components/motion/FadeIn';

const MODES = [
  { id: 'design', label: 'DESIGN', statement: 'I DESIGN SCALABLE SYSTEMS.' },
  { id: 'build', label: 'BUILD', statement: 'I ENGINEER DIGITAL PRODUCTS.' },
  { id: 'experiment', label: 'EXPERIMENT', statement: 'I TURN IDEAS INTO EXPERIENCES.' },
];

export function StatementTransition() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-y border-white/10 text-center">
      <FadeIn>
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest">
            // OPERATING PHILOSOPHY
          </p>

          <h2 className="font-display text-2xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            I DON&apos;T JUST MAKE WEBSITES.
          </h2>

          {/* Mobile Lightweight Mode Switcher */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {MODES.map((mode, idx) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`min-h-[44px] px-3 py-1.5 rounded-md font-display text-xs font-bold tracking-wider transition-all border ${
                  activeTab === idx
                    ? 'bg-blue-500/10 text-blue-400 border-blue-400/40'
                    : 'bg-transparent text-gray-500 border-transparent hover:text-gray-300'
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
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="font-display text-lg sm:text-3xl font-medium text-blue-300 tracking-tight"
              >
                {MODES[activeTab].statement}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}