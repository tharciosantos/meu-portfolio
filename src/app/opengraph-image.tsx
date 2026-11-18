import { ImageResponse } from 'next/og';

export const alt = 'Tharcio Santos - Desenvolvedor Full Stack';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#09090B',
        color: '#FAFAFA',
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
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(239, 68, 68, 0.22), transparent)',
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
              borderRadius: 8,
              background: '#EF4444',
              color: '#ffffff',
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            T
          </div>
          <span>
            Tharcio<span style={{ color: '#A1A1AA' }}>.dev</span>
          </span>
        </div>
        <div
          style={{
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: 6,
            color: '#A1A1AA',
            padding: '10px 18px',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Sistemas · APIs · Bancos de Dados
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
        <div style={{ color: '#A1A1AA', fontSize: 28, fontWeight: 500 }}>
          React · Next.js · Node.js · TypeScript
        </div>
        <div
          style={{
            maxWidth: 900,
            fontSize: 76,
            lineHeight: 1.06,
            fontWeight: 500,
            letterSpacing: '-0.035em',
          }}
        >
          Tharcio Santos
        </div>
        <div style={{ maxWidth: 950, color: '#FAFAFA', fontSize: 34, lineHeight: 1.3 }}>
          Desenvolvo sistemas completos, da interface aos dados.
        </div>
        <div style={{ maxWidth: 950, color: '#A1A1AA', fontSize: 30, lineHeight: 1.3 }}>
          Aplicações web, APIs e bancos de dados com foco em usabilidade e boas práticas.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          color: '#A1A1AA',
          fontSize: 24,
          position: 'relative',
        }}
      >
        <span>Projetos com deploy ativo</span>
        <span>·</span>
        <span>Código público</span>
        <span>·</span>
        <span>Decisões técnicas visíveis</span>
      </div>
    </div>,
    size
  );
}
