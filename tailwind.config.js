/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1320px',
    },
    extend: {
      colors: {
        "primary": "#007aff",
        "light": "#f0f2f5",
        "dark": "#1a1f2c",
        "dark-2": "#0e1018",
        "muted": "#576076",
      },
      boxShadow: {
        shadowMain: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'spin-very-slow': 'spin 80s linear infinite',
      },
    },
    fontFamily: {
      bricolage2: ['bricolage2'],
      bricolage3: ['bricolage3'],
      bricolage: ['bricolage'],
      bricolage5: ['bricolage5'],
      bricolage6: ['bricolage6'],
      bricolage7: ['bricolage7'],
      bricolage8: ['bricolage8'],
    }
  },
  plugins: [],
}

