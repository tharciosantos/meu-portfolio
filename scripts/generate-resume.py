from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public' / 'curriculo-tharcio-santos.pdf'


def paragraph(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text, style)


def section(title: str, styles: dict[str, ParagraphStyle]) -> list:
    return [
        Spacer(1, 4),
        paragraph(title, styles['section']),
        HRFlowable(width='100%', thickness=0.65, color=colors.HexColor('#0f766e'), spaceBefore=1, spaceAfter=3),
    ]


def job(title: str, period: str, bullets: list[str], styles: dict[str, ParagraphStyle]) -> list:
    content = [paragraph(f'<b>{title}</b><font color="#52615f"> - {period}</font>', styles['job'])]
    content.extend(paragraph(f'- {bullet}', styles['bullet']) for bullet in bullets)
    return content


def build_resume() -> None:
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=12 * mm,
        bottomMargin=10 * mm,
        title='Currículo - Tharcio Santos',
        author='Tharcio Santos',
    )
    base = getSampleStyleSheet()
    styles = {
        'name': ParagraphStyle(
            'name', parent=base['Heading1'], fontName='Helvetica-Bold', fontSize=20, leading=22,
            textColor=colors.HexColor('#12201f'), alignment=TA_CENTER, spaceAfter=2,
        ),
        'headline': ParagraphStyle(
            'headline', parent=base['Normal'], fontName='Helvetica-Bold', fontSize=9.2, leading=11,
            textColor=colors.HexColor('#0f766e'), alignment=TA_CENTER, spaceAfter=2,
        ),
        'contact': ParagraphStyle(
            'contact', parent=base['Normal'], fontName='Helvetica', fontSize=7.6, leading=9,
            textColor=colors.HexColor('#52615f'), alignment=TA_CENTER, spaceAfter=5,
        ),
        'section': ParagraphStyle(
            'section', parent=base['Heading2'], fontName='Helvetica-Bold', fontSize=8.4, leading=10,
            textColor=colors.HexColor('#0f766e'), spaceBefore=0, spaceAfter=0,
        ),
        'body': ParagraphStyle(
            'body', parent=base['Normal'], fontName='Helvetica', fontSize=7.5, leading=9.4,
            textColor=colors.HexColor('#243230'), spaceAfter=2,
        ),
        'job': ParagraphStyle(
            'job', parent=base['Normal'], fontName='Helvetica', fontSize=7.8, leading=9.3,
            textColor=colors.HexColor('#12201f'), spaceBefore=1.5, spaceAfter=0.8,
        ),
        'bullet': ParagraphStyle(
            'bullet', parent=base['Normal'], fontName='Helvetica', fontSize=7.25, leading=8.7,
            leftIndent=7, firstLineIndent=-5, textColor=colors.HexColor('#243230'), spaceAfter=0.3,
        ),
    }

    story = [
        paragraph('THARCIO SANTOS', styles['name']),
        paragraph('Desenvolvedor Full Stack Júnior | React - Next.js - Node.js - TypeScript', styles['headline']),
        paragraph(
            'Caeté, MG | (31) 99525-3423 | tharciosantos09@gmail.com<br/>'
            'linkedin.com/in/tharcio-santos-dev | github.com/tharciosantos | tharcio-portfolio.vercel.app',
            styles['contact'],
        ),
    ]
    story += section('RESUMO', styles)
    story.append(paragraph(
        'Desenvolvedor Full Stack Júnior e estudante de Análise e Desenvolvimento de Sistemas, com experiência prática na construção e publicação de aplicações web usando React, Next.js, Node.js e bancos de dados. Desenvolvi projetos com autenticação, controle de acesso e testes automatizados. Busco oportunidade de estágio ou posição júnior para contribuir com produtos reais e evoluir em um time de desenvolvimento.',
        styles['body'],
    ))
    story += section('COMPETÊNCIAS', styles)
    story.append(paragraph(
        '<b>Linguagens:</b> JavaScript, TypeScript, SQL &nbsp; <b>Frontend:</b> React, Next.js, Vite, Tailwind CSS, TanStack Query<br/>'
        '<b>Backend:</b> Node.js, Express, APIs REST, Prisma &nbsp; <b>Bancos:</b> PostgreSQL, MongoDB, Supabase<br/>'
        '<b>Qualidade:</b> Vitest, Cypress, Zod, ESLint &nbsp; <b>Ferramentas:</b> Git, GitHub Actions, Vercel',
        styles['body'],
    ))
    story += section('PROJETOS EM PRODUÇÃO', styles)
    story += job('ManutFlow - Sistema de Manutenção e Ordens de Serviço', 'código | demo', [
        'Aplicação para gerenciamento de equipamentos e ordens de manutenção, com dashboard, filtros e histórico de alterações.',
        'Isolamento de dados por usuário em três camadas: proteção de rotas, validação na API e Row Level Security no PostgreSQL.',
        'Tecnologias: Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL.',
    ], styles)
    story += job('HelpFlow - Sistema de Help Desk Full Stack', 'código | demo', [
        'Plataforma de chamados com autenticação, controle de acesso por papéis e CRUD de tickets validado com Zod.',
        'Testes unitários com Vitest e teste E2E com Cypress para o fluxo principal de autenticação e tickets.',
        'Tecnologias: Next.js, Prisma, PostgreSQL, Supabase, NextAuth.',
    ], styles)
    story += job('DevLinks - Plataforma de Links Personalizados', 'código | demo', [
        'Frontend e API para links personalizados, com JWT, upload de avatar, TanStack Query e testes E2E com Cypress.',
        'Outros projetos: Crypto Dashboard e Lista de Mercado PWA - código e demos disponíveis no portfólio.',
    ], styles)
    story += section('FORMAÇÃO ACADÊMICA', styles)
    story.append(paragraph('<b>Análise e Desenvolvimento de Sistemas - Anhanguera</b> &nbsp; Cursando | Conclusão prevista: jul/2027', styles['body']))
    story += section('EXPERIÊNCIA PROFISSIONAL', styles)
    story += job('Técnico de Suporte e Manutenção de TI - Autônomo', 'nov/2024 - atual', [
        'Realizo montagem, limpeza e manutenção preventiva de computadores.',
        'Faço formatação, instalação e configuração de Windows, drivers e softwares.',
        'Diagnostico falhas de hardware, desempenho e conectividade de rede básica.',
        'Executo backup e migração de arquivos, orientando clientes sobre uso e segurança.',
    ], styles)
    story += job('Auxiliar Administrativo - EPOS', 'mai/2023 - out/2023', [
        'Organizei documentos e processos administrativos, apoiando a comunicação entre áreas e o acompanhamento de prazos.',
    ], styles)
    story += job('Auxiliar Mecânico - Komaq', 'jan/2022 - mai/2022', [
        'Apoiei manutenção preventiva e corretiva e participei da identificação de problemas e soluções em equipe.',
    ], styles)
    document.build(story)


if __name__ == '__main__':
    build_resume()
