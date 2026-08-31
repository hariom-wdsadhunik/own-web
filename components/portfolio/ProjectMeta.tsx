import React from 'react';
import { Badge } from '@/components/ui/Badge';

export interface ProjectMetaProps {
  role: string[];
  techStack: string[];
  year: string;
  category: string;
}

export function ProjectMeta({ role, techStack, year, category }: ProjectMetaProps) {
  return (
    <div className="space-y-4 font-mono text-xs text-gray-400 border-t border-white/10 pt-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-gray-600 uppercase tracking-widest text-[10px] block">Role</span>
          <span className="text-gray-300 font-sans text-xs">{role.join(' • ')}</span>
        </div>
        <div>
          <span className="text-gray-600 uppercase tracking-widest text-[10px] block">Year / Category</span>
          <span className="text-gray-300 font-mono text-xs">{year} / {category}</span>
        </div>
      </div>

      <div>
        <span className="text-gray-600 uppercase tracking-widest text-[10px] block mb-1.5">Tech Stack</span>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px]">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}