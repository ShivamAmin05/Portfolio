/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sky' : "url('/Parallax/Sky.png')",
      },
      colors: {
        mountain : '#1A1644'
      }
    },
  },
  plugins: [],
}

