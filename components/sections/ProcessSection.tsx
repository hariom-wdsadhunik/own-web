'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROCESS_STEPS } from '@/content/process';
import { FadeIn } from '@/components/motion/FadeIn';

export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      <FadeIn>
        <SectionHeader
          indexNumber="06"
          eyebrow="ENGINEERING METHODOLOGY"
          title="6-Step Product Delivery Architecture"
          description="A disciplined, repeatable process turning early product concepts into production-grade web releases."
        />
      </FadeIn>

      <div className="relative border-l border-white/10 ml-5 sm:ml-6 pl-6 sm:pl-10 space-y-8 sm:space-y-12">
        {PROCESS_STEPS.map((step, idx) => (
          <FadeIn key={step.number} delay={idx * 0.08}>
            <div className="relative group">
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07080a] border border-blue-400/60 group-hover:border-blue-400 group-hover:scale-125 transition-all" />

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-blue-400 font-bold">{step.number}</span>
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-base text-gray-300 leading-relaxed max-w-2xl font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}