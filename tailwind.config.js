/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A0A', // A very dark background
        'dark-surface': '#1A1A1A', // Slightly lighter dark for cards/sections
        'accent-purple': '#BB86FC', // A vibrant purple
        'accent-blue': '#03DAC6', // A vibrant teal/blue
        'text-light': '#E0E0E0', // Light text for dark backgrounds
        'text-muted': '#B0B0B0', // Muted text for secondary info
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter as a modern sans-serif font
      },
    },
  },
  plugins: [],
}