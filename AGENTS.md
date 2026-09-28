# AGENT WORKFLOW & CODING RULES

## 1. Design & Layout Priority (Desktop-First with Proportional Scaling)

Primary design target is **Desktop (2xl / 1536px+ & xl)**. Everything must look pixel-perfect here first, but MUST naturally scale down to smaller screens without manual redesigning.

- **Proportional Scaling (Ratio-based):**
  - Do not hardcode rigid pixel values (`px`) for containers, headline fonts, and section paddings.
  - Use fluid values with `clamp()`, `rem`, `vw`, or Tailwind percentage/flex/grid scaling so that as the screen narrows (2xl -> xl -> lg), UI components smoothly scale down in exact visual proportion.
  - Always wrap sections in a flexible master container (e.g., `w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8`).
- **Seamless Downscaling (Desktop to Tablet/Mobile):**
  - Elements positioned side-by-side on desktop must use auto-flowing grid or flex wrappers (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` or `flex-wrap`) so tablet/mobile screens gracefully stack without layout breaking.
  - Always prevent horizontal scroll: components using MagicUI/React Bits animations must stay inside containers with `overflow-hidden` or `overflow-x-clip`.
  - On mobile, ensure all interactive buttons and links have at least a `44px` clickable height/width.

---

## 2. Semantic HTML & Technical SEO

AI must avoid generic `<div>` soup and write high-standard semantic markup:

- **Semantic Landmarks:**
  - Mandatory page layout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
  - Every page/route must contain exactly **one** `<h1>`. Subsections must strictly follow a logical hierarchy (`<h2>` -> `<h3>` -> `<h4>`).
- **SEO & Accessibility:**
  - Next.js dynamic or static `metadata` must be exported on all pages/routes (Title, Description, OpenGraph).
  - Use Next.js `<Image />` for all visuals with descriptive `alt` tags and proper `sizes` attribute.
  - Interactive elements must be semantic: `<button>` (with explicit `type="button"` or `type="submit"`), not clickable `<div>` or `<span>`.
  - Add `aria-label` to icon-only buttons or interactive indicators.

---

## 3. Libraries & Component Implementation (MagicUI & React Bits)

- **Client Boundary:** Any component utilizing browser hooks, canvas, mouse listeners, or framer-motion must strictly start with `'use client';`.
- **Layout Shift Prevention:** Reserve explicit width/height/aspect-ratio for animated canvas backgrounds or text-scramble effects to avoid Cumulative Layout Shift (CLS).
- **Z-Index Layering:** Keep background animation effects strictly behind content layers (e.g., `relative z-10` for texts/buttons over `absolute inset-0 z-0` for background effects).

---

## 4. Code Cleanliness

- Use the predefined project color classes (`text-persian-blue`, `bg-lime`, `text-light-lime`, `font-poppins`, `font-satoshi`) instead of hardcoding random hex values.
