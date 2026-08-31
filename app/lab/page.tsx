import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TextLink } from '@/components/ui/TextLink';
import { EXPERIMENTS } from '@/content/experiments';
import { FadeIn } from '@/components/motion/FadeIn';
import { Stagger } from '@/components/motion/Stagger';

export const metadata: Metadata = {
  title: 'The Lab — Experiments & Prototypes | Hari Om',
  description: 'A laboratory space for creative technology explorations, LLM agent interfaces, and web archive prototypes.',
};

export default function LabPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <FadeIn>
        <SectionHeader
          indexNumber="03"
          eyebrow="THE LAB"
          title="Experiments &amp; Prototypes"
          description="A dedicated laboratory index for active prototypes, creative technology research, and LLM agent concepts."
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
              <h2 className="font-display text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {exp.title}
              </h2>
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
                VIEW EXPERIMENT DETAILS
              </TextLink>
            </div>
          </Card>
        ))}
      </Stagger>
    </div>
  );
}