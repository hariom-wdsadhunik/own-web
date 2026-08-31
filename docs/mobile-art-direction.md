# Mobile Visual Composition & Product Storytelling System Architecture

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Mobile Architecture Concept:** Apple-Inspired Mobile Product Storytelling & Screen Sequences  
**Target Mobile Viewports:** 320px, 360px, 375px, 390px, 412px, 430px  
**Desktop Independence:** Desktop layouts (`1024px`, `1280px`, `1440px`, `1536px`, `1920px`) remain 100% untouched.

---

## 1. Apple-Inspired Product Story Principles

* **Product Presentation Mental Model:** Mobile project detail pages treat content as an editorial product story rather than a technical documentation page.
* **Large Visual Anchors:** Project media frames occupy $100\%$ content width with clean, modern rounding (`rounded-xl`).
* **Zero Bordered Metadata Cards:** Replaced bulky 4-column bordered metadata boxes with lightweight inline text metadata (`ROLE: Product Design + Frontend • TECH: React • Next.js • TypeScript`).

---

## 2. Mobile Project Detail Sequence ([`ProjectDetail.tsx`](file:///d:/own-web/components/portfolio/ProjectDetail.tsx))

```text
[← WORK]                                      [01 / 03]
PROJECT TITLE (40-56px)
Category & Year Metadata
One-line Positioning Sentence

[ HERO MEDIA FRAME (100% Content Width) ]

INLINE ROLE & TECH STACK ROW
01 / WHAT IT IS (Project Overview)
02 / THE CHALLENGE
03 / THE APPROACH
04 / DESIGN & ENGINEERING
PRIMARY / SECONDARY ACTION LINKS
[ NEXT PROJECT STORY HANDOFF → ]
```

---

## 3. Route Navigation & Accessibility

* **Detail-Route Hide Rule:** Bottom navigation automatically hides on detail routes (`/work/[slug]`, `/lab/[slug]`).
* **Touch Targets:** Minimum $44\text{px} \times 44\text{px}$ targets enforced across back controls, project links, and navigation triggers.
* **Reduced Motion:** Fully respects `prefers-reduced-motion: reduce`.