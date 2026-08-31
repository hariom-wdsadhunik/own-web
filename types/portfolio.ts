export interface ProjectMedia {
  type: 'image' | 'video' | 'interactive';
  url?: string;
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
  status: 'Production' | 'In Development' | 'Active Prototype' | 'Case Study Pending';
}

export interface CapabilityCategory {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  proofProjectIds: string[];
}

export interface LabExperiment {
  id: string;
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  tags: string[];
  status: 'Active Prototype' | 'Research Note' | 'Concept';
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface AboutInfo {
  name: string;
  title: string;
  location: string;
  focus: string[];
  bio: string[];
  principles: string[];
}

export interface ContactInfo {
  heading: string;
  subheading: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}