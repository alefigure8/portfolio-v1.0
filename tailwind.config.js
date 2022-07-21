/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    fontFamily: {
      Mplus: ["M PLUS Rounded 1c", "sans-serif"],
      sans: ['ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}
