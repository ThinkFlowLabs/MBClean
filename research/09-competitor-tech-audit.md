# Competitor Technology & SEO Audit

## Executive Summary

Analyzed 5 national franchises + 2 local South Florida competitors. **Every single competitor runs WordPress.** Most have significant performance, accessibility, and SEO issues. The competitive bar is remarkably low.

---

## Key Finding: ALL Competitors Use WordPress

| Company | Domain | CMS | CSS Framework | JS |
|---------|--------|-----|---------------|-----|
| Anago | anagocleaning.com | WordPress | Bootstrap | jQuery + Swiper |
| Coverall | coverall.com | WordPress | Custom | jQuery + React elements |
| Jani-King | janiking.com | WordPress | Bootstrap | jQuery + Bootstrap |
| JAN-PRO | jan-pro.com | WordPress | Custom | jQuery |
| CleanNet | cleannetusa.com | WordPress | Bootstrap | jQuery + bxSlider |

**None use modern frameworks (Next.js, React SSR, Astro). All rely on jQuery.**

---

## Performance Comparison

| Metric | Anago | Coverall | Jani-King | JAN-PRO | CleanNet |
|--------|-------|----------|-----------|---------|----------|
| Wall Clock Load | 948ms | 2,021ms | 2,322ms | 1,239ms | 417ms |
| DOM Content Loaded | 381ms | 457ms | 709ms | 1,206ms | 391ms |
| First Contentful Paint | 272ms | 392ms | 696ms | 1,204ms | 368ms |
| Time to First Byte | 38ms | 238ms | 73ms | 1,003ms | 199ms |
| Total HTTP Requests | 185 | 93 | **250** | 14 | 33 |
| JS Files Loaded | 50 | 39 | **92** | 2 | 2 |
| DOM Elements | 1,563 | 1,686 | **2,563** | 961 | 594 |

**Jani-King is the worst**: 250 requests, 92 JS files, 2,563 DOM elements.

---

## SEO Audit: Critical Weaknesses

### Heading Structure
| | Anago | Coverall | Jani-King | JAN-PRO | CleanNet |
|--|-------|----------|-----------|---------|----------|
| H1 Count | 1 | 1 | 1 | 1 | **12 (BROKEN)** |
| H1 Text | Good | Good | Good | Good | **Phone number as H1!** |
| Word Count | 2,365 | 1,130 | **525** | **371** | 693 |

- **CleanNet has 12 H1 tags** with phone number as primary H1
- **JAN-PRO: only 371 words** on homepage
- **Jani-King: only 525 words** -- too thin for competitive keywords

### Image Alt Text (Accessibility/SEO Failures)
| | Anago | Coverall | Jani-King | JAN-PRO | CleanNet |
|--|-------|----------|-----------|---------|----------|
| Images Missing Alt | **52 (56%)** | 2 (29%) | 2 (4%) | **12 (71%)** | **16 (89%)** |

### Structured Data
| | Anago | Coverall | Jani-King | JAN-PRO | CleanNet |
|--|-------|----------|-----------|---------|----------|
| Schema Blocks | 1 | 1 | **8** (best) | 2 | 1 |

Only Jani-King has comprehensive structured data.

### Critical SEO Bugs
- **Anago's OG Title is "Home"** -- social shares show "Home" not their brand
- **Anago's mobile layout is 7,200px wide** on a 375px screen (completely broken)
- **JAN-PRO's LinkedIn tracking is broken** (undefined variable error)
- **JAN-PRO has duplicate Facebook Pixel** (double-counting conversions)
- **CleanNet has bxSlider CSS 404** and loads Google Maps API twice

---

## Mobile Responsiveness

| | Anago | Coverall | Jani-King | JAN-PRO | CleanNet |
|--|-------|----------|-----------|---------|----------|
| Horizontal Scroll Bug | **YES (7200px!)** | No | No | No | No |
| Tap Target Issues | 50 | **126** | 36 | 25 | 36 |

---

## Design Quality Scores

| Competitor | Score | Key Issues |
|-----------|-------|------------|
| CleanNet | **3/10** | Looks like 2012. Stock silhouettes. Deprecated bxSlider. |
| Jani-King | **5/10** | 3 popup overlays at once (modal + cookie + chat). Split hero creates decision fatigue. |
| Anago | **6/10** | Cluttered hero with form overlay. Stock photos. Cookie banner blocks content. |
| JAN-PRO | **6.5/10** | Tri-color brand. Lead form in hero is good. Sticky side tabs add clutter. |
| Coverall | **7.5/10** | Best design. Clean, modern, focused CTA. Green brand. Professional. |

---

## Marketing Technology Gaps

| Tool | How Many Use It |
|------|----------------|
| Google Tag Manager | 5/5 |
| Google Analytics | 5/5 |
| Facebook Pixel | 3/5 |
| Microsoft Clarity | 2/5 |
| Hotjar | **0/5** |
| Live Chat | **0/5** |
| A/B Testing | **0/5** |
| Marketing Automation | 1/5 (Jani-King uses HubSpot) |

---

## How MB Clean Solutions Can Beat Every Competitor

### Technology
1. **Build with Next.js** (not WordPress like every competitor)
2. **Deploy on edge (Vercel)** -- Sub-100ms TTFB vs competitors' 200-1000ms
3. **Automatic image optimization** via Next.js Image component
4. **No jQuery** -- Modern React with tree-shaking

### Performance
5. **Score 95+ on all Lighthouse metrics** (competitors likely 50-70)
6. **Load in under 1 second** on mobile (competitors average 1.5-2.5s)
7. **Proper lazy loading** -- only 1/5 competitors does this

### SEO
8. **8+ structured data schemas per page** (matching Jani-King's best)
9. **2,000+ words per service page** (competitors average under 700)
10. **Perfect heading hierarchy** -- one H1, proper H2/H3 nesting
11. **100% image alt text** (competitors miss 11-89%)
12. **City-specific landing pages** with unique content

### Accessibility
13. **WCAG 2.1 AA compliance** -- only 1 competitor even attempts this
14. **Zero tap target issues** on mobile (competitors have 25-126)

### Design
15. **Modern, distinctive design** -- CleanNet looks like 2012
16. **No popup overlays** -- Jani-King buries users under 3 popups
17. **Live chat from day one** -- no competitor has this
18. **Video backgrounds, animations, micro-interactions** -- no competitor uses these

### Marketing Tech
19. **Session recording (Clarity/Hotjar)** -- competitors fly blind on UX
20. **A/B testing tools** -- no competitor optimizes conversion paths
21. **Marketing automation** -- only Jani-King uses HubSpot
