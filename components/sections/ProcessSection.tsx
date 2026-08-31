import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { PROCESS_STEPS } from '@/content/process';
import { FadeIn } from '@/components/motion/FadeIn';
import { Stagger } from '@/components/motion/Stagger';

export function ProcessSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeader
          indexNumber="04"
          eyebrow="HOW I WORK"
          title="Engineering &amp; Product Methodology"
          description="A structured 6-step workflow that transforms ambiguous challenges into production-ready digital products."
        />
      </FadeIn>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROCESS_STEPS.map((step) => (
          <Card key={step.number} variant="standard" className="p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-2xl font-bold text-blue-400">{step.number}</span>
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">PHASE {step.number}</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
              <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">{step.tagline}</p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
              {step.description}
            </p>

            <div className="pt-2 border-t border-white/5 space-y-1">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Deliverables</span>
              <p className="font-mono text-[11px] text-gray-400">
                {step.deliverables.join(' • ')}
              </p>
            </div>
          </Card>
        ))}
      </Stagger>
    </section>
  );
}