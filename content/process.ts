import { ProcessStep } from '@/types/portfolio';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'THINK',
    tagline: 'Problem Framing & Discovery',
    description: 'Deconstruct core user problems, analyze technical constraints, and challenge initial assumptions before writing a single line of code.',
    deliverables: ['Problem Statement', 'Target Constraints', 'Discovery Notes'],
  },
  {
    number: '02',
    title: 'DEFINE',
    tagline: 'Information Architecture & Scoping',
    description: 'Map user journeys, establish data content models, define system boundaries, and trim non-essential features to guarantee a tight MVP scope.',
    deliverables: ['Content Models', 'Page Routing Trees', 'MVP Scope Specification'],
  },
  {
    number: '03',
    title: 'DESIGN',
    tagline: 'Visual Systems & Spatial Layout',
    description: 'Craft high-contrast typography hierarchies, cohesive dark visual tokens, responsive grids, and physical motion primitives.',
    deliverables: ['Design Tokens', 'Component Primitives', 'Interaction Specs'],
  },
  {
    number: '04',
    title: 'BUILD',
    tagline: 'Frontend Engineering & Integration',
    description: 'Develop production-grade Next.js/React applications with clean component abstraction, strict TypeScript typing, and responsive CSS.',
    deliverables: ['Next.js Codebase', 'Typed Components', 'API Integrations'],
  },
  {
    number: '05',
    title: 'TEST',
    tagline: 'QA, Accessibility & Performance',
    description: 'Rigorously audit keyboard navigation, screen reader accessibility, responsive viewport rendering (360px–1920px+), and bundle size.',
    deliverables: ['Keyboard Access Audit', 'Lighthouse Audit', 'Responsive Validation'],
  },
  {
    number: '06',
    title: 'SHIP',
    tagline: 'Deployment & Continuous Optimization',
    description: 'Deploy to edge static infrastructure, monitor initial load metrics, and iteratively refine micro-interactions based on feedback.',
    deliverables: ['Production Edge Build', 'Vercel Deployment', 'Release Notes'],
  },
];