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
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <FadeIn>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-gray-400 hover:text-white transition-colors group min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO WORK DIRECTORY</span>
        </Link>
      </FadeIn>

      <FadeIn className="space-y-6">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="icy" dot>{project.status}</Badge>
          <Badge variant="outline">{project.year}</Badge>
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
            // {isCreative ? 'CREATIVE PROJECT' : 'CLIENT PROJECT'}
          </span>
          {project.client && (
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
              • CLIENT: {project.client}
            </span>
          )}
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          {project.title}
        </h1>

        <p className="font-sans text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed font-normal">
          {project.tagline}
        </p>
      </FadeIn>

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

      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 rounded-xl bg-[#0f1117] border border-white/10 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-gray-500 uppercase tracking-widest text-[10px]">Department &amp; Category</span>
            <p className="text-gray-200 uppercase">{isCreative ? 'Creative Project' : 'Client Delivery'} / {project.category}</p>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 uppercase tracking-widest text-[10px]">Role</span>
            <p className="text-gray-200 font-sans">{project.role.join(' • ')}</p>
          </div>
          <div className="space-y-1">
            <span className="text-gray-500 uppercase tracking-widest text-[10px]">Status &amp; Year</span>
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

      <div className="space-y-16 max-w-4xl">
        <FadeIn className="space-y-4">
          <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">01 / OVERVIEW</h2>
          <h3 className="font-display text-2xl font-bold text-white">Project Summary</h3>
          <p className="font-sans text-base text-gray-300 leading-relaxed font-normal">
            {project.summary}
          </p>
        </FadeIn>

        {project.brief && (
          <FadeIn className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">02 / THE CLIENT BRIEF</h2>
            <h3 className="font-display text-2xl font-bold text-white">Commercial Objectives</h3>
            <p className="font-sans text-base text-gray-300 leading-relaxed font-normal">
              {project.brief}
            </p>
          </FadeIn>
        )}

        {project.problemStatement && !project.brief && (
          <FadeIn className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">02 / THE CHALLENGE</h2>
            <h3 className="font-display text-2xl font-bold text-white">Problem Statement</h3>
            <p className="font-sans text-base text-gray-300 leading-relaxed font-normal">
              {project.problemStatement}
            </p>
          </FadeIn>
        )}

        {project.approach && (
          <FadeIn className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">03 / PRODUCT THINKING</h2>
            <h3 className="font-display text-2xl font-bold text-white">Approach &amp; Solution</h3>
            <p className="font-sans text-base text-gray-300 leading-relaxed font-normal">
              {project.approach}
            </p>
          </FadeIn>
        )}

        {(project.designNotes || project.engineeringNotes) && (
          <FadeIn className="space-y-8 pt-8 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">04 / DESIGN &amp; ENGINEERING</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.designNotes && (
                <div className="space-y-2 p-6 rounded-lg bg-white/[0.02] border border-white/10">
                  <h4 className="font-display text-lg font-bold text-white">UI/UX &amp; Interaction</h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {project.designNotes}
                  </p>
                </div>
              )}
              {project.engineeringNotes && (
                <div className="space-y-2 p-6 rounded-lg bg-white/[0.02] border border-white/10">
                  <h4 className="font-display text-lg font-bold text-white">Frontend Architecture</h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {project.engineeringNotes}
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
        )}

        {project.outcome && (
          <FadeIn className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">05 / VERIFIED OUTCOME</h2>
            <div className="p-6 rounded-lg bg-[#0f1117] border border-emerald-400/30">
              <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                {project.outcome}
              </p>
            </div>
          </FadeIn>
        )}

        {project.deliverables && (
          <FadeIn className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-mono text-xs text-blue-400 tracking-widest uppercase">DELIVERABLES</h2>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((item) => (
                <Badge key={item} variant="icy">
                  {item}
                </Badge>
              ))}
            </div>
          </FadeIn>
        )}

        <FadeIn className="pt-8 border-t border-white/10">
          <ProjectLinks
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        </FadeIn>
      </div>

      <Divider variant="muted" />

      {nextProject && (
        <FadeIn className="pt-8">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-8 rounded-xl bg-[#0f1117] border border-white/10 hover:border-blue-400/40 transition-all space-y-2 text-right"
          >
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block">
              NEXT PROJECT ({nextProject.department.toUpperCase()}) →
            </span>
            <h3 className="font-display text-3xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-end gap-3">
              <span>{nextProject.title}</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="font-mono text-xs text-gray-400">{nextProject.tagline}</p>
          </Link>
        </FadeIn>
      )}
    </article>
  );
}