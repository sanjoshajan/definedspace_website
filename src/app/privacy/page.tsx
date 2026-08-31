import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { STUDIO_INFO } from '@/data/portfolioData';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of Defined Space Architecture Studio',
};

export default function PrivacyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-studio-dark">
            Privacy Policy
          </h1>
          <p className="text-xs text-studio-muted">Last updated: August 2026</p>
        </div>

        <div className="prose prose-sm max-w-none text-studio-body space-y-6 leading-relaxed">
          <p>
            Defined Space Architecture (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects the privacy of our clients, prospective clients, and website visitors. This Privacy Policy explains how information submitted through our website and contact forms is collected and utilized.
          </p>

          <h3 className="font-serif text-lg font-bold text-studio-dark">1. Information We Collect</h3>
          <p>
            When you submit a contact inquiry on our website, we may collect your name, phone number, email address, project requirements, and site location details. This information is provided voluntarily by you to facilitate architectural discussions.
          </p>

          <h3 className="font-serif text-lg font-bold text-studio-dark">2. How We Use Your Information</h3>
          <p>
            The details you provide are solely used to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your architectural inquiries and project proposals.</li>
            <li>Schedule site visits, blueprint reviews, and design consultations.</li>
            <li>Communicate project updates and technical documentation.</li>
          </ul>
          <p>
            We do not sell, rent, or distribute your personal details or project data to third-party advertisers.
          </p>

          <h3 className="font-serif text-lg font-bold text-studio-dark">3. Studio Contact</h3>
          <p>
            If you have questions regarding this policy or wish to update your details, please reach out directly to:
          </p>
          <p className="p-4 bg-studio-bg-subtle rounded-xl border border-studio-border text-xs text-studio-dark">
            <strong>Defined Space Architecture</strong><br />
            Chullikara, Kanhangad, Kerala, India<br />
            Email: <a href={`mailto:${STUDIO_INFO.email}`} className="text-studio-green underline">{STUDIO_INFO.email}</a><br />
            Phone: {STUDIO_INFO.phones[0].display}
          </p>
        </div>
      </div>
    </div>
  );
}
