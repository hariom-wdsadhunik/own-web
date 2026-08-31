import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'icy' | 'success' | 'outline';
  dot?: boolean;
  children: React.ReactNode;
}

export function Badge({ variant = 'default', dot = false, children, className, ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase border';

  const variants = {
    default: 'bg-white/5 text-gray-300 border-white/10',
    icy: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    success: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    outline: 'bg-transparent text-gray-400 border-white/15',
  };

  const dotColors = {
    default: 'bg-gray-400',
    icy: 'bg-blue-400 animate-pulse',
    success: 'bg-emerald-400 animate-pulse',
    outline: 'bg-gray-500',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />}
      <span>{children}</span>
    </span>
  );
}