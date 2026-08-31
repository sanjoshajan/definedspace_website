'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
                  isScrolled ? 'text-emerald-800' : 'text-[#83f28f] drop-shadow-xs'
                }`}
              >
                Architecture Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
            <a
              href="#about"
              className={`transition-colors hover:text-[#83f28f] ${
                isScrolled ? 'text-gray-700' : 'text-white/90 drop-shadow-xs'
              }`}
            >
              About
            </a>
            <a
              href="#services"
              className={`transition-colors hover:text-[#83f28f] ${
                isScrolled ? 'text-gray-700' : 'text-white/90 drop-shadow-xs'
              }`}
            >
              Services
            </a>
            <a
              href="#projects"
              className={`transition-colors hover:text-[#83f28f] ${
                isScrolled ? 'text-gray-700' : 'text-white/90 drop-shadow-xs'
              }`}
            >
              Projects
            </a>
            <a
              href="#videos"
              className={`transition-colors hover:text-[#83f28f] ${
                isScrolled ? 'text-gray-700' : 'text-white/90 drop-shadow-xs'
              }`}
            >
              Videos
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:text-[#83f28f] ${
                isScrolled ? 'text-gray-700' : 'text-white/90 drop-shadow-xs'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Direct Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${STUDIO_INFO.phones[0].value}`}
              className={`hidden sm:flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                isScrolled
                  ? 'text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-200'
                  : 'text-white bg-black/25 hover:bg-black/40 border border-white/20 backdrop-blur-md'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#83f28f]" />
              <span>{STUDIO_INFO.phones[0].display}</span>
            </a>

            <a
              href={STUDIO_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#83f28f] hover:bg-[#6ee67b] text-black shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-[80%] max-w-xs bg-white h-full p-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-gray-200">
                    <Image src="/logo.jpg" alt="Logo" fill className="object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-gray-900">Defined Space</p>
                    <p className="text-[10px] text-emerald-700 font-semibold uppercase">Architecture Studio</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-3 text-sm font-semibold text-gray-800 text-left">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  House Projects
                </a>
                <a
                  href="#videos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Videos
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact & Location
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${STUDIO_INFO.phones[0].value}`}
                className="flex items-center gap-2 text-xs font-semibold text-gray-800 p-2 rounded-lg bg-gray-50"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>{STUDIO_INFO.phones[0].display}</span>
              </a>
              <a
                href={STUDIO_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#83f28f] text-black font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
