'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { Divider } from '@/components/ui/Divider';
import { ProjectGallery } from './ProjectGallery';
import { ProjectLinks } from './ProjectLinks';
import { FadeIn } from '@/components/motion/FadeIn';

export interface ProjectDetailProps {
  project: Project;
  nextProject?: Project;
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const isCreative = project.department === 'creative';

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16 space-y-10 sm:space-y-16">
      {/* Top Navigation Bar */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>← WORK</span>
          </Link>

          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            {isCreative ? 'CREATIVE' : 'CLIENT'} // {project.category}
          </span>
        </div>
      </FadeIn>

      {/* Product Title & Positioning */}
      <FadeIn className="space-y-3 sm:space-y-4">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
          {project.title}
        </h1>

        <div className="flex items-center gap-3 font-mono text-xs text-gray-400 uppercase tracking-widest">
          <span className="text-blue-400 font-bold">{project.category}</span>
          <span>•</span>
          <span>STATUS: {project.status}</span>
          <span>•</span>
          <span>YEAR: {project.year}</span>
        </div>

        <p className="font-sans text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed font-normal pt-1">
          {project.tagline}
        </p>
      </FadeIn>

      {/* Primary Hero Visual */}
      <FadeIn>
        <ProjectGallery
          heroMedia={project.heroImage}
          title={project.title}
          category={project.category}
          year={project.year}
          status={project.status}
          gallery={project.gallery}
        />
      </FadeIn>

      {/* Lightweight Role & Tech Metadata */}
      <FadeIn>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-4 border-y border-white/10 font-mono text-xs text-gray-400">
          <div>
            <span className="text-gray-500 uppercase">ROLE: </span>
            <span className="text-gray-200 font-sans">{project.role.join(' • ')}</span>
          </div>
          <div>
            <span className="text-gray-500 uppercase">TECH: </span>
            <span className="text-blue-400">{project.techStack.join(' • ')}</span>
          </div>
        </div>
      </FadeIn>

      {/* Editorial Story Sections */}
      <div className="space-y-12 sm:space-y-16 max-w-4xl">
        <FadeIn className="space-y-3">
          <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">01 / WHAT IT IS</h2>
          <h3 className="font-display text-2xl font-bold text-white">Project Overview</h3>
          <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {project.summary}
          </p>
        </FadeIn>

        {project.problemStatement && (
          <FadeIn className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">02 / THE CHALLENGE</h2>
            <h3 className="font-display text-2xl font-bold text-white">Problem Statement</h3>
            <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {project.problemStatement}
            </p>
          </FadeIn>
        )}

        {project.approach && (
          <FadeIn className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">03 / THE APPROACH</h2>
            <h3 className="font-display text-2xl font-bold text-white">Product Solution</h3>
            <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {project.approach}
            </p>
          </FadeIn>
        )}

        {(project.designNotes || project.engineeringNotes) && (
          <FadeIn className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">04 / DESIGN &amp; ENGINEERING</h2>
            <div className="space-y-6">
              {project.designNotes && (
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-bold text-white">UI/UX Architecture</h4>
                  <p className="font-sans text-base text-gray-300 leading-relaxed font-normal">
                    {project.designNotes}
                  </p>
                </div>
              )}
              {project.engineeringNotes && (
                <div className="space-y-2 pt-4">
                  <h4 className="font-display text-lg font-bold text-white">Frontend Architecture</h4>
                  <p className="font-sans text-base text-gray-300 leading-relaxed font-normal">
                    {project.engineeringNotes}
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
        )}

        <FadeIn className="pt-6 border-t border-white/10">
          <ProjectLinks
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        </FadeIn>
      </div>

      <Divider variant="muted" />

      {nextProject && (
        <FadeIn className="pt-4">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block space-y-2 text-right py-6 border-t border-white/10 hover:border-blue-400/40 transition-colors"
          >
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block">
              NEXT PROJECT ({nextProject.department.toUpperCase()}) →
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-end gap-3">
              <span>{nextProject.title}</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="font-sans text-sm text-gray-400 font-normal">{nextProject.tagline}</p>
          </Link>
        </FadeIn>
      )}
    </article>
  );
}