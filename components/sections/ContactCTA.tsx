'use client';

import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/content/contact';
import { FadeIn } from '@/components/motion/FadeIn';

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 border-t border-white/10 select-none">
      <FadeIn>
        <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/30 font-bold">
          INITIATE COLLABORATION
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-display text-3xl sm:text-6xl md:text-7xl font-extrabold text-white max-w-4xl mx-auto leading-tight tracking-tight">
          {CONTACT_INFO.heading}
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-sans text-sm sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Direct email inquiries: <span className="font-mono font-bold text-cyan-300">{CONTACT_INFO.email}</span>
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 pt-4 max-w-2xl mx-auto">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 text-xs font-mono font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>SEND EMAIL ({CONTACT_INFO.email})</span>
          </a>

          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LINKEDIN</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}