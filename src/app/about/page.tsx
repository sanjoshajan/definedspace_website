'use client';

import Image from 'next/image';
import {
  Layers,
  MapPin,
  ShieldCheck,
  Trees,
} from 'lucide-react';
import { HOUSE_PROJECTS } from '@/data/portfolioData';

export default function AboutPage() {
  const showcaseImage = HOUSE_PROJECTS[0]?.image || '/works/project-1.jpg';

  return (
    <div className="pt-28 pb-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero Header */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#83f28f] px-3 py-1 rounded-full">
            About The Studio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Designing residential forms rooted in climate, culture, and clarity.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Defined Space Architecture is an architectural and spatial design studio based in Chullikara, Kasaragod district, Kerala.
          </p>
        </div>

        {/* Narrative & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-[#E4EFE7]">
          <div className="lg:col-span-6 space-y-5 text-left text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-950">
              Our Architectural Approach
            </h2>
            <p>
              Every site possesses its own unique topography, breeze direction, solar path, and surroundings. At <strong>Defined Space Architecture</strong>, we design residences that embrace natural cross-ventilation, shaded verandahs, inner courtyards, and clean contemporary aesthetics.
            </p>
            <p>
              From initial floor plan concept drawings to on-site construction supervision, our studio provides steadfast dedication to every phase of your project across Kasaragod and Kerala.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-gray-900">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Studio HQ: Chullikara, Kasaragod, Kerala, India</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-[#E4EFE7] bg-gray-100">
              <Image
                src={showcaseImage}
                alt="Defined Space Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Studio Core Principles */}
        <div>
          <div className="text-left mb-10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#83f28f] px-3 py-1 rounded-full">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-gray-950">
              How We Design
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#F9FCFA] border border-[#E4EFE7] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF7EE] flex items-center justify-center text-emerald-800">
                <Trees className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-950">Climatic Sensitivity</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Optimized sun orientation, natural cross-ventilation, and shaded openings designed for Kerala’s climate.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F9FCFA] border border-[#E4EFE7] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF7EE] flex items-center justify-center text-emerald-800">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-950">Spatial Flow</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Clear, functional layouts that make every square foot feel open, comfortable, and generous.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F9FCFA] border border-[#E4EFE7] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF7EE] flex items-center justify-center text-emerald-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-950">Structural Quality</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rigorous structural drawings and active on-site supervision ensuring enduring permanence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
