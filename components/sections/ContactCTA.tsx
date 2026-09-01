'use client';

import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '@/content/contact';
import { FadeIn } from '@/components/motion/FadeIn';
import { ShinyText } from '@/components/reactbits/ShinyText';

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 select-none border-t border-purple-500/20">
      <FadeIn>
        <div className="rounded-3xl border border-purple-500/30 bg-[#0c0817]/90 p-8 sm:p-16 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
          {/* Radial Purple Wave Ambient Backlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/30 font-bold inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INITIATE COLLABORATION</span>
            </span>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
              Build something{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
                <ShinyText text="people remember." speed={4} />
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Direct email inquiries: <span className="font-mono font-bold text-purple-300">{CONTACT_INFO.email}</span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-6 max-w-2xl mx-auto">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-full sm:w-auto min-h-[50px] px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-500 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs font-mono font-extrabold flex items-center justify-center gap-2 shadow-2xl shadow-purple-500/30 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>SEND EMAIL ({CONTACT_INFO.email})</span>
              </a>

              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[50px] px-6 py-3 rounded-full bg-slate-950 border border-purple-500/30 hover:border-purple-400 text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[50px] px-6 py-3 rounded-full bg-slate-950 border border-purple-500/30 hover:border-purple-400 text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span>LINKEDIN</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}