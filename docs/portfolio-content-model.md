# Portfolio Content Model Specification

**Project:** Hari Om - Personal Portfolio Website  
**Date:** August 31, 2026  
**Creative Direction:** Cinematic Futuristic Premium  

---

## 1. Core Content Philosophy

To maintain authenticity, transparency, and clean software practices:
1. **Zero Fabrication Policy:** No fake statistics, manufactured testimonials, or imaginary metrics are included.
2. **Explicit Placeholders:** Any field awaiting real content is explicitly marked as optional or initialized with clear placeholder indicators ([Pending Real Case Study Data]).
3. **Structured Schemas:** All domain content is strictly typed via TypeScript interfaces to allow future seamless integration with head-less CMS or local markdown files.

---

## 2. TypeScript Data Schemas

### 2.1 Project Schema (	ypes/portfolio.ts)

`	ypescript
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
  gallery: ProjectMedia[];
  summary: string;
  problemStatement?: string;
  solutionOverview?: string;
  techStack: string[];
  metrics?: ProjectMetric[];
  liveUrl?: string;
  githubUrl?: string;
  deliverables?: string[];
  status: 'Production' | 'In Development' | 'Case Study Pending' | 'Archived';
}
`

### 2.2 Capabilities Schema

`	ypescript
export interface CapabilitySkill {
  name: string;
  proficiencyLevel?: 'Expert' | 'Advanced' | 'Exploring';
  tools: string[];
}

export interface CapabilityCategory {
  id: string;
  title: string;
  summary: string;
  iconName: string;
  skills: CapabilitySkill[];
  keyHighlights: string[];
}
`

### 2.3 Lab / Experiments Schema

`	ypescript
export interface LabItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  previewMedia?: ProjectMedia;
  status: 'Active Prototype' | 'Research Note' | 'Concept';
}
`

### 2.4 Process Schema

`	ypescript
export interface ProcessStep {
  stepNumber: string;
  phaseTitle: string;
  tagline: string;
  description: string;
  keyOutputs: string[];
}
`

---

## 3. Initial Project Registry (Known Portfolio Items)

The following project entities reflect known portfolio projects. Missing metrics or details are omitted to prevent data fabrication.

### Project 1: LeadPilot
- **ID:** leadpilot
- **Slug:** leadpilot
- **Title:** LeadPilot
- **Tagline:** Automated lead generation and intelligence platform.
- **Category:** Product
- **Featured:** True
- **Role:** ["Product Thinking", "Full-Stack Development", "UI/UX Design"]
- **Tech Stack:** ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AI Integration"]
- **Status:** Production
- **Summary:** High-performance lead intelligence engine built to streamline prospect discovery and enrichment.

### Project 2: TradeStak
- **ID:** 	radestak
- **Slug:** 	radestak
- **Title:** TradeStak
- **Tagline:** Modern trading workspace and analytics platform.
- **Category:** Web Platform
- **Featured:** True
- **Role:** ["UI/UX Engineering", "Frontend Architecture"]
- **Tech Stack:** ["React", "TypeScript", "Tailwind CSS", "Data Visualization"]
- **Status:** Production
- **Summary:** Specialized workspace interface designed for fast financial data analysis and trade execution monitoring.

### Project 3: Internet Time Capsule
- **ID:** internet-time-capsule
- **Slug:** internet-time-capsule
- **Title:** Internet Time Capsule
- **Tagline:** Digital archival experience capturing web moments in time.
- **Category:** AI Experiment
- **Featured:** True
- **Role:** ["Creative Technology", "Interaction Design", "Frontend"]
- **Tech Stack:** ["Next.js", "Framer Motion", "Tailwind CSS"]
- **Status:** Active Prototype
- **Summary:** An interactive experience exploring digital preservation, memory, and web evolution.

### Project 4: ATHENA
- **ID:** thena
- **Slug:** thena
- **Title:** ATHENA
- **Tagline:** Advanced AI-driven intelligence & operational assistant.
- **Category:** AI Experiment
- **Featured:** True
- **Role:** ["AI Engineering", "UI/UX Design", "System Architecture"]
- **Tech Stack:** ["Python", "TypeScript", "AI Frameworks", "Next.js"]
- **Status:** Active Prototype
- **Summary:** Sophisticated multi-modal AI agent interface crafted for complex task execution and synthesis.

---

## 4. Capabilities Registry Structure

1. **Product Thinking:** Strategic discovery, feature scoping, user-centric problem solving, MVP definition.
2. **UI/UX Design:** Information architecture, wireframing, high-fidelity visual design, design systems, micro-interactions.
3. **Web Engineering:** Frontend development, Next.js/React architecture, performance optimization, responsive layouts.
4. **AI & Product Experimentation:** LLM integration, prompt engineering, agentic workflows, rapid prototyping.
5. **Visual & Interaction Design:** Typography systems, motion design, spatial hierarchy, dark editorial aesthetics.
