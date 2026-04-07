/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yt-black': '#0f0f0f',
        'yt-dark': '#1a1a1a',
        'yt-card': '#212121',
        'yt-hover': '#2a2a2a',
        'yt-border': '#333333',
        'yt-red': '#ff0000',
        'yt-red-hover': '#cc0000',
        'yt-text': '#ffffff',
        'yt-text-secondary': '#aaaaaa',
        'yt-text-muted': '#717171',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 0, 0, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}