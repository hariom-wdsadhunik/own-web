# Portfolio Deployment & Environment Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Target Platform:** Vercel (Edge Network / SSG)  

---

## 1. Environment Variables

| Variable Name | Environment | Description | Required? | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production / Preview | Canonical production domain URL | Recommended | `https://hariom.dev` |

---

## 2. Local Development & Build Commands

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Production build test (Static Pre-rendering)
npm run build

# Start production preview server
npm run start
```

---

## 3. Vercel Deployment Checklist

1. **Framework Preset:** Next.js
2. **Build Command:** `npm run build`
3. **Output Directory:** Default (`.next`)
4. **Node.js Version:** `v24.x` (or `v20.x+`)
5. **Environment Configuration:** Set `NEXT_PUBLIC_SITE_URL=https://hariom.dev` in Vercel Project Settings.