---
name: Favicon Design — MSP Portfolio
description: Create and implement a monospaced, minimalist favicon with MSP initials (white on black) across all portfolio pages
type: design
date: 2026-04-21
---

# Favicon Design Specification

## Overview

Create a minimalist favicon featuring the initials "MSP" in a monospaced, technical font style with white text on a black background. The favicon will be implemented across all pages of the Astro portfolio.

## Design Details

### Visual Style
- **Approach:** Minimalist text-only
- **Content:** Letters "MSP" (Mateus S P.)
- **Typography:** Monospaced font (Courier New, Monaco, or equivalent)
- **Font Weight:** Bold (700)
- **Colors:** 
  - Text: White (#FFFFFF)
  - Background: Black (#000000)
- **Padding:** Equal margins around text for balanced centering
- **No border, no container, no additional elements**

### Technical Specifications

**Primary Format:**
- **SVG favicon** at `public/favicon.svg`
- Scalable, crisp at any resolution
- Recommended viewBox: `0 0 192 192`

**Fallback Formats:**
- **ICO file** at `public/favicon.ico` (16x16, 32x32, 48x48 variants)
- **PNG file** at `public/favicon-192x192.png` (for Android/modern browsers)

### Sizing Strategy

The favicon must be legible and visually balanced at multiple sizes:
- **Micro (16px-32px):** Browser tabs, bookmarks
- **Medium (64px-128px):** Home screen icons
- **Large (192px+):** App icons, high-DPI displays

All sizes render from the same SVG source (scalable).

## Implementation Plan

### Files to Create
1. `public/favicon.svg` — Primary SVG favicon
2. `public/favicon.ico` — ICO format for legacy browser support
3. `public/favicon-192x192.png` — PNG format for Android/PWA

### Files to Modify
1. `src/components/BaseLayout.astro` — Add favicon meta tags to `<head>`

### Meta Tags to Add
```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/favicon-192x192.png">
```

### Scope
- **In scope:** Create favicon files, add meta tags to BaseLayout, test across pages
- **Out of scope:** Custom icon generation tools, multiple style variations, color alternatives

## Browser/Device Coverage

- ✅ Chrome, Firefox, Safari, Edge (SVG support)
- ✅ iOS Safari (Apple touch icon)
- ✅ Android browsers (PNG format)
- ✅ Legacy browsers (ICO fallback)
- ✅ All portfolio pages (via BaseLayout inheritance)

## Success Criteria

1. Favicon displays correctly on all pages (index + dynamic project pages)
2. Favicon is crisp and readable at 16px (browser tab) and 192px (home screen)
3. Favicon displays in:
   - Browser tab
   - Bookmarks
   - History
   - iOS home screen
   - Android home screen
4. No console errors related to favicon loading
5. Valid `<link>` tags in page source

## Design Rationale

**Why monospaced text?** Aligns with the "technical" identity of a Full-Stack developer, matches the minimalist portfolio aesthetic.

**Why white on black?** High contrast, professional, matches the dark theme of the portfolio. Inverses of the main color scheme add visual coherence.

**Why text-only?** True minimalism — no symbols, gradients, or decorative elements. Reduces file size, maximizes legibility at all scales.

**Why SVG primary format?** Scales infinitely without quality loss, smallest file size for a text-only design, native browser support.
