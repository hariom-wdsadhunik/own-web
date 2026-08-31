# Portfolio Deployment & Cloudflare Pages Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**GitHub Repository:** https://github.com/hariom-wdsadhunik/own-web  
**Target Platform:** Cloudflare Pages (Static HTML Export)  

---

> [!CAUTION]
> **CRITICAL DEPLOYMENT INSTRUCTION:**
> Do **NOT** use `npx wrangler deploy` or deploy as a Cloudflare Worker / OpenNext application.
> Do **NOT** connect the repository to an existing Cloudflare Workers project (e.g. `hariomweb`).
> 
> This portfolio is intentionally built as a **static Next.js HTML Export** and must be deployed using **Cloudflare Pages**.

---

## 1. Cloudflare Pages Setup Procedure (New Pages Project)

1. Open **[Cloudflare Dashboard](https://dash.cloudflare.com/)** $\rightarrow$ Navigate to **Workers & Pages**.
2. Click **Create application** $\rightarrow$ Select **Pages** tab (do NOT select Workers).
3. Click **Connect to Git** $\rightarrow$ Select GitHub account `hariom-wdsadhunik`.
4. Select Repository: **`hariom-wdsadhunik/own-web`**.
5. **Build Settings Configuration:**

| Field | Configuration Value |
| :--- | :--- |
| **Framework preset** | Next.js (Static HTML Export) |
| **Production branch** | `main` |
| **Build command** | `npx next build` |
| **Build output directory** | `out` |

6. **Environment Variables:**
   - `NEXT_PUBLIC_SITE_URL` — Set to your actual Cloudflare Pages production URL (e.g. `https://own-web.pages.dev`).

7. Click **Save and Deploy**. Cloudflare Pages will run `npm ci`, execute `npx next build`, and automatically serve the static `out/` HTML files.

---

## 2. Local Development & Export Commands

```bash
# Local Development Server
npm run dev

# Static Export Build (Generates out/ directory)
npx next build

# Preview static export locally
npx serve out
```