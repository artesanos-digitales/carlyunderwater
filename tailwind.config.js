/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        deep: {
          900: '#020617',
          800: '#0f172a',
          700: '#1e293b',
        },
        ocean: {
          900: '#082f49',
          800: '#0c4a6e',
        },
        neon: {
          cyan: '#22d3ee',
        },
      },
    },
  },
  plugins: [],
}
