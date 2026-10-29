import { describe, expect, it } from 'vitest';
import { dynamicParams, generateStaticParams, generateMetadata } from '../[slug]/page';
import { generateStaticParams as generateImageStaticParams } from '../[slug]/opengraph-image';

describe('página de projeto (/projetos/[slug])', () => {
  it('gera params estáticos apenas para os cases principais', () => {
    expect(dynamicParams).toBe(false);
    expect(generateStaticParams().map((p) => p.slug)).toEqual(['manutflow', 'helpflow']);
  });

  it('gera metadata correta para um slug válido', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'manutflow' }) });

    expect(metadata.title).toBe('ManutFlow: Controle de Manutenção');
    expect(metadata.description).toContain('Sistema completo');
    expect(metadata.alternates?.canonical).toBe(
      'https://tharcio-portfolio.vercel.app/projetos/manutflow'
    );
  });

  it('retorna metadata vazia para slug inexistente ou projeto secundário', async () => {
    const inexistente = await generateMetadata({ params: Promise.resolve({ slug: 'x' }) });
    const secundario = await generateMetadata({ params: Promise.resolve({ slug: 'devlinks' }) });

    expect(inexistente).toEqual({});
    expect(secundario).toEqual({});
  });

  it('expõe imagem Open Graph e Twitter card para os cases', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'helpflow' }) });

    const expectedImage = 'https://tharcio-portfolio.vercel.app/projetos/helpflow/opengraph-image';

    expect(metadata.openGraph?.images).toEqual([
      {
        url: expectedImage,
        width: 1200,
        height: 630,
        alt: 'Case study: HelpFlow: Sistema de Help Desk',
      },
    ]);

    const twitter = metadata.twitter as { card?: string; images?: string[] };

    expect(twitter.card).toBe('summary_large_image');
    expect(twitter.images).toEqual([expectedImage]);
  });

  it('gera params estáticos para a imagem Open Graph dos cases', () => {
    expect(generateImageStaticParams().map((p) => p.slug)).toEqual(['manutflow', 'helpflow']);
  });
});
