# Sakshi Gosavi — Portfolio

React + TypeScript + Vite. Plain CSS, no UI library, so every line is yours to understand.

## 1. Run it on your computer

1. Install Node.js (LTS version) from nodejs.org.
2. Open a terminal in this folder and run:
   ```
   npm install      # downloads React, Vite, TypeScript (once)
   npm run dev      # starts the site at http://localhost:5173
   ```
3. Open the link. Edit any file and save: the browser updates instantly.

## 2. How the project is organized

```
index.html              the single HTML page; React fills <div id="root">
public/                 files served as-is (resume PDF)
src/main.tsx            entry point: renders <App /> into the page
src/App.tsx             page layout: lists the sections in order
src/styles.css          all styling (colors at the top as variables)
src/data/content.ts     ALL text on the site; edit this to update content
src/components/         one file per section
  Section.tsx           reusable wrapper every section uses
  Header.tsx            top menu
  Hero.tsx + Target.tsx first screen + the shooting-target graphic
  About / Experience / Projects / Skills / Contact
```

Rule of thumb: text goes in `content.ts`, structure in `components/`, looks in `styles.css`.

## 3. Learn it in this order

Read the files in this order. Each one adds one React idea.

1. **main.tsx** — how React starts.
2. **App.tsx** — components are functions that return HTML-like code (JSX). Sections are combined like building blocks.
3. **About.tsx** — `.map()` turns an array of data into elements, and why each needs a `key`.
4. **Section.tsx** — props: passing inputs into a component, and `children`.
5. **Projects.tsx** — conditional rendering with `&&` (only show a link if it exists).
6. **content.ts** — TypeScript types: describing the shape of data so mistakes get caught early.
7. **styles.css** — CSS variables, grid layout, dark mode, media queries, reduced motion.

## 4. Practice tasks (do them yourself)

1. Replace `YOUR-USERNAME` in `content.ts` with your real GitHub username.
2. Add a second job or change a bullet point in `content.ts`, and watch the timeline update.
3. Change `--navy` in `styles.css` to another color and see the whole site change.
4. Add a new project object to the `projects` array.
5. Harder: add a "Certificates" section. Create `Certificates.tsx` using `<Section>`, add the data to `content.ts`, and place it in `App.tsx`.
6. Harder: use `useState` to add a button that shows or hides the second experience entry.

Only list React and TypeScript in the resume once you can explain these files in an interview.

## 5. Put it online (free)

1. Create a GitHub repository named `portfolio` and push this folder:
   ```
   git init
   git add .
   git commit -m "First version of portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com, sign in with GitHub, choose **Add New → Project**, select `portfolio`, click **Deploy**. Vercel detects Vite automatically.
3. You get a live link like `portfolio-xyz.vercel.app`. Every `git push` updates the site.
4. Add the live link to your resume header, LinkedIn and the project's `liveUrl`.

## 6. Check quality

In Chrome, open DevTools → Lighthouse → run a report. Aim for 95+ in Performance and Accessibility. Screenshot the result for interviews.
