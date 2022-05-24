module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideOver: {
          '0%': {left: 0},
          '100%': {left: '-100px'}
        }
      }
    },
  },
  plugins: [],
}