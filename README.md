# Oiva Site Editing Guide

This is an Astro site for the Oiva project. This guide explains how to update the parts of the site that are meant to change often: pages, team profiles, logos, figures, navigation, and copy.

You do not need to know all of Astro to edit this site. The main idea is:

- Files in `src/pages/` create routes.
- Files in `src/content/` hold MDX content pages.
- Files in `src/data/` hold structured data used by components.
- Files in `src/assets/` hold images that Astro can optimize and bundle.
- Files in `public/` are copied directly to the final site.

## Local Setup

Run these commands from the project root.

| Command | What it does |
| --- | --- |
| `npm install` | Installs dependencies. |
| `npm run dev` | Starts the local dev server, usually at `http://localhost:4321`. |
| `npm run build` | Builds the production site into `dist/`. |
| `npm run preview` | Serves the production build locally for review. |

This project requires Node `22.12.0` or newer.

## Project Structure

The files you will edit most often are:

```text
src/
  assets/
    figures/              Article figures and diagrams
    logo/                 Oiva logo files
    logo-vendors/         Vendor and integration logos
  content/
    case-study/           Case study pages
    getting-started/      Getting started pages
  data/
    navigation.ts         Top navigation links and GitHub URL
    team.ts               Team profile data
  pages/
    index.astro           Homepage route
    team.astro            Team page route
    case-study/[slug].astro
    getting-started/[slug].astro
  components/             Reusable page pieces
  layouts/
    BaseLayout.astro      Site metadata and shared page shell
  styles/
    global.css            Global colors, spacing, typography, and prose styles
public/
  favicon.ico
  favicon.svg
```

## How Astro Routes Work Here

Astro creates pages from files in `src/pages/`.

- `src/pages/index.astro` becomes `/`.
- `src/pages/team.astro` becomes `/team/`.
- `src/pages/case-study/[slug].astro` creates one page for each file in `src/content/case-study/`.
- `src/pages/getting-started/[slug].astro` creates one page for each file in `src/content/getting-started/`.

For content collection pages, the file name becomes the URL slug. For example:

```text
src/content/case-study/overview.mdx
```

becomes:

```text
/case-study/overview/
```

## Editing Case Study and Getting Started Pages

Most article-style content lives in MDX files:

- Case study pages: `src/content/case-study/*.mdx`
- Getting started pages: `src/content/getting-started/*.mdx`

MDX is Markdown with the option to import and use components. Regular Markdown headings, paragraphs, lists, links, and code blocks work as expected.

Each MDX file starts with frontmatter. Frontmatter is the data between the `---` lines at the top of the file.

```md
---
title: "Page Title"
description: "Short page description."
section: "Case Study"
order: 3
sidebarLabel: "Short Label"
---

Page content starts here.
```

The frontmatter fields are validated in `src/content.config.ts`.

| Field | Required? | What it controls |
| --- | --- | --- |
| `title` | Yes | The page heading, browser title, and page metadata. |
| `description` | Yes | The intro text below the page heading and metadata description. |
| `section` | Yes | Human-readable section label, such as `"Case Study"` or `"Getting Started"`. |
| `order` | Yes | Sidebar order and previous/next page order. Lower numbers appear first. |
| `sidebarLabel` | No | Shorter label for the sidebar. If omitted, the sidebar uses `title`. |

To add a new page:

1. Create a new `.mdx` file in either `src/content/case-study/` or `src/content/getting-started/`.
2. Use a lowercase, hyphenated file name, such as `incident-reports.mdx`.
3. Add the required frontmatter.
4. Pick an `order` value that places the page where it belongs in the sidebar.
5. Run `npm run build` to catch missing or invalid fields.

## Adding Figures to MDX Pages

Article figures should usually live in `src/assets/figures/`. Keep related images grouped in folders so they are easy to find later.

To use a figure in an MDX page, import both the image and the `FigureImage` component at the top of the file after the frontmatter.

```mdx
---
title: "Demo Walkthrough"
description: "How the Oiva demo works."
section: "Case Study"
order: 5
---

import FigureImage from "../../components/FigureImage.astro";
import workflowImage from "../../assets/figures/700-agent/710-oiva-overview.excalidraw.svg";

## Investigation Flow

<FigureImage
  src={workflowImage}
  alt="Diagram showing Oiva receiving an alert, collecting evidence, and producing an investigation report."
  caption="Oiva investigation workflow."
/>
```

