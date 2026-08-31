import React from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase, Clock } from 'lucide-react';
import { getPublicClientProjects } from '@/lib/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { FadeIn } from '@/components/motion/FadeIn';

export function ClientProjectsSection() {
  const clientProjects = getPublicClientProjects();

  return (
    <section id="client-work" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 border-t border-white/10">
      <SectionHeader
        indexNumber="02"
        eyebrow="DEPARTMENT 02 // CLIENT PROJECTS"
        title="Commercial Web &amp; Client Delivery"
        description="Websites, UI/UX systems, and digital product implementations built for client briefs and commercial production."
        actionSlot={
          <div className="flex items-center gap-3">
            <Badge variant="outline">
              <Briefcase className="w-3 h-3 text-gray-400 shrink-0 inline-block mr-1" />
              <span>COMMERCIAL DELIVERIES</span>
            </Badge>
          </div>
        }
      />

      {clientProjects.length > 0 ? (
        <div className="space-y-24">
          {clientProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <FadeIn key={project.id} className="group">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                    <Link href={`/work/${project.slug}`} className="block">
                      <ProjectPreview
                        media={project.heroImage}
                        title={project.title}
                        category={project.category}
                        year={project.year}
                        status={project.status}
                      />
                    </Link>
                  </div>

                  <div className={`lg:col-span-5 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="icy" dot>{project.status}</Badge>
                      <Badge variant="outline">{project.year}</Badge>
                      {project.client && (
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">// CLIENT: {project.client}</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-3xl sm:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        <Link href={`/work/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-medium tracking-wider min-h-[44px]"
                      >
                        <span>VIEW CLIENT CASE STUDY</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      ) : (
        <FadeIn>
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0f1117] border border-white/10 space-y-6 relative overflow-hidden">
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
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Client Work &amp; Commercial Deliveries
              </h3>
              <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Commercial projects are currently being compiled into verified case studies with brief specifications, technical architecture notes, and production deliverables.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4 flex-wrap border-t border-white/5">
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                AVAILABLE FOR NEW CLIENT COMMISSIONS &amp; CONTRACTS
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 hover:text-blue-300 transition-colors font-semibold tracking-wider uppercase min-h-[44px]"
              >
                <span>INITIATE CLIENT BRIEF</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
}