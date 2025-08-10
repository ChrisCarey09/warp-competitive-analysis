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
          cream: '#faf9f6',
          black: '#000000',
          'text-primary': '#121212',
          'text-secondary': '#4a4a4a',
          'text-tertiary': '#6b7280',
          'bg-primary': '#ffffff',
          'bg-secondary': 'rgba(0, 0, 0, 0.03)',
          'bg-tertiary': 'rgba(0, 0, 0, 0.05)',
          'border': 'rgba(0, 0, 0, 0.1)',
          'accent': '#4F46E5',
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
