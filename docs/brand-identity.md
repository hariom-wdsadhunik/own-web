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

---

## 2. Typography System & Font Hierarchy

### Chosen Font Families
1. **EDITORIAL DISPLAY (`Space Grotesk` / `font-display`):**
   * **Usage:** Brand wordmark, Hero headlines, section titles, project titles, and major editorial statements.
   * **Tone:** Refined, confident, modern grotesk.

2. **READABLE BODY (`Inter` / `font-sans`):**
   * **Usage:** All primary paragraph copy, descriptions, case study narratives, and body text.
   * **Tone:** Highly readable, neutral, spacious line height (`leading-relaxed`).

3. **TECHNICAL METADATA (`font-mono`):**
   * **Usage:** Restricted **ONLY** to indexes (`01`), status indicators, dates/years, tech tags, and technical metadata.
   * **Tone:** Precision system metadata.

> [!CAUTION]
> **MONOSPACE LIMITATION RULE:**
> `font-mono` MUST NOT be used for body text, major headlines, brand wordmarks, or primary CTA button text. Monospace is strictly an accent language for system metadata.

---

## 3. Brand Color Palette
* **Base Dark Background:** `#07080a` (Deep Space Dark)
* **Primary Text:** `#f8fafc` (Soft Off-White)
* **Secondary Text:** `#94a3b8` (Muted Slate)
* **Creative Department Accent:** `#60a5fa` (Icy Blue)
* **Client Department Accent:** `#34d399` (Emerald Slate)

---

## 4. Accessibility & Sizing Rules
* **Logo Target Size:** Enforces minimum 44px touch target on interactive header wrappers.
* **Keyboard Navigation:** Includes explicit focus indicator (`focus-visible:ring-1 focus-visible:ring-blue-400`).
* **Screen Reader Accessibility:** Wordmark link provides `aria-label="Hari Om Portfolio Homepage"`.