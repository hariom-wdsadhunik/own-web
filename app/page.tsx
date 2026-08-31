import { Hero } from '@/components/sections/Hero';
import { CreativeProjectsSection } from '@/components/sections/CreativeProjectsSection';
import { StatementTransition } from '@/components/sections/StatementTransition';
import { ClientProjectsSection } from '@/components/sections/ClientProjectsSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { LabSection } from '@/components/sections/LabSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <div className="w-full space-y-12">
      <Hero />
      <CreativeProjectsSection />
      <StatementTransition />
      <ClientProjectsSection />
      <CapabilitiesSection />
      <LabSection />
      <ProcessSection />
      <AboutSection />
      <ContactCTA />
    </div>
  );
}