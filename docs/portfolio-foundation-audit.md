# Portfolio Foundation Audit

**Project:** Hari Om - Personal Portfolio Website  
**Date:** August 31, 2026  
**Creative Direction:** Cinematic Futuristic Premium  

---

## 1. Executive Summary

This document establishes the technical and structural audit for Hari Om's personal portfolio repository (d:\own-web). The objective of this project is to build a high-performance, cinematic, futuristic, and premium web application that showcases Hari Om's capabilities in product thinking, UI/UX, web engineering, AI experimentation, visual design, and interaction design.

---

## 2. Repository & Runtime Environment Analysis

### 2.1 Directory State
- **Root Location:** d:\own-web
- **Initial Status:** Greenfield / Empty directory.
- **Git Status:** Initialized empty repository (git init).

### 2.2 Local Runtime Capabilities
- **Node.js Runtime:** 24.18.0
- **Package Manager:** 
pm v11.16.0
- **Operating System:** Windows (PowerShell environment)

---

## 3. Recommended Technical Stack

To achieve a **Cinematic Futuristic Premium** experience while maintaining high performance, fast initial loads, accessibility, and clean architecture, the following technology stack is recommended:

| Layer | Technology Choice | Justification |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Server-side rendering (SSR), static site generation (SSG), optimal image handling, routing, and performance optimization. |
| **Language** | TypeScript | Strong typing for project content models, component props, and API interfaces. |
| **Styling** | Tailwind CSS v4 + PostCSS | Utility-first styling with modern CSS variable tokens, container queries, and sub-millisecond build performance. |
| **Animations** | Framer Motion (or motion/react) | Industry-standard declarative animations, gesture handling, page transitions, and built-in prefers-reduced-motion support. |
| **Icons** | Lucide React | Clean, minimal, accessible SVG icons matching the editorial tech aesthetic. |
| **Typography** | Next Font (
ext/font) | Zero layout shift font loading for display headers (e.g., Space Grotesk / Syne / Plus Jakarta Sans) and clean body copy (Inter / Geist). |
| **Content Layer** | Local Typed JSON/TS Content Modules | Structured, scalable content definitions without overhead of external CMS for initial phases. |

---

## 4. Dependencies Strategy

### 4.1 Recommended Dependencies (To Keep Minimal)
- 
ext, eact, eact-dom
- 	ypescript, @types/react, @types/node
- 	ailwindcss, @tailwindcss/postcss
- ramer-motion (or motion)
- lucide-react
- clsx, 	ailwind-merge (for safe dynamic class name merging)

### 4.2 Dependencies to Avoid
- ?? Heavy 3D Canvas Engines (Three.js/Fiber) unless strictly necessary for a lightweight isolated lab widget (to avoid 500KB+ bundle bloat and mobile thermal throttling).
- ?? Full-page hijack scrolling libraries (e.g., fullPage.js) which harm accessibility, smooth momentum scrolling, and touch UX.
- ?? Heavy UI component libraries (Bootstrap, Material UI, Ant Design) which introduce generic visual aesthetics and massive bundle sizes.
- ?? Unmaintained animation utilities or jquery-legacy plugins.

---

## 5. Architectural & Technical Risks

1. **Performance Overhead from Motion & Cinematic Effects**
   - *Risk:* Heavy blur backdrops (ackdrop-blur-3xl), continuous animated gradients, or unbounded canvas animations can cause frame drops, battery drain, and thermal throttling on mobile devices.
   - *Mitigation:* Limit heavy CSS backdrop filters on mobile viewport, apply will-change hardware acceleration selectively, and wrap continuous animations in IntersectionObserver / prefers-reduced-motion checks.

2. **Mobile UX Compromise**
   - *Risk:* Hover-dependent cinematic cards or custom mouse cursors breaking on touch screens.
   - *Mitigation:* First-class responsive designs: replace hover effects with active touch states, disable custom pointer trails on coarse pointer devices (@media (pointer: coarse)), and ensure minimum 44x44px touch targets.

3. **Content & Visual Cliché Risks**
   - *Risk:* Sliding into generic "AI developer" stereotypes (excessive neon blue/purple glows, matrix code rains, fake client stats).
   - *Mitigation:* Strict adherence to the creative direction: dark, editorial, technical, minimal, sophisticated. Zero fake data, zero generic stock images, zero arbitrary decorative animations.

4. **Monolithic Components**
   - *Risk:* Creating massive 1000-line single-file pages.
   - *Mitigation:* Modular atomic component architecture (components/ui for primitives, components/portfolio for narrative domain modules).

---

## 6. Deployment & Hosting Observations

- Target environment: Vercel / Cloudflare Pages / Netlify static & edge output.
- SSG/ISR static generation for lightning-fast TTFB and LCP.
- Automated CI/CD build verification on push.
