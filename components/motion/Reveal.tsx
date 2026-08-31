'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

export interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
}

export function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}