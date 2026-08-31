import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPublicProjects, getPublicProjectBySlug, getPublicNextProject } from '@/lib/projects';
import { ProjectDetail } from '@/components/portfolio/ProjectDetail';
import { SITE_CONFIG, getCanonicalUrl } from '@/lib/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const publicProjects = getPublicProjects();
  return publicProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublicProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Hari Om',
    };
  }

  const pageUrl = getCanonicalUrl(`/work/${project.slug}`);

  return {
    title: `${project.title} — Case Study | Hari Om`,
    description: project.summary,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | Hari Om`,
      description: project.summary,
      url: pageUrl,
      type: 'article',
      images: [
        {
          url: project.heroImage.url || SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study | Hari Om`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPublicProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getPublicNextProject(project.slug);

  return <ProjectDetail project={project} nextProject={nextProject} />;
}