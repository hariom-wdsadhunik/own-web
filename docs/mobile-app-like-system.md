# Mobile App-Like Interaction System Architecture

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Architecture Concept:** Native-Product Interaction Language for Web  

---

## 1. App Shell Architecture

The mobile interface is structured as a dedicated **Mobile App Shell** while preserving standard browser functionality:

```text
┌───────────────────────────────────────────────────┐
│ Top Bar: HARI OM Wordmark           [MENU Button] │  ← Fixed Header (Header.tsx)
├───────────────────────────────────────────────────┤
│                                                   │
│ Primary Viewport Content Area                      │  ← Main Container
│ (Home / Work / Lab / About / Contact)             │
│                                                   │
├───────────────────────────────────────────────────┤
│ Bottom Nav: HOME   WORK   LAB   ABOUT              │  ← Fixed Bottom Bar (MobileBottomNav.tsx)
└───────────────────────────────────────────────────┘
```

---

## 2. Persistent Bottom Navigation ([`MobileBottomNav.tsx`](file:///d:/own-web/components/layout/MobileBottomNav.tsx))

* **Positioning:** Fixed to viewport bottom (`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#07080a]/95 backdrop-blur-xl border-t border-white/10`).
* **Safe Area Awareness:** Enforces iOS/Android safe area bottom inset (`pb-[calc(0.375rem+env(safe-area-inset-bottom))]`).
* **Touch Target Size:** Minimum **44px × 44px** per tab (`min-h-[44px]`).
* **Active State:** Real-time route detection using `usePathname()`. Displays subtle active blue border indicator (`bg-blue-500/15 text-blue-400 font-bold border-t-2 border-blue-400`).
* **Destinations:**
  - `HOME` (`/`)
  - `WORK` (`/work`)
  - `LAB` (`/lab`)
  - `ABOUT` (`/#about`)

---

## 3. Touch Feedback & Interactive Cards

* **Tactile Press States:** Active cards enforce immediate physical feedback (`active:scale-95` or `active:scale-[0.98]` with immediate opacity shifts).
* **Segmented Department Control:** Department switcher on `/work` functions like a native segmented toggle (`CREATIVE` | `CLIENT`).
* **Native Browser Integrity:** Standard links, URL deep-linking, browser back/forward, and reload capabilities remain 100% native.

---

## 4. Accessibility & Safe Area Compliance

* **No Obstructed Controls:** Root layout enforces bottom padding (`pb-20 md:pb-0`) so bottom navigation never covers buttons, footer links, or case-study text.
* **Aria Attributes:** `aria-current="page"` declared dynamically on active bottom navigation item.