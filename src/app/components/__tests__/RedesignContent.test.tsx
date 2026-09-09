import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from '../Footer';
import Navbar from '../Navbar';
import About from '../sections/About';
import Capabilities from '../sections/Capabilities';
import Hero from '../sections/Hero';
import Process from '../sections/Process';
import Projects from '../sections/Projects';
import { navLinks } from '@/data/constants';

describe('conteúdo principal do redesign', () => {
  it('mantém a navbar na ordem editorial definida', () => {
    expect(navLinks.map(({ label, href }) => ({ label, href }))).toEqual([
      { label: 'Projetos', href: '#projetos' },
      { label: 'Processo', href: '#processo' },
      { label: 'Habilidades', href: '#habilidades' },
      { label: 'Sobre', href: '#sobre-mim' },
      { label: 'Contato', href: '#contato' },
    ]);
  });

  it('inclui a marca visível no nome acessível do link inicial', () => {
    render(<Navbar />);

    expect(
      screen.getByRole('link', {
        name: 'Tharcio.dev, voltar para o início',
      })
    ).toHaveAttribute('href', '/');
  });

  it('apresenta um processo geral sem depender de um projeto específico', () => {
    render(<Process />);

    expect(screen.getByRole('heading', { level: 2, name: 'Como eu trabalho' })).toBeInTheDocument();
    expect(screen.getByText(/Organizo o desenvolvimento em etapas pequenas/i)).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
    expect(screen.getByText('Qualidade & Entrega')).toBeInTheDocument();
    expect(screen.queryByText(/HelpFlow/i)).not.toBeInTheDocument();
  });

  it('renderiza competências após a conversão para servidor', () => {
    render(<Capabilities />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Stack e tecnologias' })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Tecnologias de Frontend & UI')).toBeInTheDocument();
    expect(screen.getByLabelText('Tecnologias de Testes & Versionamento')).toBeInTheDocument();
  });

  it('renderiza a nova copy e os acessos principais do Hero', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Desenvolvo sistemas completos, da interface aos dados.',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Com projetos publicados e experiência técnica autônoma/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explorar projetos/i })).toHaveAttribute(
      'href',
      '#projetos'
    );
    expect(screen.getByRole('link', { name: /Baixar currículo/i })).toHaveAttribute(
      'href',
      '/curriculo-tharcio-santos.pdf'
    );
  });

  it('destaca projetos e permite alternar entre eles pelas abas', () => {
    render(<Projects />);

    expect(screen.getByRole('tab', { name: /ManutFlow/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /HelpFlow/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'ManutFlow' })).toBeInTheDocument();
    expect(screen.getByText('Minha responsabilidade')).toBeInTheDocument();
    expect(screen.getByText('Decisão técnica')).toBeInTheDocument();
    expect(screen.getByText('Implementado')).toBeInTheDocument();
  });

  it('alterna o projeto ativo ao clicar em uma aba', () => {
    render(<Projects />);

    const helpFlowTab = screen.getByRole('tab', { name: /HelpFlow/i });
    fireEvent.click(helpFlowTab);

    expect(helpFlowTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { level: 3, name: 'HelpFlow' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'ManutFlow' })).not.toBeInTheDocument();
  });

  it('unifica perfil atual, formação e trajetória anterior com clareza', () => {
    render(<About />);

    expect(screen.getByRole('heading', { level: 2, name: 'Sobre mim' })).toBeInTheDocument();
    expect(screen.getByText('Análise e Desenvolvimento de Sistemas')).toBeInTheDocument();
    expect(screen.getByText('Julho de 2027')).toBeInTheDocument();
    expect(screen.getByText('Organização e prazos')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 4,
        name: 'Técnico de Suporte e Manutenção de TI · Autônomo',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 4, name: 'Auxiliar Mecânico · Komaq' })
    ).toBeInTheDocument();
    expect(screen.queryByText(/Busco uma oportunidade/i)).not.toBeInTheDocument();
  });

  it('renderiza o Footer editorial e preserva os links profissionais', () => {
    render(<Footer />);

    expect(screen.getByText('Tharcio Santos, Desenvolvedor Full Stack Júnior')).toBeInTheDocument();
    expect(
      screen.getByText('Projetos reais, aprendizado contínuo e construção de sistemas web.')
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub de Tharcio Santos' })).toHaveAttribute(
      'href',
      'https://github.com/tharciosantos'
    );
    expect(screen.getByRole('link', { name: 'LinkedIn de Tharcio Santos' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/tharcio-santos-dev/'
    );
  });
});
