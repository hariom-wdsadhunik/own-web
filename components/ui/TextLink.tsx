import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  arrow?: 'none' | 'right' | 'up-right';
}

export function TextLink({
  href,
  children,
  isExternal = false,
  arrow = 'none',
  className,
  ...props
}: TextLinkProps) {
  const content = (
    <>
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      </span>
      {arrow === 'right' && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
      {arrow === 'up-right' && (
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const baseClassName = cn(
    'inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm tracking-wider text-blue-400 hover:text-blue-300 transition-colors group focus-visible:ring-1 focus-visible:ring-blue-400 rounded-sm',
    className
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClassName} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClassName} {...props}>
      {content}
    </Link>
  );
}