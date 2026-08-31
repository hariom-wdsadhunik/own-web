import { LabExperiment } from '@/types/portfolio';

export const EXPERIMENTS: LabExperiment[] = [
  {
    id: 'internet-time-capsule',
    slug: 'internet-time-capsule',
    index: 'LAB-01',
    title: 'Internet Time Capsule',
    tagline: 'Interactive web archive experience.',
    description: 'An experimental digital vault exploring memory, temporal web artifacts, and interactive archival visualizers.',
    problemOrMotivation: 'Exploring how web archives can move beyond static text snapshots into rich, spatial, and interactive time-capsule experiences.',
    findingsOrLearnings: 'Demonstrated that spring-driven timeline motion and restrained spatial typography significantly increase user engagement with archival material.',
    year: '2025',
    tags: ['Creative Tech', 'Next.js', 'Motion'],
    status: 'Active Prototype',
  },
  {
    id: 'athena',
    slug: 'athena',
    index: 'LAB-02',
    title: 'ATHENA System Agent',
    tagline: 'Multi-modal AI assistant environment.',
    description: 'A dark, technical control interface for autonomous multi-agent task execution and structured reasoning outputs.',
    problemOrMotivation: 'Investigating visual patterns for monitoring concurrent AI subagent tasks and streaming outputs in real time.',
    findingsOrLearnings: 'Proved that monospaced status badges and structured task trees provide high clarity during multi-agent execution.',
    year: '2026',
    tags: ['AI Agent', 'TypeScript', 'Python'],
    status: 'Active Prototype',
  },
];