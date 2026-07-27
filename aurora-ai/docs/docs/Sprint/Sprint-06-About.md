# Sprint 06 - About Section

## Objective

Create a professional About section that introduces my background, experience, and career journey in a visually appealing way.

---

# Features Implemented

✅ Responsive About section

✅ Two-column layout

✅ Scroll reveal animation

✅ Professional information cards

✅ Modern UI design

---

# Components Created

components/
└── sections/
    └── About.tsx

---

# Files Updated

app/
└── page.tsx

components/
└── sections/
    └── About.tsx

---

# Technologies Used

- React
- Next.js
- Tailwind CSS
- Framer Motion

---

# Concepts Learned

## Reusable Components

The About section was created as an independent React component to keep the project modular and maintainable.

---

## CSS Grid

Used responsive grid layout:

```tsx
lg:grid-cols-2
```

This displays:

- One column on mobile
- Two columns on desktop

---

## Framer Motion

Implemented scroll animations using:

```tsx
whileInView={{ opacity:1, x:0 }}
```

This makes the section animate only when it enters the viewport.

---

## Responsive Design

Used Tailwind responsive utilities:

```tsx
px-6
lg:grid-cols-2
max-w-7xl
```

to ensure the layout works across mobile, tablet, and desktop.

---

# UI Elements

Created cards for:

- 3+ Years Experience
- Technical Support
- Project Management
- Continuous Learning

---

# Challenges Faced

## Issue

Initial import error:

Module not found:
Can't resolve '../components/sections/About'

## Solution

Verified:

- About.tsx existed
- Correct file path
- Correct component export
- Restarted development server

The issue was resolved successfully.

---

# Skills Practiced

- React Components
- Tailwind CSS Grid
- Responsive Layout
- Scroll Animation
- Debugging Import Errors

---

# Interview Questions

## Why did you separate the About section into its own component?

Answer:

Creating separate components improves code readability, maintainability, and reusability while following React's component-based architecture.

---

## Why use Framer Motion?

Answer:

Framer Motion provides smooth and declarative animations for React applications, improving user experience without complex animation code.

---

# Git Commit

```bash
git add .
git commit -m "feat: add professional About section"
```

---

# Sprint Summary

Successfully built a responsive and animated About section featuring professional experience cards and scroll-based animations while maintaining a modular project structure.