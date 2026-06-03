/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amazon-orange': '#ff9900',
        'myntra-pink': '#ff3f6c',
        'dark-premium': '#111111',
        'card-surface': '#ffffff',
        'text-main': '#282c3f',
        'text-muted': '#7e818c',
        'whatsapp-green': '#25d366',
        'gold-accent': '#b38b2d',
        'bg-light': '#f5f5f6',
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
