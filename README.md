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

## Personalize the portfolio

1. **Name, role, biography, location, email, and social links:** edit
   `src/data/personal.ts`. Social links are only shown when a real URL is set.
2. **Skills:** add only technologies you have used to the `skills` arrays in
   `src/data/skills.ts`.
3. **Projects:** edit `src/data/projects.ts`. Add accurate summaries,
   technologies, contributions, and real GitHub/demo URLs. Project buttons are
   hidden until their URLs are supplied.
4. **Project artwork:** the current covers are lightweight CSS illustrations.
   To use screenshots, add local files under `public/images/projects/` and
   update the project artwork component to render them with `next/image`.
5. **Education, experience, training, and extracurriculars:** add entries to
   `src/data/experience.ts`. The timeline appears when entries are present.
6. **Theme:** update the color variables and styles near the top of
   `src/app/globals.css`.

Project descriptions and roles reflect the supplied resume. Add repository or
demo links to project entries when those URLs are available.

## GitHub

This folder already contains Git metadata. Review the files, then create an
empty GitHub repository and connect it:

```powershell
git status
git add .
git commit -m "Build galaxy-themed portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

If a remote is already configured, inspect it with `git remote -v` and update it
only if needed.

## Deploy to Vercel

1. Sign in at [vercel.com](https://vercel.com/) and choose **Add New → Project**.
2. Import the GitHub repository containing this project.
3. Confirm that Vercel detects **Next.js**. The default build command and output
   settings are sufficient.
4. Optionally set `NEXT_PUBLIC_SITE_URL` under **Project Settings → Environment
   Variables** when using a custom domain.
5. Select **Deploy**. Vercel will build and publish the site.
6. Optionally add a custom domain under **Project Settings → Domains**.
7. Future pushes to the connected branch trigger deployments automatically.

## License

No license has been selected for this personal portfolio. Add a `LICENSE` file
if you intend to grant reuse or redistribution rights.
