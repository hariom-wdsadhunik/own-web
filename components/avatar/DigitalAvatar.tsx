'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

export type AvatarState = 'idle' | 'observing' | 'exploring' | 'building' | 'thinking' | 'shipping';

export interface DigitalAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  state?: AvatarState;
  interactive?: boolean;
  className?: string;
}

export function DigitalAvatar({
  size = 'md',
  state = 'idle',
  interactive = true,
  className,
}: DigitalAvatarProps) {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 18 });

  useEffect(() => {
    setMounted(true);

    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia('(pointer: coarse)').matches) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = Math.max(-12, Math.min(12, (e.clientX - centerX) / 45));
      const offsetY = Math.max(-12, Math.min(12, (e.clientY - centerY) / 45));
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, mouseX, mouseY]);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-32 h-32 sm:w-40 sm:h-40',
  };

  const stateBadges = {
    idle: 'STATUS: ONLINE // IDLE',
    observing: 'SYSTEM: OBSERVING',
    exploring: 'LAB: RESEARCHING',
    building: 'ARCH: ENGINEERING',
    thinking: 'NEURAL: THINKING',
    shipping: 'DISPATCH: SHIPPED',
  };

  const assetSrc = `/brand/avatar/${state}.png`;

  return (
    <div
      aria-hidden="true"
      className={cn('relative flex flex-col items-center justify-center select-none group', className)}
    >
      <div className={cn('relative flex items-center justify-center', sizeClasses[size])}>
        <div
          className={cn(
            'absolute inset-0 rounded-full blur-xl transition-all duration-700 opacity-40',
            state === 'building' ? 'bg-cyan-500/30' : state === 'shipping' ? 'bg-emerald-500/30' : 'bg-blue-500/20'
          )}
        />

        <motion.div
          className="absolute inset-0 rounded-full border border-blue-400/25 border-dashed"
          animate={
            mounted
              ? {
                  rotate: state === 'exploring' ? [0, 360] : state === 'thinking' ? [0, -360] : [0, 360],
                }
              : {}
          }
          transition={{
            duration: state === 'exploring' ? 10 : state === 'thinking' ? 14 : 24,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          style={{ x: mounted && interactive ? smoothX : 0, y: mounted && interactive ? smoothY : 0 }}
          className="relative w-full h-full p-1 flex items-center justify-center z-10 rounded-full bg-[#07080a] border border-blue-400/30 overflow-hidden shadow-[0_0_16px_rgba(96,165,250,0.2)]"
        >
          <Image
            src={assetSrc}
            alt="Hari Om Digital Character"
            width={160}
            height={160}
            className="w-full h-full object-cover rounded-full filter contrast-[1.05] brightness-[1.02]"
            priority={size === 'lg' || state === 'idle'}
          />
        </motion.div>
      </div>

      {size !== 'sm' && (
        <span className="font-mono text-[9px] text-gray-400 tracking-widest uppercase mt-2 group-hover:text-blue-400 transition-colors">
          {stateBadges[state]}
        </span>
      )}
    </div>
  );
}