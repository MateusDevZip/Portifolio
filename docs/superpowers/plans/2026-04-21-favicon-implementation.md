# Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create and implement a minimalist MSP favicon (white monospaced text on black background) across all portfolio pages.

**Architecture:** Create favicon in SVG format (primary, scalable), convert to ICO and PNG for fallback support. Add meta tags to BaseLayout.astro so all pages inherit the favicon automatically.

**Tech Stack:** SVG, ImageMagick (for ICO/PNG conversion), Astro (meta tag injection)

---

## File Structure

**Files to Create:**
- `public/favicon.svg` — Primary SVG favicon (192x192)
- `public/favicon.ico` — ICO format for legacy browsers
- `public/favicon-192x192.png` — PNG format for Android/PWA

**Files to Modify:**
- `src/components/BaseLayout.astro` — Add favicon `<link>` tags to `<head>`

---

## Task 1: Create SVG Favicon

**Files:**
- Create: `public/favicon.svg`

- [ ] **Step 1: Create favicon.svg with MSP text**

Create file `public/favicon.svg` with this exact content:

```xml
<svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
  <rect width="192" height="192" fill="#000000"/>
  <text x="96" y="130" font-family="Courier New, monospace" font-size="100" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">MSP</text>
</svg>
```

- [ ] **Step 2: Verify SVG renders correctly**

Open `public/favicon.svg` in a web browser (e.g., `file:///c/Users/Pc%20Mateus/Desktop/Programas%20codes/Portifolio/public/favicon.svg`)

Expected: Black square with white "MSP" text centered, monospaced and bold.

- [ ] **Step 3: Commit**

```bash
git add public/favicon.svg
git commit -m "feat: create SVG favicon with MSP initials"
```

---

## Task 2: Convert SVG to ICO Format

**Files:**
- Create: `public/favicon.ico`

- [ ] **Step 1: Install ImageMagick (if not already installed)**

Run:
```bash
choco install imagemagick
```

Or use online converter at https://convertio.co/svg-ico/ as fallback.

If using online converter:
- Upload `public/favicon.svg`
- Download the ICO file and save to `public/favicon.ico`

If using ImageMagick locally:
```bash
cd "/c/Users/Pc Mateus/Desktop/Programas codes/Portifolio"
magick public/favicon.svg -define icon:auto-resize=192,64,48,32,16 public/favicon.ico
```

- [ ] **Step 2: Verify ICO file exists and has correct size**

Run:
```bash
ls -lh public/favicon.ico
```

Expected: File exists, size typically 5-15KB

- [ ] **Step 3: Commit**

```bash
git add public/favicon.ico
git commit -m "feat: create ICO favicon for legacy browser support"
```

---

## Task 3: Convert SVG to PNG Format

**Files:**
- Create: `public/favicon-192x192.png`

- [ ] **Step 1: Convert SVG to PNG (192x192)**

Using ImageMagick:
```bash
cd "/c/Users/Pc Mateus/Desktop/Programas codes/Portifolio"
magick -background none -density 192 public/favicon.svg -resize 192x192 public/favicon-192x192.png
```

Or use online converter (same as Task 2 converter, choose PNG output):
- Upload `public/favicon.svg`
- Ensure output is 192x192px
- Download and save to `public/favicon-192x192.png`

- [ ] **Step 2: Verify PNG file exists with correct dimensions**

Run:
```bash
file public/favicon-192x192.png
```

Expected: Output shows "192 x 192" dimensions

- [ ] **Step 3: Commit**

```bash
git add public/favicon-192x192.png
git commit -m "feat: create PNG favicon for Android and PWA support"
```

---

## Task 4: Add Favicon Meta Tags to BaseLayout

**Files:**
- Modify: `src/components/BaseLayout.astro` (in `<head>` section)

- [ ] **Step 1: Open BaseLayout.astro and locate the `<head>` section**

File: `src/components/BaseLayout.astro`

Find the closing `</head>` tag (currently at line ~37).

- [ ] **Step 2: Add favicon meta tags before `</head>`**

Add these three lines before the closing `</head>` tag:

```html
    <!-- Favicon -->
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/favicon-192x192.png">
```

**Full context (lines 33-40):**
```astro
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/favicon-192x192.png">
</head>
```

