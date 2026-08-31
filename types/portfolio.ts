export interface ProjectMedia {
  type: 'image' | 'video' | 'interactive';
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'vertical';
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  client?: string;
  year: string;
  role: string[];
  category: 'Product' | 'Web Platform' | 'AI Experiment' | 'Design System';
  featured: boolean;
  heroImage: ProjectMedia;
  summary: string;
  techStack: string[];
  metrics?: ProjectMetric[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'Production' | 'In Development' | 'Case Study Pending' | 'Archived';
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
