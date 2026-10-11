import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';
import { WHATSAPP_URL } from '@/data/constants';

beforeEach(() => {
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: vi.fn().mockResolvedValue(undefined) },
    configurable: true,
    writable: true,
  });
});

describe('Contact', () => {
  it('deve apresentar a nova chamada e os canais de contato', () => {
    render(<Contact />);

    expect(
      screen.getByRole('heading', { name: 'Vamos conversar sobre uma oportunidade' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Estou aberto a oportunidades de estágio ou posições júnior/i)
    ).toHaveTextContent('contribuir e evoluir com projetos reais');
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/tharcio-santos-dev/'
    );
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
      'href',
      'https://github.com/tharciosantos'
    );
    expect(screen.getByRole('link', { name: /Currículo/i })).toHaveAttribute(
      'href',
      '/curriculo-tharcio-santos.pdf'
    );
  });

  it('deve renderizar o CTA primário do WhatsApp', () => {
    render(<Contact />);
    const whatsappLink = screen.getByRole('link', { name: /Chamar Tharcio Santos no WhatsApp/i });
    expect(whatsappLink).toHaveAttribute('href', WHATSAPP_URL);
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar o botão de copiar e-mail', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /copiar e-mail/i })).toBeInTheDocument();
  });

  it('deve mostrar o texto "Copiar" antes de clicar', () => {
    render(<Contact />);
    expect(screen.getByText('Copiar')).toBeInTheDocument();
  });

  // Testa o que o USUÁRIO vê, não a implementação interna
  it('deve mostrar "Copiado" após clicar no botão', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.click(screen.getByRole('button', { name: /copiar e-mail/i }));
    // findByText espera o estado atualizar (assíncrono)
    expect(await screen.findByText('Copiado')).toBeInTheDocument();
  });
});
