import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { SITE_URL } from '@/data/constants';
import { ProjectCaseStudy } from '@/app/components/sections/ProjectCaseStudy';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${SITE_URL}/projetos/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${SITE_URL}/projetos/${project.slug}`,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14">
      <ProjectCaseStudy slug={slug} />
    </div>
  );
}
