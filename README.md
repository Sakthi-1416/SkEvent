# SK Events — React + Vite + Bootstrap

A professional single-page event management website built with **React 18**, **Vite 5**, and **Bootstrap 5**.

## Tech Stack
- **React 18** — Component-based UI
- **Vite 5** — Lightning-fast dev server & bundler
- **Bootstrap 5.3** — Responsive grid & utilities
- **Bootstrap Icons** — Icon library
- **Custom CSS** — Black & gold luxury theme, animations, component styles

## Project Structure

```
sk-events/
├── index.html               # Root HTML for Vite (with full SEO meta tags)
├── vite.config.js           # Vite + React plugin config
├── package.json
├── public/                  # Static assets (favicon etc.)
└── src/
    ├── main.jsx             # React root render
    ├── App.jsx              # Root component + scroll reveal
    ├── styles/
    │   └── App.css          # CSS variables, animations, all custom styles
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Stats.jsx
        ├── Services.jsx
        ├── Works.jsx
        ├── About.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server — opens at http://localhost:5173
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
