/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("./src/ui/tailwind.config")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        grotesk: ['Overused Grotesk', 'sans-serif'],
        instrument: ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

