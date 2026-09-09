module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        heading: ['var(--font-geist-sans)', 'sans-serif'],
        mono: [
          'var(--font-geist-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      fontSize: {
        hero: [
          'clamp(2rem, 4.2vw, 3.25rem)',
          { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        'section-title': [
          'clamp(1.5rem, 3vw, 2.125rem)',
          { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        subsection: [
          'clamp(1.125rem, 2vw, 1.25rem)',
          { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'body-lg': ['1rem', { lineHeight: '1.65' }],
        metadata: ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      maxWidth: {
        container: '1200px',
        'prose-wide': '680px',
      },
      borderRadius: {
        card: '12px',
      },
      spacing: {
        section: 'clamp(2.5rem, 5vw, 4.5rem)',
      },
      colors: {
        /* Backgrounds */
        'dark-bg': '#141712',
        'dark-card': '#1C201A',
        'dark-surface': '#242921',
        'light-bg': '#F7F4EE',
        'light-card': '#FFFFFF',
        'light-surface': '#EFECE3',

        /* Texto */
        'light-text': '#ECEFE8',
        'dark-text': '#97A090',
        'primary-text': '#23271F',
        'secondary-text': '#5F6656',

        /* Bordas */
        'border-light': '#DFD9CC',
        'border-dark': '#2E362A',

        /* Accent — Verde Musgo Imperial / Jade */
        accent: {
          DEFAULT: '#3E5136',
          hover: '#2E3D28',
          light: '#7A9B67',
          'light-hover': '#91B57D',
          subtle: '#EBF0E6',
          'subtle-dark': 'rgba(122, 155, 103, 0.12)',
          border: '#C8D4C2',
          'border-dark': '#7A9B67',
        },

        /* Highlight — Âmbar Vermilion (Olho do Dragão / Esferas) */
        highlight: {
          DEFAULT: '#D95B30',
          hover: '#C24C23',
          light: '#E66A40',
          'light-hover': '#F07D55',
          subtle: '#FDF1EB',
          'subtle-dark': 'rgba(230, 106, 64, 0.15)',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-x-in': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        'stagger-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-up': {
          '0%': { clipPath: 'inset(0 0 96% 0)' },
          '100%': { clipPath: 'inset(0 0 0% 0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-down': 'fade-down 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-x-in': 'scale-x-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'stagger-in': 'stagger-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-up': 'reveal-up 0.44s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        marquee: 'marquee 35s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
