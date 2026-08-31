import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { ProjectMeta } from '@/components/portfolio/ProjectMeta';
import { TextLink } from '@/components/ui/TextLink';
import { PROJECTS } from '@/content/projects';
import { FadeIn } from '@/components/motion/FadeIn';

export const metadata: Metadata = {
  title: 'Selected Work & Case Studies | Hari Om',
  description: 'Exhibition index of digital products, web platforms, and experimental AI systems built by Hari Om.',
};

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <FadeIn>
        <SectionHeader
          indexNumber="01"
          eyebrow="PORTFOLIO INDEX"
          title="All Selected Work &amp; Case Studies"
          description="A complete directory of digital products, web architecture platforms, and creative AI experiments."
        />
      </FadeIn>

      <div className="space-y-24">
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <FadeIn key={project.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ProjectPreview
                    media={project.heroImage}
                    title={project.title}
                    category={project.category}
                    year={project.year}
                    status={project.status}
                  />
                </div>

                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                      0{idx + 1} // {project.category}
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                      {project.title}
                    </h2>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                    {project.summary}
                  </p>

                  <ProjectMeta
                    role={project.role}
                    techStack={project.techStack}
                    year={project.year}
                    category={project.category}
                  />

                  <div className="pt-2">
                    <TextLink href={`/work/${project.slug}`} arrow="right">
                      EXPLORE CASE STUDY
                    </TextLink>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}