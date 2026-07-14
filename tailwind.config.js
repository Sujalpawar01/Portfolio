/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        accent: { DEFAULT: '#5E6AD2', light: '#7C85DC', dark: '#4A54B8' },
      },
    },
  },
  plugins: [],
}
