'use client';

import React from 'react';
import { Cpu, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';

export function AthenaVisual() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#070d12] border border-emerald-500/30 relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Background Matrix Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.15),transparent_70%)] pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2.5 relative z-10">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-emerald-300 tracking-wider">ATHENA // COGNITIVE ORCHESTRATOR</span>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded border border-emerald-400/40 font-bold">
          3 AGENTS ACTIVE
        </span>
      </div>

      {/* Agent Trace Feed */}
      <div className="relative z-10 my-3 space-y-1.5 text-[11px]">
        <div className="flex items-center justify-between p-2 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300">
          <span className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" /> [SUBAGENT: CODER] Generating TypeScript module
          </span>
          <span className="text-emerald-400 font-bold">100%</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> [SUBAGENT: RESEARCH] Web Synthesis Complete
          </span>
          <span className="text-cyan-400 font-bold">PASS</span>
        </div>
      </div>

      {/* Bottom Status Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-emerald-500/20 text-[10px] text-emerald-300 relative z-10">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> REASONING STREAM VERIFIED
        </span>
        <span className="text-emerald-400 font-bold">EXECUTION TIMINGS: 420ms</span>
      </div>
    </div>
  );
}