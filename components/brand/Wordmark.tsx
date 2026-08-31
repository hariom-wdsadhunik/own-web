'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type WordmarkVariant = 'full' | 'compact' | 'minimal';
export type WordmarkSize = 'sm' | 'md' | 'lg';

export interface WordmarkProps {
  variant?: WordmarkVariant;
  size?: WordmarkSize;
  href?: string;
  className?: string;
  showDot?: boolean;
}

export function Wordmark({
  variant = 'full',
  size = 'md',
  href = '/',
  className,
  showDot = true,
}: WordmarkProps) {
  const sizeTextClasses = {
    sm: 'text-sm tracking-[0.18em]',
    md: 'text-base sm:text-lg tracking-[0.2em]',
    lg: 'text-xl sm:text-2xl tracking-[0.22em]',
  };

  const dotSizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  const content = (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 font-display select-none group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded-sm',
        sizeTextClasses[size],
        className
      )}
    >
      {variant === 'minimal' ? (
        <span className="flex items-center gap-1 text-white font-bold">
          <span>OM</span>
          {showDot && (
            <span className={cn('rounded-full bg-blue-400 group-hover:scale-125 transition-transform', dotSizeClasses[size])} />
          )}
        </span>
      ) : variant === 'compact' ? (
        <span className="flex items-center gap-1 text-white">
          <span className="font-extrabold text-white">HARI</span>
          <span className="text-gray-500 font-light">/</span>
          <span className="font-normal text-gray-200">OM</span>
          {showDot && (
            <span className={cn('rounded-full bg-blue-400 group-hover:scale-125 transition-transform ml-0.5', dotSizeClasses[size])} />
          )}
        </span>
      ) : (
        <span className="flex items-center gap-2 text-white">
          <span className="font-extrabold text-white tracking-[0.22em]">HARI</span>
          <span className="font-light text-gray-300 tracking-[0.28em]">OM</span>
          {showDot && (
            <span className={cn('rounded-full bg-blue-400 group-hover:scale-125 transition-transform ml-0.5', dotSizeClasses[size])} />
          )}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Hari Om Portfolio Homepage" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}