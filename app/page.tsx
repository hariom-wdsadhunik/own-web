import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { StatementTransition } from '@/components/sections/StatementTransition';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { LabSection } from '@/components/sections/LabSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <div className="w-full space-y-12">
      <Hero />
      <SelectedWork />
      <StatementTransition />
      <CapabilitiesSection />
      <LabSection />
      <ProcessSection />
      <AboutSection />
      <ContactCTA />
    </div>
  );
}