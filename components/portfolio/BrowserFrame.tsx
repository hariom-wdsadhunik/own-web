'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({ url = 'https://hariom.dev', children, className }: BrowserFrameProps) {
  return (
    <div className={cn('w-full rounded-xl overflow-hidden bg-[#0f1117] border border-white/10 shadow-2xl', className)}>
      {/* Top Browser Bar */}
      <div className="px-4 py-2.5 bg-black/60 border-b border-white/10 flex items-center justify-between gap-4 select-none">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/60 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/60 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/40 border border-green-500/60 inline-block" />
        </div>

        <div className="flex-1 max-w-sm px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] text-gray-400 text-center truncate">
          {url}
        </div>

        <div className="w-10 shrink-0" />
      </div>

      {/* Frame Content */}
      <div className="relative w-full">
        {children}
      </div>
    </div>
  );
}