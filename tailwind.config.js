module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        pantane: {
          50: '#f9fbff',
          100: '#eef7ff',
          300: '#7ad0ff',
          500: '#2bb8ff',
          700: '#0077cc'
        },
        youth: {
          500: '#ff6b6b',
          600: '#ff4757'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};