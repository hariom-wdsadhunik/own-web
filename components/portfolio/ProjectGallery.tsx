import React from 'react';
import { ProjectMedia } from '@/types/portfolio';
import { ProjectPreview } from './ProjectPreview';

export interface ProjectGalleryProps {
  heroMedia: ProjectMedia;
  title: string;
  category: string;
  year: string;
  status: string;
  gallery?: ProjectMedia[];
}

export function ProjectGallery({ heroMedia, title, category, year, status, gallery }: ProjectGalleryProps) {
  return (
    <div className="space-y-8">
      <ProjectPreview
        media={heroMedia}
        title={title}
        category={category}
        year={year}
        status={status}
      />

      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {gallery.map((item, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden border border-white/10 bg-[#0f1117] p-4 space-y-2">
              <div className="w-full aspect-16/9 bg-black/40 rounded flex items-center justify-center font-mono text-xs text-gray-500">
                {item.alt}
              </div>
              {item.caption && (
                <p className="font-mono text-[11px] text-gray-400">{item.caption}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}