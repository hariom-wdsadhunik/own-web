'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { DepartmentSwitcher, FilterDepartment } from './DepartmentSwitcher';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { FadeIn } from '@/components/motion/FadeIn';

export interface WorkIndexContainerProps {
  initialProjects: Project[];
}

export function WorkIndexContainer({ initialProjects }: WorkIndexContainerProps) {
  const [activeFilter, setActiveFilter] = useState<FilterDepartment>('all');

  const creativeProjects = initialProjects.filter((p) => p.department === 'creative');
  const clientProjects = initialProjects.filter((p) => p.department === 'client');

  const showCreative = activeFilter === 'all' || activeFilter === 'creative';
  const showClient = activeFilter === 'all' || activeFilter === 'client';

  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <SectionHeader
          indexNumber="01"
          title="WORK DIRECTORY"
          description={`Exploring ${initialProjects.length.toString().padStart(2, '0')} public digital products, web platforms, and experimental interface architectures across two departments.`}
        />

        <DepartmentSwitcher
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          creativeCount={creativeProjects.length}
          clientCount={clientProjects.length}
        />
      </div>

      {showCreative && (
        <div className="space-y-8 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">
              DEPARTMENT 01 // CREATIVE PROJECTS ({creativeProjects.length})
            </h2>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest hidden sm:inline">
              Self-initiated products &amp; experiments
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" id="department-projects-grid">
            {creativeProjects.map((project) => (
              <FadeIn key={project.id} className="group flex flex-col justify-between p-8 rounded-xl bg-[#0f1117] border border-white/10 hover:border-blue-400/40 transition-all space-y-6">
                <div className="space-y-6">
                  <Link href={`/work/${project.slug}`} className="block">
                    <ProjectPreview
                      media={project.heroImage}
                      title={project.title}
                      category={project.category}
                      year={project.year}
                      status={project.status}
                    />
                  </Link>

                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="icy" dot>{project.status}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                    <span className="font-mono text-xs text-blue-400 uppercase">// CREATIVE</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="font-sans text-sm text-gray-300 leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[10px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-medium tracking-wider pt-2 min-h-[44px]"
                  >
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      )}

      {showClient && (
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
              DEPARTMENT 02 // CLIENT PROJECTS ({clientProjects.length})
            </h2>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest hidden sm:inline">
              Commercial web &amp; client delivery
            </span>
          </div>

          {clientProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {clientProjects.map((project) => (
                <FadeIn key={project.id} className="group flex flex-col justify-between p-8 rounded-xl bg-[#0f1117] border border-white/10 hover:border-emerald-400/40 transition-all space-y-6">
                  <div className="space-y-6">
                    <Link href={`/work/${project.slug}`} className="block">
                      <ProjectPreview
                        media={project.heroImage}
                        title={project.title}
                        category={project.category}
                        year={project.year}
                        status={project.status}
                      />
                    </Link>

                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="icy" dot>{project.status}</Badge>
                      <Badge variant="outline">{project.year}</Badge>
                      {project.client && (
                        <span className="font-mono text-xs text-emerald-400 uppercase">// CLIENT: {project.client}</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        <Link href={`/work/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-normal">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-medium tracking-wider pt-2 min-h-[44px]"
                    >
                      <span>VIEW CLIENT CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="p-8 sm:p-12 rounded-2xl bg-[#0f1117] border border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-6 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest">
                      COMMERCIAL ARCHIVE IN PROGRESS
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    STATUS: PREPARING CASE STUDIES
                  </Badge>
                </div>

                <div className="space-y-3 max-w-2xl">
                  <h3 className="font-display text-2xl font-bold text-white">
                    Client Work &amp; Commercial Deliveries
                  </h3>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed font-normal">
                    Commercial client case studies are currently being compiled with verified brief specifications and production deliverables.
                  </p>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      )}
    </div>
  );
}