'use client';

import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { getPublicClientProjects } from '@/lib/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';

export function ClientProjectsSection() {
  const clientProjects = getPublicClientProjects();
  const hasClientProjects = clientProjects.length > 0;

  return (
    <section id="client-work" className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      <FadeIn>
        <SectionHeader
          indexNumber="02"
          eyebrow="DEPARTMENT 02 // CLIENT PROJECTS"
          title="Commercial Web &amp; Client Delivery"
          description="Client applications, commercial platforms and custom enterprise solutions."
        />
      </FadeIn>

      {!hasClientProjects && (
        <FadeIn delay={0.1}>
          <div className="p-6 sm:p-12 rounded-xl bg-[#0f1117] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] sm:text-xs">
                  <Lock className="w-3 h-3 text-blue-400 shrink-0 inline-block mr-1" />
                  <span>ARCHIVE IN PROGRESS</span>
                </Badge>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Commercial Case Studies Compiling
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                Commercial client work is currently being compiled into verified case studies. Available for custom enterprise projects and technical inquiries.
              </p>
            </div>

            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="min-h-[44px] shrink-0 text-xs font-bold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              START A PROJECT →
            </Button>
          </div>
        </FadeIn>
      )}
    </section>
  );
}