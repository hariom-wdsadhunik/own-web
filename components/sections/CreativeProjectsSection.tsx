'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Zap } from 'lucide-react';
import { getPublicCreativeProjects } from '@/lib/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { FadeIn } from '@/components/motion/FadeIn';
import { SpotlightCard } from '@/components/reactbits/SpotlightCard';
import { DecryptedText } from '@/components/reactbits/DecryptedText';

export function CreativeProjectsSection() {
  const allCreativeProjects = getPublicCreativeProjects();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'PRODUCT', 'AI EXPERIMENT', 'WEB PLATFORM'];

  const filteredProjects = activeCategory === 'ALL'
    ? allCreativeProjects
    : allCreativeProjects.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <section id="creative-work" className="py-12 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-20">
      <FadeIn>
        <div className="space-y-6">
          <SectionHeader
            indexNumber="01"
            eyebrow="DEPARTMENT 01 // CREATIVE PROJECTS"
            title="Products, Experiments & Explorations"
            description="Products, experiments and ideas I built to explore what digital experiences could become."
          />

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 flex-wrap pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all border ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="space-y-12 sm:space-y-24">
        {filteredProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <FadeIn key={project.id} delay={0.1} className="group">
              <SpotlightCard className="p-6 sm:p-8 bg-[#080c14]/90 border border-white/10 hover:border-cyan-500/40">
                {/* MOBILE FEATURE PANEL SEQUENCE */}
                <div className="block lg:hidden space-y-4">
                  {/* 1. INDEX */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">
                      <DecryptedText text={`0${(idx + 1).toString()} / CREATIVE`} speed={35} />
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase font-bold">
                      // {project.category}
                    </span>
                  </div>

                  {/* 2. RESPONSIVE TITLE */}
                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  {/* 3. FEATURED VISUAL */}
                  <div className="pt-1">
                    <Link href={`/work/${project.slug}`} className="block group/media">
                      <ProjectPreview
                        media={project.heroImage}
                        title={project.title}
                        category={project.category}
                        year={project.year}
                        status={project.status}
                        className="w-full rounded-xl overflow-hidden shadow-2xl"
                      />
                    </Link>
                  </div>

                  {/* Performance Metrics Chips */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap pt-1">
                      {project.metrics.map((m) => (
                        <span key={m.label} className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                          <Zap className="w-2.5 h-2.5 text-emerald-400" />
                          {m.value} {m.label}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 4. TAGLINE */}
                  <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {project.tagline}
                  </p>

                  {/* 5. PRIMARY ACTION */}
                  <div className="pt-1">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-display text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-bold tracking-wider min-h-[44px]"
                      >
                        <span>VIEW LIVE →</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 font-display text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors font-bold tracking-wider min-h-[44px]"
                      >
                        <span>EXPLORE PROJECT</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* DESKTOP 12-COLUMN GRID */}
                <div
                  className={`hidden lg:grid grid-cols-12 gap-10 items-center ${
                    isEven ? '' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`col-span-7 ${isEven ? '' : 'order-2'}`}>
                    <Link href={`/work/${project.slug}`} className="block group/media">
                      <ProjectPreview
                        media={project.heroImage}
                        title={project.title}
                        category={project.category}
                        year={project.year}
                        status={project.status}
                        className="w-full rounded-xl overflow-hidden transition-all duration-700 ease-out group-hover/media:scale-[1.02] group-hover/media:shadow-2xl group-hover/media:shadow-cyan-500/10"
                      />
                    </Link>
                  </div>

                  <div className={`col-span-5 space-y-5 ${isEven ? '' : 'order-1'}`}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">
                        <DecryptedText text={`0${(idx + 1).toString()}`} speed={30} />
                      </span>
                      <Badge variant="icy" dot>{project.status}</Badge>
                      <Badge variant="outline">{project.year}</Badge>
                      <span className="font-mono text-xs text-slate-400 uppercase">// {project.category}</span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                        <Link href={`/work/${project.slug}`}>{project.title}</Link>
                      </h3>

                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap pt-1">
                          {project.metrics.map((m) => (
                            <span key={m.label} className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                              <Zap className="w-3 h-3 text-emerald-400" />
                              {m.value} {m.label}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="font-sans text-base text-slate-300 leading-relaxed font-normal">
                        {project.tagline}
                      </p>
                      <p className="font-sans text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-[10px]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-display text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-bold tracking-wider min-h-[44px]"
                        >
                          <span>VIEW LIVE →</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 font-display text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors font-bold tracking-wider min-h-[44px]"
                        >
                          <span>EXPLORE PROJECT</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}