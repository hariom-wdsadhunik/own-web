import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectPreview } from '@/components/portfolio/ProjectPreview';
import { ProjectMeta } from '@/components/portfolio/ProjectMeta';
import { TextLink } from '@/components/ui/TextLink';
import { PROJECTS } from '@/content/projects';
import { FadeIn } from '@/components/motion/FadeIn';

export function SelectedWork() {
  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeader
          indexNumber="01"
          eyebrow="SELECTED WORK"
          title="Curated Digital Products &amp; Platforms"
          description="A collection of production digital products, high-density web platforms, and experimental AI interfaces."
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
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                      {project.title}
                    </h3>
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
                      VIEW CASE STUDY
                    </TextLink>
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