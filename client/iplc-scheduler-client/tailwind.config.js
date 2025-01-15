/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        secondary: '#0073e6',
        accent: {
          lime: '#8CC63F',
          orange: '#FFA500',
          yellow: '#FFD700',
        },
        background: {
          light: '#F0F0F0',
          white: '#FFFFFF',
        },
        text: {
          dark: '#333333',
          blue: '#0057B8',
        },
      },
    },
  },
  plugins: [],
}
