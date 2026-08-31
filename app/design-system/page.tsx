import type { Metadata } from 'next';
import { ArrowRight, Sparkles, Terminal, Cpu, Layers } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { Divider } from '@/components/ui/Divider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TextLink } from '@/components/ui/TextLink';
import { FadeIn } from '@/components/motion/FadeIn';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger } from '@/components/motion/Stagger';
import { ScaleIn } from '@/components/motion/ScaleIn';

export const metadata: Metadata = {
  title: 'Design System | Hari Om',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <FadeIn>
        <SectionHeader
          indexNumber="00"
          eyebrow="SYSTEM SPECIFICATION"
          title="Cinematic Design System & Primitive Library"
          description="Visual token standards, typography hierarchy, UI primitives, and motion infrastructure established for Hari Om's personal portfolio."
          actionSlot={
            <Badge variant="icy" dot>
              System Active • v1.0
            </Badge>
          }
        />
      </FadeIn>

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-mono text-xs tracking-widest text-blue-400 uppercase">01 / COLOR TOKENS</h3>
          <h4 className="font-display text-2xl font-bold text-white">Color Palette &amp; Surface Tokens</h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 rounded-lg bg-[#07080a] border border-white/10 space-y-2">
            <div className="w-full h-10 rounded bg-[#07080a] border border-white/10" />
            <p className="text-gray-200 font-semibold">bg-base</p>
            <p className="text-gray-500 text-[10px]">#07080A</p>
          </div>
          <div className="p-4 rounded-lg bg-[#0f1117] border border-white/10 space-y-2">
            <div className="w-full h-10 rounded bg-[#0f1117] border border-white/10" />
            <p className="text-gray-200 font-semibold">bg-surface</p>
            <p className="text-gray-500 text-[10px]">#0F1117</p>
          </div>
          <div className="p-4 rounded-lg bg-[#151821] border border-white/10 space-y-2">
            <div className="w-full h-10 rounded bg-[#151821] border border-white/10" />
            <p className="text-gray-200 font-semibold">bg-elevated</p>
            <p className="text-gray-500 text-[10px]">#151821</p>
          </div>
          <div className="p-4 rounded-lg bg-[#1a1d27] border border-white/10 space-y-2">
            <div className="w-full h-10 rounded bg-[#1a1d27] border border-white/10" />
            <p className="text-gray-200 font-semibold">bg-card</p>
            <p className="text-gray-500 text-[10px]">#1A1D27</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-blue-400/30 space-y-2">
            <div className="w-full h-10 rounded bg-[#60a5fa]" />
            <p className="text-blue-300 font-semibold">accent-icy</p>
            <p className="text-gray-500 text-[10px]">#60A5FA</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-indigo-400/30 space-y-2">
            <div className="w-full h-10 rounded bg-[#818cf8]" />
            <p className="text-indigo-300 font-semibold">accent-violet</p>
            <p className="text-gray-500 text-[10px]">#818CF8</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
            <div className="w-full h-10 rounded bg-[#f3f4f6]" />
            <p className="text-gray-200 font-semibold">text-primary</p>
            <p className="text-gray-500 text-[10px]">#F3F4F6</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
            <div className="w-full h-10 rounded bg-[#9ca3af]" />
            <p className="text-gray-200 font-semibold">text-secondary</p>
            <p className="text-gray-500 text-[10px]">#9CA3AF</p>
          </div>
        </div>
      </section>

      <Divider variant="muted" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-mono text-xs tracking-widest text-blue-400 uppercase">02 / TYPOGRAPHY HIERARCHY</h3>
          <h4 className="font-display text-2xl font-bold text-white">Font Scale &amp; Structural Hierarchy</h4>
        </div>
        <div className="space-y-6 bg-white/[0.02] p-8 rounded-xl border border-white/10">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Display XL / Space Grotesk</span>
            <p className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight">
              Cinematic Digital Craft
            </p>
          </div>
          <div className="space-y-1 pt-4 border-t border-white/5">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Display LG / Space Grotesk</span>
            <p className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Product Thinking &amp; UI Architecture
            </p>
          </div>
          <div className="space-y-1 pt-4 border-t border-white/5">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Heading MD / Space Grotesk</span>
            <p className="font-display text-xl font-semibold text-gray-100">
              LeadPilot — Intelligent Prospecting Engine
            </p>
          </div>
          <div className="space-y-1 pt-4 border-t border-white/5">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Body LG / Inter</span>
            <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
              We design and construct digital products with extreme visual restraint, physical motion feedback, and high-performance frontend execution.
            </p>
          </div>
          <div className="space-y-1 pt-4 border-t border-white/5">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Technical Metadata / Monospace</span>
            <p className="font-mono text-xs text-blue-400 tracking-widest uppercase">
              STATUS: PRODUCTION // STACK: NEXT.JS • REACT 19 • TAILWIND V4
            </p>
          </div>
        </div>
      </section>

      <Divider variant="muted" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-mono text-xs tracking-widest text-blue-400 uppercase">03 / BUTTON SYSTEM</h3>
          <h4 className="font-display text-2xl font-bold text-white">Button Variants &amp; Sizes</h4>
        </div>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Primary Button
            </Button>
            <Button variant="secondary" icon={<Sparkles className="w-4 h-4" />}>
              Secondary Button
            </Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link" icon={<ArrowRight className="w-4 h-4" />}>
              Text Link Button
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
            <Button size="sm" variant="secondary">Small (36px)</Button>
            <Button size="md" variant="secondary">Medium (44px)</Button>
            <Button size="lg" variant="secondary">Large (50px)</Button>
            <Button variant="secondary" isLoading>Loading State</Button>
            <Button variant="primary" disabled>Disabled State</Button>
          </div>
        </div>
      </section>

      <Divider variant="muted" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-mono text-xs tracking-widest text-blue-400 uppercase">04 / BADGE SYSTEM</h3>
          <h4 className="font-display text-2xl font-bold text-white">Editorial Badges &amp; Tags</h4>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">DEFAULT TAG</Badge>
          <Badge variant="icy" dot>ICY ACCENT</Badge>
          <Badge variant="success" dot>LIVE PRODUCTION</Badge>
          <Badge variant="outline">OUTLINE TAG</Badge>
        </div>
      </section>

      <Divider variant="muted" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-mono text-xs tracking-widest text-blue-400 uppercase">05 / CARD PRIMITIVES</h3>
          <h4 className="font-display text-2xl font-bold text-white">Card Surfaces &amp; Interactive Variants</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="standard">
            <Badge variant="outline">Standard</Badge>
            <h5 className="font-display text-lg font-bold text-white">Standard Card Surface</h5>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Subtle background panel used for structural content display and static information blocks.
            </p>
          </Card>

          <Card variant="elevated">
            <Badge variant="icy">Elevated</Badge>
            <h5 className="font-display text-lg font-bold text-white">Elevated Card Surface</h5>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Higher visual elevation with shadow depth, used for highlighted features or callouts.
            </p>
          </Card>

          <Card
            variant="interactive"
            mediaSlot={
              <div className="w-full h-32 flex items-center justify-center bg-blue-500/10">
                <Terminal className="w-8 h-8 text-blue-400" />
              </div>
            }
          >
            <Badge variant="success" dot font-mono>Interactive</Badge>
            <h5 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
              Interactive Media Card
            </h5>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Translates upwards on hover with border highlight response and media preview slot.
            </p>
          </Card>
        </div>
      </section>

      <Divider variant="muted" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-mono text-xs tracking-widest text-blue-400 uppercase">06 / GLASS SURFACES</h3>
          <h4 className="font-display text-2xl font-bold text-white">Translucent Glass Intensity Layers</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassContainer intensity="light" className="p-6 space-y-3">
            <span className="font-mono text-xs text-gray-400">Light Glass Blur</span>
            <p className="text-xs text-gray-300 leading-relaxed">Low opacity blur layer for floating contextual overlays.</p>
          </GlassContainer>

          <GlassContainer intensity="medium" className="p-6 space-y-3">
            <span className="font-mono text-xs text-blue-400">Medium Glass Blur</span>
            <p className="text-xs text-gray-300 leading-relaxed">Standard glass backdrop used for site navigation headers.</p>
          </GlassContainer>

          <GlassContainer intensity="heavy" className="p-6 space-y-3">
            <span className="font-mono text-xs text-indigo-400">Heavy Glass Blur</span>
            <p className="text-xs text-gray-300 leading-relaxed">Deep translucent surface for modals and mobile navigation menus.</p>
          </GlassContainer>
        </div>
      </section>

      <Divider variant="muted" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-mono text-xs tracking-widest text-blue-400 uppercase">07 / TEXT LINKS</h3>
          <h4 className="font-display text-2xl font-bold text-white">Editorial Text Links</h4>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <TextLink href="#internal">Standard Inline Link</TextLink>
          <TextLink href="#work" arrow="right">View Selected Work</TextLink>
          <TextLink href="https://github.com" isExternal arrow="up-right">GitHub Repository</TextLink>
        </div>
      </section>

      <Divider variant="muted" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-mono text-xs tracking-widest text-blue-400 uppercase">08 / MOTION PRIMITIVES</h3>
          <h4 className="font-display text-2xl font-bold text-white">Viewport Reveal &amp; Stagger Demonstrations</h4>
        </div>
        <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FadeIn direction="up">
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 space-y-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <h5 className="font-mono text-xs text-white uppercase">FadeIn Primitive</h5>
              <p className="text-xs text-gray-400">Smooth Y-axis translation and opacity reveal on viewport entry.</p>
            </div>
          </FadeIn>

          <Reveal>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 space-y-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <h5 className="font-mono text-xs text-white uppercase">Reveal Primitive</h5>
              <p className="text-xs text-gray-400">Cinematic overflow-hidden upward wipe reveal for text and headings.</p>
            </div>
          </Reveal>

          <ScaleIn>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 space-y-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <h5 className="font-mono text-xs text-white uppercase">ScaleIn Primitive</h5>
              <p className="text-xs text-gray-400">Subtle spring scaling reveal from 0.95 to 1.0.</p>
            </div>
          </ScaleIn>
        </Stagger>
      </section>
    </div>
  );
}