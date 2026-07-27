# Sprint 08 - Experience Timeline

## Objective

Build a professional and interactive Experience section that presents my career journey in a clean, recruiter-friendly timeline.

---

# Features Implemented

- Animated vertical timeline
- Responsive layout for mobile and desktop
- Professional experience cards
- Technology badges for each role
- Bullet-point responsibilities
- Hover animations using Framer Motion
- Modern UI following the Aurora AI design system

---

# Components Created

components/
└── sections/
    └── Experience.tsx

---

# Files Modified

app/
└── page.tsx

components/
└── sections/
    └── Experience.tsx

---

# Technologies Used

- React
- Next.js
- Tailwind CSS
- Framer Motion

---

# Professional Experience

## Micron Technology

**Role:** Software Engineer

**Duration:** 3 Months

### Technologies

- Python
- Jenkins
- Bitbucket
- Jira
- Linux

### Responsibilities

- Developed Python automation scripts.
- Worked with Jenkins for CI/CD automation.
- Managed source code using Bitbucket.
- Tracked tasks and issues in Jira.
- Worked in Linux-based development environments.

---

## Qualcomm

**Role:** Software Engineer II

**Duration:** 1.5 Years

### Technologies

- C
- Python
- Git
- Jira
- Linux

### Responsibilities

- Developed software utilities using C and Python.
- Debugged software issues and supported validation activities.
- Managed source code using Git.
- Collaborated with cross-functional engineering teams.
- Worked in Agile development using Jira.
- Developed and maintained software in Linux environments.

---

## Sevitech Systems

**Role:** Senior Software Engineer

**Duration:** 4 Months

### Technologies

- Leadership
- Project Management
- Team Coordination

### Responsibilities

- Led a software development team.
- Planned and coordinated project execution.
- Managed client communication.
- Ensured timely delivery of project milestones.
- Maintained software quality and project standards.

---

## Technical Trainer & Project Mentor

**Duration:** 1 Year

### Technologies

- Python
- Project Guidance
- Interview Preparation
- Presentation Skills

### Responsibilities

- Guided engineering students on academic projects.
- Conducted mock interviews.
- Prepared technical presentations.
- Mentored students for placements and career readiness.

---

# Concepts Learned

## Timeline Layout

Created a vertical timeline to display professional experience in chronological order.

---

## Data-Driven Components

Stored all experience information inside an array and rendered it dynamically using:

```tsx
experiences.map(...)
```

This improves scalability and maintainability.

---

## Framer Motion

Used animation techniques such as:

- initial
- whileInView
- transition
- viewport

to create smooth scroll-based animations.

---

## Responsive Design

Implemented responsive spacing and layouts using Tailwind CSS to ensure compatibility across desktop, tablet, and mobile devices.

---

# Challenges Faced

## Challenge

Organizing professional experience in a way that is easy for recruiters to scan.

## Solution

Used:

- Technology badges
- Bullet-point responsibilities
- Animated timeline cards
- Responsive layout

to improve readability and user experience.

---

# Skills Practiced

- React Components
- Array Mapping
- Dynamic Rendering
- Tailwind CSS
- Framer Motion
- Responsive Design
- UI Layout Design

---

# Interview Questions

## Why did you use an array for experience data?

Using an array allows the experience cards to be generated dynamically, making the code cleaner, reusable, and easier to maintain.

---

## Why use Framer Motion?

Framer Motion provides simple and performant animations that enhance user experience while keeping the code readable.

---

## Why use technology badges?

Technology badges make it easier for recruiters to quickly identify the tools and technologies used in each role without reading long paragraphs.

---

# Git Commit

```bash
git add .
git commit -m "feat: add professional experience timeline"
```

---

# Sprint Summary

Successfully developed a responsive and animated Experience Timeline that showcases professional growth, technical skills, and leadership experience using reusable React components, Tailwind CSS, and Framer Motion.