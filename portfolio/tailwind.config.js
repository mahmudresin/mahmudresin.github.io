/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Keep ALL Tailwind defaults (including neutral, slate, zinc, etc.)
    // then extend with custom additions
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
        'ultra': '0.4em',
      },
    },
  },
  plugins: [],
}
