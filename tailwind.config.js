module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
