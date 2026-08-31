# Portfolio Deployment & Cloudflare Pages Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**GitHub Repository:** https://github.com/hariom-wdsadhunik/own-web  
**Target Platform:** Cloudflare Pages (Static HTML Export)  

---

## 1. Cloudflare Pages Setup & GitHub Integration

1. Connect repository on Cloudflare Dashboard: `Workers & Pages` -> `Create application` -> `Pages` -> `Connect to Git`.
2. Select GitHub Repository: `hariom-wdsadhunik/own-web`.
3. **Build Settings Configuration:**

| Field | Configuration Value |
| :--- | :--- |
| **Framework preset** | Next.js (Static HTML Export) |
| **Production branch** | `main` |
| **Build command** | `npx next build` |
| **Build output directory** | `out` |

---

## 2. Environment Variables

| Variable Name | Environment | Description | Example Value |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical domain override for sitemaps, robots, and OpenGraph URLs | Set to your actual Cloudflare custom domain |

---

## 3. Local Development & Export Verification Commands

```bash
# Development Server
npm run dev

# Static Export Build (Emits out/ directory)
npx next build

# Preview static export build locally
npx serve out
```