/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            transform: 'translateX(-30px)',
            opacity: 0
          },
          '1000%': {
            transform: 'translateX(0px)',
            opacity: 1
          }
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out ',
      }
    },
  },
  plugins: [],
}

