# Portfolio Work Departments Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Architecture:** Two-Department Portfolio Structure  

---

## 1. Department Purpose & Distinction

The portfolio is explicitly partitioned into two distinct work departments to communicate dual capability:

1. **DEPARTMENT 01 — CREATIVE PROJECTS:**
   - **Purpose:** Self-initiated products, research tools, LLM interface experiments, creative technology, and exploratory web platforms.
   - **Narrative Statement:** *"Products, experiments, and ideas I built to explore what digital experiences could exist."*
   - **Current Public Projects:** `TradeStak`, `Internet Time Capsule`, `ATHENA`.
   - **Visual Mood:** Atmospheric, expressive, experimental, technical.

2. **DEPARTMENT 02 — CLIENT PROJECTS:**
   - **Purpose:** Commercial websites, UI/UX systems, frontend implementations, and digital experiences delivered for client briefs.
   - **Narrative Statement:** *"Websites and digital experiences built for real client briefs."*
   - **Visual Mood:** Precise, polished, commercial, restrained, trustworthy.
   - **Archive Status:** If no verified public client projects currently exist in the repository, an intentional pending archive state is displayed. **NO fake client projects, fake metrics, or fabricated screenshots are allowed.**

---

## 2. Project Data Model (`types/portfolio.ts`)

```typescript
export type ProjectDepartment = 'creative' | 'client';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  department: ProjectDepartment;
  client?: string;
  brief?: string;
  outcome?: string;
  year: string;
  role: string[];
  category: 'Product' | 'Web Platform' | 'AI Experiment' | 'Design System';
  featured: boolean;
  visibility: 'public' | 'private';
  heroImage: ProjectMedia;
  summary: string;
  problemStatement?: string;
  approach?: string;
  designNotes?: string;
  engineeringNotes?: string;
  techStack: string[];
  deliverables?: string[];
  status: 'Production' | 'In Development' | 'Active Prototype' | 'Case Study Pending';
}
```

---

## 3. LeadPilot Privacy Rule

* **Privacy Enforced:** `LeadPilot` remains `visibility: 'private'`.
* **Zero Public Exposure:** Excluded from homepage, Work directory, sitemap, public navigation, and static route generation.

---

## 4. Homepage Narrative Rhythm

1. **HERO:** Positioning, availability badge, primary action buttons.
2. **CREATIVE PROJECTS:** Department 01 exploratory product showcase.
3. **MANIFESTO:** Core engineering philosophy (3-mode statement transition).
4. **CLIENT PROJECTS:** Department 02 commercial delivery showcase (or archive-in-progress state).
5. **CAPABILITIES:** 4 Pillars of Craft.
6. **THE LAB:** AI research & experimental prototypes.
7. **PROCESS:** 6-step engineering methodology.
8. **ABOUT:** Bio & design principles.
9. **CONTACT:** Collaboration frame.

---

## 5. Work Directory & Department Switcher

* **Component:** [`components/portfolio/DepartmentSwitcher.tsx`](file:///d:/own-web/components/portfolio/DepartmentSwitcher.tsx)
* **Filters:** `ALL DEPARTMENTS`, `CREATIVE PROJECTS`, `CLIENT PROJECTS`.
* **Accessibility:** Full keyboard navigation, `aria-selected` state, minimum 44px touch target.