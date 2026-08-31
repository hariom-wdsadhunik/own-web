'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Code } from 'lucide-react';
import { LabExperiment } from '@/types/portfolio';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { FadeIn } from '@/components/motion/FadeIn';

export interface LabDetailProps {
  experiment: LabExperiment;
  nextExperiment?: LabExperiment;
}

export function LabDetail({ experiment, nextExperiment }: LabDetailProps) {
  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <FadeIn>
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO THE LAB</span>
        </Link>
      </FadeIn>

      <FadeIn className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-blue-400 font-bold">{experiment.index}</span>
          <Badge variant="icy" dot>{experiment.status}</Badge>
          <Badge variant="outline">{experiment.year}</Badge>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          {experiment.title}
        </h1>

        <p className="font-mono text-sm sm:text-base text-gray-400 uppercase tracking-widest">
          {experiment.tagline}
        </p>
      </FadeIn>

      <Divider variant="muted" />

      <div className="space-y-12 max-w-4xl">
        <FadeIn className="space-y-4">
          <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">01 / EXPERIMENT SUMMARY</h2>
          <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
            {experiment.description}
          </p>
        </FadeIn>

        {experiment.problemOrMotivation && (
          <FadeIn className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">02 / RESEARCH MOTIVATION</h2>
            <p className="font-sans text-base text-gray-300 leading-relaxed">
              {experiment.problemOrMotivation}
            </p>
          </FadeIn>
        )}

        {experiment.findingsOrLearnings && (
          <FadeIn className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">03 / KEY FINDINGS &amp; LEARNINGS</h2>
            <div className="p-6 rounded-lg bg-[#0f1117] border border-white/10">
              <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed">
                {experiment.findingsOrLearnings}
              </p>
            </div>
          </FadeIn>
        )}

        <FadeIn className="space-y-4 pt-8 border-t border-white/10">
          <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">04 / TECHNOLOGIES EXPLORED</h2>
          <div className="flex flex-wrap gap-2">
            {experiment.tags.map((tag) => (
              <Badge key={tag} variant="icy">
                {tag}
              </Badge>
            ))}
          </div>
        </FadeIn>

        {(experiment.demoUrl || experiment.githubUrl) && (
          <FadeIn className="pt-8 border-t border-white/10 flex flex-wrap gap-4">
            {experiment.demoUrl && (
              <Button href={experiment.demoUrl} isExternal variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                LAUNCH EXPERIMENT DEMO
              </Button>
            )}
            {experiment.githubUrl && (
              <Button href={experiment.githubUrl} isExternal variant="secondary" icon={<Code className="w-4 h-4" />}>
                VIEW EXPERIMENT SOURCE
              </Button>
            )}
          </FadeIn>
        )}
      </div>

      <Divider variant="muted" />

      {nextExperiment && (
        <FadeIn className="pt-8">
          <Link
            href={`/lab/${nextExperiment.slug}`}
            className="group block p-8 rounded-xl bg-[#0f1117] border border-white/10 hover:border-blue-400/40 transition-all space-y-2 text-right"
          >
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block">
              NEXT LAB EXPERIMENT →
            </span>
            <h3 className="font-display text-3xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-end gap-3">
              <span>{nextExperiment.title}</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="font-mono text-xs text-gray-400">{nextExperiment.tagline}</p>
          </Link>
        </FadeIn>
      )}
    </article>
  );
}