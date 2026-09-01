'use client';

import React from 'react';
import { History, Globe, Sparkles, Disc } from 'lucide-react';

export function TimeCapsuleVisual() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#0d0714] border border-purple-500/30 relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Radial Nebula Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,132,252,0.2),transparent_70%)] pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-purple-500/30 pb-2.5 relative z-10">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span className="text-xs font-bold text-purple-300 tracking-wider">TIME CAPSULE // SPATIAL ARCHIVE</span>
        </div>
        <span className="bg-purple-500/20 text-purple-300 text-[10px] px-2 py-0.5 rounded border border-purple-400/40">
          ERA 1999–2008
        </span>
      </div>

      {/* Center Era Timeline Showcase */}
      <div className="relative z-10 my-3 flex items-center justify-center gap-3">
        {['1998 WEB 1.0', '2004 BLOG ERA', '2010 SOCIAL WEB'].map((era, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg border flex flex-col items-center gap-1.5 transition-all ${
              i === 1
                ? 'bg-purple-900/40 border-purple-400/60 shadow-[0_0_15px_rgba(192,132,252,0.3)] scale-105'
                : 'bg-slate-900/50 border-slate-800 opacity-60'
            }`}
          >
            <Globe className="w-5 h-5 text-purple-400" />
            <span className="text-[10px] font-bold text-purple-200">{era}</span>
          </div>
        ))}
      </div>

      {/* Bottom Timeline Controls */}
      <div className="flex items-center justify-between pt-2 border-t border-purple-500/20 text-[10px] text-purple-300 relative z-10">
        <span className="flex items-center gap-1">
          <Disc className="w-3 h-3 text-purple-400" /> 1,420 ARCHIVED ARTIFACTS
        </span>
        <span className="text-purple-400 font-bold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-purple-400" /> RETROSCAN ACTIVE
        </span>
      </div>
    </div>
  );
}