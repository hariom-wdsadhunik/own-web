'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CapabilityCategory } from '@/types/portfolio';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export interface CapabilityItemProps {
  capability: CapabilityCategory;
  isActive?: boolean;
}

export function CapabilityItem({ capability }: CapabilityItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        'border-b border-white/10 py-6 transition-all duration-300',
        expanded ? 'bg-white/[0.02] px-4 rounded-lg border-white/20' : 'hover:border-white/20'
      )}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between text-left group focus-visible:outline-none"
        aria-expanded={expanded}
      >
        <div className="flex items-baseline gap-4 sm:gap-8">
          <span className="font-mono text-xs sm:text-sm text-blue-400 font-bold">{capability.index}</span>
          <h3 className="font-display text-2xl sm:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">
            {capability.title}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline font-mono text-xs text-gray-400 tracking-wider">
            {capability.skills.length} EXPERTISES
          </span>
          <ChevronDown
            className={cn('w-5 h-5 text-gray-400 transition-transform duration-300', expanded && 'rotate-180 text-blue-400')}
          />
        </div>
      </button>

      <div className={cn('grid transition-all duration-300 ease-in-out', expanded ? 'grid-rows-[1fr] opacity-100 pt-6' : 'grid-rows-[0fr] opacity-0 overflow-hidden')}>
        <div className="overflow-hidden space-y-6">
          <p className="font-sans text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            {capability.description}
          </p>

          <div className="space-y-2">
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Capabilities &amp; Tools</span>
            <div className="flex flex-wrap gap-2">
              {capability.skills.map((skill) => (
                <Badge key={skill} variant="icy">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}