import { describe, expect, it } from 'vitest';
import { getDictionary } from '../i18n';
import { getProjects, projects, projectsEn } from '../projects';
import { getCapabilities, capabilitiesEn } from '../capabilities';
import { getExperiencias, getTrajectorySkills } from '../experience';

describe('i18n (pt/en)', () => {
  it('retorna o dicionário correto por idioma', () => {
    expect(getDictionary('pt').hero.headline).toBe(
      'Desenvolvo sistemas completos, da interface aos dados.'
    );
    expect(getDictionary('en').hero.headline).toBe(
      'I build complete systems, from interface to data.'
    );
  });

  it('mantém a mesma estrutura de chaves entre pt e en', () => {
    expect(Object.keys(getDictionary('en'))).toEqual(Object.keys(getDictionary('pt')));
  });

  it('seleciona projetos em inglês quando solicitado', () => {
    expect(getProjects('pt')).toEqual(projects);
    expect(getProjects('en')).toEqual(projectsEn);
    expect(getProjects('en')[0].shortTitle).toBe('ManutFlow');
    expect(getProjects('en').find((p) => p.shortTitle === 'Grocery List')).toBeTruthy();
    expect(getProjects('en')[0].description).not.toBe(getProjects('pt')[0].description);
  });

  it('seleciona capacidades em inglês quando solicitado', () => {
    expect(getCapabilities('en')).toEqual(capabilitiesEn);
    expect(getCapabilities('en')[1].title).toBe('Backend & Security');
    expect(getCapabilities('en').every((c) => c.id)).toBe(true);
  });

  it('seleciona experiências e habilidades em inglês quando solicitado', () => {
    expect(getExperiencias('en')[0].role).toBe('IT Support and Maintenance Technician');
    expect(getTrajectorySkills('en')[0]).toBe('Organization and deadlines');
  });

  it('mantém slugs únicos e estáveis entre os idiomas', () => {
    const ptSlugs = projects.map((p) => p.slug).sort();
    const enSlugs = projectsEn.map((p) => p.slug).sort();

    expect(ptSlugs).toHaveLength(new Set(ptSlugs).size);
    expect(enSlugs).toEqual(ptSlugs);
  });
});
