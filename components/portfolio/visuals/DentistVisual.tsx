'use client';

import React from 'react';
import { Calendar, Shield, HeartPulse, Award } from 'lucide-react';

export function DentistVisual() {
  return (
    <div className="w-full h-full min-h-[180px] sm:min-h-[220px] bg-[#060c12] border border-cyan-500/30 relative overflow-hidden flex flex-col justify-between p-3 sm:p-4 font-mono select-none">
      {/* Background Teal Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.15),transparent_70%)] pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
          <span className="text-[10px] sm:text-xs font-bold text-cyan-300 tracking-wider">DENTIST // CLIENT SHOWCASE</span>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded border border-emerald-400/40 font-bold flex items-center gap-1">
          <Award className="w-3 h-3 text-emerald-400" /> VERIFIED
        </span>
      </div>

      {/* Booking Hero Showcase */}
      <div className="relative z-10 my-2 sm:my-3 p-2 sm:p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between gap-2">
        <div className="space-y-0.5 truncate">
          <span className="text-[11px] sm:text-xs font-bold text-white block truncate">DENTAL CARE EXPERIENCE</span>
          <p className="text-[9px] sm:text-[10px] text-slate-400 truncate">Cosmetic • Orthodontics • Implants</p>
        </div>
        <div className="flex items-center gap-1 bg-cyan-500 text-slate-950 px-2 py-1 rounded text-[10px] sm:text-xs font-bold shadow-lg shadow-cyan-500/20 shrink-0">
          <Calendar className="w-3 h-3" />
          <span>BOOK NOW</span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-1.5 border-t border-cyan-500/20 text-[9px] sm:text-[10px] text-cyan-300 relative z-10">
        <span className="flex items-center gap-1 truncate">
          <Shield className="w-3 h-3 text-cyan-400 shrink-0" /> MOBILE OPTIMIZED
        </span>
        <span className="text-emerald-400 font-bold shrink-0">100% LIVE</span>
      </div>
    </div>
  );
}