'use client';

import React from 'react';
import { Laptop, Cpu, Check, ShoppingBag } from 'lucide-react';

export function RentAMacVisual() {
  return (
    <div className="w-full h-full min-h-[180px] sm:min-h-[220px] bg-[#090a0f] border border-blue-500/30 relative overflow-hidden flex flex-col justify-between p-3 sm:p-4 font-mono select-none">
      {/* Background Cyber Frame Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-blue-500/30 pb-2 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Laptop className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
          <span className="text-[10px] sm:text-xs font-bold text-blue-300 tracking-wider">RENT-A-MAC // RENTAL</span>
        </div>
        <span className="bg-blue-500/20 text-blue-300 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded border border-blue-400/40 font-bold">
          24H SHIP
        </span>
      </div>

      {/* Hardware Spec Card */}
      <div className="relative z-10 my-2 sm:my-3 p-2 sm:p-3 rounded-lg bg-blue-950/30 border border-blue-500/30 flex items-center justify-between gap-2">
        <div className="space-y-0.5 truncate">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-white truncate">MACBOOK PRO M3 MAX</span>
          </div>
          <p className="text-[9px] sm:text-[10px] text-slate-400 truncate">128GB RAM // 4TB SSD</p>
        </div>
        <span className="text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-cyan-500/30 shrink-0">
          $49/DAY
        </span>
      </div>

      {/* Bottom Features */}
      <div className="flex items-center justify-between pt-1.5 border-t border-blue-500/20 text-[9px] sm:text-[10px] text-blue-300 relative z-10">
        <span className="flex items-center gap-1 truncate">
          <Check className="w-3 h-3 text-emerald-400 shrink-0" /> PRE-CONFIGURED
        </span>
        <span className="text-cyan-400 font-bold flex items-center gap-1 shrink-0">
          <ShoppingBag className="w-3 h-3 text-cyan-400" /> INSTANT
        </span>
      </div>
    </div>
  );
}