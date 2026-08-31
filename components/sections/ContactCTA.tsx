import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO } from '@/content/contact';
import { FadeIn } from '@/components/motion/FadeIn';

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 border-t border-white/10">
      <FadeIn>
        <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
          INITIATE COLLABORATION
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight">
          {CONTACT_INFO.heading}
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-sans text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {CONTACT_INFO.subheading}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button
            href={`mailto:${CONTACT_INFO.email}`}
            variant="primary"
            size="lg"
            className="min-h-[44px]"
            icon={<Mail className="w-4 h-4" />}
          >
            SEND EMAIL INQUIRY
          </Button>
          <Button
            href={CONTACT_INFO.githubUrl}
            isExternal
            variant="secondary"
            size="lg"
            className="min-h-[44px]"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            VIEW GITHUB PROFILE
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}