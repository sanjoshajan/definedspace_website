export interface ProjectItem {
  id: string;
  image: string;
}

export interface VideoItem {
  id: string;
  videoSrc: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
}

export interface OfficeLocation {
  id: string;
  title: string;
  address: string;
  mapUrl: string;
  embedUrl: string;
}

export const STUDIO_INFO = {
  name: "Defined Space Architecture",
  tagline: "Architecture & Structural Design Studio",
  offices: [
    {
      id: "kanhangad",
      title: "Kanhangad Office",
      address: "Link SH 56, Koshanvan Kunnu, Kanhangad, Kerala 671315",
      mapUrl: "https://maps.app.goo.gl/Q6KWK3NdYgd46btR7",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.225916053351!2d75.0915481750697!3d12.327985087930997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba47c4492cd9d6b%3A0xf195f7fb4dd57592!2sLink%20SH%2056%2C%20Koshanvan%20Kunnu%2C%20Payannoor%2C%20Kanhangad%2C%20Kerala%20671315!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    },
    {
      id: "chullikara",
      title: "Chullikara Office",
      address: "Chullikara, Kasaragod District, Kerala, India",
      mapUrl: "https://maps.app.goo.gl/kwPoLzosjVQAtWuy6",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.428574187063!2d75.1432!3d12.3854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4772b220d9e43%3A0x89dcbc6551b94f6f!2sChullikkara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    },
  ],
  phones: [
    { label: "+91 62389 08782", value: "+916238908782", display: "+91 62389 08782" },
    { label: "+91 70259 71473", value: "+917025971473", display: "+91 70259 71473" },
  ],
  email: "definedspacearchitecture@gmail.com",
  social: {
    instagram: "https://www.instagram.com/definedspace.architecture",
    facebook: "https://www.facebook.com/definedspace.architecture",
    mapsKanhangad: "https://maps.app.goo.gl/Q6KWK3NdYgd46btR7",
    mapsChullikara: "https://maps.app.goo.gl/kwPoLzosjVQAtWuy6",
    maps: "https://maps.app.goo.gl/Q6KWK3NdYgd46btR7",
    whatsapp: "https://wa.me/916238908782",
  },
  hours: "Monday – Saturday: 9:00 AM – 6:30 PM",
};

// All Real House Architecture Projects
export const HOUSE_PROJECTS: ProjectItem[] = [
  { id: "house-1", image: "/works/project-1.jpg" },
  { id: "house-2", image: "/works/project-2.jpg" },
  { id: "house-3", image: "/works/project-3.jpg" },
  { id: "house-5", image: "/works/project-5.jpg" },
  { id: "house-6", image: "/works/project-6.jpg" },
  { id: "house-8", image: "/works/project-8.jpg" },
  { id: "house-11", image: "/works/project-11.jpg" },
  { id: "house-12", image: "/works/project-12.jpg" },
  { id: "house-13", image: "/works/project-13.jpg" },
];

export const PORTFOLIO_PROJECTS = HOUSE_PROJECTS;
export const ALL_PROJECTS = HOUSE_PROJECTS;

// Real studio videos
export const STUDIO_VIDEOS: VideoItem[] = [
  { id: "v1", videoSrc: "/videos/video-1.mp4" },
  { id: "v2", videoSrc: "/videos/video-2.mp4" },
  { id: "v3", videoSrc: "/videos/video-3.mp4" },
  { id: "v4", videoSrc: "/videos/video-4.mp4" },
  { id: "v5", videoSrc: "/videos/video-5.mp4" },
  { id: "v6", videoSrc: "/videos/video-6.mp4" },
];

export const STUDIO_SERVICES: ServiceItem[] = [
  {
    id: "srv-arch",
    title: "Architectural Planning & Design",
    desc: "Complete custom residential villa layouts, modernist 3D elevations, and engineering drawings designed for Kerala's climate.",
  },
  {
    id: "srv-supervision",
    title: "Site Supervision & Quality Control",
    desc: "Direct on-site engineering oversight and regular inspections ensuring structural integrity and precise execution.",
  },
  {
    id: "srv-planning",
    title: "3D Visualization & Approvals",
    desc: "High-definition 3D exterior visualization, plot orientation analysis, and building permit documentation.",
  },
  {
    id: "srv-renovation",
    title: "Remodeling & Structural Upgrades",
    desc: "Modernizing existing residences with updated spatial flow, contemporary facades, and enhanced cross-ventilation.",
  },
];
