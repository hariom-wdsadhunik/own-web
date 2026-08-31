import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getPublicProjects } from '@/lib/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { FadeIn } from '@/components/motion/FadeIn';

export const metadata: Metadata = {
  title: 'Selected Work & Case Studies | Hari Om',
  description: 'Explore selected digital product case studies, UI/UX architectures, and production platforms built by Hari Om.',
};

export default function WorkIndexPage() {
  const publicProjects = getPublicProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <SectionHeader
        indexNumber="01"
        title="ALL SELECTED WORK"
        description={`A comprehensive directory of ${publicProjects.length.toString().padStart(2, '0')} active production digital products, web platforms, and interface systems.`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {publicProjects.map((project) => (
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

              <div className="flex items-center gap-3">
                <Badge variant="icy" dot>{project.status}</Badge>
                <Badge variant="outline">{project.year}</Badge>
                <span className="font-mono text-xs text-gray-500 uppercase">// {project.category}</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h2>
                <p className="font-sans text-sm text-gray-300 leading-relaxed">
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
                className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-medium tracking-wider pt-2"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}