# Mobile Editorial Interface Specification & Design System

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Mobile Identity Concept:** Mobile Editorial Product Experience (Digital Magazine / Visual Product Showcase)  
**Target Mobile Viewports:** 320px, 360px, 375px, 390px, 412px, 430px  
**Desktop Independence:** Desktop layouts (`1024px`, `1280px`, `1440px`, `1920px`) remain 100% untouched.

---

## 1. Information Hierarchy & Density Controls

* **Core Flow Rule:** `VISUAL` $\rightarrow$ `TITLE` $\rightarrow$ `MEANING` $\rightarrow$ `ACTION`.
* **Density Reduction:** 30–50% visual density reduction across mobile viewports by removing redundant metadata, floods of badges, duplicate summaries, and heavy card borders.
* **No Dashboard Aesthetics:** Mobile avoids SaaS dashboard cards, documentation sidebars, or dense developer annotations.

---

## 2. Component System Specifications

### Header & Full-Screen Menu ([`Header.tsx`](file:///d:/own-web/components/layout/Header.tsx))
* Top Bar: `HARI OM` compact wordmark + `MENU` trigger button.
* Full-Screen Overlay: Calm, bold typography (`01 WORK`, `02 CAPABILITIES`, `03 LAB`, `04 ABOUT`) + social profiles (`GITHUB`, `LINKEDIN`) + primary CTA button (`START A PROJECT`).

### Hero ([`Hero.tsx`](file:///d:/own-web/components/sections/Hero.tsx))
* Dominant mobile headline (`PRODUCT THINKING.`) + sub-display positioning (`UI/UX Architecture & Web Engineering`) + single positioning sentence + primary stacked CTAs (`EXPLORE WORK →` primary, `START A PROJECT ↗` secondary).

### Creative Projects ([`CreativeProjectsSection.tsx`](file:///d:/own-web/components/sections/CreativeProjectsSection.tsx))
* Styled as editorial poster scenes rather than SaaS cards:
  - `01 / INDEX`
  - `TRADESTAK`
  - `[ LARGE PROJECT VISUAL FRAME (100% width) ]`
  - `Category & Short Tagline`
  - `EXPLORE PROJECT →`
* Technical badge floods and year/status pills are excluded from homepage mobile cards.

### Manifesto ([`StatementTransition.tsx`](file:///d:/own-web/components/sections/StatementTransition.tsx))
* Editorial reflection pause: `I DON'T JUST MAKE WEBSITES.` + compact 3-mode selector (`DESIGN` | `BUILD` | `EXPERIMENT`) + single dynamic statement line.

### Capabilities ([`CapabilityItem.tsx`](file:///d:/own-web/components/portfolio/CapabilityItem.tsx))
* Numbered editorial list (`01 PRODUCT`, `02 UI/UX`, `03 FRONTEND`, `04 AI`) expanding into 1 short description + 2–4 key skill tags + proof link.

### The Lab ([`LabSection.tsx`](file:///d:/own-web/components/sections/LabSection.tsx))
* Indexed R&D entries (`01 INTERNET TIME CAPSULE` $\rightarrow$ `EXPERIMENT` $\rightarrow$ `Short tagline` $\rightarrow$ `EXPLORE EXPERIMENT →`).

### Process ([`ProcessSection.tsx`](file:///d:/own-web/components/sections/ProcessSection.tsx))
* Vertical timeline backbone with thin progress line (`01 THINK` $\rightarrow$ `06 SHIP`), 1 short sentence per step.

### Footer ([`Footer.tsx`](file:///d:/own-web/components/layout/Footer.tsx))
* Minimalist ending frame (`HARI OM` wordmark + `GITHUB` / `LINKEDIN` / `EMAIL` links + copyright).

---

## 3. Monospace Usage Rules
* **Monospace (`font-mono`) is STRICTLY LIMITED to:**
  - Index counters (`01`, `02`, `03`)
  - Eyebrows & system metadata tags (`// OPERATING PHILOSOPHY`)
  - Tech tags inside expanded accordion drawers
* **Monospace is NEVER used for:**
  - Display headlines or titles
  - Body paragraphs
  - Primary button text
  - Brand wordmarks

---

## 4. Accessibility & Performance Guarantees
* **Touch Targets:** Minimum $44\text{px} \times 44\text{px}$ across all mobile buttons, links, and accordion triggers.
* **Reduced Motion:** Respects `prefers-reduced-motion: reduce` by disabling parallax shifts and repeated reveals.
* **Zero Heavy Dependencies:** No Three.js, WebGL, or canvas loops added.