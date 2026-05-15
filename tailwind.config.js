/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2D6A4F',
        light: '#40916C',
        dark: '#1B4332',
        50: '#D8F3DC',
        100: '#B7E4C7',
        200: '#74C69D',
        300: '#52B788',
        400: '#40916C',
        500: '#2D6A4F',
        600: '#1B4332',
        700: '#081C15',
      },
      accent: {
        DEFAULT: '#52B788',
        light: '#74C69D',
      },
      dark: {
        DEFAULT: '#1A1A2E',
        nav: '#1C1C1C',
        card: '#111827',
      },
      neutral: {
        warm: '#F9F6F0',
        light: '#F5F5F5',
      }
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
    },
    boxShadow: {
      'card': '0 4px 24px rgba(0,0,0,0.08)',
      'card-hover': '0 8px 40px rgba(0,0,0,0.14)',
      'btn': '0 4px 14px rgba(45,106,79,0.35)',
    },
    animation: {
      'fade-up': 'fadeUp 0.6s ease-out forwards',
      'fade-in': 'fadeIn 0.5s ease-out forwards',
    },
    keyframes: {
      fadeUp: {
        '0%': { opacity: '0', transform: 'translateY(24px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
},
plugins: [],
}
