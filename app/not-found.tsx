import type { Metadata } from 'next';
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Hari Om',
  description: 'The requested route does not exist within the Hari Om portfolio.',
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8 py-24">
      <FadeIn delay={0.1}>
        <Badge variant="icy" dot>
          404 // ROUTE NOT FOUND
        </Badge>
      </FadeIn>

      <FadeIn delay={0.2} className="space-y-4 max-w-2xl">
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          SIGNAL LOST IN DIGITAL SPACE.
        </h1>
        <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed">
          The route or project case study you requested does not exist or may have been repositioned within the laboratory workspace.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="/" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
            RETURN TO HOMEPAGE
          </Button>
          <Button href="/work" variant="secondary" icon={<Compass className="w-4 h-4" />}>
            EXPLORE SELECTED WORK
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}