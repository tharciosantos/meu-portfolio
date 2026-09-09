import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ReadingProgressBar } from './components/ui/ReadingProgressBar';
import { ThemeProvider } from './components/ThemeProvider';

import { GITHUB_URL, LINKEDIN_URL, SITE_URL } from '@/data/constants';

const siteName = 'Tharcio.dev';
const siteTitle = 'Tharcio Santos | Desenvolvedor Full Stack';
const siteDescription =
  'Portfólio de Tharcio Santos, desenvolvedor Full Stack com sistemas, APIs e bancos de dados, com foco em segurança, usabilidade e boas práticas.';

const personJsonLd = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Tharcio Santos',
  url: SITE_URL,
  jobTitle: 'Desenvolvedor Full Stack',
  description:
    'Desenvolvedor Full Stack com experiência em sistemas, APIs e bancos de dados, com foco em segurança, usabilidade e boas práticas.',
  image: `${SITE_URL}/images/profile.webp`,
  sameAs: [GITHUB_URL, LINKEDIN_URL],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Prisma',
    'Supabase',
    'Tailwind CSS',
    'PostgreSQL',
  ],
};

const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Portfólio de Tharcio Santos',
  author: { '@id': `${SITE_URL}/#person` },
};

const profilePageJsonLd = {
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: 'Tharcio Santos | Desenvolvedor Full Stack',
  mainEntity: { '@id': `${SITE_URL}/#person` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [personJsonLd, websiteJsonLd, profilePageJsonLd],
};

// ─── FONTES ─────────────────────────────────────────────────────────────────

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Tharcio Santos',
    'Desenvolvedor Full Stack',
    'Desenvolvedor de Software',
    'Desenvolvedor Web',
    'Desenvolvedor Júnior',
    'Estágio Desenvolvimento Web',
    'APIs REST',
    'Bancos de Dados',
    'Portfólio Desenvolvedor',
    'React',
    'Next.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Prisma',
    'Supabase',
  ],
  authors: [{ name: 'Tharcio Santos', url: GITHUB_URL }],
  creator: 'Tharcio Santos',
  publisher: 'Tharcio Santos',
  category: 'portfolio',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Portfólio de Tharcio Santos, desenvolvedor full stack',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'e4de6438b9a53e05',
    other: {
      'msvalidate.01': 'A2F86C71345CC471E5F8AA5578E27914',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F4EE' },
    { media: '(prefers-color-scheme: dark)', color: '#141712' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-light-bg font-sans text-primary-text antialiased dark:bg-dark-bg dark:text-light-text`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReadingProgressBar />
          <a href="#conteudo-principal" className="skip-link">
            Pular para o conteúdo
          </a>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main id="conteudo-principal" className="flex-1">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
