'use client';

import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '@/data/portfolioData';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={STUDIO_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Defined Space Architecture on WhatsApp"
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#006D5B] hover:bg-[#005648] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </a>
    </div>
  );
}
