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
} from 'lucide-react';
import { STUDIO_INFO, STUDIO_SERVICES } from '@/data/portfolioData';

export default function ContactPage() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFeedbackMsg(data.message || 'Thank you! Your inquiry has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setStatus('error');
        setFeedbackMsg(data.error || 'Failed to send message. Please try calling directly.');
      }
    } catch {
      setStatus('error');
      setFeedbackMsg('Network error. Please call us directly on our studio numbers.');
    }
  };

  return (
    <div className="pt-28 pb-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left space-y-2 mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#83f28f] px-3 py-1 rounded-full">
            Contact
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950">
            Contact Studio
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Chullikara, Kanhangad, Kerala. Send us a message or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Details Cards & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#F9FCFA] p-6 sm:p-7 rounded-2xl border border-[#E4EFE7] space-y-5">
              <h3 className="font-bold text-base text-gray-950 border-b border-[#E4EFE7] pb-3">
                Studio Directory
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-950">Address</p>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Defined Space Architecture<br />
                      Chullikara, Kanhangad, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
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
                  <Mail className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-950">Email</p>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-xs text-gray-700 hover:underline break-all block mt-0.5 font-medium">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
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
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#83f28f] hover:bg-[#6ee67b] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#E4EFE7] shadow-sm bg-white h-[260px]">
              <iframe
                title="Defined Space Architecture Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.428574187063!2d75.1432!3d12.3854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4772b220d9e43%3A0x89dcbc6551b94f6f!2sChullikkara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
                <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83f28f]"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83f28f]"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83f28f]"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83f28f]"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83f28f]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#83f28f] hover:bg-[#6ee67b] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
