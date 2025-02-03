/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2C5530',
        'earth-brown': '#7B553B',
        'deep-blue': '#1B4965',
        'off-white': '#F5F5F5',
        'text-dark': '#333333',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        'scale-1': '1.2rem',
        'scale-2': '1.44rem',
        'scale-3': '1.728rem',
        'scale-4': '2.074rem',
        'scale-5': '2.488rem',
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
      },
    },
  },
  plugins: [],
};