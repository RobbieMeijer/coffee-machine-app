module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        light: '#aed7a0',
        DEFAULT: '#9bc88b',
        dark: '#219652',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