- [ ] **Step 3: Verify no syntax errors**

The file should still be valid Astro. No special parsing required — plain HTML.

- [ ] **Step 4: Commit**

```bash
git add src/components/BaseLayout.astro
git commit -m "feat: add favicon meta tags to all pages via BaseLayout"
```

---

## Task 5: Test Favicon Across Pages

**Files:**
- Test: All pages via browser (no code changes)

- [ ] **Step 1: Start dev server**

```bash
cd "/c/Users/Pc Mateus/Desktop/Programas codes/Portifolio"
npm run dev
```

Expected: Server starts on `http://localhost:3000` (or similar port shown in output)

- [ ] **Step 2: Test favicon on homepage**

Open `http://localhost:3000/` in your browser.

Check:
- ✅ Favicon appears in browser tab (small icon next to page title)
- ✅ Favicon is white "MSP" on black square
- ✅ Favicon is crisp and readable

Right-click page → Inspect → Network tab → search for "favicon" — should show all three files loading (favicon.svg, favicon.ico, favicon-192x192.png)

- [ ] **Step 3: Test favicon on a dynamic project page**

Navigate to one of your project pages (e.g., `/projetos/altloot` or similar).

Check:
- ✅ Same favicon appears in tab
- ✅ No 404 errors in console

Open DevTools Console and verify no errors related to favicon loading.

- [ ] **Step 4: Verify bookmark favicon**

Create a bookmark of the homepage. Check that the favicon displays correctly in your bookmarks list.

- [ ] **Step 5: Verify PWA/home screen (optional, for thoroughness)**

On Android device or Android emulator:
- Visit the site
- "Add to home screen"
- Check that favicon appears as app icon

Or on macOS:
- Visit site in Safari
- File → Add to Dock
- Check that favicon appears

- [ ] **Step 6: Commit test verification**

```bash
git add -A
git commit -m "test: verify favicon displays on all pages and devices"
```

---

## Task 6: Final Verification and Cleanup

**Files:**
- Verify: All favicon files, BaseLayout.astro

- [ ] **Step 1: Run build to ensure no errors**

```bash
cd "/c/Users/Pc Mateus/Desktop/Programas codes/Portifolio"
npm run build
```

Expected: Build completes successfully with no errors related to favicon

- [ ] **Step 2: Verify dist folder contains favicon files**

```bash
ls -la dist/ | grep favicon
```

Expected: Output shows `favicon.svg`, `favicon.ico`, and `favicon-192x192.png` in dist folder

- [ ] **Step 3: Check git status**

```bash
git status
```

Expected: Clean working tree (all changes committed)

- [ ] **Step 4: View recent commits**

```bash
git log --oneline -5
```

Expected: Last 3-4 commits should be favicon-related:
- "test: verify favicon displays on all pages and devices"
- "feat: add favicon meta tags to all pages via BaseLayout"
- "feat: create PNG favicon for Android and PWA support"
- "feat: create ICO favicon for legacy browser support"
- "feat: create SVG favicon with MSP initials"

- [ ] **Step 5: Final commit message documenting completion**

```bash
git commit --allow-empty -m "docs: favicon implementation complete — MSP minimalista on all pages"
```

---

## Spec Coverage Checklist

- ✅ **SVG favicon created** (Task 1)
- ✅ **ICO fallback created** (Task 2)
- ✅ **PNG fallback created** (Task 3)
- ✅ **Meta tags added to BaseLayout** (Task 4)
- ✅ **Tested on all pages** (Task 5)
- ✅ **Build verification** (Task 6)

---

## Notes for Implementation

1. **If ImageMagick is not available:** Use the online converter at https://convertio.co/svg-ico/ (Steps 2.1 and 3.1 have fallback instructions)

2. **SVG viewBox:** The SVG uses viewBox="0 0 192 192" to scale infinitely. All browsers will handle this correctly.

3. **Font fallback:** The SVG uses "Courier New, monospace" as font-family. Browsers will fall back to system monospace if Courier New is unavailable.

4. **Inheritance:** All pages automatically inherit favicon meta tags from BaseLayout.astro — no per-page changes needed.

5. **Cache busting:** If favicon doesn't update in browser, do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R).
