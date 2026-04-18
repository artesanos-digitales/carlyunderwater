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
          lime: '#bef264',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-5%) scale(1.05)' },
          '50%': { transform: 'translateX(5%) scale(1.1)' },
          '100%': { transform: 'translateX(-5%) scale(1.05)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 15px rgba(34,211,238,0.5)' },
          '50%': { opacity: 0.7, boxShadow: '0 0 30px rgba(34,211,238,0.8)' },
        },
      },
    },
  },
  plugins: [],
}
