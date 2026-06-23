/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // دارک مود با class روی html
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // DE: Playfair Display — کلاسیک آلمانی
        playfair: ['"Playfair Display"', 'serif'],
        // EN: Space Grotesk — مدرن
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        // TR: Nunito — خوانا
        nunito: ['Nunito', 'sans-serif'],
        // FA: Vazirmatn — فارسی
        vazir: ['Vazirmatn', 'sans-serif'],
        // Mono همه زبان‌ها
        mono: ['"JetBrains Mono"', 'monospace'],
        // پایه
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Dark theme
        d: {
          bg:       '#0a0c10',
          surface:  '#131720',
          s2:       '#1a2030',
          border:   '#242c3a',
          b2:       '#2e3848',
          text:     '#dde3ed',
          text2:    '#9aaabb',
          muted:    '#6a7a90',
        },
        // Light theme
        l: {
          bg:       '#f0f2f6',
          surface:  '#ffffff',
          s2:       '#e8edf5',
          border:   '#d0d8e8',
          b2:       '#b8c4d8',
          text:     '#1a2235',
          text2:    '#3a4a60',
          muted:    '#6a7a95',
        },
        accent:  '#e8a020',
        blue:    '#4fa3e0',
        lblue:   '#1a7ac0',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
