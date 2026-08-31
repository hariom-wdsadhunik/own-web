# Project Asset & Visual Storytelling Guide

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  

---

## 1. Directory & Naming Conventions

All production project screenshots must be placed in dedicated asset directories:

```text
public/projects/tradestak/
public/projects/internet-time-capsule/
public/projects/athena/
```

### Standardized Filenames:
- `hero.webp` — Primary 16:9 or 21:9 hero product interface capture.
- `screen-01.webp` — Primary workflow / main feature screenshot.
- `screen-02.webp` — Secondary feature / interactive drawer capture.
- `mobile.webp` — Vertical responsive mobile viewport capture.
- `detail-01.webp` — Focused UI detail or code architecture preview.

---

## 2. Image Standards & Performance

- **Format:** Modern WebP (`.webp`) or PNG (`.png`).
- **Dimensions:**
  - Hero Captures: $1920 \times 1080\text{px}$ or $2560 \times 1440\text{px}$ ($16:9$).
  - Gallery Screens: $1440 \times 900\text{px}$.
  - Mobile Screens: $750 \times 1334\text{px}$ or $1170 \times 2532\text{px}$ ($9:16$).
- **Image Optimization:** Lazy loading enabled by default (`loading="lazy"`), responsive image sizes attribute configured (`sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"`).

---

## 3. Privacy & Authenticity Rules

- **Zero Sensitive Data:** Screenshots must never contain real passwords, private API keys, customer PII, internal auth tokens, or secret staging URLs.
- **No Disguised Placeholders:** Placeholders must render the intentional `MEDIA ARCHIVE PENDING` frame rather than disguising themselves as fake product screenshots.
- **Browser Framing:** Web platform screenshots may be wrapped using the reusable `BrowserFrame` component ([`components/portfolio/BrowserFrame.tsx`](file:///d:/own-web/components/portfolio/BrowserFrame.tsx)).