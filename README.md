# Sahil Khan — portfolio

Personal site of Sahil Khan, AI & Software Developer, Full-Stack Engineer and Technology Creator.
Live at **https://ssahil.vercel.app**.

## Stack

- Next.js 16 (App Router, static export), React 19, TypeScript
- Tailwind CSS v4
- Framer Motion for entrances, GSAP ScrollTrigger for the pinned project showcase and parallax, Lenis for smooth scroll
- React Three Fiber for the hero waveform
- All motion turns off when the visitor has "reduce motion" set

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # fetches GitHub data, then writes the static site to out/
```

`npm run build` runs `scripts/fetch-github.mjs` first, which refreshes `src/data/github-data.ts`
from the GitHub API. That file is regenerated on every build, so don't hand-edit it.
Set `GITHUB_TOKEN` to avoid the anonymous rate limit.

## Where the content lives

| File | What it holds |
|---|---|
| `src/data/site.ts` | Name, role, links, email, YouTube videos, Instagram accounts |
| `src/data/projects.ts` | Every project: category, status, stack, repo and live links. Drives the home page, `/projects` and each detail page |
| `src/data/portfolio.ts` | Experience, education, skills, certificates and achievements used by the inner pages |
| `docs/PROJECT_INVENTORY.md` | What was verified against GitHub and the live sites, and which claims still need checking |

To add a project, add an entry to `projects.ts`. Set `featured: true` to show it on the home page
(keep six), and only set `live` to a URL you have opened.

## Home page sections

Hero, About, Featured Projects (pinned horizontal scroll on desktop), AI & ML Lab, Creator Studio,
Live Projects, Technical Arsenal, GitHub Activity (live from the GitHub API, falls back to the
build snapshot when rate-limited) and Contact. The contact form opens the visitor's mail app;
a hidden honeypot field drops bot submissions.

## Deploy

Vercel builds `main` automatically. The project uses `output: "export"`, so `out/` is a plain
static site and can also be served from any static host.

1. Push to `main`.
2. Vercel runs `npm run build` and publishes `out/`.
3. Check https://ssahil.vercel.app once the deployment is ready.
