# Full Stack Developer Portfolio

A modern, developer-themed portfolio built with **React + Vite + Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

To build for production:

```bash
npm run build
```

The optimized site will be in the `dist/` folder — deploy it to Vercel, Netlify, GitHub Pages, or any static host.

## Editing Your Content

**Everything you need to personalize lives in one file:**

```
src/data/portfolioData.js
```

Edit this file to update:
- Name, role, tagline, location, email
- GitHub & LinkedIn links
- Professional summary & about me
- Technical skills
- Work experience
- Projects (with GitHub + live demo links)
- Education
- Certifications

## Adding Your Real CV

1. Export your resume as a PDF.
2. Rename it to `resume.pdf`.
3. Place it in the `public/` folder, replacing the sample file already there.

The "Download CV" button automatically links to `/resume.pdf` — no code changes needed.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Editor-tab-style navigation
│   ├── Hero.jsx          # Landing section with typing animation
│   ├── About.jsx         # About me + professional summary
│   ├── Skills.jsx        # Technical skills + certifications
│   ├── Experience.jsx    # Work experience timeline
│   ├── Projects.jsx      # Project cards with links
│   ├── Education.jsx     # Education history
│   ├── Contact.jsx       # Contact form (opens email client)
│   └── Footer.jsx
├── data/
│   └── portfolioData.js  # <-- EDIT YOUR INFO HERE
├── App.jsx
├── main.jsx
└── index.css
```

## How Contact Works

The contact form uses a `mailto:` link — when submitted, it opens the visitor's default email client
with your email address, their name/email, and their message pre-filled. No backend or email service
required.

## Tech Stack

- React 18 + Vite
- Tailwind CSS 3
- react-icons

## Customizing the Theme

Colors, fonts, and animations are defined in `tailwind.config.js` and `src/index.css`. The current theme
uses a dark "code editor" aesthetic (JetBrains Mono + Inter, teal/amber accents) — feel free to adjust
the `colors` object in `tailwind.config.js` to match your personal brand.
