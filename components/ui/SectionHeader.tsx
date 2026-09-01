import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  indexNumber?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actionSlot?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  indexNumber,
  eyebrow,
  title,
  description,
  actionSlot,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-12',
        align === 'center' ? 'text-center md:flex-col md:items-center' : 'text-left',
        className
      )}
    >
      <div className="space-y-3 max-w-2xl">
        {(indexNumber || eyebrow) && (
          <div className="flex items-center gap-3 flex-wrap font-mono text-[11px] sm:text-xs tracking-widest text-blue-400 uppercase break-words">
            {indexNumber && <span className="text-gray-500 font-bold">{indexNumber}</span>}
            {indexNumber && eyebrow && <span className="text-gray-700">/</span>}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        )}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight break-words">
          {title}
        </h2>
        {description && (
          <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl pt-1">
            {description}
          </p>
        )}
      </div>

      {actionSlot && <div className="shrink-0">{actionSlot}</div>}
    </div>
  );
}