import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ABOUT_INFO } from '@/content/about';
import { FadeIn } from '@/components/motion/FadeIn';

export function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeader
          indexNumber="05"
          eyebrow="ABOUT"
          title={ABOUT_INFO.name}
          description={ABOUT_INFO.title}
        />
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          {ABOUT_INFO.bio.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block">
                Primary Focus Areas
              </span>
              <div className="flex flex-wrap gap-2">
                {ABOUT_INFO.focus.map((item) => (
                  <Badge key={item} variant="icy">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 space-y-6 bg-[#0f1117] p-8 rounded-xl border border-white/10">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block border-b border-white/10 pb-4">
            Operating Principles
          </span>

          <ul className="space-y-4 font-mono text-xs text-gray-300">
            {ABOUT_INFO.principles.map((principle, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-400 font-bold shrink-0">0{idx + 1}</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-white/10 font-mono text-xs text-gray-500 flex justify-between">
            <span>LOCATION: {ABOUT_INFO.location}</span>
            <span>STATUS: AVAILABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}