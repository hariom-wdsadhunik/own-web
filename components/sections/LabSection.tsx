import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TextLink } from '@/components/ui/TextLink';
import { EXPERIMENTS } from '@/content/experiments';
import { FadeIn } from '@/components/motion/FadeIn';
import { Stagger } from '@/components/motion/Stagger';
import { DigitalAvatar } from '@/components/avatar/DigitalAvatar';

export function LabSection() {
  return (
    <section id="lab" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeader
          indexNumber="03"
          eyebrow="THE LAB"
          title="Experiments, Prototypes &amp; AI Research"
          description="A dedicated laboratory space for creative technology explorations, LLM agent interfaces, and web archive prototypes."
          actionSlot={<DigitalAvatar size="sm" state="exploring" />}
        />
      </FadeIn>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXPERIMENTS.map((exp) => (
          <Card key={exp.id} variant="interactive" className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-blue-400 font-bold tracking-widest">
                {exp.index}
              </span>
              <Badge variant="icy" dot>
                {exp.status}
              </Badge>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {exp.title}
              </h3>
              <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                {exp.tagline}
              </p>
            </div>

            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {exp.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="pt-2">
              <TextLink href={`/lab/${exp.slug}`} arrow="right">
                EXPLORE EXPERIMENT
              </TextLink>
            </div>
          </Card>
        ))}
      </Stagger>
    </section>
  );
}