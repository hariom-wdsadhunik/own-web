'use client';

import React, { useState } from 'react';
import { Layers, Mail, Github } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';
import { CONTACT_INFO } from '@/content/contact';

export function MobileBottomNav() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="flex items-center justify-around bg-[#0c0817]/95 backdrop-blur-2xl border border-purple-500/40 rounded-full p-2 shadow-2xl shadow-purple-500/25">
          <a
            href="#creative-work"
            className="flex-1 min-h-[48px] py-2 px-3 rounded-full text-center text-xs font-mono font-bold text-slate-200 hover:text-white hover:bg-purple-950/50 flex items-center justify-center gap-1.5 transition-all"
          >
            <Layers className="w-4 h-4 text-purple-400" />
            <span>WORK</span>
          </a>

          <button
            type="button"
            onClick={() => setContactModalOpen(true)}
            className="flex-1 min-h-[48px] py-2 px-3 rounded-full text-center text-xs font-mono font-extrabold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-500/30 flex items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>CONNECT</span>
          </button>

          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[48px] py-2 px-3 rounded-full text-center text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-purple-950/50 flex items-center justify-center gap-1.5 transition-all"
          >
            <Github className="w-4 h-4 text-purple-400" />
            <span>GITHUB</span>
          </a>
        </div>
      </div>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}