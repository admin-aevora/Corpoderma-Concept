# Corpofino Spa & Slimming Lounge - Concept Redesign

A modern, conversion-optimized website concept for Corpofino Spa in Abu Dhabi.

## Overview

Premium slimming and aesthetic treatments website with focus on:
- **Result-driven messaging**: "Visible results. Real confidence."
- **Consultation-first funnel**: Guide visitors to book consultations
- **WhatsApp integration**: Quick booking via WhatsApp

## Features

- **Goal-based navigation**: Slim down, Glow up, Recover & relax
- **Treatment categories**: Slimming & Contouring, Skin & Aesthetics, Wellness
- **Package-driven AOV**: Starter, Transformation, Membership plans
- **Trust builders**: Results gallery, testimonials, FAQ
- **Mobile-optimized**: Sticky action bar, responsive design

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Header, Footer, Mobile Action Bar
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── ChooseGoal.tsx
│       ├── TopTreatments.tsx
│       ├── Results.tsx
│       ├── Packages.tsx
│       ├── WhyCorpofino.tsx
│       ├── Reviews.tsx
│       ├── FAQ.tsx
│       ├── Location.tsx
│       └── FinalCTA.tsx
└── lib/
    └── data/              # Contact, reviews data
```

## Homepage Sections

1. **Hero** - Above the fold with trust bar
2. **Choose Your Goal** - Funnel section with 3 goal cards
3. **Top Treatments** - 3 category blocks with treatments
4. **Results** - Before/after gallery placeholder
5. **Packages** - AOV boost section
6. **Why Corpofino** - Trust section
7. **Reviews** - Testimonials carousel
8. **FAQ** - Common questions accordion
9. **Location** - Map and contact info
10. **Final CTA** - Closing conversion section

## Deployment

Optimized for Vercel:

```bash
npm run build
```

## Disclaimer

Concept redesign by Ihab — for demonstration only. Not affiliated with Corpofino.
