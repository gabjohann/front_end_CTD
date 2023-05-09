/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: ['src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#512DA8',
        secondaryColor: '#F3BD30',
        textColor: '#2E2E2E',
        borderColor: '#C3C3C3',
      },
      fontFamily: {
        sans: ['Ubuntu', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
