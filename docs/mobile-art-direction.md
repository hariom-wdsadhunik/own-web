# Mobile Visual Composition & App-Like System Architecture

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Mobile Architecture Concept:** Sequence of Product Feature Screens & Focused Detail Views  
**Target Mobile Viewports:** 320px, 360px, 375px, 390px, 412px, 430px  
**Desktop Independence:** Desktop layouts (`1024px`, `1280px`, `1440px`, `1536px`, `1920px`) remain 100% untouched.

---

## 1. Route-Aware Navigation Rules

* **Bottom Navigation Display:** Displayed on index routes (`/`, `/work`, `/lab`, `/design-system`).
* **Focused Detail Views:** Automatically HIDES persistent bottom navigation on detail routes (`/work/[slug]`, `/lab/[slug]`, `/_not-found`) to deliver an immersive, focused product detail view.
* **Back Control:** Dedicated `← BACK TO WORK` button ($44\text{px}$ minimum target) at top of detail pages.

---

## 2. Project Detail Screen Hierarchy ([`ProjectDetail.tsx`](file:///d:/own-web/components/portfolio/ProjectDetail.tsx))

```text
[← BACK TO WORK]                                  [CATEGORY]
PROJECT TITLE (32-44px)
Project Tagline

[ HERO MEDIA FRAME (90-100% Content Width) ]

METADATA ROW (Role, Status, Tech Stack)
01 / OVERVIEW (Project Summary)
02 / THE CHALLENGE
03 / PRODUCT THINKING
04 / ARCHITECTURE (UI/UX & Frontend)
PRIMARY / SECONDARY LINKS
[ NEXT PROJECT CARD → ]
```

---

## 3. Console & Stream Diagnostics

* **`GET /lab/tradestak.txt -> 404` Investigation:** Repo audit confirmed 0 `fetch()` calls or `.txt` asset requests in codebase. The request originates from external browser extension devtool probes.
* **`MaxListenersExceededWarning` / `ObjectMultiplex` Investigation:** Repo audit confirmed 0 custom Node `EventEmitter` listeners or stream multiplexers in codebase. Safe behavior verified across clean static builds.