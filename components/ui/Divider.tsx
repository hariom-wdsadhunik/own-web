import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'muted' | 'strong' | 'accent';
}

export function Divider({ orientation = 'horizontal', variant = 'muted', className, ...props }: DividerProps) {
  const variants = {
    muted: 'bg-white/10',
    strong: 'bg-white/20',
    accent: 'bg-gradient-to-r from-blue-500/50 via-white/20 to-transparent',
  };

  if (orientation === 'vertical') {
    return (
      <div
        className={cn('w-[1px] h-full min-h-[20px]', variants[variant], className)}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <div
      className={cn('w-full h-[1px]', variants[variant], className)}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    />
  );
}