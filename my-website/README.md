# CJ Barreiro's Portfolio Website

A professional portfolio website showcasing projects, experience, and skills in software engineering.

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Environment Configuration

For any future environment-specific variables (API keys, analytics IDs, etc.):

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Add your environment variables to `.env.local` (this file is git-ignored)

3. Access in your code:
   ```tsx
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## Deployment

### Pre-Deployment Checklist

Before deploying to production, ensure the following:

- [ ] All public files exist in `public/` folder:
  - `headshot.jpeg`
  - `headshot-circle.png`
  - `CJ_Barreiro_Resume.pdf`
- [ ] Run `npm run lint` to check for code issues
- [ ] Run `npm run build` and `npm run preview` locally to test production build
- [ ] Test responsive design on mobile, tablet, and desktop
- [ ] Test all links open in new tabs correctly
- [ ] Verify PDF preview and download buttons work on both desktop and mobile
- [ ] Update custom domain in `index.html` og:url meta tag if not using `vercel.app`
- [ ] Review all content for typos and accuracy

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings from `vercel.json`
6. Click "Deploy"

Your site will be live at `your-project.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Header.tsx    # Navigation header
│   ├── EducationCard.tsx
│   ├── ExperienceCard.tsx
│   └── ProjectCard.tsx
├── pages/            # Page components
│   ├── AboutMe.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/
│   └── db.json       # Centralized data
└── App.tsx           # Main app with routing
```

## Performance

- Production build size: ~72 KB (gzipped)
- Responsive design (mobile, tablet, desktop)
- SEO optimized with meta tags
- Fast load times with Vite

## License

© 2026 CJ Barreiro
