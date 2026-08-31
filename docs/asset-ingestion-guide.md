# Portfolio Asset Ingestion Specification & Guide

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Creative Direction:** Cinematic Futuristic Premium  

---

## 1. Asset Directory Blueprint

All project evidence assets must be dropped directly into their respective subdirectories inside `public/`:

```text
public/
├── projects/
│   ├── leadpilot/
│   │   ├── hero.webp          # 1920x1080 (16:9) Hero Interface
│   │   ├── screen-01.webp     # 1280x720 Prospect Table View
│   │   └── screen-02.webp     # 1280x720 Automated Enrichment Workflow
│   ├── tradestak/
│   │   ├── hero.webp          # 1920x1080 Financial Charting Workspace
│   │   └── screen-01.webp     # 1280x720 Analytics Indicator Grid
│   ├── internet-time-capsule/
│   │   ├── hero.webp          # 1920x1080 Temporal Timeline Visualizer
│   │   └── screen-01.webp     # 1280x720 Archival Memory Frame
│   └── athena/
│       ├── hero.webp          # 1920x1080 Multi-Agent System Dashboard
│       └── screen-01.webp     # 1280x720 Task Execution State View
├── lab/
│   ├── internet-time-capsule/
│   └── athena/
└── og/
    └── default-og.png         # 1200x630 Social Share Card
```

---

## 2. Naming Conventions & Format Requirements

- **File Format:** WebP or AVIF preferred (JPG/PNG allowed for original high-fidelity captures).
- **Naming Pattern:**
  - `hero.webp` — Primary high-resolution project visual ($1920 \times 1080$).
  - `screen-01.webp`, `screen-02.webp` — Secondary feature screenshots ($1280 \times 720$).
  - `mobile.webp` — Mobile portrait viewport capture ($750 \times 1334$).
  - `architecture.webp` — System architecture diagram.
- **Redaction Rule:** Before dropping screenshots into `public/`, inspect images to ensure no API keys, private tokens, passwords, database credentials, or sensitive personal data are visible.

---

## 3. Media Component Ingestion Lifecycle

1. Drop the screenshot or video into `public/projects/[slug]/[filename].webp`.
2. Update `heroImage` or `gallery` path in `content/projects.ts`.
3. The reusable [`ProjectMedia.tsx`](file:///d:/own-web/components/portfolio/ProjectMedia.tsx) component automatically detects file presence and transitions from the media-pending frame to the optimized Next.js Image renderer without requiring UI code modifications.