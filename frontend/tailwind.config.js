/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['public/*.html', './src/**/*.js', './src/**/*.jsx', './src/*.jsx'],
  theme: {
    screens: {
      ...defaultTheme.screens,
      'xs': '350px',
      'sm': '500px',
      'lg': '1500px'
    },
    extend: {
      colors: {
        'ruby-red': '#9B111E',
      },
    }
  },
  plugins: [],
}

