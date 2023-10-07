/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'warna1': '#222831',
        'warna2': '#393E46',
        'warna3': '#00ADB5',
        'warna4': '#00FFF5',
        'warna5': '#5D12D2',
        'warna6': '#0E8388',
        'warna7': '#0E8388'
      },
      fontFamily: {
        'roboto_slab': ['Roboto', 'serif'],
      },
      keyframes: {
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

