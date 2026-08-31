# Portfolio Design System Specification

**Project:** Hari Om — Personal Portfolio Website  
**Date:** August 31, 2026  
**Creative Direction:** Cinematic Futuristic Premium  

---

## 1. Design Philosophy

The design system embodies **Cinematic Futuristic Premium** quality through:
- **Restraint & Typography:** Bold, high-contrast headline typography (Space Grotesk) paired with ultra-readable body text (Inter) and monospaced technical metadata.
- **Deep Space Palette:** Deep near-black background (`#07080a`), dark elevated glass surfaces (`#0f1117`, `#151821`), and a restrained icy blue accent (`#60a5fa`).
- **Precision & Spatial Rhythm:** Generous whitespace, asymmetric editorial grid systems, and subtle $1\text{px}$ architectural borders (`rgba(255,255,255,0.08)`).
- **Physical Motion:** Smooth spring physics (Framer Motion / Motion) applied strictly for functional feedback and viewport entrances.

---

## 2. Design Tokens

### 2.1 Color Tokens

| Token Name | CSS Variable / Hex | Usage |
| :--- | :--- | :--- |
| `bg-base` | `#07080a` | Global canvas dark background |
| `bg-surface` | `#0f1117` | Standard surface container background |
| `bg-elevated` | `#151821` | Hover / elevated card background |
| `bg-card` | `#1a1d27` | Interactive card component background |
| `text-primary` | `#f3f4f6` | Soft white primary headlines & copy |
| `text-secondary` | `#9ca3af` | Muted gray subheadings & descriptions |
| `text-muted` | `#6b7280` | Technical labels & secondary metadata |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard $1\text{px}$ element borders |
| `border-strong` | `rgba(255, 255, 255, 0.16)` | Active / focused border highlights |
| `accent-icy` | `#60a5fa` | Primary restrained icy blue accent |
| `accent-soft` | `rgba(96, 165, 250, 0.12)` | Subtle badge & tag background highlights |
| `accent-glow` | `rgba(96, 165, 250, 0.25)` | Focus ring glow & ambient light highlights |

---

## 3. Typography Scale & Hierarchy

| Role | Font Family | Size Range | Tracking / Weight | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display XL** | Space Grotesk | `text-4xl` to `text-7xl` | `tracking-tight`, `font-bold` | Hero title & cinematic statements |
| **Display LG** | Space Grotesk | `text-3xl` to `text-5xl` | `tracking-tight`, `font-bold` | Section main headings |
| **Heading MD** | Space Grotesk | `text-xl` to `text-2xl` | `tracking-snug`, `font-semibold` | Card & sub-section titles |
| **Body LG** | Inter | `text-base` to `text-lg` | `leading-relaxed`, `text-gray-300` | Section intro descriptions & lead paragraphs |
| **Body MD** | Inter | `text-sm` to `text-base` | `leading-normal`, `text-gray-400` | Standard project summaries & body copy |
| **Technical** | Monospace / Geist Mono | `text-xs` to `text-sm` | `tracking-widest`, `uppercase` | Index numbers (`01 /`), metadata, tags, timestamps |

---

## 4. Spacing & Container System

- **Max Container Width:** `max-w-7xl` ($1280\text{px}$) for content layouts; `max-w-[1400px]` for wide galleries on ultrawide viewports ($1920\text{px}+$).
- **Horizontal Padding:**
  - Mobile ($360\text{px} - 430\text{px}$): `px-4` ($16\text{px}$)
  - Tablet ($768\text{px}$): `px-6` ($24\text{px}$)
  - Desktop ($1024\text{px}+$): `px-8` ($32\text{px}$)
- **Section Spacing:** `py-16 sm:py-24 md:py-32` providing generous, intentional whitespace rhythm.

---

## 5. UI Component Library Specification

1. **Button (`components/ui/Button.tsx`)**
   - *Variants:* `primary` (icy blue highlight), `secondary` (glass panel surface), `ghost` (minimal text), `link` (underlined with directional arrow).
   - *Features:* Keyboard focus rings, spring scale on press, optional leading/trailing icons, loading state spinner.
2. **Badge (`components/ui/Badge.tsx`)**
   - *Variants:* `default`, `icy`, `success` (emerald live status dot), `outline`.
   - *Features:* Monospaced technical typography, subtle borders, high contrast.
3. **Card (`components/ui/Card.tsx`)**
   - *Variants:* `standard`, `elevated`, `interactive`.
   - *Features:* Subtle border transition (`border-subtle` → `border-strong`), subtle Y-axis translate on hover (`-translate-y-1`), optional media aspect ratio slot.
4. **GlassContainer (`components/ui/GlassContainer.tsx`)**
   - *Features:* Backdrop blur (`backdrop-blur-md`), $1\text{px}$ border, graceful mobile fallback (`backdrop-blur-sm` for performance).
5. **Divider (`components/ui/Divider.tsx`)**
   - *Features:* Horizontal & vertical modes, `muted` or `strong` gradient options.
6. **SectionHeader (`components/ui/SectionHeader.tsx`)**
   - *Features:* Index counter (e.g. `01 /`), eyebrow label, display title, description paragraph, optional top-right action button.
7. **TextLink (`components/ui/TextLink.tsx`)**
   - *Features:* External link indicator (`↗`), arrow transition (`→`), accessibility focus state.
8. **CinematicBackground (`components/ui/CinematicBackground.tsx`)**
   - *Features:* Radial ambient blue/violet glow spots (`pointer-events-none`), subtle noise grain layer, zero continuous JavaScript canvas loop overhead.

---

## 6. Motion Primitives Specification

1. **FadeIn (`components/motion/FadeIn.tsx`)**
   - Viewport reveal with opacity fade & optional Y/X offset.
2. **Reveal (`components/motion/Reveal.tsx`)**
   - Clip-path / slide reveal for headlines & media containers.
3. **Stagger (`components/motion/Stagger.tsx`)**
   - Staggered child container animations with configurable delay intervals ($0.05\text{s} - 0.1\text{s}$).
4. **ScaleIn (`components/motion/ScaleIn.tsx`)**
   - Subtle spring scale reveal ($0.95 \rightarrow 1.00$).

All motion wrappers listen to `prefers-reduced-motion` and disable transforms automatically when enabled.

---

## 7. Pointer & Custom Cursor Infrastructure

- **PointerFollower (`components/ui/PointerFollower.tsx`)**
  - Desktop fine-pointer only (`@media (pointer: fine)`).
  - Automatically hidden on touch devices and under reduced-motion settings.
  - `pointer-events-none` to guarantee zero interference with native clicks or inputs.