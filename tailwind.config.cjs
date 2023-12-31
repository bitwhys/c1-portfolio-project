const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        neutral: {
          1: 'var(--neutral-1)',
          2: 'var(--neutral-2)',
          3: 'var(--neutral-3)',
          4: 'var(--neutral-4)',
          5: 'var(--neutral-5)',
          6: 'var(--neutral-6)',
          7: 'var(--neutral-7)',
          8: 'var(--neutral-8)',
          9: 'var(--neutral-9)',
          10: 'var(--neutral-10)',
          11: 'var(--neutral-11)',
          12: 'var(--neutral-12)',
          a1: 'var(--neutral-a1)',
          a2: 'var(--neutral-a2)',
          a3: 'var(--neutral-a3)',
          a4: 'var(--neutral-a4)',
          a5: 'var(--neutral-a5)',
          a6: 'var(--neutral-a6)',
          a7: 'var(--neutral-a7)',
          a8: 'var(--neutral-a8)',
          a9: 'var(--neutral-a9)',
          a10: 'var(--neutral-a10)',
          a11: 'var(--neutral-a11)',
          a12: 'var(--neutral-a12)',
        },
        brand: {
          1: 'var(--brand-1)',
          2: 'var(--brand-2)',
          3: 'var(--brand-3)',
          4: 'var(--brand-4)',
          5: 'var(--brand-5)',
          6: 'var(--brand-6)',
          7: 'var(--brand-7)',
          8: 'var(--brand-8)',
          9: 'var(--brand-9)',
          10: 'var(--brand-10)',
          11: 'var(--brand-11)',
          12: 'var(--brand-12)',
          a1: 'var(--brand-a1)',
          a2: 'var(--brand-a2)',
          a3: 'var(--brand-a3)',
          a4: 'var(--brand-a4)',
          a5: 'var(--brand-a5)',
          a6: 'var(--brand-a6)',
          a7: 'var(--brand-a7)',
          a8: 'var(--brand-a8)',
          a9: 'var(--brand-a9)',
          a10: 'var(--brand-a10)',
          a11: 'var(--brand-a11)',
          a12: 'var(--brand-a12)',
        },
        accent: {
          1: 'var(--accent-1)',
          2: 'var(--accent-2)',
          3: 'var(--accent-3)',
          4: 'var(--accent-4)',
          5: 'var(--accent-5)',
          6: 'var(--accent-6)',
          7: 'var(--accent-7)',
          8: 'var(--accent-8)',
          9: 'var(--accent-9)',
          10: 'var(--accent-10)',
          11: 'var(--accent-11)',
          12: 'var(--accent-12)',
          a1: 'var(--accent-a1)',
          a2: 'var(--accent-a2)',
          a3: 'var(--accent-a3)',
          a4: 'var(--accent-a4)',
          a5: 'var(--accent-a5)',
          a6: 'var(--accent-a6)',
          a7: 'var(--accent-a7)',
          a8: 'var(--accent-a8)',
          a9: 'var(--accent-a9)',
          a10: 'var(--accent-a10)',
          a11: 'var(--accent-a11)',
          a12: 'var(--accent-a12)',
        },
        overlay: {
          1: 'var(--overlay-1)',
          2: 'var(--overlay-2)',
          3: 'var(--overlay-3)',
          4: 'var(--overlay-4)',
          5: 'var(--overlay-5)',
          6: 'var(--overlay-6)',
          7: 'var(--overlay-7)',
          8: 'var(--overlay-8)',
          9: 'var(--overlay-9)',
          10: 'var(--overlay-10)',
          11: 'var(--overlay-11)',
          12: 'var(--overlay-12)',
        },
        //   semantic colors
        background: 'var(--background)',
        'background-inverted': 'var(--background-inverted)',
        foreground: 'var(--foreground)',
        'foreground-inverted': 'var(--foreground-inverted)',
      },
      textColor: {
        foreground: 'var(--foreground)',
        muted: 'var(--foreground-muted)',
      },
      fontFamily: {
        sans: ['Visby CF', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Sans',...defaultTheme.fontFamily.mono]
      },
      gridTemplateColumns: {
        split: '.5fr .6fr 1.25fr .5fr',
      },
      transitionTimingFunction: {
        shrink: 'cubic-bezier(0.19,1,0.22,1)'
      },
      borderRadius: {
        DEFAULT: 'var(--radius-3)',
        xs: 'var(--radius-1)',
        sm: 'var(--radius-2)',
        lg: 'var(--radius-4)',
        xl: 'var(--radius-5)',
        '2xl': 'var(--radius-6)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(--shadow-3)',
        4: 'var(--shadow-4)',
        5: 'var(--shadow-5)',
        6: 'var(--shadow-6)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, addComponents }) {}),
  ],
}
