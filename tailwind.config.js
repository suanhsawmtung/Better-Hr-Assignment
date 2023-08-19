/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'table-box': '-1px 0px 15px rgba(0, 0, 0, 0.10)',
        'tiny': '5px 0px 5px 0px rgba(0, 0, 0, 0.06)'
      },
      colors: {
        'hr': '#1ED292',
        'side-one': '#E1E3E5',
        'side-two': '#F5F5F5',
        'side': '#757575',
        'bot': '#8A8A8A',
        'header': '#4A4A4A',
        'th': '#454545',
      },
    },
  },
  plugins: [],
}

