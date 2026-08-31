'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/portfolio';

const NAV_ITEMS: NavItem[] = [
  { label: 'WORK', href: '#work' },
  { label: 'CAPABILITIES', href: '#capabilities' },
  { label: 'LAB', href: '#lab' },
  { label: 'ABOUT', href: '#about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 bg-[#07080a]/85 backdrop-blur-md border-b border-white/10' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-100 hover:text-white transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
          <span className="font-mono uppercase tracking-widest text-base">HARI OM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-gray-400" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-gray-100 transition-colors py-1 focus-visible:ring-1 focus-visible:ring-blue-400"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-4 py-2 text-xs font-mono tracking-wider text-gray-100 bg-white/5 border border-white/15 rounded-md hover:bg-white/10 hover:border-blue-400/50 transition-all focus-visible:ring-1 focus-visible:ring-blue-400"
          >
            START A PROJECT
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white bg-white/5 border border-white/10"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-[#07080a]/95 backdrop-blur-xl border-b border-white/10 flex flex-col justify-between p-6">
          <nav className="flex flex-col gap-6 pt-4 text-sm font-mono tracking-widest text-gray-300">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border-b border-white/5 hover:text-white hover:border-blue-400/30 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-gray-600 font-mono">→</span>
              </Link>
            ))}
          </nav>
          <div className="pb-8">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-mono tracking-widest text-gray-900 bg-gray-100 rounded-md hover:bg-white font-semibold block transition-colors"
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}