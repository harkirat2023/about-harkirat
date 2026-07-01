## Goal
Elevate the existing `src/routes/index.tsx` portfolio into a premium 2026 SDE portfolio (Awwwards / Aceternity / Magic UI vibes) without rebuilding structure. Resume content already matches the new PDF (IntelliMoney, KhataBox, Symptom Score AI, TIET internship, skills, achievements, leadership) — I'll verify each section against the resume and correct any drift.

## Content sync (from resume)
- Hero: Harkirat Singh — Aspiring Software Engineer; tagline mentions Node.js, FastAPI, PostgreSQL, REST APIs, AI systems.
- About: Computer Engineering @ Thapar (2023–2027); AI + distributed systems focus.
- Experience: Summer Project Intern — TIET (Python, React, FastAPI, MongoDB, Scikit-learn, NLP).
- Skills grouped as: Languages · Backend & Web · Databases · Machine Learning · AI Tools · DevOps/Cloud · CS Coursework.
- Projects: IntelliMoney, KhataBox, Symptom Score AI (each with tech, 3 bullets, GitHub + Live Demo placeholders).
- Achievements: Coursera/PW-Skills cert; 250+ DSA; organized events for 450+ with team of 27.
- Leadership: Joint Secretary IETE (May 2025–May 2026); Creative Content Head Hostel O (Aug 2024–Present).
- Contact / Footer: phone +91-8847654698, email hkkirat25@gmail.com, LinkedIn, GitHub.

## UI enhancements (in `src/routes/index.tsx` + `src/styles.css`)
1. **Design tokens**: extend `src/styles.css` with premium gradient tokens (`--gradient-hero`, `--gradient-accent`), soft glow shadows, glass surface variables, refined dark palette in oklch. Ensure light/dark contrast and semantic-only usage in components.
2. **Global polish**: smooth scroll (already), improved font pairing (keep Instrument Serif for display + Inter/Geist for body), consistent section rhythm (`py-32`), gradient noise background layer.
3. **Nav**: sticky glass pill nav with active-section highlight (IntersectionObserver), CTA "Let's talk" with gradient border.
4. **Hero**: animated gradient headline, aurora blob background, availability chip (pulsing dot), animated stat row (250+ DSA, 3 projects, 450+ event reach), primary/secondary CTAs (Resume + Contact). Framer Motion staggered reveal.
5. **About/Experience**: two-column glass card layout — bio + TIET internship timeline card with tech badges.
6. **Skills**: 7 category glass cards in responsive grid with lucide icons, animated badge entrance (stagger + hover lift/glow). Category color accents via CSS vars.
7. **Projects**: redesigned cards — thumbnail placeholder area with gradient + project number, tech badges, key highlight bullets, hover: lift + gradient border glow + arrow. Buttons: GitHub (outline) + Live Demo (gradient). Placeholder links kept.
8. **Achievements**: 3-up stat/achievement cards with icons (Trophy, Award, Users) and animated counters on view.
9. **Leadership**: timeline-style cards with role, org, date, description.
10. **Contact**: large glass CTA card with email/phone/LinkedIn/GitHub buttons + subtle gradient border.
11. **Footer**: minimal — name, socials, © 2026, "Built with intent".
12. **Motion**: framer-motion `whileInView` fade-up with `useReducedMotion` guard (already present); add subtle hover micro-interactions on cards/badges. Keep durations 0.4–0.6s, easing `[0.22,1,0.36,1]`.

## Files touched
- `src/routes/index.tsx` — restructure JSX/styles of existing sections only.
- `src/styles.css` — add gradient/glass/glow tokens and utility classes.

## Non-goals
- No new routes, no backend, no new dependencies (framer-motion + lucide already installed).
- No content invention beyond resume.

## Verification
- `tsgo` typecheck; visit `/` in preview and confirm sections render, animations smooth, mobile responsive at 375px.
