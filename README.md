# Galaxy Portfolio

A responsive, galaxy-themed developer portfolio for Charles Justin R. Vizcarra,
built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide
React. The site introduces the developer, presents project case-study pages,
organizes skills and career milestones, and provides direct email and social
contact links.

Portfolio details are based on the provided resume. Project repository and
demo links are only shown when an actual URL is available.

## Features

- Cosmic dark theme with a CSS starfield, orbital illustration, and responsive
  glass-like cards.
- Responsive navigation with a mobile menu and active section indicator.
- About, skills, projects, journey, and contact sections.
- Client-side project filters and statically generated project detail pages.
- Centralized, typed portfolio content in `src/data/`.
- Direct email, phone, and social contact links; no backend is required.
- Reduced-motion support, keyboard focus styles, semantic sections, and SEO
  metadata.
- A custom orbital favicon and generated social-preview image.
- Custom not-found page and Vercel-ready Next.js configuration.

## Technology

- Next.js App Router and React
- TypeScript
- Tailwind CSS 4
- Motion for React
- Lucide React

## Project structure

```text
src/
  app/
    projects/[slug]/       Project case-study routes
    globals.css            Theme and global styles
    layout.tsx             Root layout and metadata
    page.tsx                Portfolio landing page
  components/
    layout/                 Navigation, footer, social links
    projects/               Project cards and artwork
    sections/               Portfolio page sections
  data/                     Editable personal, skill, project, and journey data
  types/                    Shared TypeScript types
```

## Requirements

- Node.js 20.9 or newer
- npm

## Install and run locally

From the project directory:

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To stop the development
server, press `Ctrl+C` in the terminal.

For social-preview URLs, Vercel's deployment URL is used automatically. Set
`NEXT_PUBLIC_SITE_URL` to your public custom domain when one is configured.

## Build and production

```powershell
npm run lint
npm run build
npm run start
```

`npm run start` serves the production build locally at
[http://localhost:3000](http://localhost:3000).
