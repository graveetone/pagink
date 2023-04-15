/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['public/*.html', './src/**/*.js', './src/**/*.jsx', './src/*.jsx'],
  theme: {
    screens: {
      ...defaultTheme.screens,
      'xs': '350px',
      'sm': '500px'
    }
  },
  plugins: [],
}

