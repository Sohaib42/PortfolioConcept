module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gradientColorStops: {
        'primary': ['#6B2C70', '#D62B95'],
        'secondary': ['#256EFF', '#23C6B6'],
        'accent': ['#F8770D', '#FFC30D'],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')]
};
