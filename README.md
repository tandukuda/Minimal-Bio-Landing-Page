# 🧬 Minimal Bio Landing Page

Live Site → [web-3-eight.vercel.app](https://web-3-eight.vercel.app)

A minimalist, personal landing page built with **React**, **TypeScript**, and **Vite**. Inspired by modern developer portfolios, this layout features a looping background animation and two floating cards: one for a short personal bio and another for key links (socials, prints, contact, etc.).

---

## ✨ Features

- ⚛️ Built with React + TypeScript
- 🎥 Custom background animation (YouTube-embedded or replaceable)
- 📝 Top-left **bio card** with your intro
- 🔗 Bottom-left **links card** for navigation
- 📱 Fully responsive layout (mobile-first design)
- 🖋 Typography using [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- 🌐 Deploys instantly with GitHub + Vercel

---

## 📂 Folder Structure (Simplified)

```
my-landing-page/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/      # Layout, cards, and animation container
│   ├── styles/          # Global styles using JetBrains Mono
│   ├── types/           # TypeScript interfaces
│   ├── App.tsx          # App entry
│   └── index.tsx        # React 18 root
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

To preview locally:

```bash
npm run preview
```

---

## 🎨 Customization

### Replace the Background Animation
- Swap out `BackgroundAnimation.tsx` with your own embed, video, or canvas-based loop

### Update the Bio & Links
- Edit content directly in `BioCard.tsx` and `LinksCard.tsx`
- Links can be hardcoded or later read from a config/data file

### Fonts & Styling
- Font is imported in `global.css` from Google Fonts → [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 📦 Built With

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- [Vercel](https://vercel.com) for hosting

---

## 🧪 License

MIT — free to use, modify, and share.

---

Made with ☕ by [@tandukuda](https://github.com/tandukuda)
