/** @type {import('tailwindcss').Config} */

'use strict';

module.exports = {
  darkMode: 'media',
  content: ['./www/**/*.{html,js}'],
  theme: {
    screens: {
      xxs: '450px',
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
};
