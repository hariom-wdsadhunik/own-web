import React from 'react';
import { Wordmark } from '@/components/brand/Wordmark';
import { CONTACT_INFO } from '@/content/contact';

export function Footer() {
  return (
    <footer className="py-12 pb-24 md:pb-12 border-t border-white/10 bg-[#07080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Wordmark variant="compact" size="sm" />

        <div className="flex items-center gap-6 font-mono text-xs text-gray-400">
          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors min-h-[44px] flex items-center"
          >
            GITHUB
          </a>
          <a
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors min-h-[44px] flex items-center"
          >
            LINKEDIN
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="hover:text-white transition-colors min-h-[44px] flex items-center"
          >
            EMAIL
          </a>
        </div>

        <p className="font-mono text-[10px] text-gray-500">
          &copy; {new Date().getFullYear()} HARI OM. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}