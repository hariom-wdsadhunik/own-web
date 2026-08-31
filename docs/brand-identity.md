# Brand Identity & Typography System Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Brand Identity Concept:** Human Personal Brand + Futuristic Digital World  
**Core Aesthetic:** Cinematic Futuristic Premium  

---

## 1. Brand Wordmark & Logo System

### Primary Brand Name
* **Visible Brand Name:** `HARI OM`
* **Wordmark Component:** [`components/brand/Wordmark.tsx`](file:///d:/own-web/components/brand/Wordmark.tsx)
* **Typographic Contrast:**
  * `HARI`: Bold, confident display weight (`font-extrabold text-white`).
  * `OM`: Muted signature weight (`font-light text-gray-300`) with an icy-blue accent dot (`#60a5fa`).

### Wordmark Variants

| Variant | Render Output | Usage |
| :--- | :--- | :--- |
| **`full`** | `HARI OM •` | Desktop header, footer, splash screens |
| **`compact`** | `HARI / OM •` | Compact mobile headers, small viewports |
| **`minimal`** | `OM •` | Favicon (`public/favicon.svg`), compact badges |

### Brand Assets
* **SVG Vector Assets:**
  * Wordmark Vector: [`public/brand/hari-om-wordmark.svg`](file:///d:/own-web/public/brand/hari-om-wordmark.svg)
  * Standalone Mark Vector: [`public/brand/hari-om-mark.svg`](file:///d:/own-web/public/brand/hari-om-mark.svg)
  * Favicon Icon: [`public/favicon.svg`](file:///d:/own-web/public/favicon.svg)

---

## 2. Typography System & Rules

### Font Families
1. **DISPLAY (`Space Grotesk` / `font-display`):**
   * **Usage:** Brand wordmark, Hero headlines, section titles, project names, and major editorial statements.
   * **Tone:** Editorial, confident, modern grotesk.

2. **BODY (`Inter` / `font-sans`):**
   * **Usage:** All primary paragraph copy, descriptions, case study narratives, and body text.
   * **Tone:** Highly readable, neutral, spacious line height (`leading-relaxed`).

3. **TECHNICAL (`font-mono`):**
   * **Usage:** Restricted **ONLY** to indexes (`01`), status indicators, dates/years, tech tags, and technical metadata.
   * **Tone:** Precision, system metadata.

> [!CAUTION]
> **MONOSPACE LIMITATION RULE:**
> `font-mono` MUST NOT be used for body text, major headlines, brand wordmarks, or primary CTA button text. Monospace is an accent language for system metadata.

---

## 3. Brand Color Palette
* **Base Dark Background:** `#07080a` (Deep Space Dark)
* **Primary Text:** `#f8fafc` (Soft Off-White)
* **Secondary Text:** `#94a3b8` (Muted Slate)
* **Brand Signature Accent:** `#60a5fa` (Icy Blue)

---

## 4. Accessibility & Sizing Rules
* **Logo Target Size:** Enforces minimum 44px touch target on interactive header wrappers.
* **Keyboard Navigation:** Includes explicit focus indicator (`focus-visible:ring-1 focus-visible:ring-blue-400`).
* **Screen Reader Accessibility:** Wordmark link provides `aria-label="Hari Om Portfolio Homepage"`.