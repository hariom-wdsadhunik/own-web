# Mobile Visual Composition Reset & Product Screen System

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Mobile Architecture Concept:** Sequence of Product Feature Screens (Editorial Product Showcase)  
**Target Mobile Viewports:** 320px, 360px, 375px, 390px, 412px, 430px  
**Desktop Independence:** Desktop layouts (`1024px`, `1280px`, `1440px`, `1536px`, `1920px`) remain 100% untouched.

---

## 1. Core Mobile Composition Formula

Every mobile section enforces:  
**ONE IDEA + ONE VISUAL ANCHOR + ONE ACTION**

* **Zero Card Stacking:** Content is presented as continuous, spacious product screens rather than multi-layered card widgets.
* **Badge & Metadata Elimination:** Tech badge floods, year pills, and status tags are excluded from homepage mobile project previews to highlight visual evidence and headline typography.

---

## 2. Mobile Typography Targets

* **Hero Title:** `text-5xl sm:text-7xl font-bold text-white tracking-tight leading-[1.05]` ($44\text{px} - 64\text{px}$)
* **Section Headlines:** `text-2xl sm:text-4xl font-bold text-white tracking-tight` ($28\text{px} - 36\text{px}$)
* **Project Titles:** `text-3xl sm:text-5xl font-bold text-white tracking-tight` ($28\text{px} - 40\text{px}$)
* **Body Copy:** `text-base sm:text-lg text-gray-300 leading-relaxed` ($15\text{px} - 17\text{px}$)
* **Important Labels:** `text-xs sm:text-sm tracking-wider uppercase font-semibold` ($11\text{px} - 13\text{px}$)
* **Technical Metadata:** `text-xs font-mono text-gray-400` ($10\text{px} - 12\text{px}$ minimum)

---

## 3. Product Feature Screen Sequence

1. `01 HERO` — Opening product screen (`PRODUCT THINKING.`)
2. `02-04 CREATIVE FEATURES` — Large project visuals ($90-100\%$ content width) + headline + tagline + CTA
3. `05 PHILOSOPHY` — Open reflection pause (`I DON'T JUST MAKE WEBSITES.`)
4. `06 CLIENTS` — Restrained archive pending frame
5. `07 CAPABILITIES` — Numbered list with touch-first drawer expand
6. `08 LAB` — Indexed R&D entries (`01 INTERNET TIME CAPSULE`)
7. `09 PROCESS` — Thin vertical timeline backbone (`01 THINK` $\rightarrow$ `06 SHIP`)
8. `10 ABOUT` — Human bio paragraph & focus areas
9. `11 CONTACT` — Emotional closing beat (`LET'S BUILD SOMETHING WORTH REMEMBERING.`)

---

## 4. Persistent Control Surface

* **Mobile Bottom Navigation ([`MobileBottomNav.tsx`](file:///d:/own-web/components/layout/MobileBottomNav.tsx)):** Fixed backdrop surface (`bg-[#07080a]/95 backdrop-blur-xl border-t border-white/10`) with $44\text{px}$ touch targets, route-aware active state (`usePathname()`), and safe area bottom padding (`pb-[env(safe-area-inset-bottom)]`).