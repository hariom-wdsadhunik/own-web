# Portfolio Implementation Plan

**Project:** Hari Om - Personal Portfolio Website  
**Date:** August 31, 2026  
**Creative Direction:** Cinematic Futuristic Premium  

---

## Phase Breakdown Overview

- **Phase 0: Foundation & Discovery** *(Completed in current turn)*
- **Phase 1: Project Setup & Core Shell Infrastructure**
- **Phase 2: Design System & Cinematic Component Library**
- **Phase 3: Homepage Implementation (Full Narrative Flow)**
- **Phase 4: Case Study Pages & Lab Prototypes**
- **Phase 5: Performance, Accessibility & Responsive Refinement**
- **Phase 6: Final QA & Deployment Readiness**

---

## Phase Details

### Phase 0: Foundation & Discovery (Completed)
- **Objective:** Audit project environment, establish creative direction, create architecture & content models, and set up documentation foundation.
- **Files Affected:** docs/portfolio-foundation-audit.md, docs/portfolio-architecture.md, docs/portfolio-content-model.md, docs/portfolio-implementation-plan.md.
- **Expected Result:** Clear, unambiguous blueprint for repository development with strict rules against fake data and performance bloat.
- **QA Requirements:** Verify all 4 documents exist, format correctly, and git commit cleanly.

---

### Phase 1: Project Setup & Core Shell Infrastructure
- **Objective:** Initialize Next.js 15 App Router codebase with TypeScript, Tailwind CSS v4, font setup, root layout, and navigation shell.
- **Files Affected:** package.json, 	sconfig.json, 
ext.config.ts, pp/layout.tsx, pp/page.tsx, pp/globals.css, lib/utils.ts, components/layout/Header.tsx, components/layout/Footer.tsx.
- **Expected Result:** A building, running Next.js application with dark theme baseline, responsive glass header, and footer shell.
- **QA Requirements:**
  - 
pm run build exits cleanly with zero errors.
  - Zero hydration errors or layout shifts on initial load.
  - Dark mode color tokens render properly.

---

### Phase 2: Design System & Cinematic Component Library
- **Objective:** Build reusable atomic UI primitives and Framer Motion animation containers.
- **Files Affected:** components/ui/Button.tsx, components/ui/Badge.tsx, components/ui/Card.tsx, components/ui/GlassContainer.tsx, components/motion/FadeIn.tsx, components/motion/Reveal.tsx, 	ypes/portfolio.ts.
- **Expected Result:** Modular component library supporting hover states, spring motion, accessible focus rings, and prefers-reduced-motion fallbacks.
- **QA Requirements:**
  - Components render gracefully across 360px mobile up to 1920px desktop viewports.
  - Keyboard focus states are visually distinct.

---

### Phase 3: Homepage Implementation (Full Narrative Flow)
- **Objective:** Assemble the primary narrative homepage section by section.
- **Files Affected:**
  - components/sections/Hero.tsx
  - components/sections/SelectedWork.tsx
  - components/sections/StatementTransition.tsx ("I DON'T JUST MAKE WEBSITES.")
  - components/sections/CapabilitiesSection.tsx
  - components/sections/LabSection.tsx
  - components/sections/ProcessSection.tsx
  - components/sections/AboutSection.tsx
  - components/sections/ContactCTA.tsx
  - pp/page.tsx
- **Expected Result:** Complete, immersive homepage experience reflecting Hari Om's skills, projects (LeadPilot, TradeStak, Internet Time Capsule, ATHENA), and engineering approach.
- **QA Requirements:**
  - Smooth 60fps scrolling performance.
  - All project links navigate to respective routes.
  - Responsive stacking on mobile (360px, 390px, 430px).

---

### Phase 4: Case Study Pages & Lab Prototypes
- **Objective:** Create detailed project case study templates and interactive experiment views.
- **Files Affected:** pp/work/[slug]/page.tsx, pp/lab/[slug]/page.tsx, components/portfolio/ProjectDetail.tsx.
- **Expected Result:** Deep-dive case studies showcasing problem statements, solutions, tech stack, and deliverables for each project without fabricated data.
- **QA Requirements:**
  - Dynamic routes load correct project data based on slug.
  - 404 handler for invalid project slugs.

---

### Phase 5: Performance, Accessibility & Responsive Refinement
- **Objective:** Fine-tune LCP, CLS, screen reader accessibility, keyboard navigation, and mobile touch interactions.
- **Files Affected:** pp/globals.css, components/layout/Header.tsx, 
ext.config.ts.
- **Expected Result:** Lighthouse score > 90 across Performance, Accessibility, Best Practices, and SEO.
- **QA Requirements:**
  - Test keyboard navigation (Tab, Shift+Tab, Enter, Space).
  - Verify reduced motion behavior when enabled in OS settings.

---

### Phase 6: Final QA & Deployment Readiness
- **Objective:** Complete full cross-browser testing, production build verification, and git commit/tagging.
- **Files Affected:** Entire codebase.
- **Expected Result:** Production-ready portfolio deployment build.
- **QA Requirements:** Zero linter warnings, zero build errors, verified git status.
