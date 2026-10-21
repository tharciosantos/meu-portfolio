import { describe, expect, it } from 'vitest';
import { dynamicParams, generateStaticParams, generateMetadata } from '../[slug]/page';

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
});
