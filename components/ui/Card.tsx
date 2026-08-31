'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'standard' | 'elevated' | 'interactive';
  children: React.ReactNode;
  mediaSlot?: React.ReactNode;
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'auto';
}

export function Card({
  variant = 'standard',
  children,
  mediaSlot,
  aspectRatio = 'auto',
  className,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl border overflow-hidden transition-all duration-300 relative';

  const variants = {
    standard: 'bg-[#0f1117]/80 border-white/10',
    elevated: 'bg-[#151821] border-white/15 shadow-xl',
    interactive: 'bg-[#151821]/80 border-white/10 hover:border-blue-400/40 hover:bg-[#1a1d27] hover:-translate-y-1 group',
  };

  const aspectRatios = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    '1:1': 'aspect-square',
    auto: '',
  };

  return (
    <motion.div
      className={cn(baseStyles, variants[variant], className)}
      whileTap={variant === 'interactive' ? { scale: 0.99 } : undefined}
      {...props}
    >
      {mediaSlot && (
        <div className={cn('w-full overflow-hidden bg-black/40 border-b border-white/5 relative', aspectRatios[aspectRatio])}>
          {mediaSlot}
        </div>
      )}
      <div className="p-6 space-y-4">{children}</div>
    </motion.div>
  );
}