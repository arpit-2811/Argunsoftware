/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F44',
        electric: {
          DEFAULT: '#1E63D6',
          hover: '#1552B8',
        },
        bgOffwhite: '#F9FAFB',
        charcoal: '#1F2937',
        mutedGrey: '#6B7280',
        borderGrey: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
