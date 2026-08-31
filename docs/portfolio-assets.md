# Portfolio Asset Pipeline Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Creative Direction:** Cinematic Futuristic Premium  

---

## 1. Production Asset Directory Structure

All production static assets must be organized within the `public/` directory following strict domain subfolder conventions:

```text
public/
├── projects/
│   ├── leadpilot/
│   │   ├── hero.webp          # 1920x1080 (16:9) Product Hero Image
│   │   └── gallery-01.webp    # 1280x720 Gallery Screenshot
│   ├── tradestak/
│   ├── internet-time-capsule/
│   └── athena/
├── lab/
│   ├── internet-time-capsule/
│   └── athena/
├── og/
│   └── default-og.png         # 1200x630 Social Sharing Card
├── icons/
│   ├── favicon.ico
│   ├── icon-192.png
│   └── icon-512.png
└── brand/
    └── logo-mark.svg
```

---

## 2. Image Standards & Compression Guidelines

| Asset Role | Dimensions | Aspect Ratio | Preferred Format | Max Target Size |
| :--- | :--- | :--- | :--- | :--- |
| **Project Hero** | 1920x1080 | 16:9 | WebP / AVIF | < 180KB |
| **Project Gallery** | 1280x720 | 16:9 | WebP / AVIF | < 120KB |
| **Open Graph Card** | 1200x630 | 1.91:1 | PNG / WebP | < 250KB |
| **Favicon / Icon** | 512x512 | 1:1 | PNG / SVG | < 40KB |

---

## 3. Media Placeholder Fallback Strategy

Until real application screenshots are captured:
- Components (`ProjectPreview.tsx` & `ProjectGallery.tsx`) render an elegant dark editorial media frame with category icons, subtle noise grain texture, and status badges (`Active Prototype` / `Production`).
- No fake screenshots or stock imagery are permitted.