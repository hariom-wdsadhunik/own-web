import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO } from '@/content/contact';
import { FadeIn } from '@/components/motion/FadeIn';

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 border-t border-white/10">
      <FadeIn>
        <span className="font-mono text-[10px] sm:text-xs text-blue-400 uppercase tracking-widest">
          INITIATE COLLABORATION
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-display text-3xl sm:text-6xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight tracking-tight">
          {CONTACT_INFO.heading}
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-sans text-xs sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
          {CONTACT_INFO.subheading}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4">
          <Button
            href={`mailto:${CONTACT_INFO.email}`}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-h-[44px] justify-center text-xs sm:text-sm font-bold"
            icon={<Mail className="w-4 h-4" />}
          >
            SEND EMAIL INQUIRY
          </Button>
          <Button
            href={CONTACT_INFO.githubUrl}
            isExternal
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto min-h-[44px] justify-center text-xs sm:text-sm text-gray-400 hover:text-white"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            VIEW GITHUB PROFILE
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}