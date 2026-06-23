# Taher Seifi — CNC Portfolio

React + Vite + Tailwind CSS پروژه

## راه‌اندازی

```bash
# 1. نصب dependencies
npm install

# 2. اجرای محیط توسعه
npm run dev
# سایت روی http://localhost:5173 باز میشه

# 3. Build برای production
npm run build
# فایل‌های نهایی در پوشه dist/ ساخته میشن

# 4. پیش‌نمایش build
npm run preview
```

## ساختار پروژه

```
taher-seifi-portfolio/
├── public/
│   └── img/                    ← همه عکس‌ها اینجان
│       ├── p01_leg_finished.jpg
│       ├── p02_puzzle_*.jpg
│       ├── p03_table_*.jpg
│       ├── p04_slab_*.jpg
│       ├── p05_dome_*.jpg
│       ├── p06_foam_*.jpg
│       ├── p07_engraving.jpg
│       ├── p08_alphacam_*.jpg
│       └── gallery_*.jpg
│
├── src/
│   ├── data/
│   │   ├── translations.js     ← ترجمه‌های DE/EN/TR/FA
│   │   └── projects.js         ← داده‌های پروژه‌ها + گالری
│   │
│   ├── components/
│   │   ├── Navbar.jsx          ← نوار ناوبری
│   │   ├── ProjectCard.jsx     ← کارت پروژه
│   │   ├── GallerySlider.jsx   ← اسلایدر گالری
│   │   ├── CVPage.jsx          ← صفحه رزومه
│   │   └── Lightbox.jsx        ← بزرگ‌نمایی عکس
│   │
│   ├── App.jsx                 ← کامپوننت اصلی
│   ├── main.jsx                ← entry point
│   └── index.css               ← Tailwind + استایل‌های پایه
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## تغییر عکس‌ها

فایل `src/data/projects.js` رو باز کن.
هر پروژه یه `main` و یه آرایه `thumbs` داره.
فقط نام فایل رو عوض کن — عکس باید در `public/img/` باشه.

## آپلود روی GitHub Pages

```bash
npm run build
# پوشه dist/ رو به GitHub آپلود کن
# Settings → Pages → Branch: main → /dist
```

یا با `gh-pages` package:
```bash
npm install -D gh-pages
# در package.json اضافه کن:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## تکنولوژی‌ها

- **React 18** — UI library
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Styling
- **PostCSS + Autoprefixer** — CSS processing
