import { describe, expect, it } from 'vitest';
import { generateStaticParams, generateMetadata } from '../[slug]/page';

describe('página de projeto (/projetos/[slug])', () => {
  it('gera params estáticos para todos os projetos', () => {
    expect(generateStaticParams().map((p) => p.slug)).toEqual([
      'manutflow',
      'helpflow',
      'devlinks',
      'lista-de-mercado',
      'crypto-dashboard',
    ]);
  });

  it('gera metadata correta para um slug válido', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'manutflow' }) });

    expect(metadata.title).toBe('ManutFlow: Controle de Manutenção');
    expect(metadata.description).toContain('Sistema completo');
    expect(metadata.alternates?.canonical).toBe(
      'https://tharcio-portfolio.vercel.app/projetos/manutflow'
    );
  });

  it('retorna metadata vazia para um slug inexistente', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'x' }) });
    expect(metadata).toEqual({});
  });
});
