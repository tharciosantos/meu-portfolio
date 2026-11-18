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
      /* Escala tipográfica de 5 níveis com peso leve-médio (500) e tracking apertado */
      fontSize: {
        hero: [
          'clamp(2.25rem, 4.6vw, 3.25rem)',
          { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '500' },
        ],
        'section-title': [
          'clamp(1.625rem, 3vw, 2.25rem)',
          { lineHeight: '1.16', letterSpacing: '-0.025em', fontWeight: '500' },
        ],
        subsection: [
          '1.25rem',
          { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '500' },
        ],
        body: ['1rem', { lineHeight: '1.65' }],
        'body-lg': ['1rem', { lineHeight: '1.65' }],
        metadata: ['0.75rem', { lineHeight: '1.35', letterSpacing: '0.01em' }],
      },
      maxWidth: {
        container: '1152px',
        'prose-wide': '680px',
      },
      borderRadius: {
        card: '8px',
        control: '6px',
        tag: '4px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
      spacing: {
        section: 'clamp(4rem, 7vw, 6rem)',
      },
      colors: {
        /* Tokens semânticos automáticos por tema (:root claro / .dark escuro) */
        page: 'var(--bg-page)',
        'surface-subtle': 'var(--bg-subtle)',
        'surface-card': 'var(--bg-card)',
        'surface-elevated': 'var(--bg-elevated)',
        overlay: 'var(--bg-overlay)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',

        'border-default': 'var(--border-default)',
        'border-hover': 'var(--border-hover)',

        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          'on-subtle': 'var(--accent-on-subtle)',
          subtle: 'var(--accent-subtle)',
          border: 'var(--accent-border)',
        },

        btn: {
          primary: 'var(--button-primary-bg)',
          'primary-hover': 'var(--button-primary-bg-hover)',
          'primary-active': 'var(--button-primary-bg-active)',
          'primary-fg': 'var(--button-primary-fg)',
          outline: 'var(--button-outline-bg)',
          'outline-hover': 'var(--button-outline-bg-hover)',
          'outline-active': 'var(--button-outline-bg-active)',
          'outline-fg': 'var(--button-outline-fg)',
          'ghost-hover': 'var(--button-ghost-bg-hover)',
          'ghost-active': 'var(--button-ghost-bg-active)',
          'ghost-fg': 'var(--button-ghost-fg)',
          'ghost-fg-hover': 'var(--button-ghost-fg-hover)',
        },
      },
    },
  },
  plugins: [],
};
