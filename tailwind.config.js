/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./resources/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        genshin: {
          purple: '#667eea',
          pink: '#f5576c',
          cyan: '#00f2fe',
          gold: '#f6b93b',
        }
      }
    },
  },
  plugins: [],
}
