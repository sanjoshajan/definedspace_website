'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-200/80 text-gray-900'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Studio Brand */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 border border-white/30 shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.jpg"
              alt="Defined Space Logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`font-extrabold text-base sm:text-lg tracking-tight leading-tight transition-colors ${
                isScrolled ? 'text-gray-950' : 'text-white drop-shadow-sm'
              }`}
            >
              Defined Space
            </span>
            <span
              className={`text-[10px] tracking-wider uppercase font-bold transition-colors ${
                isScrolled ? 'text-[#006D5B]' : 'text-teal-300 drop-shadow-xs'
              }`}
            >
              Architecture Studio
            </span>
          </div>
        </Link>

        {/* Right Direct Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${STUDIO_INFO.phones[0].value}`}
            className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
              isScrolled
                ? 'text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-200'
                : 'text-white bg-black/25 hover:bg-black/40 border border-white/20 backdrop-blur-md'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-teal-300" />
            <span className="hidden sm:inline">{STUDIO_INFO.phones[0].display}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <a
            href={STUDIO_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#006D5B] hover:bg-[#005648] text-white shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
