'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Beaker } from 'lucide-react';
import { getPublicLabExperiments } from '@/lib/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';

export function LabSection() {
  const labExperiments = getPublicLabExperiments();

  return (
    <section id="lab" className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      <FadeIn>
        <SectionHeader
          indexNumber="04"
          eyebrow="THE LAB // EXPERIMENTS &amp; R&amp;D"
          title="Interface Ideas &amp; Technical Prototypes"
          description="Experimental web art, AI interaction models and exploratory code."
        />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {labExperiments.map((experiment, idx) => (
          <FadeIn key={experiment.id} delay={idx * 0.1}>
            <div className="p-6 sm:p-8 rounded-xl bg-[#0f1117] border border-white/10 space-y-4 hover:border-blue-400/40 transition-all group flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-blue-400 font-bold">
                    0{(idx + 1).toString()}
                  </span>
                  <Badge variant="icy" className="text-[10px]">
                    <Beaker className="w-3 h-3 text-blue-400 shrink-0 inline-block mr-1" />
                    <span>{experiment.category}</span>
                  </Badge>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                  <Link href={`/lab/${experiment.slug}`}>{experiment.title}</Link>
                </h3>

                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2">
                  {experiment.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href={`/lab/${experiment.slug}`}
                  className="inline-flex items-center gap-2 font-display text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-bold tracking-wider min-h-[44px]"
                >
                  <span>EXPLORE EXPERIMENT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}