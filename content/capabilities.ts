import { CapabilityCategory } from '@/types/portfolio';

export const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: 'product-thinking',
    index: '01',
    title: 'PRODUCT THINKING',
    tagline: 'Transforming complex domain requirements into cohesive digital products.',
    description:
      'Designing products with high utility, clear user workflows, and scalable feature architectures. Grounded in user research, functional prioritization, and rapid prototyping.',
    skills: ['Product Scope Definition', 'User Journey Architecture', 'Feature Prioritization', 'MVP Engineering'],
    proofProjectIds: ['tradestak'],
  },
  {
    id: 'ui-ux-architecture',
    index: '02',
    title: 'UI/UX ARCHITECTURE',
    tagline: 'Creating intuitive interfaces, systematic design tokens, and fluid interactions.',
    description:
      'Developing production-grade design systems with strict visual hierarchy, accessible color palettes, responsive layouts, and interactive micro-animations.',
    skills: ['Design System Tokens', 'Information Architecture', 'Interaction Design', 'Accessibility (WCAG AA)'],
    proofProjectIds: ['tradestak', 'internet-time-capsule'],
  },
  {
    id: 'web-engineering',
    index: '03',
    title: 'WEB ENGINEERING',
    tagline: 'Building high-performance, accessible, and scalable web applications.',
    description:
      'Crafting robust web applications with modern Next.js App Router, React Server Components, TypeScript, and optimized asset pipelines.',
    skills: ['Next.js App Router', 'TypeScript Engineering', 'State & Data Pipeline', 'Performance Optimization'],
    proofProjectIds: ['tradestak', 'internet-time-capsule', 'athena'],
  },
  {
    id: 'ai-experimentation',
    index: '04',
    title: 'AI & PRODUCT EXPERIMENTAL',
    tagline: 'Exploring autonomous agents, LLM orchestration, and spatial interfaces.',
    description:
      'Pushing creative boundary conditions by integrating multi-agent reasoning, cognitive tool calls, and spatial audio-visual storytelling.',
    skills: ['Autonomous Agent Systems', 'LLM Function Calling', 'Prompt Architecture', 'Spatial Web Audio'],
    proofProjectIds: ['athena', 'internet-time-capsule'],
  },
];

export const CAPABILITIES = CAPABILITY_CATEGORIES;