Use clear `alt` text that describes the image for someone who cannot see it. Use `caption` when the page needs visible context under the figure.

`FigureImage` also supports an optional `sourceLabel` and `sourceUrl` if the full-size link should point somewhere other than the image file.

## Changing the Logo

Oiva logo files live in `src/assets/logo/`.

The logo shown in the header and footer is controlled by `src/components/Logo.astro`.

Current imports:

```astro
import lightLogo from "../assets/logo/oiva_logo_green_02.svg";
import darkLogo from "../assets/logo/oiva_logo_white_02.svg";
```

- `lightLogo` is used in light theme.
- `darkLogo` is used in dark theme.

The logo folder has its own notes in `src/assets/logo/README.md`. Important current notes:

- `oiva_logo_green_01.svg` is the source of truth.
- If you modify `oiva_logo_green_01.svg`, update the other logo files to match.
- Logo font: Prompt from Google Fonts, medium `500` weight.
- RGB color: `49, 81, 60`.

To change which logo file appears on the site, update the imports in `src/components/Logo.astro`. To change the actual logo artwork, update the source logo and regenerate or update the theme variants.

## Updating Team Profiles

Team profile data lives in `src/data/team.ts`.

Each team member has this shape:

```ts
{
  name: "Jane Doe",
  location: "City, Region, Country",
  initials: "JD",
  githubUrl: "https://github.com/example",
  linkedinUrl: "https://www.linkedin.com/in/example/",
}
```

Required fields:

- `name`
- `location`
- `initials`

Optional fields:

- `emailUrl`
- `githubUrl`
- `linkedinUrl`

The team page currently renders initials-based avatar circles, not headshots. If headshots are added later, `src/components/TeamProfile.astro` and the `TeamMember` type in `src/data/team.ts` will need to be updated.

## Updating Navigation and Links

Top-level navigation and the GitHub URL live in `src/data/navigation.ts`.

```ts
export const githubUrl = "https://github.com/oiva-app/oiva";

export const navLinks = [
  {
    label: "Case Study",
    href: "/case-study/overview/",
    match: "/case-study/",
  },
];
```

For each navigation link:

- `label` is the text shown in the header.
- `href` is where the link goes.
- `match` is used to mark the link as active when the current URL starts with that path.

Footer links are in `src/components/Footer.astro`.

## Updating Homepage and Page Copy

The homepage is `src/pages/index.astro`.

Edit this file to change:

- Hero eyebrow, heading, and intro text.
- Homepage buttons.
- The workflow panel.
- The capability cards.
- The final next-step section.

The team page intro copy is in `src/pages/team.astro`.

Global default metadata lives in `src/layouts/BaseLayout.astro`:

```astro
const {
  title = "Oiva",
  description = "Oiva is an open-source, self-hosted service for AI-assisted incident investigation.",
} = Astro.props;
```

Individual pages can pass their own `title` and `description`, so only change these defaults when the site-wide fallback should change.

## Updating Favicons

Favicons live in `public/`:

```text
public/favicon.ico
public/favicon.svg
```

Files in `public/` are served from the site root without importing them. For example, `public/favicon.svg` is available at `/favicon.svg`.

The favicon links are declared in `src/layouts/BaseLayout.astro`.

## Updating Styles

Global styles live in `src/styles/global.css`.

This file contains:

- Color tokens for light and dark theme.
- Font stacks.
- Container widths.
- Shared spacing values.
- Shared button, prose, and draft label styles.

Most component-specific styles live inside the component's `.astro` file in a `<style>` block. For example:

- Header styles: `src/components/Header.astro`
- Footer styles: `src/components/Footer.astro`
- Team profile card styles: `src/components/TeamProfile.astro`
- Content page layout styles: `src/components/ContentPageLayout.astro`

Prefer changing the smallest relevant file. If a change applies everywhere, use `src/styles/global.css`. If it only affects one component, edit that component's style block.

## Before You Commit

Run:

```sh
npm run build
```

This checks that Astro can build the site, content frontmatter is valid, imports resolve, and routes can be generated.

For visual review, run:

```sh
npm run dev
```

Then spot-check:

- Homepage: `/`
- Case study pages: `/case-study/overview/`
- Getting started pages: `/getting-started/overview/`
- Team page: `/team/`
- Light and dark theme logo switching
