# recyclerobot/os

Static, terminal-themed index of personal apps. Built with Vite + TypeScript and deployed to GitHub Pages from the `docs/` folder.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output is written to `docs/` (kept in git). The build does **not** empty the folder, and the pre-commit hook restores `docs/CNAME` after every build so it is never overwritten.

## Deploy

GitHub Pages → branch: `main`, folder: `/docs`. Set up a `docs/CNAME` once with your custom domain; it will be preserved on every commit.

## Pre-commit hook

A Husky pre-commit hook runs `npm run build`, restores `docs/CNAME`, and stages `docs/` automatically.

```sh
npm install      # also runs `husky` via the prepare script
chmod +x .husky/pre-commit  # only needed once on a fresh clone
```
