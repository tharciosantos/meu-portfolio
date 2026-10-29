import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ProjectScreenShowcase, type ProjectScreen } from '../ProjectScreenShowcase';

const mockScreens: ProjectScreen[] = [
  {
    label: 'Início',
    imageUrl: '/images/helpflow/home.webp',
    caption: 'Página inicial com demonstração',
  },
  { label: 'Login', imageUrl: '/images/helpflow/login.webp', caption: 'Tela de autenticação' },
  { label: 'Painel', imageUrl: '/images/helpflow/dashboard.webp', caption: 'Dashboard gerencial' },
];

describe('ProjectScreenShowcase', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('renderiza corretamente com as telas e os segmentos', () => {
    render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

    expect(screen.getByText('Telas do Sistema')).toBeInTheDocument();
    expect(screen.getByText('Tela 01 de 03')).toBeInTheDocument();
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Painel')).toBeInTheDocument();
    expect(screen.getByText(/Página inicial com demonstração/i)).toBeInTheDocument();
  });

  it('permite alternar entre telas clicando nos botões de segmento', () => {
    render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

    const loginBtn = screen.getByRole('button', { name: /Ir para tela: Login/i });
    fireEvent.click(loginBtn);

    expect(screen.getByText('Tela 02 de 03')).toBeInTheDocument();
    expect(screen.getByText(/Tela de autenticação/i)).toBeInTheDocument();
  });

  it('permite navegar com os botões de avançar e voltar', () => {
    render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

    const nextBtn = screen.getByRole('button', { name: /Próxima tela/i });
    const prevBtn = screen.getByRole('button', { name: /Tela anterior/i });

    fireEvent.click(nextBtn);
    expect(screen.getByText('Tela 02 de 03')).toBeInTheDocument();

    fireEvent.click(prevBtn);
    expect(screen.getByText('Tela 01 de 03')).toBeInTheDocument();
  });

  it('avança automaticamente com o timer de auto-play', () => {
    render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

    expect(screen.getByText('Tela 01 de 03')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(screen.getByText('Tela 02 de 03')).toBeInTheDocument();
  });

  it('pausa o auto-play ao passar o mouse por cima e retoma ao sair', () => {
    render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

    const container = screen.getByRole('region');
    fireEvent.mouseEnter(container);

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    // Não deve ter avançado enquanto pausado
    expect(screen.getByText('Tela 01 de 03')).toBeInTheDocument();

    fireEvent.mouseLeave(container);

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    // Deve avançar após o mouse sair
    expect(screen.getByText('Tela 02 de 03')).toBeInTheDocument();
  });

  it('abre o modal de ampliação em tela cheia e permite fechar com o botão e com a tecla ESC', () => {
    render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

    const zoomBtn = screen.getByRole('button', { name: /Ampliar tela do projeto/i });
    fireEvent.click(zoomBtn);

    // Modal deve estar aberto
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Navega no modal com setas do teclado
    fireEvent.keyDown(document, { key: 'ArrowRight' });
    expect(screen.getByText('Tela 02 de 03 · Login')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    expect(screen.getByText('Tela 01 de 03 · Início')).toBeInTheDocument();

    // Fecha com tecla Escape
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('permite fechar o modal clicando no botão Fechar ou no backdrop', () => {
    render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

    const zoomBtn = screen.getByRole('button', { name: /Ampliar tela do projeto/i });
    fireEvent.click(zoomBtn);

    const closeBtn = screen.getByRole('button', { name: /Fechar tela cheia/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('suporta gestos de toque (touch swipe) no mobile', () => {
    render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

    const container = screen.getByRole('region');

    // Desliza para a esquerda (próximo slide)
    fireEvent.touchStart(container, { targetTouches: [{ clientX: 200 }] });
    fireEvent.touchMove(container, { targetTouches: [{ clientX: 100 }] });
    fireEvent.touchEnd(container);

    expect(screen.getByText('Tela 02 de 03')).toBeInTheDocument();

    // Desliza para a direita (slide anterior)
    fireEvent.touchStart(container, { targetTouches: [{ clientX: 100 }] });
    fireEvent.touchMove(container, { targetTouches: [{ clientX: 200 }] });
    fireEvent.touchEnd(container);

    expect(screen.getByText('Tela 01 de 03')).toBeInTheDocument();
  });

  it('renderiza fallback caso não haja lista de telas', () => {
    render(
      <ProjectScreenShowcase
        screens={[]}
        title="Projeto Simples"
        defaultImageUrl="/images/single.webp"
        defaultImageAlt="Screenshot única"
      />
    );

    expect(screen.getByText(/Visão Geral/i)).toBeInTheDocument();
  });

  it('retorna null se não houver telas nem imagem padrão', () => {
    const { container } = render(<ProjectScreenShowcase screens={[]} title="Vazio" />);
    expect(container.firstChild).toBeNull();
  });

  it('exibe o domínio extraído dinamicamente a partir de demoUrl', () => {
    render(
      <ProjectScreenShowcase
        screens={mockScreens}
        title="HelpFlow"
        demoUrl="https://helpflow.vercel.app/demo"
      />
    );

    expect(screen.getByText('helpflow.vercel.app')).toBeInTheDocument();
  });

  describe('acessibilidade do lightbox', () => {
    const openModal = () => {
      const trigger = screen.getByRole('button', { name: /Ampliar tela do projeto/i });
      trigger.focus();
      fireEvent.click(trigger);
      return trigger;
    };

    beforeEach(() => {
      // jsdom não executa rAF: roda o callback de imediato, como no MobileNav
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0);
        return 1;
      });
    });

    it('bloqueia o scroll do body enquanto o lightbox está aberto', () => {
      render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

      expect(document.body.style.overflow).toBe('');

      openModal();
      expect(document.body.style.overflow).toBe('hidden');

      fireEvent.keyDown(document, { key: 'Escape' });
      expect(document.body.style.overflow).toBe('');
    });

    it('move o foco para dentro do diálogo ao abrir e devolve ao gatilho ao fechar', () => {
      render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

      const trigger = openModal();
      const dialog = screen.getByRole('dialog');

      expect(dialog).toHaveFocus();

      fireEvent.keyDown(document, { key: 'Escape' });

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(trigger).toHaveFocus();
    });

    it('mantém o Tab preso dentro do diálogo e envolve do último para o primeiro', () => {
      render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

      openModal();
      const dialog = screen.getByRole('dialog');

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      // Tab no último elemento envolve para o primeiro
      last.focus();
      expect(last).toHaveFocus();
      fireEvent.keyDown(document, { key: 'Tab' });
      expect(first).toHaveFocus();

      // Shift+Tab no primeiro elemento envolve para o último
      fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
      expect(last).toHaveFocus();

      expect(dialog).toContainElement(document.activeElement as HTMLElement);
    });

    it('traz o foco de volta ao diálogo se ele escapar para a página de fundo', () => {
      render(<ProjectScreenShowcase screens={mockScreens} title="HelpFlow" />);

      openModal();
      const dialog = screen.getByRole('dialog');
      const first = dialog.querySelector<HTMLElement>('a[href], button:not([disabled])');

      // Simula foco perdido fora do diálogo (ex: clique no backdrop)
      const outside = screen.getByRole('button', { name: /Ampliar tela do projeto/i });
      outside.focus();
      expect(dialog).not.toContainElement(document.activeElement as HTMLElement);

      fireEvent.keyDown(document, { key: 'Tab' });

      expect(first).toHaveFocus();
    });
  });
});
