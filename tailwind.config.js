/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warp: {
          blue: '#4F46E5',
          purple: '#7C3AED',
          green: '#10B981',
          gray: '#6B7280',
        },
      },
    },
  },
  plugins: [],
}
