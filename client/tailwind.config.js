/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
     
      colors: {
        'blue-600': '#007bff',
        'blue-700': '#0056b3',
        'blue-800': '#003d7a',
        'gray-50': '#f9f9f9',
        'gray-100': '#f1f1f1',
        'gray-300': '#e5e5e5',
        'gray-800': '#333333',
        'gray-600': '#4a4a4a',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}