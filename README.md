# Chang Li-Wei — Portfolio

Personal portfolio for Chang Li-Wei, a DevPM at Asilla (Tokyo) working on computer vision and LLM products.

**Live**: [rynvex.github.io](https://rynvex.github.io)

## What's here

- **Four design systems** — Linear / Vercel / Apple / Airbnb — each rebuilt as CSS variable sets from its public `DESIGN.md` spec. Switch via ⌘K or the Design Lab section.
- **Three locales** — ZH / EN / JA, client-side switcher.
- **Static export** — Next.js `output: "export"` for GitHub Pages.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide

## Development

```bash
npm install
npm run dev    # http://localhost:3012
```

## Deploy

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the static site and publishes to GitHub Pages.

## Credits

- Visual structure inspired by [brittanychiang.com](https://brittanychiang.com)
- `DESIGN.md` specs from [getdesign.md](https://getdesign.md) / [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
