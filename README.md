# Utso's Portfolio

Next.js (JavaScript, App Router) + Tailwind CSS + Framer Motion + lucide-react / react-icons.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit content

- `content/projects/*.json` — fill in the "TODO" fields for each project
  (problem, approach, challenges, result, liveUrl, repoUrl)
- `app/about/page.js` — refine your bio if needed
- `components/Hero.js`, `components/Navbar.js`, `components/ContactCTA.js` —
  replace `hello@example.com` with your real email
- `components/Footer.js` — update social links if they change

## Adding a new project

1. Add a new JSON file in `content/projects/` following the same shape as
   `careerlogr.json`
2. It will automatically appear on `/` and `/projects`, and get its own
   page at `/projects/<slug>`

## Design notes

- Single accent color (`#1266C4`) sampled from your portrait's background —
  defined in `tailwind.config.js` as `accent` / `accent-hover`
- Custom cursor (`components/CustomCursor.js`) only activates on devices
  with a mouse and no reduced-motion preference — falls back to the normal
  cursor on touch devices automatically
- One shared container width (`max-w-content`) and one card radius
  (`rounded-card`) used everywhere for visual consistency

## Deploy

Push to GitHub, then import the repo on vercel.com — zero config needed.
