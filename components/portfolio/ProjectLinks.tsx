'use client';

import React from 'react';
import { ExternalLink, Code, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface ProjectLinksProps {
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function ProjectLinks({ liveUrl, demoUrl, githubUrl, className }: ProjectLinksProps) {
  if (!liveUrl && !demoUrl && !githubUrl) {
    return null;
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className || ''}`}>
      {liveUrl && (
        <Button
          href={liveUrl}
          isExternal
          variant="primary"
          icon={<ExternalLink className="w-4 h-4" />}
        >
          LIVE EXPERIENCE ↗
        </Button>
      )}

      {demoUrl && (
        <Button
          href={demoUrl}
          isExternal
          variant="secondary"
          icon={<Play className="w-4 h-4 text-blue-400" />}
        >
          LIVE DEMO ↗
        </Button>
      )}

      {githubUrl && (
        <Button
          href={githubUrl}
          isExternal
          variant="secondary"
          icon={<Code className="w-4 h-4 text-gray-400" />}
        >
          SOURCE CODE ↗
        </Button>
      )}
    </div>
  );
}