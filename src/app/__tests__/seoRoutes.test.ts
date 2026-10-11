import { describe, expect, it } from 'vitest';
import robots from '../robots';
import sitemap from '../sitemap';

describe('rotas de SEO', () => {
  it('gera o sitemap com a home e as páginas de projeto', () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls[0]).toBe('https://tharcio-portfolio.vercel.app/');
    expect(urls).toHaveLength(6);
    expect(urls).toContain('https://tharcio-portfolio.vercel.app/projetos/manutflow');
    expect(urls).toContain('https://tharcio-portfolio.vercel.app/projetos/helpflow');
    expect(urls).toContain('https://tharcio-portfolio.vercel.app/projetos/devlinks');
    expect(urls).toContain('https://tharcio-portfolio.vercel.app/projetos/lista-de-mercado');
    expect(urls).toContain('https://tharcio-portfolio.vercel.app/projetos/crypto-dashboard');
  });

  it('permite o rastreamento e referencia o sitemap absoluto', () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://tharcio-portfolio.vercel.app/sitemap.xml',
    });
  });
});
