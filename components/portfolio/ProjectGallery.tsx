import React from 'react';
import { ProjectMedia as ProjectMediaType } from '@/types/portfolio';
import { ProjectMedia } from './ProjectMedia';

export interface ProjectGalleryProps {
  heroMedia: ProjectMediaType;
  title: string;
  category: string;
  year: string;
  status: string;
  gallery?: ProjectMediaType[];
}

export function ProjectGallery({ heroMedia, title, category, year, status, gallery }: ProjectGalleryProps) {
  return (
    <div className="space-y-8">
      <ProjectMedia
        media={heroMedia}
        title={title}
        category={category}
        year={year}
        status={status}
      />

      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {gallery.map((item, idx) => (
            <ProjectMedia
              key={idx}
              media={item}
              title={`${title} — Evidence ${idx + 1}`}
              category={category}
            />
          ))}
        </div>
      )}
    </div>
  );
}