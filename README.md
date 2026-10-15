# Vertex800

Marketing website for Vertex800, built with Next.js.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - development server
- `npm run build` - production build (Webpack; required on GoDaddy Node.js hosting)
- `npm start` - serve production build

## Deploy on GoDaddy Node.js Apps

GoDaddy runs `npm install` (production only), then `npm run build`, then `npm start`. This repo is configured for that flow:

1. **Webpack build** — `next build --webpack` avoids Turbopack trying to bind ports during CSS/PostCSS, which fails on shared hosting (`Permission denied` / os error 13).
2. **Build deps in `dependencies`** — Tailwind, TypeScript, and types must not sit in `devDependencies`, or the remote build will not install them.
3. Upload the project **without** `node_modules` or `.next` (GoDaddy builds on the server).
4. **Start** — `next start` reads `PORT` from the environment automatically; do not hardcode a port.

If a deploy still fails, open **Manage** on the app and confirm the build log shows `Next.js … (webpack)`, not `(Turbopack)`.

## Content

Company copy, services, industries, alliances, insights, and careers live in `src/data/site.json`.
