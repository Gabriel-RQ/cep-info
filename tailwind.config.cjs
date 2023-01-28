/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,svelte}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        "top": "top",
        "bg": "background",
      }
    },
  },
  plugins: [],
}
