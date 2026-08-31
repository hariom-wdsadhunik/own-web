'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Beaker, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'HOME', href: '/', icon: Home },
  { label: 'WORK', href: '/work', icon: Briefcase },
  { label: 'LAB', href: '/lab', icon: Beaker },
  { label: 'ABOUT', href: '/#about', icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#07080a]/95 backdrop-blur-xl border-t border-white/10 px-3 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))] shadow-2xl select-none"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'min-h-[44px] flex flex-col items-center justify-center gap-1 rounded-lg py-1.5 px-2 transition-all duration-200 active:scale-95',
                isActive
                  ? 'bg-blue-500/15 text-blue-400 font-bold border-t-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border-t-2 border-transparent'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={cn('w-4 h-4 transition-transform', isActive && 'scale-110')} />
              <span className="font-display text-[10px] tracking-wider uppercase font-semibold">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}