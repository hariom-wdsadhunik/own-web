'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      href,
      isExternal,
      icon,
      iconPosition = 'right',
      isLoading,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-mono tracking-wider font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:opacity-50 disabled:pointer-events-none rounded-md';

    const variants = {
      primary: 'bg-white text-gray-950 hover:bg-gray-200 border border-white/20 shadow-sm',
      secondary: 'bg-white/5 text-gray-200 hover:bg-white/10 border border-white/15 hover:border-blue-400/40',
      ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5 border border-transparent',
      link: 'bg-transparent text-blue-400 hover:text-blue-300 p-0 underline-offset-4 hover:underline font-normal',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[36px]',
      md: 'text-xs sm:text-sm px-4 py-2.5 gap-2 min-h-[44px]',
      lg: 'text-sm sm:text-base px-6 py-3.5 gap-2.5 min-h-[50px]',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {isLoading && (
          <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin mr-1.5" />
        )}
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(combinedClassName, 'group')}
            whileTap={{ scale: 0.98 }}
            {...(props as any)}
          >
            {content}
          </motion.a>
        );
      }
      return (
        <Link href={href} passHref legacyBehavior>
          <motion.a className={cn(combinedClassName, 'group')} whileTap={{ scale: 0.98 }} {...(props as any)}>
            {content}
          </motion.a>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref as any}
        type="button"
        disabled={disabled || isLoading}
        className={cn(combinedClassName, 'group')}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';