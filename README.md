<p align="center">
  <img alt="Metawrite" src="static/logo.svg" />
</p>

# Support Us 

**Get free $100 credits on DigitalOcean:**

<a href="https://m.do.co/c/843c1f24ad90">
  <img src="https://img.shields.io/badge/Digital_Ocean-0080FF?style=for-the-badge&logo=DigitalOcean&logoColor=white" />
</a>

**Join our Discord:**

<a href="https://discord.gg/n3WZxtbkCm">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
</a>

# SvelteKit-Appwrite Starter Template

Everything you need to build a SvelteKit project powered with Appwrite backend, starter powered by [Increasio](https://increas.io/).

## Important to mention

We'll update this starter template once we fix issue with installing `metawrite` package using `npm install metawrite`. But with this template it's easy to get latest version of our `metawrite` package because we still use npm.

**Before developing install the `metawrite` package.**

```bash
npm run metawrite
```

### Keep in mind

- If you have to package your own lib source the you can rename existing `package` folder or use another output directory for `svelte-kit package`.
- Also, if you're not using Docker or any CI/CD, custom workflows for deployment, then consider removing `package` folder from `.gitignore` file and run `npm run metawrite` before commiting or deployment.

## Developing

Once you've installed Metawrite with `npm run metawrite` and installed other dependencies with `npm install` (or `pnpm` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Building with Docker

This is a good option for deployment, because starter template has all required configs to automatically install newest version of `metawrite`, all dependencies and start SSR server using Node.

> To deploy your app if you're not using Docker, you may need to install another [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
