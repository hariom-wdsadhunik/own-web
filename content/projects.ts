import { Project } from '@/types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'leadpilot',
    slug: 'leadpilot',
    title: 'LeadPilot',
    tagline: 'Autonomous AI prospect discovery & outbound enrichment pipeline.',
    client: 'Proprietary Product',
    year: '2026',
    role: ['Product Thinking', 'UI/UX Architecture', 'Full-Stack Engineering'],
    category: 'Product',
    featured: false,
    visibility: 'private',
    heroImage: {
      type: 'image',
      alt: 'LeadPilot Product Workspace Screenshot Placeholder',
      caption: 'LeadPilot — Prospect Discovery & Enrichment Control Panel',
      aspectRatio: '16:9',
    },
    summary:
      'LeadPilot is an AI-assisted lead discovery platform designed to streamline prospective buyer identification, domain data enrichment, and outreach prioritization for B2B workflows.',
    problemStatement:
      'B2B sales and growth teams spend significant time manually searching registries, copying company metadata, and verifying contact details across disjointed tools.',
    approach:
      'Engineered a unified workspace combining asynchronous web scrapers, LLM-based prospect scoring, and clear table controls to help users discover relevant leads.',
    designNotes:
      'Designed a dense, high-information table interface with rapid filtering, column sorting, and keyboard-navigable detail drawers for swift prospect evaluation.',
    engineeringNotes:
      'Built using Next.js App Router, React Server Components for fast data fetching, and background queue workers for background domain enrichment.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AI Pipeline'],
    deliverables: ['Product Architecture', 'Web Application UI', 'Enrichment API Pipeline'],
    status: 'In Development',
  },
  {
    id: 'tradestak',
    slug: 'tradestak',
    title: 'TradeStak',
    tagline: 'High-frequency financial indicator workspace & signal visualizer.',
    client: 'FinTech Platform',
    year: '2025',
    role: ['UI/UX Design', 'Frontend Architecture', 'Data Visualization'],
    category: 'Web Platform',
    featured: true,
    visibility: 'public',
    heroImage: {
      type: 'image',
      alt: 'TradeStak Financial Workspace Screenshot Placeholder',
      caption: 'TradeStak — Technical Indicator Workspace & Chart Grid',
      aspectRatio: '16:9',
    },
    summary:
      'TradeStak is a web-based financial analytics dashboard providing active market participants with real-time chart visualization, technical indicator overlays, and customizable workspace layouts.',
    problemStatement:
      'Traditional trading software often suffers from bloated interfaces, slow client rendering during rapid price updates, and poor multi-monitor window management.',
    approach:
      'Focused on canvas-based chart rendering, modular widget panels, and lightweight state management to maintain steady 60fps chart updates during peak volatility.',
    designNotes:
      'Established a dark-mode editorial visual hierarchy using high-contrast numeric typography, muted background grids, and subtle indicator accent colors.',
    engineeringNotes:
      'Leveraged HTML5 Canvas APIs, WebSockets for live data streaming, and custom React hooks to isolate chart re-renders from global UI layout updates.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Canvas API', 'WebSockets'],
    deliverables: ['Dashboard UI System', 'Canvas Charting Engine', 'Widget Layout System'],
    status: 'Production',
  },
  {
    id: 'internet-time-capsule',
    slug: 'internet-time-capsule',
    title: 'Internet Time Capsule',
    tagline: 'Interactive digital archive preserving web artifacts across temporal eras.',
    client: 'Experimental Web Art',
    year: '2025',
    role: ['Creative Technology', 'Interaction Design', 'Frontend Development'],
    category: 'AI Experiment',
    featured: true,
    visibility: 'public',
    heroImage: {
      type: 'image',
      alt: 'Internet Time Capsule Timeline View Placeholder',
      caption: 'Internet Time Capsule — Spatial Archive Timeline Visualizer',
      aspectRatio: '16:9',
    },
    summary:
      'Internet Time Capsule is a creative web experiment that curates, indexes, and presents historic web phenomena, early forum culture, and forgotten digital artifacts in a continuous spatial timeline.',
    problemStatement:
      'As the web rapidly evolves, early digital aesthetics, internet lore, and iconic user interfaces are lost to dead domain links and decaying server hosts.',
    approach:
      'Created an immersive 3D-feeling spatial timeline that allows visitors to scroll through digital eras, inspecting archived snapshots and nostalgic media fragments.',
    designNotes:
      'Utilized cinematic dark mode, retro-futuristic typography, glassmorphism cards, and smooth scroll transitions to evoke a feeling of digital archaeology.',
    engineeringNotes:
      'Built with Next.js, Motion physics, Web Audio API soundscapes, and structured JSON archive schemas for rapid client-side rendering.',
    techStack: ['Next.js', 'TypeScript', 'Motion', 'Tailwind CSS', 'Web Audio API'],
    deliverables: ['Spatial Timeline Interface', 'Digital Archive Schema', 'Audio Soundscape Engine'],
    status: 'Active Prototype',
  },
  {
    id: 'athena',
    slug: 'athena',
    title: 'ATHENA',
    tagline: 'Autonomous system agent & multi-step cognitive task orchestrator.',
    client: 'AI Research Lab',
    year: '2026',
    role: ['AI Systems Architecture', 'Prompt Engineering', 'Full-Stack Prototype'],
    category: 'AI Experiment',
    featured: true,
    visibility: 'public',
    heroImage: {
      type: 'image',
      alt: 'ATHENA Autonomous Agent Control Panel Placeholder',
      caption: 'ATHENA — Autonomous Agent Execution Trace & State Inspector',
      aspectRatio: '16:9',
    },
    summary:
      'ATHENA is an autonomous multi-agent task orchestrator designed to break down high-level user instructions into verified sub-tasks, executing web searches, code generation, and file operations in real time.',
    problemStatement:
      'Single-prompt LLM interactions struggle with complex multi-step technical goals, frequently losing context or hallucinating when tasks require external tool execution.',
    approach:
      'Designed a multi-agent framework featuring specialized subagents (Researcher, Coder, Validator) communicating via structured JSON protocol and shared persistent memory.',
    designNotes:
      'Crafted a real-time agent activity feed showing live tool calls, reasoning logs, and code diff previews in an intuitive developer-first control panel.',
    engineeringNotes:
      'Implemented in Node.js/TypeScript using event-driven WebSockets, streaming LLM outputs, and sandbox execution environments.',
    techStack: ['Node.js', 'TypeScript', 'LLM Function Calling', 'WebSockets', 'Tailwind CSS'],
    deliverables: ['Multi-Agent Architecture', 'Execution Stream UI', 'Memory State Engine'],
    status: 'Active Prototype',
  },
];