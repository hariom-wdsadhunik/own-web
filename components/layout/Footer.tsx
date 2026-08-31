import Link from 'next/link';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/10 bg-[#07080a] text-gray-400 font-mono text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-200 text-sm font-semibold tracking-wider">HARI OM</span>
          </div>
          <p className="text-gray-500 max-w-sm text-xs leading-relaxed font-sans">
            Product thinking, UI/UX engineering, AI experimentation, and high-performance digital craft.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-8 text-xs tracking-wider">
          <div className="flex flex-col gap-2">
            <span className="text-gray-600 font-semibold text-[10px] tracking-widest uppercase">Navigation</span>
            <Link href="#work" className="hover:text-gray-200 transition-colors">Work</Link>
            <Link href="#capabilities" className="hover:text-gray-200 transition-colors">Capabilities</Link>
            <Link href="#lab" className="hover:text-gray-200 transition-colors">The Lab</Link>
            <Link href="#about" className="hover:text-gray-200 transition-colors">About</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-gray-600 font-semibold text-[10px] tracking-widest uppercase">Connect</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">LinkedIn</a>
            <a href="mailto:contact@hariom.dev" className="hover:text-gray-200 transition-colors">Email</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-600">
        <p>© {currentYear} Hari Om. All rights reserved.</p>
        <p className="tracking-widest uppercase">Cinematic Futuristic Premium</p>
      </div>
    </footer>
  );
}