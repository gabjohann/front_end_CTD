/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#102766',
        title: '#343434',
        placeHolder: '#545454',
        brightRed: '#E84118',
        brightGreen: '#0FBA3F',
        borderColor: '#C7C4C4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
