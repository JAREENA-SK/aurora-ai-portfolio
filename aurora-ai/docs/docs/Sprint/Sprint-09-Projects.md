# Sprint 09 - Featured Projects

## Objective

Develop a modern and responsive Projects section to showcase featured software engineering projects with an attractive UI and smooth animations.

---

# Features Implemented

- Responsive project cards
- Modern UI design
- Framer Motion animations
- Hover effects
- Technology badges
- GitHub button
- Live Demo button
- Gradient project preview
- Reusable project data array

---

# Components Created

components/
└── sections/
    └── Projects.tsx

---

# Files Modified

app/
└── page.tsx

components/
└── sections/
    └── Projects.tsx

---

# Technologies Used

- Next.js
- React
- Tailwind CSS
- Framer Motion

---

# Featured Projects

## Aurora AI Portfolio

### Description

A premium portfolio website featuring modern UI, responsive layouts, smooth animations, and interactive 3D experiences built using Next.js.

### Technologies

- Next.js
- React
- Tailwind CSS
- Three.js
- Framer Motion

### Features

- Responsive Design
- Animated Hero Section
- 3D Globe
- Modern Navigation
- Interactive UI
- Smooth Animations

---

## HireReady Program

### Description

A career development platform focused on helping students prepare for placements through resume building, interview preparation, communication skills, and technical mentoring.

### Technologies

- React
- Tailwind CSS
- JavaScript

### Features

- Resume Building
- Mock Interviews
- Career Guidance
- Technical Mentoring

---

## IT Support Ticket Management System

### Description

A ticket management system designed to create, assign, monitor, and resolve technical support requests efficiently.

### Technologies

- Next.js
- React
- Node.js

### Features

- Ticket Tracking
- Issue Management
- Dashboard
- Status Monitoring

---

# Concepts Learned

## Component Reusability

Created reusable project cards using a JavaScript array and rendered them dynamically using the map() function.

---

## Responsive Design

Implemented responsive layouts using Tailwind CSS Grid and Flexbox to ensure compatibility across desktop, tablet, and mobile devices.

---

## Framer Motion

Applied animations using:

- initial
- whileInView
- transition
- whileHover

to enhance the user experience.

---

## Dynamic Rendering

Stored all project information in a reusable array instead of creating individual cards manually.

---

# Challenges Faced

## Challenge

Designing project cards that are visually appealing while remaining easy to scan.

## Solution

Implemented:

- Hover animations
- Technology badges
- Responsive cards
- Clean typography
- Gradient preview section

---

# Skills Practiced

- React Components
- Dynamic Rendering
- JavaScript Arrays
- Tailwind CSS
- Responsive Design
- Framer Motion
- UI/UX Design

---

# Interview Questions

## Why did you use an array for project data?

Using an array allows projects to be rendered dynamically, making the component reusable, scalable, and easier to maintain.

---

## Why use Framer Motion?

Framer Motion provides smooth animations with minimal code, improving user experience while keeping the implementation clean.

---

## Why use technology badges?

Technology badges allow recruiters to quickly identify the technologies used in each project without reading long descriptions.

---

# Future Improvements

- Replace placeholder images with actual project screenshots.
- Add GitHub repository links.
- Add live demo links.
- Implement 3D hover tilt effects.
- Add project filtering by technology.
- Improve accessibility.

---

# Git Commit

git add .

git commit -m "feat: add featured projects section"

---

# Sprint Summary

Successfully developed a responsive and animated Projects section featuring reusable project cards, technology badges, hover effects, and modern UI using Next.js, React, Tailwind CSS, and Framer Motion.