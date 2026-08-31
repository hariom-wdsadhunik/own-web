# Portfolio Architecture Specification

**Project:** Hari Om - Personal Portfolio Website  
**Date:** August 31, 2026  
**Creative Direction:** Cinematic Futuristic Premium  

---

## 1. Page & Route Structure

The personal portfolio is structured as a single high-impact narrative homepage supported by dedicated deep-dive case study routes.

`
app/
+-- layout.tsx                    # Root Layout (Fonts, Metadata, Motion Provider, Noise Overlay)
+-- page.tsx                      # Primary Narrative Homepage
+-- work/
¦   +-- page.tsx                  # Full Selected Work Index
¦   +-- [slug]/
¦       +-- page.tsx              # Deep-Dive Project Case Study
+-- lab/
¦   +-- page.tsx                  # Experiments & AI Prototypes Index
¦   +-- [slug]/
¦       +-- page.tsx              # Individual Interactive Experiment View
+-- capabilities/
¦   +-- page.tsx                  # Detailed Capabilities & Technical Stack
+-- process/
¦   +-- page.tsx                  # Engineering & Product Methodology
+-- about/
¦   +-- page.tsx                  # Background, Philosophy & Experience
+-- contact/
    +-- page.tsx                  # Project Inquiry & Contact Page
`

---

## 2. Directory & Module Architecture

`
d:/own-web/
+-- app/                          # Next.js App Router Pages & API routes
+-- components/
¦   +-- ui/                       # Base Atomic UI Primitives (Button, Badge, Card, Modal, GlowSurface)
¦   +-- layout/                   # Structural Shell (Header, Footer, Navigation, Container)
¦   +-- motion/                   # Framer Motion Wrappers (FadeIn, Reveal, StaggerGroup, CursorFollower)
¦   +-- sections/                 # Narrative Sections for Homepage & Pages
¦       +-- Hero.tsx
¦       +-- SelectedWork.tsx
¦       +-- StatementTransition.tsx ("I don't just make websites.")
¦       +-- CapabilitiesSection.tsx
¦       +-- LabSection.tsx
¦       +-- ProcessSection.tsx
¦       +-- AboutSection.tsx
¦       +-- ContactCTA.tsx
+-- content/                      # Content Source Modules (TypeScript Data Specs)
¦   +-- projects.ts
¦   +-- capabilities.ts
¦   +-- experiments.ts
¦   +-- process.ts
¦   +-- about.ts
¦   +-- contact.ts
+-- lib/                          # Utility Functions & Custom Hooks
¦   +-- utils.ts                  # Class merge (clsx + tailwind-merge)
¦   +-- motion-config.ts          # Global spring configs & animation presets
¦   +-- hooks/
¦       +-- use-reduced-motion.ts # Prefers-reduced-motion listener
¦       +-- use-pointer-type.ts   # Coarse vs fine pointer detection
+-- types/                        # TypeScript Interfaces & Schemas
¦   +-- portfolio.ts
+-- public/                       # Static Assets (Images, Icons, SVGs)
+-- docs/                         # Foundation & Architectural Documentation
`

---

## 3. Component Hierarchy & Data Flow

`
RootLayout
 +-- ThemeProvider (Dark mode token injection)
 +-- MotionConfigProvider (Global reduced motion compliance)
 +-- CinematicBackground (Subtle noise texture & dark ambient glow)
 +-- Navigation (Fixed top blur glass bar with active indicator)
 +-- PageContent (Server Component rendered page views)
 ¦    +-- Hero -> SelectedWork -> Statement -> Capabilities -> Lab -> Process -> About -> ContactCTA
 +-- Footer (Minimal editorial layout with live status indicator & social links)
`

---

## 4. Responsive & Touch Strategy

| Breakpoint | Target Devices | Visual & Interaction Adjustments |
| :--- | :--- | :--- |
| **360px - 430px** | Mobile Devices (Small/Medium/Large) | • Single column stack layout<br>• Touch-first active press states instead of hover<br>• Custom cursor disabled automatically<br>• Reduced animation distance & backdrop blur intensity |
| **768px** | Tablets / iPads | • 2-column project & lab grids<br>• Expanded navigation drawer<br>• Moderate gesture support |
| **1024px - 1280px** | Laptops & Desktops | • Full cinematic horizontal/vertical composition<br>• Fine cursor hover states & magnetic buttons<br>• Multi-column grid systems |
| **1536px - 1920px+** | Ultrawide Monitors | • Max-width container bounds (max-w-7xl / max-w-screen-2xl) to prevent awkward text stretched lengths<br>• High-definition typography hierarchy |

---

## 5. Animation & Motion Architecture

1. **Spring-Based Micro-Interactions**
   - Natural motion curves using Framer Motion springs (stiffness: 300, damping: 30).
   - Zero layout thrashing by animating only GPU-accelerated CSS properties (opacity, 	ransform: translate3d/scale).

2. **Scroll-Driven Narrative Reveals**
   - Viewport-based triggers (whileInView) with once: true to prevent repetitive re-triggering during scrolling.
   - Staggered child delays (staggerChildren: 0.1) for sleek section entrances.

3. **Accessibility & Reduced Motion**
   - Automatic fallback: when prefers-reduced-motion: reduce is active, all transforms revert to simple opacity fades (duration: 0.2s).

4. **Pointer-Aware Dynamics**
   - Interactive elements employ subtle mouse movement offsets on desktop (useMotionValue + useSpring), gracefully degrading to static touch cards on mobile.
