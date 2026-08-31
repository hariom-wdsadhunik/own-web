import type { MetadataRoute } from 'next';
import { getPublicProjects } from '@/lib/projects';
import { EXPERIMENTS } from '@/content/experiments';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const currentDate = new Date().toISOString().split('T')[0];

  const staticRoutes = ['', '/work', '/lab'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const publicProjects = getPublicProjects();
  const projectRoutes = publicProjects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const experimentRoutes = EXPERIMENTS.map((e) => ({
    url: `${baseUrl}/lab/${e.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...experimentRoutes];
}