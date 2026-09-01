'use client';

import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('Full Product UI/UX');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#090d16] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-500/10">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">INQUIRY RECEIVED</h3>
            <p className="font-sans text-sm text-slate-300 max-w-sm mx-auto">
              Thank you for reaching out. I will review your project scope and respond within 24 hours.
            </p>
            <div className="pt-4">
              <Button
                variant="primary"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full justify-center"
              >
                CLOSE WINDOW
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 font-sans">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A PROJECT</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight mt-1">
                Let&apos;s Build Something Memorable.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select your focus area and drop your email below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Chips */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  SERVICE FOCUS
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Full Product UI/UX', 'Web Platform Engineering', 'AI Interface Design', 'Advisory'].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                        selectedService === service
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                          : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Note */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  PROJECT BRIEF / GOALS
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a bit about your timeline and objectives..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full justify-center min-h-[46px] font-bold shadow-xl shadow-cyan-500/20 bg-gradient-to-r from-cyan-500 to-blue-600 border-none"
                icon={<Send className="w-4 h-4" />}
              >
                SUBMIT INQUIRY →
              </Button>

              <div className="pt-2 text-center">
                <a
                  href="mailto:contact@hariom.dev"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Or email directly: contact@hariom.dev</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}