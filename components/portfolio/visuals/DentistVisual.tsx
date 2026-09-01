'use client';

import React from 'react';
import { Calendar, Shield, HeartPulse, Award } from 'lucide-react';

export function DentistVisual() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#060c12] border border-cyan-500/30 relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Background Teal Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.15),transparent_70%)] pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2.5 relative z-10">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-cyan-300 tracking-wider">DENTIST PRACTICE // CLIENT SHOWCASE</span>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded border border-emerald-400/40 font-bold flex items-center gap-1">
          <Award className="w-3 h-3 text-emerald-400" /> VERIFIED CLIENT
        </span>
      </div>

      {/* Booking Hero Showcase */}
      <div className="relative z-10 my-3 p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-bold text-white block">MODERN DENTAL CARE EXPERIENCE</span>
          <p className="text-[10px] text-slate-400">Cosmetic Dentistry • Orthodontics • Implants</p>
        </div>
        <div className="flex items-center gap-1.5 bg-cyan-500 text-slate-950 px-2.5 py-1 rounded text-xs font-bold shadow-lg shadow-cyan-500/20">
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK NOW</span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-cyan-500/20 text-[10px] text-cyan-300 relative z-10">
        <span className="flex items-center gap-1">
          <Shield className="w-3.5 h-3.5 text-cyan-400" /> ACCESSIBLE &amp; MOBILE OPTIMIZED
        </span>
        <span className="text-emerald-400 font-bold">100% PRODUCTION READY</span>
      </div>
    </div>
  );
}