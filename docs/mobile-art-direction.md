# Mobile-First Art Direction & Two-Department Mobile Experience Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Concept Identity:** Cinematic Interactive Pocket Experience  
**Target Viewports:** 320px, 360px, 375px, 390px, 412px, 430px  

---

## 1. Visual & Art Direction Philosophy
* **Identity Transition:** While desktop is a *Cinematic Digital Exhibition*, mobile is curated as a *Cinematic Interactive Pocket Experience*—tactile, intimate, fast, and effortless.
* **No Desktop Shrinking:** Layouts, typography, and spacing are designed specifically for phone proportions rather than simply scaling down multi-column desktop grids.
* **Visual Rhythm:** Sequential single-column storytelling with intentional vertical spacing and distinct section densities.

---

## 2. Layout & Viewport Rules
* **Zero Horizontal Overflow:** Enforced across all mobile viewports (`320px` to `430px`).
* **Touch-First Accessibility:** All interactive elements (buttons, navigation links, accordion triggers, department switcher buttons) enforce a minimum touch target size of **44px × 44px**.
* **Responsive Scaling:** Responsive container padding (`px-4 sm:px-6 lg:px-8`) ensures crisp visual alignment.

---

## 3. Dedicated Mobile Components

### Navigation (`components/layout/Header.tsx`)
* Compact top bar (`Wordmark` component ... `MENU button`).
* Toggling menu launches a full-screen, high-blur overlay (`bg-[#07080a]/98`).
* Structure:
  * Indexed links (`01 WORK`, `02 CAPABILITIES`, `03 LAB`, `04 ABOUT`).
  * External social profile links (`GITHUB ↗`, `LINKEDIN ↗`).
  * Primary CTA (`START A PROJECT →`).

### Hero Composition (`components/sections/Hero.tsx`)
* Mobile hierarchy:
  1. Availability badge (`AVAILABLE FOR SELECT INQUIRIES`)
  2. Editorial headline (`PRODUCT THINKING.`)
  3. Sub-display positioning (`UI/UX Architecture & Web Engineering`)
  4. Positioning summary
  5. Primary stacked CTAs (`EXPLORE WORK →` / `START A PROJECT ↗`).

### Department Switcher (`components/portfolio/DepartmentSwitcher.tsx`)
* Mobile-optimized horizontal flex container with touch targets ($44\text{px}$).
* Enables filtering between `ALL`, `CREATIVE`, and `CLIENT` departments without page reloads.

### Mobile Process Timeline (`components/sections/ProcessSection.tsx`)
* Single-column vertical timeline featuring an ambient gradient backbone connector line (`01 THINK` $\rightarrow$ `06 SHIP`).

---

## 4. Digital Character / Avatar Status: [CANCELLED]
* **Character Concept Cancelled:** The character / avatar direction has been permanently cancelled. The website relies strictly on clean typography, wordmarks, interface design, motion, and verified project work.
* **Performance Guarantee:** Zero heavy 3D engines (Three.js), zero unoptimized canvas loops, sustained 60 FPS across all mobile devices.