/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1420',
          soft: '#141B2B',
          line: '#232C40',
        },
        bone: '#EDEAE0',
        slate: {
          soft: '#9CA3B5',
        },
        saffron: '#F2A93B',
        rose: '#D96C8C',
        teal: '#3EC9A7',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle, #232C40 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
