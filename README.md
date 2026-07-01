# Fabian Hernandez Flores — Portfolio

Software Engineer · Embedded Systems · Dark-maroon single-page site.

[![Deploy](https://github.com/fabianhdz/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/fabianhdz/portfolio/actions/workflows/deploy.yml)
![No build step](https://img.shields.io/badge/build-none-c9a227?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/stack-HTML%20·%20CSS%20·%20JS-2e0707?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-2e0707?style=flat-square)

A single-page personal portfolio — plain HTML, CSS, and JS. No frameworks, no bundler,
no build step. Dark maroon theme, subtle triangle texture, gold accent.

**Sections:** About → Experience → Projects → Skills → Contact

## 🚀 Quick start

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Or just double-click `index.html`.

## 📦 Structure

| Path | What |
|------|------|
| `index.html` | All page content / sections |
| `projects/` | Individual project case-study pages |
| `assets/projects/` | Project photos, diagrams, and design media |
| `assets/resume.pdf` | Resume linked from the hero and contact sections |
| `css/styles.css` | Theme variables, styling, responsive rules |
| `js/main.js` | Mobile nav, active-section highlight, scroll reveals |
| `.github/workflows/` | GitHub Pages deploy workflow |
| `.nojekyll` | Skip Jekyll on Pages |

## ✏️ Make it yours

Everything is placeholder text — search `index.html` and swap in your own:

| What | Where |
|------|-------|
| Intro paragraph | `#about` → `.hero__about` |
| Experience (role, company, dates, bullets, tags) | `#experience` → each `.exp` article |
| Projects (title, copy, tags, repo link) | `#projects` → each `.card--project` `href` |
| "See more" GitHub link | `.projects__more` |
| Skills | `#skills` → `.tags--lg` lists |
| Email · LinkedIn · GitHub · Resume | `#contact` |

**Recolor it:** edit `--gold` / `--gold-soft` (accent) or `--maroon-*` (base) in
`css/styles.css` `:root`. If you change the maroon, also update the two hex colors in
the `body` rule's `background-image` SVG so the texture matches.

## 🌐 Deploy (GitHub Pages)

1. Push to GitHub (`main`).
2. **Settings → Pages → Source → GitHub Actions**.
3. Every push to `main` auto-publishes (see the **Actions** tab; or **Run workflow** manually).

Live at `https://fabianhz.me/`.
