'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectItem } from '@/data/portfolioData';

interface LightboxModalProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export default function LightboxModal({
  project,
  projects,
  isOpen,
  onClose,
  onSelectProject,
}: LightboxModalProps) {
  const currentIndex = project ? projects.findIndex((p) => p.id === project.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex < projects.length - 1) {
      onSelectProject(projects[currentIndex + 1]);
    } else {
      onSelectProject(projects[0]);
    }
  }, [currentIndex, projects, onSelectProject]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectProject(projects[currentIndex - 1]);
    } else {
      onSelectProject(projects[projects.length - 1]);
    }
  }, [currentIndex, projects, onSelectProject]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative max-w-5xl w-full max-h-[92vh] bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 text-white">
            <span className="text-xs text-gray-400 font-medium">
              Image {currentIndex + 1} of {projects.length}
            </span>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image Area */}
          <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] md:min-h-[600px] bg-black flex items-center justify-center overflow-hidden">
            <Image
              src={project.image}
              alt="Project Photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-contain p-2"
              priority
            />

            {/* Navigation Arrows */}
            {projects.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-emerald-700 text-white transition-all duration-200"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-emerald-700 text-white transition-all duration-200"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
