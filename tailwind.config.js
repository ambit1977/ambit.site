/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        paper: '#FAFAF7',
        mist: '#F1F1EC',
        hairline: '#E5E5DF',
        signal: '#1F6FEB',
        highlight: '#E8F0FF',
        'text-sub': '#5B5B58',
        success: '#2E7D5B',
        warn: '#B5651D',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
        jp: ['Noto Sans JP', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        display: '-0.02em',
        h1: '-0.01em',
        mono: '0.12em',
      },
      animation: {
        reveal: 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        reveal: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
