'use client';

import React, { useEffect, useState } from 'react';
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
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = Math.max(-15, Math.min(15, (e.clientX - centerX) / 40));
      const offsetY = Math.max(-15, Math.min(15, (e.clientY - centerY) / 40));
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
          className="absolute inset-0 rounded-full border border-blue-400/20 border-dashed"
          animate={
            mounted
              ? {
                  rotate: state === 'exploring' ? [0, 360] : state === 'thinking' ? [0, -360] : [0, 360],
                }
              : {}
          }
          transition={{
            duration: state === 'exploring' ? 8 : state === 'thinking' ? 12 : 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          style={{ x: mounted && interactive ? smoothX : 0, y: mounted && interactive ? smoothY : 0 }}
          className="relative w-full h-full p-2 flex items-center justify-center z-10"
        >
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_0_12px_rgba(96,165,250,0.3)]"
          >
            <path
              d="M60 6 L104 31 L104 89 L60 114 L16 89 L16 31 Z"
              fill="#0f1117"
              stroke="#1e293b"
              strokeWidth="2.5"
            />

            <path
              d="M32 45 C32 38, 88 38, 88 45 L80 75 C80 82, 40 82, 40 75 Z"
              fill="#07080a"
              stroke="#334155"
              strokeWidth="2"
            />

            <motion.path
              d="M36 54 L84 54"
              stroke={state === 'building' ? '#38bdf8' : state === 'shipping' ? '#34d399' : '#60a5fa'}
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <circle
              cx="60"
              cy="54"
              r="4.5"
              fill={state === 'shipping' ? '#34d399' : '#93c5fd'}
            />

            <circle cx="34" cy="34" r="2" fill="#60a5fa" opacity="0.6" />
            <circle cx="86" cy="34" r="2" fill="#60a5fa" opacity="0.6" />
            <circle cx="60" cy="98" r="2.5" fill="#3b82f6" />

            <path d="M22 28 L28 28 L28 22" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            <path d="M98 28 L92 28 L92 22" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            <path d="M22 92 L28 92 L28 98" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            <path d="M98 92 L92 92 L92 98" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </motion.div>
      </div>

      {size !== 'sm' && (
        <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase mt-2 group-hover:text-blue-400 transition-colors">
          {stateBadges[state]}
        </span>
      )}
    </div>
  );
}