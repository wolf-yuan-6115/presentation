# 📊 Presentations

This repository contains the slides for the presentations I've given. The slides are written in Markdown and rendered using [slidev](https://sli.dev).

The repository is managed using [turborepo](https://turbo.build), so my presentations are basically just in a monorepo.

## 🔨 Technologies

- [astro](https://astro.build)
- [slidev](https://sli.dev)
- [vue](https://vuejs.org)
- [turborepo](https://turbo.build)

## 📁 Directory Structure

- `landing/` - contains homepage at [presentation.wolf-yuan.dev](https://presentation.wolf-yuan.dev)
- `presentations/` - contains all the presentations
- `merge-slides.sh` - merges all the slides from `presentations/*` into `dist/`

## 🏗️ Building

This repository uses [turborepo](https://turbo.build) to manage the monorepo. It can massively speed up the build process by running build process simultaneously, caching dependencies and outputs.

To build the slides, run:

```sh
pnpm build
```

## 🖥️ Developing

To develop the slides, first, change to target slide:

```sh
cd presentations/<slide-name>
```

Then, run the following command:

```sh
pnpm dev
```

> For some reason running `pnpm dev` in the root directory spawned every presentation and landing page's development server. You have to run it in the target slide directory.

## 🍴 Forking

Forking is welcome! You can fork this repository and change the slides to your liking. You can also change the landing page to your liking.

All code used in this repo is licensed under `Attribution-ShareAlike 4.0 International` license (Aka ` CC BY-SA 4.0`). You can find the license in the `LICENSE` file. You MUST distribute your fork under the same license.
