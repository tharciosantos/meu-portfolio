import type { Language } from './i18n/types';

export type ExperienciaAnterior = {
  period: string;
  role: string;
  org: string;
  summary: string;
};

export type CompetenciaAplicada = {
  title: string;
  description: string;
};

export const competenciasAplicadas: CompetenciaAplicada[] = [
  {
    title: 'Investigação e resolução de problemas',
    description: 'Partir do sintoma, formular hipóteses e testar antes de agir.',
  },
  {
    title: 'Análise de causa raiz',
    description: 'Corrigir a origem da falha em vez de apenas o efeito visível.',
  },
  {
    title: 'Organização e documentação técnica',
    description: 'Registrar decisões e processos para que o trabalho continue legível.',
  },
  {
    title: 'Arquitetura segura e atenção aos detalhes',
    description: 'Controle de acesso, validação e consistência desde a primeira camada.',
  },
];

export const competenciasAplicadasEn: CompetenciaAplicada[] = [
  {
    title: 'Problem investigation and solving',
    description: 'Start from the symptom, form hypotheses, and test before acting.',
  },
  {
    title: 'Root-cause analysis',
    description: 'Fix the origin of the failure rather than only its visible effect.',
  },
  {
    title: 'Organization and technical documentation',
    description: 'Record decisions and processes so the work stays readable downstream.',
  },
  {
    title: 'Secure architecture and attention to detail',
    description: 'Access control, validation, and consistency from the very first layer.',
  },
];

export function getCompetenciasAplicadas(language: Language): CompetenciaAplicada[] {
  return language === 'en' ? competenciasAplicadasEn : competenciasAplicadas;
}

export const experienciasAnteriores: ExperienciaAnterior[] = [
  {
    period: 'Nov/2024 – Atual',
    role: 'Técnico de Suporte e Manutenção de TI',
    org: 'Autônomo',
    summary:
      'Diagnóstico de problemas, manutenção e configuração de computadores, hardware, redes básicas e atendimento técnico a clientes.',
  },
  {
    period: 'Mai/2023 – Out/2023',
    role: 'Auxiliar Administrativo',
    org: 'EPOS',
    summary:
      'Organização de demandas, documentação de processos, comunicação entre equipes e organização de fluxos de trabalho.',
  },
  {
    period: 'Jan/2022 – Mai/2022',
    role: 'Auxiliar Mecânico',
    org: 'Komaq',
    summary: 'Diagnóstico técnico de equipamentos, investigação de falhas e análise de causa raiz.',
  },
];

export const experienciasAnterioresEn: ExperienciaAnterior[] = [
  {
    period: 'Nov/2024 – Present',
    role: 'IT Support and Maintenance Technician',
    org: 'Self-employed',
    summary:
      'Problem diagnosis, computer maintenance and setup, hardware, basic networking, and technical support for clients.',
  },
  {
    period: 'May/2023 – Oct/2023',
    role: 'Administrative Assistant',
    org: 'EPOS',
    summary:
      'Organization of demands, process documentation, communication between teams, and workflow organization.',
  },
  {
    period: 'Jan/2022 – May/2022',
    role: 'Mechanical Assistant',
    org: 'Komaq',
    summary: 'Technical equipment diagnostics, failure investigation, and root-cause analysis.',
  },
];

export function getExperiencias(language: Language): ExperienciaAnterior[] {
  return language === 'en' ? experienciasAnterioresEn : experienciasAnteriores;
}
