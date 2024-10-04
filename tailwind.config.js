import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    fontFamily: {
      sans: ['"Eudoxus Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        // semantic
        background: '#F9F9F9',

        // 
        luminescentGreen: '#66FF99',
        neonBlue: '#33CCFF',
        darkLuminescentGreen: '#004D33',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

