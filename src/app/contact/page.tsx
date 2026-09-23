'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  ArrowUpRight,
  Navigation,
} from 'lucide-react';
import { STUDIO_INFO, STUDIO_SERVICES } from '@/data/portfolioData';

export default function ContactPage() {
  const [activeOfficeIndex, setActiveOfficeIndex] = useState(0);
  const activeOffice = STUDIO_INFO.offices[activeOfficeIndex];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textLines = [
      `*New Project Inquiry - Defined Space Architecture*`,
      ``,
      `*Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      ...(formData.email.trim() ? [`*Email:* ${formData.email.trim()}`] : []),
      ...(formData.service.trim() ? [`*Service Required:* ${formData.service.trim()}`] : []),
      ``,
      `*Project Details / Location:*`,
      formData.message.trim(),
    ];

    const message = textLines.join('\n');
    const whatsappUrl = `https://wa.me/916238908782?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <div className="pt-28 pb-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left space-y-2 mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#006D5B] px-3.5 py-1 rounded-full">
            Contact
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950">
            Contact Studio
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Kanhangad &amp; Chullikara, Kerala. Send us a message or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Details Cards & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#F9FCFA] p-6 sm:p-7 rounded-2xl border border-[#E4EFE7] space-y-5">
              <div className="flex items-center justify-between border-b border-[#E4EFE7] pb-3">
                <h3 className="font-bold text-base text-gray-950">
                  Studio Directory
                </h3>
                {/* Office Switcher Tabs */}
                <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-lg">
                  {STUDIO_INFO.offices.map((office, idx) => (
                    <button
                      key={office.id}
                      type="button"
                      onClick={() => setActiveOfficeIndex(idx)}
                      className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                        activeOfficeIndex === idx
                          ? 'bg-[#006D5B] text-white shadow-xs'
                          : 'text-gray-700 hover:text-black'
                      }`}
                    >
                      {office.title.replace(' Office', '')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#006D5B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-950">{activeOffice.title}</p>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      {activeOffice.address}
                    </p>
                    <a
                      href={activeOffice.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-[#006D5B] hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                  <Phone className="w-4 h-4 text-[#006D5B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-950">Phone Numbers</p>
                    <div className="text-xs text-gray-700 mt-0.5 space-y-1">
                      <a href={`tel:${STUDIO_INFO.phones[0].value}`} className="block hover:underline font-medium">
                        {STUDIO_INFO.phones[0].display}
                      </a>
                      <a href={`tel:${STUDIO_INFO.phones[1].value}`} className="block hover:underline font-medium">
                        {STUDIO_INFO.phones[1].display}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#006D5B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-950">Email</p>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-xs text-gray-700 hover:underline break-all block mt-0.5 font-medium">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#006D5B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-950">Working Hours</p>
                    <p className="text-xs text-gray-600 mt-0.5">{STUDIO_INFO.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STUDIO_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#006D5B] hover:bg-[#005648] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Direct Message</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#E4EFE7] shadow-sm bg-white h-[260px]">
              <iframe
                key={activeOffice.id}
                title={`Defined Space Architecture ${activeOffice.title}`}
                src={activeOffice.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F9FCFA] p-6 sm:p-8 rounded-2xl border border-[#E4EFE7] shadow-sm text-left">
              <h3 className="font-bold text-xl text-gray-950 mb-1">
                Send Project Inquiry
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the details below and we will get back to you.
              </p>

              {status === 'success' && (
                <div className="mb-5 p-3 rounded-xl bg-[#006D5B]/10 border border-[#006D5B]/25 text-[#004D40] text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006D5B] flex-shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Nair"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#006D5B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#006D5B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#006D5B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#006D5B]"
                    >
                      <option value="">Select a service...</option>
                      {STUDIO_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                    Project Details / Location <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your plot size, location in Kerala, and requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#006D5B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#006D5B] hover:bg-[#005648] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
