'use client';

import React from 'react';
import { Terminal, Layers, ExternalLink } from 'lucide-react';
import { ProjectMedia } from '@/types/portfolio';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

export interface ProjectPreviewProps {
  media: ProjectMedia;
  title: string;
  category: string;
  year: string;
  status: string;
  className?: string;
}

export function ProjectPreview({ media, title, category, year, status, className }: ProjectPreviewProps) {
  return (
    <div
      className={cn(
        'w-full rounded-xl overflow-hidden bg-[#0f1117] border border-white/10 relative group transition-all duration-500',
        'hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/5',
        className
      )}
    >
      <div className="w-full aspect-16/9 sm:aspect-21/9 bg-[#07080a] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-transparent to-transparent z-10" />

        <div className="absolute w-48 h-48 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-400/20 transition-all duration-700" />

        <div className="relative z-20 flex flex-col items-center gap-3 p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-500">
            {category === 'Product' ? (
              <Terminal className="w-6 h-6" />
            ) : (
              <Layers className="w-6 h-6" />
            )}
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-gray-400 uppercase tracking-widest block">
              {category} Workspace Interface
            </span>
            <p className="font-display text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
              {title}
            </p>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>

        <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
          <Badge variant="icy" dot>{status}</Badge>
          <Badge variant="outline">{year}</Badge>
        </div>
      </div>
    </div>
  );
}