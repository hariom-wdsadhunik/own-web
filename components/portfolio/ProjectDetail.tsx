'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { Badge } from '@/components/ui/Badge';
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
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-8 sm:space-y-16">
      {/* Compact Top Navigation Bar */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>← BACK TO WORK</span>
          </Link>

          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            {isCreative ? 'CREATIVE' : 'CLIENT'} // {project.category}
          </span>
        </div>
      </FadeIn>

      {/* Project Title & Visual Anchor */}
      <FadeIn className="space-y-4">
        <h1 className="font-display text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          {project.title}
        </h1>

        <p className="font-sans text-base sm:text-xl text-gray-300 max-w-3xl leading-relaxed font-normal">
          {project.tagline}
        </p>
      </FadeIn>

      {/* Primary Project Visual */}
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

      {/* Metadata & Actions */}
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-xl bg-[#0f1117] border border-white/10 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-gray-500 uppercase tracking-widest text-[10px]">Category</span>
            <p className="text-gray-200 uppercase font-sans font-semibold">{project.category}</p>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 uppercase tracking-widest text-[10px]">Role</span>
            <p className="text-gray-200 font-sans">{project.role.join(' • ')}</p>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 uppercase tracking-widest text-[10px]">Status</span>
            <p className="text-blue-400 font-semibold">{project.status} ({project.year})</p>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 uppercase tracking-widest text-[10px]">Tech Stack</span>
            <div className="flex flex-wrap gap-1 pt-1">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-[10px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="space-y-12 sm:space-y-16 max-w-4xl">
        <FadeIn className="space-y-3">
          <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">01 / OVERVIEW</h2>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Project Summary</h3>
          <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            {project.summary}
          </p>
        </FadeIn>

        {project.problemStatement && (
          <FadeIn className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">02 / THE CHALLENGE</h2>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Problem Statement</h3>
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              {project.problemStatement}
            </p>
          </FadeIn>
        )}

        {project.approach && (
          <FadeIn className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">03 / PRODUCT THINKING</h2>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Approach &amp; Solution</h3>
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              {project.approach}
            </p>
          </FadeIn>
        )}

        {(project.designNotes || project.engineeringNotes) && (
          <FadeIn className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">04 / ARCHITECTURE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.designNotes && (
                <div className="space-y-2 p-5 sm:p-6 rounded-lg bg-[#0f1117] border border-white/10">
                  <h4 className="font-display text-base sm:text-lg font-bold text-white">UI/UX Architecture</h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {project.designNotes}
                  </p>
                </div>
              )}
              {project.engineeringNotes && (
                <div className="space-y-2 p-5 sm:p-6 rounded-lg bg-[#0f1117] border border-white/10">
                  <h4 className="font-display text-base sm:text-lg font-bold text-white">Frontend Engineering</h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
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
            className="group block p-6 sm:p-8 rounded-xl bg-[#0f1117] border border-white/10 hover:border-blue-400/40 transition-all space-y-2 text-right"
          >
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block">
              NEXT PROJECT ({nextProject.department.toUpperCase()}) →
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-end gap-3">
              <span>{nextProject.title}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-normal">{nextProject.tagline}</p>
          </Link>
        </FadeIn>
      )}
    </article>
  );
}