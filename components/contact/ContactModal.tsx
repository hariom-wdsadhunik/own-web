'use client';

import React, { useState } from 'react';
import { X, Mail, Github, Linkedin, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '@/content/contact';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#090d16] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-500/10">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors"
          aria-label="Close Contact Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 font-sans">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT CONNECT</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight mt-1">
              Let&apos;s Initiate Collaboration.
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Connect directly via email or view social profiles below.
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                PRIMARY EMAIL
              </span>
              {copied && (
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-bold">
                  <Check className="w-3 h-3" /> COPIED TO CLIPBOARD
                </span>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <span className="font-mono text-xs sm:text-sm text-white font-bold truncate">
                {CONTACT_INFO.email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors shrink-0"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-mono font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>SEND EMAIL NOW</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Social Profiles */}
          <div className="space-y-2.5 pt-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
              PROFILES &amp; CODE REPOSITORIES
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all flex items-center justify-between text-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono font-bold">GITHUB</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300" />
              </a>

              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all flex items-center justify-between text-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono font-bold">LINKEDIN</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}