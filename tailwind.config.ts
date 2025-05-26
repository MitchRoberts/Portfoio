// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'], // if Geist is default
        mono: ['var(--font-geist-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'], // ✅ this adds `font-inter`
      },
    },
  },
  plugins: [],
};

export default config;
