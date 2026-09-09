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
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122, 155, 103, 0.22), transparent)',
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
              borderRadius: 0,
              background: '#3E5136',
              color: '#ffffff',
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            T
          </div>
          <span>
            Tharcio<span style={{ color: '#7A9B67' }}>.dev</span>
          </span>
        </div>
        <div
          style={{
            border: '1px solid rgba(122, 155, 103, 0.45)',
            borderRadius: 999,
            color: '#7A9B67',
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
        <div style={{ color: '#7A9B67', fontSize: 28, fontWeight: 700 }}>
          React · Next.js · Node.js · TypeScript
        </div>
        <div style={{ maxWidth: 900, fontSize: 78, lineHeight: 1.02, fontWeight: 900 }}>
          Tharcio Santos
        </div>
        <div style={{ maxWidth: 950, color: '#ECEFE8', fontSize: 34, lineHeight: 1.28 }}>
          Desenvolvo sistemas completos, da interface aos dados.
        </div>
        <div style={{ maxWidth: 950, color: '#97A090', fontSize: 30, lineHeight: 1.28 }}>
          Aplicações web, APIs e bancos de dados com foco em usabilidade e boas práticas.
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
