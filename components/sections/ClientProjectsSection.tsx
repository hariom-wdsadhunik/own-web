'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import { getPublicClientProjects } from '@/lib/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { FadeIn } from '@/components/motion/FadeIn';

export function ClientProjectsSection() {
  const clientProjects = getPublicClientProjects();
  const hasClientProjects = clientProjects.length > 0;

  return (
    <section id="client-work" className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      <FadeIn>
        <SectionHeader
          indexNumber="02"
          eyebrow="DEPARTMENT 02 // CLIENT PROJECTS"
          title="Commercial Web &amp; Client Delivery"
          description="Client applications, commercial platforms and custom enterprise solutions."
        />
      </FadeIn>

      {hasClientProjects ? (
        <div className="space-y-12">
          {clientProjects.map((project) => (
            <FadeIn key={project.id} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center p-6 sm:p-10 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-emerald-400/40 transition-all">
                {/* Mobile Client Header */}
                <div className="lg:hidden space-y-1">
                  <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest block">
                    CLIENT // WEB DESIGN
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                </div>

                {/* Dominant Feature Visual Frame */}
                <div className="lg:col-span-7">
                  <Link href={`/work/${project.slug}`} className="block group/media">
                    <ProjectPreview
                      media={project.heroImage}
                      title={project.title}
                      category={project.category}
                      year={project.year}
                      status={project.status}
                      className="w-full rounded-xl overflow-hidden transition-all duration-700 ease-out group-hover/media:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Editorial Context & Actions */}
                <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                  {/* Desktop Header */}
                  <div className="hidden lg:flex items-center gap-3 flex-wrap">
                    <Badge variant="icy" dot>{project.status}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                    <span className="font-mono text-xs text-emerald-400 font-bold uppercase">// CLIENT DELIVERY</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="hidden lg:block font-display text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
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

                  <div className="flex items-center gap-4 flex-wrap pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-display text-xs text-emerald-400 hover:text-emerald-300 font-bold tracking-wider min-h-[44px] px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                      >
                        <span>VIEW LIVE PROJECT</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 font-display text-xs text-gray-400 hover:text-white transition-colors font-medium tracking-wider min-h-[44px]"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn delay={0.1}>
          <div className="p-6 sm:p-12 rounded-xl bg-[#0f1117] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] sm:text-xs">
                  <Lock className="w-3 h-3 text-blue-400 shrink-0 inline-block mr-1" />
                  <span>ARCHIVE IN PROGRESS</span>
                </Badge>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Commercial Case Studies Compiling
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                Commercial client work is currently being compiled into verified case studies. Available for custom enterprise projects and technical inquiries.
              </p>
            </div>

            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="min-h-[44px] shrink-0 text-xs font-bold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              START A PROJECT →
            </Button>
          </div>
        </FadeIn>
      )}
    </section>
  );
}