import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/data/constants';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((project) => project.kind === 'featured')
    .map((project) => ({
      url: `${SITE_URL}/projetos/${project.slug}`,
    }));

  return [
    {
      url: `${SITE_URL}/`,
    },
    ...projectEntries,
  ];
}
