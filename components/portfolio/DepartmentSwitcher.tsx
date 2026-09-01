'use client';

import React from 'react';
import { ProjectDepartment } from '@/types/portfolio';
import { cn } from '@/lib/utils';

export type FilterDepartment = 'all' | ProjectDepartment;

export interface DepartmentSwitcherProps {
  activeFilter: FilterDepartment;
  onFilterChange: (filter: FilterDepartment) => void;
  creativeCount: number;
  clientCount: number;
  className?: string;
}

export function DepartmentSwitcher({
  activeFilter,
  onFilterChange,
  creativeCount,
  clientCount,
  className,
}: DepartmentSwitcherProps) {
  const options: { id: FilterDepartment; label: string; count?: number }[] = [
    { id: 'all', label: 'ALL DEPARTMENTS', count: creativeCount + clientCount },
    { id: 'creative', label: 'CREATIVE PROJECTS', count: creativeCount },
    { id: 'client', label: 'CLIENT PROJECTS', count: clientCount },
  ];

  return (
    <div
      role="tablist"
      aria-label="Department Filter"
      className={cn('inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.03] border border-white/10 flex-wrap w-full sm:w-auto', className)}
    >
      {options.map((opt) => {
        const isActive = activeFilter === opt.id;

        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="department-projects-grid"
            onClick={() => onFilterChange(opt.id)}
            className={cn(
              'min-h-[44px] px-3 sm:px-4 py-2 rounded-lg font-mono text-[11px] sm:text-xs tracking-wider transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 flex-1 sm:flex-initial justify-center',
              isActive
                ? 'bg-blue-500 text-gray-950 font-bold shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            )}
          >
            <span>{opt.label}</span>
            {opt.count !== undefined && (
              <span
                className={cn(
                  'px-1.5 py-0.5 rounded text-[10px] font-mono',
                  isActive ? 'bg-gray-950/20 text-gray-950 font-bold' : 'bg-white/10 text-gray-400'
                )}
              >
                {opt.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}