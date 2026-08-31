# Cinematic Scroll Choreography & Motion System Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Motion Philosophy:** Narrative Rhythm & Hierarchy (No Scroll Hijacking)  

---

## 1. Core Motion Principles

* **Zero Scroll Hijacking:** Browser native scrolling is strictly preserved. No wheel event capturing, no mandatory section snapping, no scroll locking.
* **Narrative Rhythm:** Motion establishes visual hierarchy and continuity (*ENTER $\rightarrow$ DISCOVER $\rightarrow$ FOCUS $\rightarrow$ TRANSITION $\rightarrow$ CONTINUE*).
* **GPU-Accelerated Transforms:** Uses `opacity`, `translateY`, `scale`, and `clip-path` via Motion (`motion/react`) for smooth rendering without layout thrashing.
* **Restraint:** High-contrast typography and clean spacing remain readable even if motion is disabled.

---

## 2. Coordinated Section Choreography

### 1. Global Scroll Progress (`components/ui/ScrollProgress.tsx`)
* A minimal 2px scroll progress bar fixed at the top of the viewport (`bg-gradient-to-r from-blue-500 via-sky-400 to-blue-300`, `opacity-80`, `pointer-events-none`).

### 2. Hero Opening & Exit Handover (`components/sections/Hero.tsx`)
* **Entrance Sequence:**
  1. Ambient space background establishes.
  2. Availability badge (`AVAILABLE FOR SELECT INQUIRIES`) appears (`delay: 0.1s`).
  3. System metadata indicator (`// HARI OM PORTFOLIO`) settles.
  4. Display headline (`PRODUCT THINKING.`) reveals with scale/opacity (`delay: 0.2s`).
  5. Sub-display positioning (`UI/UX Architecture & Web Engineering`) follows (`delay: 0.35s`).
  6. Positioning paragraph appears (`delay: 0.45s`).
  7. Action buttons appear (`delay: 0.55s`).
* **Exit Handover:** As the user scrolls down out of the Hero, `useScroll` smoothly shifts the Hero content upward (`y: -12%`) with soft opacity reduction (`1 -> 0.2`) to hand over focus to Creative Projects.

### 3. Creative Projects Chapter Sequence (`components/sections/CreativeProjectsSection.tsx`)
* **Staggered Chapter Entrance:** Each creative project (`TradeStak`, `Internet Time Capsule`, `ATHENA`) acts as a visual chapter.
  * Index counter (`01`) $\rightarrow$ Badge status $\rightarrow$ Project Title $\rightarrow$ Hero Media Frame $\rightarrow$ Tagline $\rightarrow$ Tech Stack $\rightarrow$ Case Study CTA.
* **Media Frame Focus:** Media frames scale smoothly on desktop hover (`scale-[1.02]`) with subtle icy glow shadow highlights (`shadow-blue-500/10`).

### 4. Manifesto Progression (`components/sections/StatementTransition.tsx`)
* **Desktop:** Progressive line reveals leading to the dominant statement `I TURN IDEAS INTO EXPERIENCES.`
* **Mobile:** Interactive 3-mode selector (`DESIGN` | `BUILD` | `EXPERIMENT`) with smooth tab state transitions inside a dark glass card.

### 5. Client Projects Archive (`components/sections/ClientProjectsSection.tsx`)
* **Restrained Entrance:** Calmer, precise entrance. When empty, displays an intentional archive-in-progress state.

### 6. Process Timeline Progression (`components/sections/ProcessSection.tsx`)
* Mobile vertical timeline backbone indicator with staggered phase cards (`01 THINK` $\rightarrow$ `06 SHIP`).

### 7. Contact CTA Closing Scene (`components/sections/ContactCTA.tsx`)
* Final frame sequence arriving with confidence (`INITIATE COLLABORATION` $\rightarrow$ Headline $\rightarrow$ Subheading $\rightarrow$ Direct Email & GitHub buttons).

---

## 3. Mobile Motion & Accessibility

* **Mobile Adaptation:** Reduced translate distances and durations across small screens (`320px` to `430px`). Touch target size enforced $\ge 44\text{px}$.
* **Reduced Motion (`prefers-reduced-motion: reduce`):** Disables parallax transforms, large reveals, and repeated transforms so all content remains immediately readable.