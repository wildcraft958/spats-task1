/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': '540px',
      },
      'demo' : 'url("demo.png")',
      height: {
        '500': '500px',
        '800': '800px',
      },
    },
  },
  plugins: [],
}