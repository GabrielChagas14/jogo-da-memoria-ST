/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#333',
        'st-red': '#be0316',
        'pink': '#ee665c',
        'light-gray': '#eee',
        'gray': '#aaa',
        'transparent-white': 'rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        'pressStart': ["'Press Start 2P'", 'cursive']
      },
      aspectRatio: {
        '3/4': '3/4',
      },
      backgroundImage: {
        'cover-1': "url('/src/assets/cover-3.jpg')",
        'main': "url('/src/assets/bg.jpeg')",
      }
    },
  },
  plugins: [],
}
