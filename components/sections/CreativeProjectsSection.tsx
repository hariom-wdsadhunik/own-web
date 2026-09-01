'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getPublicCreativeProjects } from '@/lib/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { FadeIn } from '@/components/motion/FadeIn';

export function CreativeProjectsSection() {
  const creativeProjects = getPublicCreativeProjects();

  return (
    <section id="creative-work" className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-24">
      <FadeIn>
        <SectionHeader
          indexNumber="01"
          eyebrow="DEPARTMENT 01 // CREATIVE PROJECTS"
          title="Products, Experiments &amp; Explorations"
          description="Products, experiments and ideas I built to explore what digital experiences could become."
        />
      </FadeIn>

      <div className="space-y-16 sm:space-y-36">
        {creativeProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <FadeIn key={project.id} delay={0.1} className="group">
              {/* MOBILE ONLY COMPOSITION (Clean Feature Panel Sequence) */}
              <div className="block lg:hidden space-y-4 pb-12 border-b border-white/10 last:border-b-0">
                {/* 1. PROJECT NUMBER */}
                <span className="font-mono text-xs text-blue-400 font-bold tracking-widest block">
                  0{(idx + 1).toString()} / CREATIVE
                </span>

                {/* 2. PROJECT TITLE (32px-44px Large Display) */}
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>

                {/* 3. LARGE PROJECT VISUAL (100% Content Width) */}
                <div className="pt-2">
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

                {/* 4. SHORT CATEGORY */}
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block font-bold pt-2">
                  {project.category}
                </span>

                {/* 5. ONE SHORT DESCRIPTION */}
                <p className="font-sans text-base text-gray-300 leading-relaxed font-normal">
                  {project.tagline}
                </p>

                {/* 6. ACTION */}
                <div className="pt-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-xs text-blue-400 hover:text-blue-300 transition-colors font-bold tracking-wider min-h-[44px]"
                    >
                      <span>VIEW LIVE →</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 font-display text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-bold tracking-wider min-h-[44px]"
                    >
                      <span>EXPLORE PROJECT</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>

              {/* DESKTOP ONLY COMPOSITION (100% Preserved Desktop Layout) */}
              <div
                className={`hidden lg:grid grid-cols-12 gap-12 items-center ${
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
                      className="w-full rounded-xl overflow-hidden transition-all duration-700 ease-out group-hover/media:scale-[1.02] group-hover/media:shadow-2xl group-hover/media:shadow-blue-500/10"
                    />
                  </Link>
                </div>

                <div className={`col-span-5 space-y-6 ${isEven ? '' : 'order-1'}`}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-xs text-blue-400 font-bold tracking-widest">
                      0{(idx + 1).toString()}
                    </span>
                    <Badge variant="icy" dot>{project.status}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                    <span className="font-mono text-xs text-gray-500 uppercase">// {project.category}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-4xl md:text-5xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="font-sans text-lg text-gray-300 leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-display text-xs text-blue-400 hover:text-blue-300 transition-colors font-bold tracking-wider min-h-[44px]"
                      >
                        <span>VIEW LIVE →</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 font-display text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-bold tracking-wider min-h-[44px]"
                      >
                        <span>EXPLORE PROJECT</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}