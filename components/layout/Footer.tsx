import Link from 'next/link';
import { CONTACT_INFO } from '@/content/contact';
import { Wordmark } from '@/components/brand/Wordmark';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/10 bg-[#07080a] text-gray-400 font-mono text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3">
          <Wordmark variant="full" size="sm" />
          <p className="text-gray-500 max-w-sm text-xs leading-relaxed font-sans">
            Product thinking, UI/UX engineering, AI experimentation, and high-performance digital craft.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-8 text-xs tracking-wider w-full md:w-auto">
          <div className="flex flex-col gap-1">
            <span className="text-gray-600 font-semibold text-[10px] tracking-widest uppercase mb-1">Navigation</span>
            <Link href="#work" className="min-h-[44px] flex items-center hover:text-gray-200 transition-colors">Work</Link>
            <Link href="#capabilities" className="min-h-[44px] flex items-center hover:text-gray-200 transition-colors">Capabilities</Link>
            <Link href="#lab" className="min-h-[44px] flex items-center hover:text-gray-200 transition-colors">The Lab</Link>
            <Link href="#about" className="min-h-[44px] flex items-center hover:text-gray-200 transition-colors">About</Link>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-gray-600 font-semibold text-[10px] tracking-widest uppercase mb-1">Connect</span>
            <a href={CONTACT_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="min-h-[44px] flex items-center hover:text-gray-200 transition-colors">GitHub ↗</a>
            <a href={CONTACT_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="min-h-[44px] flex items-center hover:text-gray-200 transition-colors">LinkedIn ↗</a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="min-h-[44px] flex items-center hover:text-gray-200 transition-colors">Email ↗</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-600 text-center sm:text-left">
        <p>© {currentYear} Hari Om. All rights reserved.</p>
        <p className="tracking-widest uppercase font-display font-medium text-gray-500">Cinematic Futuristic Premium</p>
      </div>
    </footer>
  );
}