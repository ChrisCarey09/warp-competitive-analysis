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
          black: '#000000',
          'off-white': '#faf9f6',
          'text-primary': 'rgba(250, 249, 246, 0.9)',
          'text-secondary': 'rgba(250, 249, 246, 0.7)',
          'text-tertiary': 'rgba(250, 249, 246, 0.5)',
          'bg-secondary': 'rgba(41, 41, 41, 0.5)',
          'bg-tertiary': 'rgba(250, 249, 246, 0.1)',
          gray: '#6B7280',
        },
      },
      fontFamily: {
        'warp-sans': ['system-ui', 'sans-serif'],
        'warp-mono': ['Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
