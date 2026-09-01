'use client';

import React from 'react';
import Image from 'next/image';
import { Film } from 'lucide-react';
import { ProjectMedia as ProjectMediaType } from '@/types/portfolio';
import { Badge } from '@/components/ui/Badge';
import { BrowserFrame } from './BrowserFrame';
import { cn } from '@/lib/utils';

export interface ProjectMediaProps {
  media: ProjectMediaType;
  title: string;
  category: string;
  year?: string;
  status?: string;
  useBrowserFrame?: boolean;
  className?: string;
}

export function ProjectMedia({
  media,
  title,
  category,
  year,
  status,
  useBrowserFrame = false,
  className,
}: ProjectMediaProps) {
  const aspectRatios = {
    '16:9': 'aspect-16/9 sm:aspect-21/9',
    '4:3': 'aspect-4/3',
    '1:1': 'aspect-square',
    vertical: 'aspect-9/16',
  };

  const ratioClass = aspectRatios[media.aspectRatio || '16:9'];

  // 1. Real Image Render
  if (media.type === 'image' && media.url) {
    const content = (
      <div className={cn('w-full overflow-hidden bg-[#0f1117] border border-white/10 relative group', ratioClass, className)}>
        <Image
          src={media.url}
          alt={media.alt || `${title} Project Visual`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
          loading="lazy"
        />
        {media.caption && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/85 backdrop-blur-sm border-t border-white/10 text-[11px] font-mono text-gray-300">
            {media.caption}
          </div>
        )}
      </div>
    );

    if (useBrowserFrame) {
      return <BrowserFrame url={`https://hariom.dev/work/${title.toLowerCase().replace(/\s+/g, '-')}`}>{content}</BrowserFrame>;
    }

    return content;
  }

  // 2. Real Video Render
  if (media.type === 'video' && media.url) {
    return (
      <div className={cn('w-full rounded-xl overflow-hidden bg-black border border-white/10 relative', ratioClass, className)}>
        <video
          src={media.url}
          controls
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {media.caption && (
          <div className="p-3 bg-[#0f1117] border-t border-white/10 text-[11px] font-mono text-gray-300 flex items-center gap-2">
            <Film className="w-3.5 h-3.5 text-blue-400" />
            <span>{media.caption}</span>
          </div>
        )}
      </div>
    );
  }

  // 3. Real Interactive Frame Render
  if (media.type === 'interactive' && media.url) {
    return (
      <div className={cn('w-full rounded-xl overflow-hidden bg-black border border-white/10 relative', ratioClass, className)}>
        <iframe
          src={media.url}
          title={media.alt || title}
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-full border-none"
        />
      </div>
    );
  }

  // 4. Simplified Pending Media Frame (Clean & Quiet)
  return (
    <div
      className={cn(
        'w-full rounded-xl overflow-hidden bg-[#0a0c10] border border-white/10 relative group transition-all duration-500',
        'hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/5',
        ratioClass,
        className
      )}
    >
      <div className="w-full h-full bg-[#07080a] relative flex items-center justify-center overflow-hidden p-6 text-center">
        <div className="relative z-20 flex flex-col items-center gap-2 text-center max-w-md px-4">
          <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest block">
            MEDIA PENDING
          </span>
          <p className="font-mono text-[11px] text-gray-400">
            Production capture required.
          </p>
        </div>

        {/* Desktop Only Badges */}
        {(status || year) && (
          <div className="hidden lg:flex absolute top-4 left-4 z-30 items-center gap-2">
            {status && <Badge variant="icy" dot>{status}</Badge>}
            {year && <Badge variant="outline">{year}</Badge>}
          </div>
        )}
      </div>
    </div>
  );
}