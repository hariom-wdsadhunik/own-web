import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getPublicFeaturedProjects } from '@/lib/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { FadeIn } from '@/components/motion/FadeIn';
import { DigitalAvatar } from '@/components/avatar/DigitalAvatar';

export function SelectedWork() {
  const featuredProjects = getPublicFeaturedProjects();

  return (
    <section id="work" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeader
        indexNumber="01"
        title="SELECTED WORK"
        description="A curated selection of digital products, web platforms, and experimental interface architectures."
        actionSlot={
          <div className="flex items-center gap-4">
            <DigitalAvatar size="sm" state="observing" />
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 hover:text-blue-300 transition-colors group tracking-wider uppercase min-h-[44px]"
            >
              <span>VIEW ALL WORK ({featuredProjects.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        }
      />

      <div className="space-y-24">
        {featuredProjects.map((project, idx) => {
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
                  <div className="flex items-center gap-3">
                    <Badge variant="icy" dot>{project.status}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                    <span className="font-mono text-xs text-gray-500 uppercase">// {project.category}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
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
                      <span>READ CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
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