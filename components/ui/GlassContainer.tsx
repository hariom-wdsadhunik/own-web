import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'light' | 'medium' | 'heavy';
  children: React.ReactNode;
}

export function GlassContainer({ intensity = 'medium', children, className, ...props }: GlassContainerProps) {
  const intensities = {
    light: 'bg-[#07080a]/60 backdrop-blur-sm border-white/5',
    medium: 'bg-[#0f1117]/80 backdrop-blur-md border-white/10',
    heavy: 'bg-[#151821]/90 backdrop-blur-xl border-white/15',
  };

  return (
    <div
      className={cn(
        'rounded-xl border shadow-2xl transition-all',
        intensities[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}