export const SITE_CONFIG = {
  name: 'Hari Om',
  title: 'Hari Om — Product Thinking, UI/UX & Web Engineering',
  description: 'Personal portfolio of Hari Om — digital product creation, UI/UX architecture, high-performance web engineering, and AI experimentation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hariom.dev',
  author: {
    name: 'Hari Om',
    email: 'contact@hariom.dev',
    github: 'https://github.com/hariom-wdsadhunik',
    linkedin: 'https://linkedin.com/in/hariom',
  },
  ogImage: '/og/default-og.png',
};

export function getSiteUrl(): string {
  return SITE_CONFIG.url;
}

export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = getSiteUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}