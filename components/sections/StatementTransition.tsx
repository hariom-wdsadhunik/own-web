import { FadeIn } from '@/components/motion/FadeIn';

export function StatementTransition() {
  return (
    <section className="py-32 bg-white/[0.01] border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <FadeIn>
          <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">
            PHILOSOPHY // MANIFESTO
          </span>
        </FadeIn>

        <div className="space-y-6 max-w-5xl mx-auto font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          <FadeIn delay={0.1}>
            <p className="text-gray-500">I DON'T JUST MAKE WEBSITES.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-300">I DESIGN SCALABLE SYSTEMS.</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white">I ENGINEER DIGITAL PRODUCTS.</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-blue-400">I TURN IDEAS INTO EXPERIENCES.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}