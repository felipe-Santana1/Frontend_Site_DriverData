/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#54DA89',
          dark: '#0A96EC',
        },
        background: '#040509',
        card: '#171717',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #54DA89 0%, #0A96EC 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(4, 5, 9, 0.2) 0%, rgba(254, 227, 213, 0.07) 50%, rgba(255, 165, 193, 0.07) 100%)',
        'gradient-nav': 'linear-gradient(135deg, rgba(4, 5, 9, 0.14) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(254, 227, 213, 0.07) 0%, rgba(255, 165, 193, 0.07) 100%)',
      },
      backdropBlur: {
        'glass': '24px',
      }
    },
  },
  plugins: [],
}
