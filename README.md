# Fabian Hernandez Flores — Portfolio

This repository contains my personal portfolio, where I share my experience and
projects in embedded systems, robotics, and AI.


[View the live site](https://fabianhz.me/)

## About the site

The main page includes my background, work experience, technical skills, and
contact information. Each featured project also has its own page with more detail,
including photos, diagrams, technical decisions, and links to the source code.

The [projects catalog](https://fabianhz.me/projects/) includes all eleven projects,
organized into five disciplines, with reinforcement learning included under AI /
Machine Learning. A compact category dropdown also finds related projects across
sections, and a side rail provides category navigation and scroll progress.
The AI / Machine Learning projects, HelpingHand, and TorrentForge link directly
to GitHub. LLM-Foraging links to its [arXiv paper](https://arxiv.org/abs/2605.01461),
and Autonomous Drone opens a local MP4 flight demonstration. The three featured
projects retain their detailed pages. The catalog remains readable without
JavaScript.

## Running it locally

Start a local server from the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.
The projects page is at [http://localhost:8000/projects/](http://localhost:8000/projects/).

## Project structure

| Path | Contents |
| --- | --- |
| `index.html` | Main portfolio page |
| `projects/index.html` | Projects catalog and category sections |
| `projects/` | Catalog and individual featured-project pages |
| `assets/projects/` | Project photos, diagrams, and other media |
| `assets/resume.pdf` | Resume linked from the site |
| `css/` | Shared styles, project detail styles, and catalog styles |
| `js/main.js` | Navigation and scroll interactions |
| `js/projects.js` | Catalog filters and restoration of category sections |

To add a catalog entry, put its card in one primary section in
`projects/index.html`. Set `data-category` to that section's ID and `data-tags` to
the space-separated category IDs that should match its filters. Visible technology
tags are separate from these filter categories. Cards remain static HTML; the
filter script moves the same cards into one results grid and restores them when
**All** is selected. Update the initial project count for visitors without JavaScript
when adding or removing entries.

## Deployment

The site is hosted with GitHub Pages and deployed automatically from `main` using
GitHub Actions.

The deployment also builds the `main` branch of
[`fabianhdz/scrawler`](https://github.com/fabianhdz/scrawler) with Node.js 24 and
includes its static output at [fabianhz.me/scrawler/](https://fabianhz.me/scrawler/).
Scrawler's source and dependencies are kept outside the published portfolio.

After pushing an update to Scrawler, run this repository's **Deploy to GitHub
Pages** workflow from the Actions tab, or use:

```bash
gh workflow run deploy.yml --repo fabianhdz/portfolio --ref main
```

Each portfolio deployment includes the latest Scrawler build.
