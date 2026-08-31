import { SectionHeader } from '@/components/ui/SectionHeader';
import { CapabilityItem } from '@/components/portfolio/CapabilityItem';
import { CAPABILITIES } from '@/content/capabilities';
import { FadeIn } from '@/components/motion/FadeIn';

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeader
          indexNumber="02"
          eyebrow="CAPABILITIES"
          title="Four Pillars of Digital Craft"
          description="Integrated expertise across product discovery, UI/UX design architecture, high-performance web engineering, and AI experimentation."
        />
      </FadeIn>

      <div className="space-y-2">
        {CAPABILITIES.map((capability) => (
          <FadeIn key={capability.id}>
            <CapabilityItem capability={capability} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}