# Mobile Composition & Art Direction Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Mobile Identity Concept:** Cinematic Editorial Portfolio  
**Target Viewports:** 320px, 360px, 375px, 390px, 412px, 430px  

---

## 1. Mobile Design Philosophy & Rhythm

* **Core Rule:** FEWER WORDS $\rightarrow$ BIGGER VISUALS $\rightarrow$ STRONGER TYPOGRAPHY $\rightarrow$ MORE WHITESPACE $\rightarrow$ FEWER UI ELEMENTS $\rightarrow$ BETTER RHYTHM.
* **No Desktop Compression:** Layouts, typography, and spacing are designed specifically for phone proportions rather than simply scaling down multi-column desktop grids.
* **Information Overload Elimination:** Removed redundant status badges, tech badge floods, and long paragraphs from mobile card previews.

---

## 2. Layout & Touch Accessibility

* **Zero Horizontal Overflow:** Enforced across all mobile viewports (`320px` to `430px`).
* **Touch Target Size:** All interactive buttons, navigation links, accordion triggers, and department tabs enforce a minimum touch target size of **44px × 44px**.
* **Viewport Padding:** Responsive padding (`px-4 sm:px-6 lg:px-8`) maintains visual alignment without cramped edges.

---

## 3. Section Composition & Flow

### Hero (`components/sections/Hero.tsx`)
* Mobile hierarchy:
  1. Availability badge (`AVAILABLE FOR SELECT INQUIRIES // HARI OM PORTFOLIO`)
  2. Dominant display headline (`PRODUCT THINKING.`)
  3. Sub-display positioning (`UI/UX Architecture & Web Engineering`)
  4. Concise positioning sentence
  5. Primary stacked actions (`EXPLORE WORK →` primary, `START A PROJECT ↗` secondary).

### Creative Projects (`components/sections/CreativeProjectsSection.tsx`)
* Each project acts as a mobile visual chapter:
  - Header: `01 / CREATIVE • CATEGORY`
  - Title: `TRADESTAK`
  - Large Visual Frame (90–100% available content width)
  - Concise Tagline
  - Case Study CTA (`EXPLORE CASE STUDY →`).

### Manifesto (`components/sections/StatementTransition.tsx`)
* Compact 3-mode selector (`DESIGN` | `BUILD` | `EXPERIMENT`) with a dark glass container displaying single concise statements.

### Capabilities (`components/portfolio/CapabilityItem.tsx`)
* Touch-first accordion rows. Expanded state reveals concise summary, 2–4 key skill tags, and proof link.

### About (`components/sections/AboutSection.tsx`)
* Personal positioning paragraph + focus areas (`PRODUCT`, `DESIGN`, `WEB`, `AI`) + operating principles list.

### Contact CTA (`components/sections/ContactCTA.tsx`)
* Closing frame sequence: `INITIATE COLLABORATION` $\rightarrow$ Headline $\rightarrow$ Primary Email CTA $\rightarrow$ Secondary GitHub Profile.

---

## 4. Mobile Performance & Reduced Motion

* **Performance Guarantee:** Zero heavy 3D engines (Three.js), zero canvas loops, optimized Motion transforms.
* **Reduced Motion:** Respects `prefers-reduced-motion: reduce` by disabling parallax transforms and repeated reveals.