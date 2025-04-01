/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        primary: '#3f704d',
        secondary: '#E9A876',
        element: '#E9A876',
        background: '#FFFDF2',
        text: '#212529',
        text2: '#ffffff',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
      },
      margin: {
        '128': '32rem', // 512px
        '160': '40rem', // 640px
        '192': '48rem', // 768px
      },
    },
  },
  plugins: [],
};

