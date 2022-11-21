/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '120': '560px',
      },
      spacing: {
        '37%': '37.5%'
      }
    },
  },
  plugins: [],
};
