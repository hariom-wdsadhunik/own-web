import type { Metadata } from 'next';
import { getPublicProjects } from '@/lib/projects';
import { WorkIndexContainer } from '@/components/portfolio/WorkIndexContainer';

export const metadata: Metadata = {
  title: 'Work Directory & Case Studies | Hari Om',
  description: 'Explore selected digital product case studies, UI/UX architectures, and commercial web implementations by Hari Om.',
};

export default function WorkIndexPage() {
  const publicProjects = getPublicProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <WorkIndexContainer initialProjects={publicProjects} />
    </div>
  );
}