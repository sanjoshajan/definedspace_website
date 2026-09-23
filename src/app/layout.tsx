import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { STUDIO_INFO } from '@/data/portfolioData';

const siteUrl = 'https://definedspacearchitecture.com';

export const metadata: Metadata = {
  title: {
    default: `${STUDIO_INFO.name} | Architecture & Structural Design Studio`,
    template: `%s | ${STUDIO_INFO.name}`,
  },
  description:
    'Defined Space Architecture is a premier architectural and spatial design firm with offices in Kanhangad and Chullikara, Kasaragod, Kerala. Specializing in bespoke modern residential homes, villa architecture, 3D elevations, and complete on-site construction oversight.',
  keywords: [
    'Defined Space Architecture',
    'Architects in Kanhangad',
    'Architects in Kasaragod',
    'Architects in Chullikara',
    'Kerala Architecture Firm',
    'Residential Architecture Kerala',
    'Villa Design Kerala',
    'Modern House Elevation Kerala',
    'Structural Engineering Kerala',
    'House Plans Kasaragod',
  ],
  authors: [{ name: 'Defined Space Architecture', url: siteUrl }],
  creator: 'Defined Space Architecture',
  publisher: 'Defined Space Architecture',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: `${STUDIO_INFO.name} | Architecture Studio Kasaragod, Kerala`,
    description:
      'Bespoke residential architecture, modernist villa design, and comprehensive on-site engineering management in Kerala.',
    siteName: STUDIO_INFO.name,
    images: [
      {
        url: '/works/project-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Defined Space Architecture — Modern Residential Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${STUDIO_INFO.name} | Architecture Studio Kasaragod, Kerala`,
    description:
      'Bespoke residential architecture, modernist villa design, and comprehensive on-site engineering management in Kerala.',
    images: ['/works/project-1.jpg'],
  },
  icons: {
    icon: [
      { url: '/logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/logo.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [{ url: '/logo.jpg', sizes: '180x180', type: 'image/jpeg' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#006D5B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased selection:bg-[#006D5B] selection:text-white">
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <BackToTop />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
