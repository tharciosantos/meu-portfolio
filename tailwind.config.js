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
        card: '8px',
      },
      spacing: {
        section: 'clamp(2.5rem, 5vw, 4.5rem)',
      },
      colors: {
        /* Backgrounds */
        'dark-bg': '#141210',
        'dark-card': '#1D1917',
        'dark-surface': '#26211E',
        'light-bg': '#FAFAF9',
        'light-card': '#FFFFFF',
        'light-surface': '#F1ECE8',

        /* Texto */
        'light-text': '#F5F0EB',
        'dark-text': '#A8A29E',
        'primary-text': '#1C1917',
        'secondary-text': '#57534E',

        /* Bordas */
        'border-light': '#E7E0D9',
        'border-dark': '#33302D',

        /* Accent — Carmesim */
        accent: {
          DEFAULT: '#B91C1C',
          hover: '#991B1B',
          light: '#F87171',
          'light-hover': '#FCA5A5',
          subtle: '#FDECEC',
          'subtle-dark': 'rgba(248, 113, 113, 0.12)',
          border: '#F3C2C2',
          'border-dark': '#F87171',
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
      },
      animation: {
        'fade-in': 'fade-in 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-down': 'fade-down 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-x-in': 'scale-x-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
