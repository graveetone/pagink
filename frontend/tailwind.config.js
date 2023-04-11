/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.html', './src/**/*.js', './src/**/*.jsx', './src/*.jsx'],
  theme: {
    screens: {
      'sm': '300px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

