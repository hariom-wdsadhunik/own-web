import { CapabilityCategory } from '@/types/portfolio';

export const CAPABILITIES: CapabilityCategory[] = [
  {
    id: 'product',
    index: '01',
    title: 'PRODUCT',
    tagline: 'Strategic scoping, user-centric problem solving & MVP definition.',
    description: 'Transforming ambiguous goals into validated digital products through deliberate scoping, information architecture, and core utility prioritization.',
    skills: ['Product Thinking', 'MVP Scoping', 'Feature Prioritization', 'User Workflow Mapping'],
    proofProjectIds: ['leadpilot', 'tradestak'],
  },
  {
    id: 'design',
    index: '02',
    title: 'DESIGN',
    tagline: 'UI/UX design systems, dark editorial aesthetics & interaction craft.',
    description: 'Constructing scalable design systems, visual component libraries, high-contrast dark interfaces, and tactile micro-interactions.',
    skills: ['UI/UX Architecture', 'Design Systems', 'Dark Editorial Aesthetics', 'Interaction Design'],
    proofProjectIds: ['tradestak', 'internet-time-capsule'],
  },
  {
    id: 'build',
    index: '03',
    title: 'BUILD',
    tagline: 'High-performance Next.js/React engineering & responsive architecture.',
    description: 'Engineering resilient frontend applications with clean component architecture, optimal static rendering, fluid layout math, and strict TypeScript types.',
    skills: ['Next.js 15 (App Router)', 'React 19 & TypeScript', 'Tailwind CSS v4', 'Performance & Accessibility'],
    proofProjectIds: ['leadpilot', 'tradestak', 'internet-time-capsule', 'athena'],
  },
  {
    id: 'ai',
    index: '04',
    title: 'AI & EXPERIMENTS',
    tagline: 'LLM integration, agentic workflows & rapid laboratory prototyping.',
    description: 'Embedding intelligent AI agents, prompt engineering pipelines, and conversational interfaces directly into modern web applications.',
    skills: ['LLM & API Integration', 'Agentic Workflow Design', 'Prompt Engineering', 'Rapid AI Prototyping'],
    proofProjectIds: ['athena', 'leadpilot', 'internet-time-capsule'],
  },
];