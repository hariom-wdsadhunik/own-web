import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EXPERIMENTS } from '@/content/experiments';
import { LabDetail } from '@/components/portfolio/LabDetail';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EXPERIMENTS.map((e) => ({
    slug: e.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experiment = EXPERIMENTS.find((e) => e.slug === slug);

  if (!experiment) {
    return {
      title: 'Experiment Not Found | Hari Om',
    };
  }

  return {
    title: `${experiment.title} — Lab Experiment | Hari Om`,
    description: experiment.description,
  };
}

export default async function LabExperimentPage({ params }: PageProps) {
  const { slug } = await params;
  const expIndex = EXPERIMENTS.findIndex((e) => e.slug === slug);

  if (expIndex === -1) {
    notFound();
  }

  const experiment = EXPERIMENTS[expIndex];
  const nextExperiment = EXPERIMENTS[(expIndex + 1) % EXPERIMENTS.length];

  return <LabDetail experiment={experiment} nextExperiment={nextExperiment} />;
}