import { ImageResponse } from 'next/og';
import { projects } from '@/data/projects';
import { SITE_URL } from '@/data/constants';

export const alt = 'Case study de projeto - Tharcio Santos';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export function generateStaticParams() {
  return projects
    .filter((project) => project.kind === 'featured')
    .map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const title = project?.title ?? 'Tharcio Santos';
  const description = project?.description ?? 'Case study de projeto';
  const stack = project?.tags.slice(0, 4).join(' · ') ?? 'React · Next.js · Node.js';

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#141712',
        color: '#ECEFE8',
        padding: '64px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(248, 113, 113, 0.22), transparent)',
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: 30,
            fontWeight: 800,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#B91C1C',
              color: '#ffffff',
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            T
          </div>
          <span>
            Tharcio<span style={{ color: '#F87171' }}>.dev</span>
          </span>
        </div>
        <div
          style={{
            border: '1px solid rgba(248, 113, 113, 0.45)',
            borderRadius: 999,
            color: '#F87171',
            padding: '10px 18px',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Case Study
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          position: 'relative',
        }}
      >
        <div style={{ color: '#F87171', fontSize: 28, fontWeight: 700 }}>{stack}</div>
        <div style={{ maxWidth: 950, fontSize: 72, lineHeight: 1.04, fontWeight: 900 }}>
          {title}
        </div>
        <div style={{ maxWidth: 980, color: '#97A090', fontSize: 32, lineHeight: 1.3 }}>
          {description}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          color: '#97A090',
          fontSize: 24,
          position: 'relative',
        }}
      >
        <span>{SITE_URL.replace(/^https?:\/\//, '')}</span>
        <span>·</span>
        <span>Projeto em produção</span>
      </div>
    </div>,
    size
  );
}
