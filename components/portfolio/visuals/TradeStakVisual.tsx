'use client';

import React from 'react';
import { Activity, TrendingUp, BarChart2, DollarSign } from 'lucide-react';

export function TradeStakVisual() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#090d16] border border-cyan-500/20 relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-30 pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2.5 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-bold text-cyan-400 tracking-wider">TRADESTAK // FINTECH CORE</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
            BTC/USD $94,850.00 (+4.8%)
          </span>
        </div>
      </div>

      {/* Candlestick & Indicator Chart Graphic */}
      <div className="relative z-10 my-3 flex-1 flex flex-col justify-end space-y-2">
        <div className="flex items-end justify-between gap-1.5 h-28 px-2">
          {[
            { h: '60%', green: true },
            { h: '45%', green: false },
            { h: '70%', green: true },
            { h: '85%', green: true },
            { h: '65%', green: false },
            { h: '90%', green: true },
            { h: '75%', green: false },
            { h: '95%', green: true },
            { h: '80%', green: true },
            { h: '100%', green: true },
          ].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group">
              <div
                className={`w-1 sm:w-1.5 rounded-sm transition-all ${
                  bar.green ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]'
                }`}
                style={{ height: bar.h }}
              />
            </div>
          ))}
        </div>

        {/* Signal Overlay Line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-400 relative">
          <div className="absolute right-10 -top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
        </div>
      </div>

      {/* Bottom Ticker Info */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 relative z-10">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-cyan-300">
            <Activity className="w-3 h-3 text-cyan-400" /> RSI 68.4
          </span>
          <span className="flex items-center gap-1 text-purple-300">
            <BarChart2 className="w-3 h-3 text-purple-400" /> VOL 8.4M
          </span>
        </div>
        <span className="text-emerald-400 font-bold">SIGNAL: STRONG BUY</span>
      </div>
    </div>
  );
}