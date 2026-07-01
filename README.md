# Fabian Hernandez Flores — Portfolio

This repository contains my personal portfolio, where I share my experience and
projects in embedded systems, robotics, and AI.


[View the live site](https://fabianhz.me/)

## About the site

The main page includes my background, work experience, technical skills, and
contact information. Each featured project also has its own page with more detail,
including photos, diagrams, technical decisions, and links to the source code.

## Running it locally

Start a local server from the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

## Project structure

| Path | Contents |
| --- | --- |
| `index.html` | Main portfolio page |
| `projects/` | Individual project pages |
| `assets/projects/` | Project photos, diagrams, and other media |
| `assets/resume.pdf` | Resume linked from the site |
| `css/` | Site and project-page styles |
| `js/main.js` | Navigation and scroll interactions |

## Deployment

The site is hosted with GitHub Pages and deployed automatically from `main` using
GitHub Actions.
