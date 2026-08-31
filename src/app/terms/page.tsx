import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { STUDIO_INFO } from '@/data/portfolioData';

export const metadata = {
  title: 'Terms of Engagement',
  description: 'Terms of Engagement of Defined Space Architecture Studio',
};

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-studio-green hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-green-100 text-studio-green-700 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Studio Guidelines</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-studio-dark">
            Terms of Engagement
          </h1>
          <p className="text-xs text-studio-muted">Last updated: August 2026</p>
        </div>

        <div className="prose prose-sm max-w-none text-studio-body space-y-6 leading-relaxed">
          <p>
            Welcome to the website of Defined Space Architecture. By browsing our portfolio, viewing project reels, or submitting architectural inquiries, you agree to these standard terms.
          </p>

          <h3 className="font-serif text-lg font-bold text-studio-dark">1. Intellectual Property & Architectural Rights</h3>
          <p>
            All architectural drawings, 3D visualizations, photographs, videos, elevations, brand marks, and text displayed on this website are the intellectual property of Defined Space Architecture unless otherwise noted. Unauthorized reproduction or commercial use is strictly prohibited without prior written consent.
          </p>

          <h3 className="font-serif text-lg font-bold text-studio-dark">2. Project Inquiries & Consultations</h3>
          <p>
            Information and project estimates discussed during preliminary inquiries or through the online contact form are indicative. Formal architectural contracts, deliverables, fee schedules, and construction timelines are established through mutual agreement and formal documentation.
          </p>

          <h3 className="font-serif text-lg font-bold text-studio-dark">3. Studio Office</h3>
          <p>
            Defined Space Architecture operates in Chullikara, Kanhangad, Kerala, India. For inquiries regarding contracts or design rights, contact:
          </p>
          <p className="p-4 bg-studio-bg-subtle rounded-xl border border-studio-border text-xs text-studio-dark">
            <strong>Defined Space Architecture</strong><br />
            Email: <a href={`mailto:${STUDIO_INFO.email}`} className="text-studio-green underline">{STUDIO_INFO.email}</a><br />
            Phone: {STUDIO_INFO.phones[0].display}
          </p>
        </div>
      </div>
    </div>
  );
}
