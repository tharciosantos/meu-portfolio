import type { Language } from './i18n/types';

export type ExperienciaAnterior = {
  period: string;
  role: string;
  org: string;
  summary: string;
};

export const trajectorySkills = [
  'Organização e prazos',
  'Análise de problemas',
  'Documentação de processos',
  'Comunicação entre áreas',
] as const;

export const trajectorySkillsEn = [
  'Organization and deadlines',
  'Problem analysis',
  'Process documentation',
  'Cross-team communication',
] as const;

export function getTrajectorySkills(language: Language): readonly string[] {
  return language === 'en' ? trajectorySkillsEn : trajectorySkills;
}

export const experienciasAnteriores: ExperienciaAnterior[] = [
  {
    period: 'Nov/2024 – Atual',
    role: 'Técnico de Suporte e Manutenção de TI',
    org: 'Autônomo',
    summary:
      'Atendimento técnico para manutenção e configuração de computadores, incluindo diagnóstico de desempenho, hardware e rede básica, backup e migração de arquivos e orientação a clientes.',
  },
  {
    period: 'Mai/2023 – Out/2023',
    role: 'Auxiliar Administrativo',
    org: 'EPOS',
    summary:
      'Organização de demandas internas, documentação de processos e comunicação entre equipes. Essa prática reforçou minha atenção a registro, clareza e fluxo de trabalho.',
  },
  {
    period: 'Jan/2022 – Mai/2022',
    role: 'Auxiliar Mecânico',
    org: 'Komaq',
    summary:
      'Diagnóstico técnico de equipamentos e análise de causa raiz, experiência que contribui para investigar problemas com método antes de buscar soluções.',
  },
];

export const experienciasAnterioresEn: ExperienciaAnterior[] = [
  {
    period: 'Nov/2024 – Present',
    role: 'IT Support and Maintenance Technician',
    org: 'Self-employed',
    summary:
      'Technical support for computer maintenance and configuration, including performance diagnostics, hardware and basic networking, file backup and migration, and client guidance.',
  },
  {
    period: 'May/2023 – Oct/2023',
    role: 'Administrative Assistant',
    org: 'EPOS',
    summary:
      'Organized internal demands, documented processes, and communicated between teams. This practice reinforced my attention to record-keeping, clarity, and workflow.',
  },
  {
    period: 'Jan/2022 – May/2022',
    role: 'Mechanical Assistant',
    org: 'Komaq',
    summary:
      'Technical diagnostics of equipment and root-cause analysis, an experience that contributes to investigating problems with method before seeking solutions.',
  },
];

export function getExperiencias(language: Language): ExperienciaAnterior[] {
  return language === 'en' ? experienciasAnterioresEn : experienciasAnteriores;
}
