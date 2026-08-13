# NNR Global Technologies — AI Product Engineering Platform

> **Full Project Documentation & Technical Architecture Overview**
> **GitHub Repository:** [https://github.com/Mahesh-sanaboina/NNR-Global-Technologies](https://github.com/Mahesh-sanaboina/NNR-Global-Technologies.git)

---

## 1. Executive Summary

**NNR Global Technologies** is a modern, high-performance web platform designed for an enterprise AI-powered product development company. The application showcases advanced AI product engineering services, interactive 3D canvas visuals, custom technology stacks, and a **Connected AI Ecosystem** layout for industry verticals.

The project adheres to modern visual aesthetics including glassmorphism, responsive micro-animations, individual element-level scroll reveals, custom typography (Open Sans Bold & Sora), and high-contrast light/dark themes.

---

## 2. Technology Stack & Dependencies

| Layer | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Markup** | HTML5 (Semantic Structure) | Accessibility, SEO optimization, and clean document flow. |
| **Styling** | Vanilla CSS3 (Custom Variables) | Modern design tokens, glassmorphism, grid/flexbox layouts, responsive media queries. |
| **Scripting** | JavaScript (ES6+ Modules) | Dynamic interactions, IntersectionObserver engines, SVG path hover effects. |
| **3D Rendering** | Three.js (WebGL 3D Engine) | Interactive 3D Neural Core canvas rendering in the Hero section. |
| **Typography** | Open Sans & Sora (Google Fonts) | High-contrast enterprise headings and clean body typography. |
| **Icons** | Custom Inline SVG & Emojis | Vector icons for social media, AI networks, contact details, and tech badges. |
| **Build & Dev** | Vite (Development Server) | Fast local development, module bundling, and hot module replacement (HMR). |

---

## 3. Core Website Architecture & Pages

### 3.1. Homepage (`index.html`)

1. **Sticky Header & Glass Navigation Bar**:
   - SVG NNR Global Technologies logo mark.
   - Smooth-scrolling navigation links (`#home`, `#services`, `#expertise`, `#about`, `#careers`, `contact.html`).
   - Mobile hamburger menu overlay with glassmorphism backdrop.

2. **Hero Section (`#home`)**:
   - **Badge**: `AI-POWERED PRODUCT DEVELOPMENT COMPANY` with animated pulse indicator.
   - **Headline**: High-impact Open Sans Bold heading with electric gradient accent (`We Build AI Products That Solve Real-World Problems`).
   - **CTA Group**: Gradient action buttons (`Explore Services`, `Book a Consultation`).
   - **Stats Bar**: Key performance metrics (`150+ Products Built`, `98% Happy Clients`, `30+ Uptime Delivered`, `24/7 Support`).
   - **3D AI Neural Core Stage**: Three.js WebGL rendering of a spinning particle globe with floating orbital rings.

3. **Services Section (`#services`)**:
   - Compact glassmorphism cards presenting core enterprise offerings:
     - *Product Strategy*
     - *AI Product Development*
     - *Custom Software Development*
     - *MVP Development*
     - *Product Design & UX*
     - *Maintenance & Support*
   - Interactive hover lift (`translateY(-6px)`), cyan border highlight, and "Learn More →" CTA links.

4. **Expertise & Technology Stack (`#expertise`)**:
   - Interactive card grid presenting technical competencies across AI/ML, Cloud Infrastructure, Full-Stack Development, and Security.

5. **Industries We Serve — Connected AI Ecosystem (`#industries`)**:
   - **Central AI Brain / Core Hub**: Centered circular hub (`AI-Powered Solutions — Transforming industries through intelligent innovation`) surrounded by multi-layered rotating dashed rings (`.ring-1`, `.ring-2`, `.ring-3`).
   - **6 Floating Industry Glass Cards**:
     - 🏥 *Healthcare & Life Sciences* (Soft Purple Accent)
     - 🏦 *Fintech & Banking* (Soft Blue Accent)
     - 🛒 *Retail & E-Commerce* (Soft Green Accent)
     - 🏭 *Manufacturing & Logistics* (Soft Orange Accent)
     - 🎓 *EdTech & Learning* (Soft Pink Accent)
     - ☁️ *SaaS & Enterprise Software* (Soft Cyan Accent)
   - **SVG Connection Network**: High-contrast dashed connector lines (`stroke-dasharray="6 5"`) and glowing pulsing nodes (`.node-pulse`) linking every industry card to the central hub.
   - **Interactive Hover Path Highlighting**: Hovering over any industry card dynamically brightens its connecting SVG path line (`.eco-path.highlight`).

6. **About / Company Values (`#about`)**:
   - Enterprise mission overview, core engineering principles, and operational statistics.

7. **Careers Section (`#careers`)**:
   - Open position listings with employment badges (`Full-time`, `Remote`, `Hybrid`) and direct application triggers.

8. **Footer & Brand Section**:
   - Dual-tone dark footer with NNR brand logo, company description, quick navigation links, copyright metadata, and **Glassmorphism Social Media Buttons** (LinkedIn, Twitter/X, GitHub, YouTube).

---

### 3.2. Dedicated Contact Page (`contact.html`)

1. **Streamlined Contact Header**: Clean title (`Let's Build Something Extraordinary`) and subtitle for direct user engagement.
2. **Left Column**: Contact info cards featuring direct email (`contact@nnrglobaltech.com`), phone number (`+1 (800) 555-0199`), and headquarters address (`Silicon Valley, CA`).
3. **Right Column**: Interactive Consultation Form with input fields (Full Name, Work Email, Company, Project Budget, Message) and instant toast notification triggers.

---

## 4. Design System & CSS Specifications

### 4.1. Color Tokens (`styles.css`)

```css
:root {
  --blue-primary: #0284C7;
  --blue-gradient-start: #38BDF8;
  --blue-gradient-end: #0369A1;
  --text-dark: #0F172A;
  --text-slate: #334155;
  --text-muted: #64748B;
  --cyan-soft-bg: rgba(14, 165, 233, 0.08);
  --cyan-border: rgba(14, 165, 233, 0.25);
  --glass-bg: rgba(255, 255, 255, 0.85);
  --glass-border: rgba(255, 255, 255, 0.6);
  --shadow-glass: 0 8px 32px rgba(15, 23, 42, 0.06);
}
```

### 4.2. Typography System
- **Headings**: `Open Sans` (Bold 700 / 800) & `Sora` for enterprise prominence.
- **Body & Captions**: `Inter` / system sans-serif for optimal legibility.

---

## 5. Animation & Interaction Architecture (`script.js`)

1. **Element-Level Intersection Observer (`initElementLevelAnimations`)**:
   - Observes every `.anim-elem` child inside sections.
   - Applies staggered sequential delay (`cIdx * 100ms`) for a smooth 60fps scroll animation.
2. **Three.js WebGL Neural Sphere Render**:
   - Renders a 3D wireframe sphere with particle points and rotating orbital rings on `#threeAiCanvas`.
3. **SVG Line Hover Highlighting**:
   - Event listeners on `.eco-card` matching `data-path` attributes to highlight corresponding connecting SVG lines.

---

## 6. Project Directory Structure

```
NNR Global Technologies/
├── index.html               # Primary Landing Page (Connected AI Ecosystem, Hero, Services, About, Careers)
├── contact.html             # Dedicated Contact Page & Consultation Form
├── styles.css               # Core CSS Design System, Responsive Media Queries & Animations
├── script.js                # Three.js 3D Engine, Scroll Observer & Interactive Scripts
├── PROJECT_DOCUMENTATION.md # Full Technical & Architectural Documentation
└── package.json             # Development configuration & dependencies
```

---

## 7. Local Setup & Execution Guide

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- Git CLI

### 1. Clone & Navigate
```bash
git clone https://github.com/Mahesh-sanaboina/NNR-Global-Technologies.git
cd "NNR Global Technologies"
```

### 2. Launch Local Development Server
```bash
npx vite --port 3000 --host
```
Open your browser and navigate to:
- Homepage: `http://localhost:3000/`
- Contact Page: `http://localhost:3000/contact.html`

---

## 8. Version Control & Repository Synchronization

- **GitHub Repository**: `https://github.com/Mahesh-sanaboina/NNR-Global-Technologies.git`
- **Main Branch**: `main`
