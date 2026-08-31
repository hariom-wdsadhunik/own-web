import React from 'react';
import { ProjectMedia as ProjectMediaType } from '@/types/portfolio';
import { ProjectMedia } from './ProjectMedia';
import { FadeIn } from '@/components/motion/FadeIn';

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
    <div className="space-y-12">
      {/* Primary Hero Showcase (100% Width) */}
      <FadeIn>
        <ProjectMedia
          media={heroMedia}
          title={title}
          category={category}
          year={year}
          status={status}
          useBrowserFrame={category === 'Web Platform' || category === 'Product'}
        />
      </FadeIn>

      {/* Editorial Supporting Gallery Grid */}
      {gallery && gallery.length > 0 && (
        <div className="space-y-8 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">
              VISUAL EVIDENCE &amp; WORKFLOW ARCHIVE ({gallery.length})
            </span>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest hidden sm:inline">
              AUTHENTIC PROJECT CAPTURES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <ProjectMedia
                  media={item}
                  title={`${title} — Archive ${idx + 1}`}
                  category={category}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}