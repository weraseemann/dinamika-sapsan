# Sapsan Transporte — Website Redesign Prototype

A responsive frontend prototype for a German logistics and transportation company, built with **React, Vite, and Tailwind CSS**.

## Project Overview

This project was developed during my employment at a software development company as a proposed redesign for an external logistics client.

The objective was to explore a modern alternative to the client's existing website, focusing on clear service presentation, responsive layouts, and improved user experience.

The potential client ultimately decided to retain their existing website rather than invest in a redesign.

**Project status:** Frontend prototype — not adopted as the client's official website.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript (JSX) | Application logic and components |
| Vite | Development server and production builds |
| Tailwind CSS | Responsive styling |
| React Router | Client-side routing |
| Framer Motion | Animation capabilities |
| i18next / react-i18next | Internationalization support |
| Lucide React | UI icons |
| ESLint | Static code analysis |

## Project Architecture

The application is organized into reusable components and separate pages.

```text
src/
├── assets/
├── components/
│   ├── Header
│   ├── Hero
│   ├── Services
│   ├── Fleet
│   ├── Consulting
│   ├── Contact
│   ├── Stats
│   └── Footer
├── data/
│   └── content.js
├── pages/
│   ├── Home.jsx
│   ├── Impressum.jsx
│   └── Datenschutz.jsx
├── App.jsx
└── main.jsx
```

The structure separates page-level components, individual interface sections, and application content.

## Development Approach

This prototype was developed using an AI-assisted development workflow with ChatGPT.

I worked on translating the website concept into a React application, integrating components, styling the interface, and testing the implementation.

The project also provided practical experience in reviewing AI-generated code, debugging, dependency management, and maintaining an existing codebase.

## Technical Skills Demonstrated

- React component structure and JSX
- Responsive UI development with Tailwind CSS
- Client-side routing with React Router
- Version control using Git and GitHub
- Debugging and static code analysis with ESLint
- Dependency security auditing and maintenance
- Production builds using Vite

## Local Development

### Prerequisites

- Node.js compatible with the project's Vite version
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/weraseemann/dinamika-sapsan.git
cd dinamika-sapsan
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Production Build

```bash
npm run build
npm run preview
```

The optimized production files are generated in the `dist/` directory.

## Code Quality and Maintenance

The project uses ESLint for static code analysis.

```bash
npm run lint
```

A dependency security review was also performed using npm audit. Known vulnerabilities reported during the review were addressed through dependency updates.

Validation completed during maintenance:

- ESLint — passed
- Production build — passed
- npm audit — 0 reported vulnerabilities at the time of verification

Automated application tests are not yet configured.

## Deployment

The project is configured for GitHub Pages using Vite's base path:

```js
base: "/dinamika-sapsan/"
```

Deployment configuration uses the `gh-pages` branch.

The application uses React Router with `HashRouter` to support static hosting.

**Note:** The repository is a development prototype, not the client's official production website. Legal pages and their public availability require separate review before using the project as a public business website.

## Future Improvements

- Introduce automated component tests with Vitest and React Testing Library
- Add GitHub Actions for build and lint checks
- Improve accessibility and keyboard navigation
- Review bundle size and performance
- Refine technical documentation

## Project Context

This repository demonstrates frontend work carried out in the context of a real business website proposal.

The client chose to continue using its existing website for commercial reasons. The prototype remains a record of the development work and the technical approach.

---

**Developer:** Wera Seemann

**Technologies:** React · JavaScript · Vite · Tailwind CSS

**Repository:** https://github.com/weraseemann/dinamika-sapsan
