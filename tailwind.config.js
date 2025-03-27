/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        primary: '#0747A7', //
        secondary: '#E9A876',
        element: '#E9A876',
        background: '#FFFDF2',
        text: '#212529',
        text2: '#ffffff',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

