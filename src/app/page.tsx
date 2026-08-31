'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Play,
  ArrowUpRight,
  Compass,
  Layers,
  ShieldCheck,
  CheckCircle,
  Send,
  AlertCircle,
  Clock,
  Building,
  Sparkles,
  Navigation,
} from 'lucide-react';
import {
  STUDIO_INFO,
  HOUSE_PROJECTS,
  STUDIO_VIDEOS,
  STUDIO_SERVICES,
  ProjectItem,
  VideoItem,
} from '@/data/portfolioData';
import LightboxModal from '@/components/LightboxModal';
import VideoModal from '@/components/VideoModal';
import InteractiveCard from '@/components/InteractiveCard';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeOfficeIndex, setActiveOfficeIndex] = useState<number>(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFeedbackMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormStatus('success');
        setFeedbackMsg(data.message || 'Thank you. Your inquiry has been sent to Defined Space Architecture.');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setFormStatus('error');
        setFeedbackMsg(data.error || 'Failed to submit inquiry. Please call or WhatsApp us directly.');
      }
    } catch {
      setFormStatus('error');
      setFeedbackMsg('Network error. Please call or WhatsApp us directly.');
    }
  };

  const activeOffice = STUDIO_INFO.offices[activeOfficeIndex] || STUDIO_INFO.offices[0];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-950">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Bright Architectural Image, Seamless Navbar Blend, Smooth Transitions) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] w-full flex items-center overflow-hidden bg-gray-900">
        {/* Bright Modern Architecture Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Defined Space Architecture Design"
            fill
            sizes="100vw"
            className="object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
            priority
          />
          {/* Gentle, bright airy gradient for text legibility without blacking out the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
        </div>

        {/* Hero Content Left-Aligned with Smooth Entrance Transition */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left space-y-6"
          >
            {/* Studio Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 text-[#83f28f] text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-sm"
            >
              <Building className="w-3.5 h-3.5 text-[#83f28f]" />
              <span>Architecture & Structural Design</span>
            </motion.div>

            {/* Studio Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-md"
            >
              Defined Space
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base sm:text-xl text-gray-200 font-normal leading-relaxed max-w-xl drop-shadow-sm"
            >
              Bespoke residential architecture, modernist villa design, and comprehensive on-site engineering management.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT THE FIRM */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 sm:py-28 bg-[#F9FCFA] border-b border-[#E4EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-5 text-left"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#83f28f] px-3 py-1 rounded-full">
                About the Studio
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 leading-tight">
                Architectural design with structural precision and climatic clarity.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                <p>
                  <strong>Defined Space Architecture</strong> is an established architectural and spatial design firm operating from our offices in <strong>Kanhangad</strong> and <strong>Chullikara</strong> in Kasaragod district, Kerala. We specialize in custom residential homes, contemporary villa elevations, spatial blueprints, and complete site execution supervision.
                </p>
                <p>
                  Our architectural philosophy combines regional Kerala climatic considerations—such as natural air conduits, shaded courtyards, and sunlight orientation—with clean contemporary aesthetics and enduring construction standards.
                </p>
              </div>

              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-gray-800">
                <InteractiveCard tiltIntensity={6} className="bg-white border border-[#E4EFE7]">
                  <div className="p-4">
                    <p className="text-gray-500 font-normal">Expertise</p>
                    <p className="font-bold text-gray-950 mt-1">Residential Architecture</p>
                  </div>
                </InteractiveCard>

                <InteractiveCard tiltIntensity={6} className="bg-white border border-[#E4EFE7]">
                  <div className="p-4">
                    <p className="text-gray-500 font-normal">Approach</p>
                    <p className="font-bold text-gray-950 mt-1">Climate Responsive</p>
                  </div>
                </InteractiveCard>

                <InteractiveCard tiltIntensity={6} className="bg-white border border-[#E4EFE7]">
                  <div className="p-4">
                    <p className="text-gray-500 font-normal">Offices</p>
                    <p className="font-bold text-gray-950 mt-1">Kanhangad & Chullikara</p>
                  </div>
                </InteractiveCard>
              </div>
            </motion.div>

            {/* Right Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <InteractiveCard tiltIntensity={8} className="aspect-[4/3] bg-gray-100 border border-[#E4EFE7]">
                <Image
                  src="/works/project-2.jpg"
                  alt="Defined Space Architecture Project"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </InteractiveCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES (Clean & Minimalist, No Capabilities Badge or Explore Service Links) */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 sm:py-24 bg-white border-b border-[#E4EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
              Architectural Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDIO_SERVICES.map((srv, idx) => (
              <InteractiveCard
                key={srv.id}
                tiltIntensity={8}
                className="bg-[#F9FCFA] border border-[#E4EFE7] text-left"
              >
                <div className="p-6 space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E4EFE7] flex items-center justify-center text-gray-900 shadow-xs">
                    {idx === 0 && <Compass className="w-5 h-5" />}
                    {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 2 && <Layers className="w-5 h-5" />}
                    {idx === 3 && <Sparkles className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-base text-gray-950">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{srv.desc}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOUSE PROJECTS */}
      {/* ========================================================================= */}
      <section id="projects" className="py-20 sm:py-28 bg-[#F9FCFA] border-b border-[#E4EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#83f28f] px-3 py-1 rounded-full">
              House Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
              Architectural Works & Elevations
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Click any project to view in full resolution.
            </p>
          </div>

          {/* Clean House Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-6">
            {HOUSE_PROJECTS.map((project) => (
              <InteractiveCard
                key={project.id}
                onClick={() => setSelectedProject(project)}
                tiltIntensity={12}
                className="group relative aspect-[4/3] bg-gray-100 border border-[#E4EFE7] cursor-pointer"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={project.image}
                    alt="House Project"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VIDEOS */}
      {/* ========================================================================= */}
      <section id="videos" className="py-20 sm:py-28 bg-white border-b border-[#E4EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#83f28f] px-3 py-1 rounded-full">
              Video Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
              Project Videos
            </h2>
          </div>

          {/* Clean Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDIO_VIDEOS.map((video) => (
              <InteractiveCard
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                tiltIntensity={12}
                className="group relative bg-black border border-[#E4EFE7] cursor-pointer aspect-[16/9]"
              >
                <div className="w-full h-full relative">
                  <video
                    src={video.videoSrc}
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                  />

                  {/* Sleek Monochrome Play Button */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                      <Play className="w-5 h-5 fill-black ml-0.5" />
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT & LOCATIONS (Kanhangad Office & Chullikara Office) */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 sm:py-28 bg-[#F9FCFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#83f28f] px-3 py-1 rounded-full">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
              Office Locations & Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Offices in Kanhangad & Chullikara, Kasaragod. Contact our architectural team directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Office Locations & Interactive Google Map */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <InteractiveCard tiltIntensity={4} className="bg-white border border-[#E4EFE7]">
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Office Switcher Tabs */}
                  <div className="flex items-center gap-2 pb-3 border-b border-[#E4EFE7]">
                    {STUDIO_INFO.offices.map((office, idx) => (
                      <button
                        key={office.id}
                        type="button"
                        onClick={() => setActiveOfficeIndex(idx)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          activeOfficeIndex === idx
                            ? 'bg-black text-white shadow-xs'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {office.title}
                      </button>
                    ))}
                  </div>

                  {/* Active Office Info */}
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-950">{activeOffice.title}</p>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                          {activeOffice.address}
                        </p>
                        <a
                          href={activeOffice.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-1.5 text-xs font-bold text-emerald-800 hover:underline"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>Open in Google Maps App</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-1 border-t border-gray-100">
                      <Phone className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-950">Direct Phone Lines</p>
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
                      <Mail className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-950">Email</p>
                        <a href={`mailto:${STUDIO_INFO.email}`} className="text-xs text-gray-700 hover:underline break-all block mt-0.5 font-medium">
                          {STUDIO_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-950">Hours</p>
                        <p className="text-xs text-gray-600 mt-0.5">{STUDIO_INFO.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={STUDIO_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#83f28f] hover:bg-[#6ee67b] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Direct Message</span>
                    </a>
                  </div>
                </div>
              </InteractiveCard>

              {/* Embedded Interactive Google Map for Active Office */}
              <div className="rounded-2xl overflow-hidden border border-[#E4EFE7] shadow-xs bg-white h-[280px]">
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

            {/* Right Column: Contact Inquiry Form (ZERO Placeholders) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E4EFE7] shadow-xs text-left">
                <h3 className="font-bold text-xl text-gray-950 mb-1">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Please provide your contact information and requirements below.
                </p>

                {formStatus === 'success' && (
                  <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Honeypot spam trap (hidden from real users) */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9FCFA] border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9FCFA] border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9FCFA] border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Service Interested
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9FCFA] border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="">Select an architectural service...</option>
                      {STUDIO_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Project Message / Plot Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9FCFA] border border-[#E4EFE7] text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        projects={HOUSE_PROJECTS}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Video Modal with Monochrome Controls */}
      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
