'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '@/data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-14 pb-10 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 shadow-sm border border-zinc-700">
                <Image
                  src="/logo.jpg"
                  alt="Defined Space Architecture"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-lg text-white leading-tight">Defined Space</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Architecture Studio</p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
              Professional architecture and structural design firm operating from our studio offices in <strong>Kanhangad</strong> and <strong>Chullikara</strong>, Kasaragod district, Kerala. Providing bespoke residential architecture and site supervision.
            </p>

            {/* Social & Maps Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={STUDIO_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-white text-gray-300 hover:text-black flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-white text-gray-300 hover:text-black flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#83f28f] text-gray-300 hover:text-black flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.social.mapsKanhangad}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kanhangad Google Maps"
                title="Kanhangad Office Location"
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-white text-gray-300 hover:text-black flex items-center justify-center transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Sections */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-white hover:underline">About Studio</a></li>
              <li><a href="#services" className="hover:text-white hover:underline">Services & Capabilities</a></li>
              <li><a href="#projects" className="hover:text-white hover:underline">House Projects</a></li>
              <li><a href="#videos" className="hover:text-white hover:underline">Videos</a></li>
              <li><a href="#contact" className="hover:text-white hover:underline">Contact & Locations</a></li>
            </ul>
          </div>

          {/* Direct Contact & Locations */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Studio Offices</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <a href={`tel:${STUDIO_INFO.phones[0].value}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                <span>{STUDIO_INFO.phones[0].display}</span>
              </a>
              <a href={`tel:${STUDIO_INFO.phones[1].value}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                <span>{STUDIO_INFO.phones[1].display}</span>
              </a>
              <a href={`mailto:${STUDIO_INFO.email}`} className="flex items-center gap-2 hover:text-white break-all">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                <span>{STUDIO_INFO.email}</span>
              </a>
              <div className="pt-1 space-y-1">
                <a
                  href={STUDIO_INFO.social.mapsKanhangad}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-1.5 text-gray-300 hover:text-white"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Kanhangad: Link SH 56, Koshanvan Kunnu</span>
                </a>
                <a
                  href={STUDIO_INFO.social.mapsChullikara}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-1.5 text-gray-300 hover:text-white"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Chullikara, Kasaragod District</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} Defined Space Architecture. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms</Link>
            <a
              href={STUDIO_INFO.social.mapsKanhangad}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 flex items-center gap-1"
            >
              <span>Kanhangad Office Map</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
