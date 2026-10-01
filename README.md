# Lihini Athukorala Portfolio

A modern, dark-themed personal portfolio for a National Arbiter from Sri Lanka.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite address shown in the terminal.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. In Vercel, choose **Add New Project** and import that repository.
3. Keep the detected Vite settings: build command `npm run build` and output directory `dist`.
4. Select **Deploy**. Vercel will build future deployments automatically when changes are pushed to the connected branch.

## Notes

- The FIDE profile button is prepared using the `FIDE_PROFILE_URL` placeholder constant in `src/data/tournaments.ts`.
- Tournament data is stored in `src/data/tournaments.ts` for easy future updates.
- The website keeps all details aligned to the information provided in the brief and avoids inventing unverified FIDE statistics or titles.
