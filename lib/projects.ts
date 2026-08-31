import { PROJECTS } from '@/content/projects';
import { Project } from '@/types/portfolio';

export function getPublicProjects(): Project[] {
  return PROJECTS.filter((project) => project.visibility === 'public');
}

export function getPublicCreativeProjects(): Project[] {
  return PROJECTS.filter((project) => project.visibility === 'public' && project.department === 'creative');
}

export function getPublicClientProjects(): Project[] {
  return PROJECTS.filter((project) => project.visibility === 'public' && project.department === 'client');
}

export function getPublicFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.visibility === 'public' && project.featured);
}

export function getPublicProjectBySlug(slug: string): Project | undefined {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (project && project.visibility === 'public') {
    return project;
  }
  return undefined;
}

export function getPublicNextProject(currentSlug: string): Project | undefined {
  const publicProjects = getPublicProjects();
  const currentIndex = publicProjects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  
  const nextIndex = (currentIndex + 1) % publicProjects.length;
  return publicProjects[nextIndex];
}