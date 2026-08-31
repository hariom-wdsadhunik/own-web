'use client';

import React from 'react';
import { ProjectMedia as ProjectMediaType } from '@/types/portfolio';
import { ProjectMedia } from './ProjectMedia';

export interface ProjectPreviewProps {
  media: ProjectMediaType;
  title: string;
  category: string;
  year: string;
  status: string;
  className?: string;
}

export function ProjectPreview({ media, title, category, year, status, className }: ProjectPreviewProps) {
  return (
    <ProjectMedia
      media={media}
      title={title}
      category={category}
      year={year}
      status={status}
      className={className}
    />
  );
}