/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FF4EA5",
        secondary: '#FFF1F8',
        background: '#E6EDFF',
      }
    },
  },
  plugins: [],
}

