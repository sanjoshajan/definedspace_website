'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { HOUSE_PROJECTS, ALL_PROJECTS, ProjectItem } from '@/data/portfolioData';
import LightboxModal from '@/components/LightboxModal';

export default function WorksPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="pt-28 pb-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* House Projects Header */}
        <div className="text-left space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#006D5B] px-3.5 py-1 rounded-full">
            House Projects
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
            Architectural Works & Elevations
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Click any project to view in high resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-6">
          {HOUSE_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-[#E4EFE7] cursor-pointer shadow-xs hover:shadow-md transition-all"
            >
              <Image
                src={project.image}
                alt="House Project"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LightboxModal
        project={selectedProject}
        projects={ALL_PROJECTS}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}
