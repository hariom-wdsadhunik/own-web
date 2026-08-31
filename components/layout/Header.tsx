'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/portfolio';
import { CONTACT_INFO } from '@/content/contact';
import { Wordmark } from '@/components/brand/Wordmark';

const NAV_ITEMS: (NavItem & { index: string })[] = [
  { index: '01', label: 'WORK', href: '/work' },
  { index: '02', label: 'CAPABILITIES', href: '/#capabilities' },
  { index: '03', label: 'LAB', href: '/lab' },
  { index: '04', label: 'ABOUT', href: '/#about' },
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
        scrolled ? 'py-3 bg-[#07080a]/95 backdrop-blur-md border-b border-white/10' : 'py-4 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="py-1">
          <div className="hidden sm:block">
            <Wordmark variant="full" size="md" />
          </div>
          <div className="sm:hidden">
            <Wordmark variant="compact" size="sm" />
          </div>
        </div>

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
            href="/#contact"
            className="px-4 py-2 text-xs font-mono tracking-wider text-gray-100 bg-white/5 border border-white/15 rounded-md hover:bg-white/10 hover:border-blue-400/50 transition-all focus-visible:ring-1 focus-visible:ring-blue-400"
          >
            START A PROJECT
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] z-40 bg-[#07080a]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto">
          <div className="space-y-6 pt-2">
            <nav className="flex flex-col gap-3 font-display text-2xl font-bold tracking-tight text-gray-200" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] py-2 flex items-center justify-between border-b border-white/10 hover:text-blue-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-400">{item.index}</span>
                    <span>{item.label}</span>
                  </span>
                  <span className="font-mono text-xs text-gray-500">→</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6 pt-6 border-t border-white/10 pb-6">
            <div className="flex items-center justify-between font-mono text-xs tracking-wider text-gray-400">
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] py-3 px-6 text-center font-display text-xs tracking-widest text-gray-950 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <span>START A PROJECT</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}