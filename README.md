# Defined Space Architecture - Official Website

A luxury, modern, animated marketing and portfolio website for **Defined Space Architecture**, located in **Chullikara, Kanhangad, Kerala, India**.

Built with **Next.js 14+ (App Router, TypeScript)**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

---

## 🏛️ Studio Information

- **Studio Name**: Defined Space Architecture
- **Location**: Chullikara, Kanhangad, Kerala, India
- **Phone Lines**:
  - Primary: `+91 62389 08782`
  - Secondary: `+91 70259 71473`
- **Email**: `definedspacearchitecture@gmail.com`
- **Socials**:
  - [Instagram](https://www.instagram.com/definedspace.architecture)
  - [Kushavankunnu Office Map](https://maps.app.goo.gl/SzskAmzWpKUpA8866?g_st=ac)
  - [Chullikara Office Map](https://maps.app.goo.gl/ifajpjWjzVjrZGfD8?g_st=ac)
  - [WhatsApp Instant Chat](https://wa.me/916238908782)

---

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS with custom architectural color palette (Muted Sage/Forest Green `#4F7A5E`, Light Accent `#E7F1EA`, Deep Neutral `#1A1F1C`, Off-White `#F7FAF7`)
- **Animation**: Framer Motion for scroll-triggered reveals, entrance transitions, and lightbox modals
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Email Dispatch**: Next.js Serverless API Route (`/api/contact`) with Nodemailer
- **Maps**: Responsive Google Maps embed

---

## 📁 Directory Structure & Asset Management

```
definedspace/
├── public/
│   ├── logo.jpg               # Studio official logo
│   ├── hero.mp4               # Full-screen looping background video for hero
│   ├── works/                 # Real portfolio project photos (13 images)
│   └── videos/                # Real studio construction & process videos (6 videos)
├── src/
│   ├── app/
│   │   ├── api/contact/       # Contact form serverless dispatch endpoint
│   │   ├── about/             # Studio story, philosophy & values
│   │   ├── contact/           # Contact form, direct call/email links & Google Map
│   │   ├── privacy/           # Legal Privacy Policy
│   │   ├── terms/             # Legal Terms of Engagement
│   │   ├── videos/            # Video gallery showcase page
│   │   ├── works/             # Filterable portfolio gallery with Lightbox modal
│   │   ├── globals.css        # Theme variables, glassmorphism & typography
│   │   ├── layout.tsx         # Root layout with SEO, Navbar, Footer & WhatsApp
│   │   ├── page.tsx           # High-impact animated Landing page
│   │   ├── robots.ts          # Automated SEO indexing instructions
│   │   └── sitemap.ts         # Automated XML sitemap
│   ├── components/
│   │   ├── BackToTop.tsx      # Floating back-to-top button
│   │   ├── FloatingWhatsApp.tsx # Floating WhatsApp chat button
│   │   ├── Footer.tsx         # Minimalist architectural footer
│   │   ├── LightboxModal.tsx  # Fullscreen image viewer with keyboard controls
│   │   ├── Navbar.tsx         # Sticky glassmorphic navbar with mobile drawer
│   │   ├── SmoothScroll.tsx   # Lenis smooth scroll provider
│   │   └── VideoModal.tsx     # Custom minimal video player modal
│   └── data/
│       └── portfolioData.ts   # Central registry for all studio details, works & videos
└── .env.local.example         # Template for environment variables
```

---

## 📸 How to Add New Project Photos or Videos

### Adding New Project Photos:
1. Drop your new image file into `/public/works/` (e.g. `villa-kanhangad.jpg`).
2. Open [`src/data/portfolioData.ts`](file:///src/data/portfolioData.ts).
3. Add a new object to `PORTFOLIO_PROJECTS`:
   ```typescript
   {
     id: "project-14",
     title: "Tropical Modernist Residence",
     category: "Residential", // 'Residential' | 'Commercial' | 'Interior' | 'Landscape' | 'Planning'
     location: "Kanhangad, Kerala",
     image: "/works/villa-kanhangad.jpg",
     featured: true,
     description: "Brief 1-2 sentence description of the project.",
   },
   ```

### Adding New Videos:
1. Drop your `.mp4` video into `/public/videos/` (e.g. `walkthrough-2.mp4`).
2. In [`src/data/portfolioData.ts`](file:///src/data/portfolioData.ts), add an entry to `STUDIO_VIDEOS`:
   ```typescript
   {
     id: "video-7",
     title: "Courtyard Concrete Pouring & Elevation",
     videoSrc: "/videos/walkthrough-2.mp4",
     category: "Site Execution",
     description: "Site documentation of courtyard development.",
   },
   ```

---

## 🛠️ Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## ☁️ Deployment Instructions (Vercel + Custom Domain)

### Step 1: Push to GitHub
1. Create a repository on [GitHub](https://github.com).
2. Commit and push your code:
   ```bash
   git add .
   git commit -m "Initial commit of Defined Space Architecture website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/definedspace.git
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository (`definedspace`).
4. Next.js preset will be automatically detected.

### Step 3: Add Environment Variables (Optional for email notifications)
Under **Settings → Environment Variables** in Vercel, add:
- `SMTP_HOST`: `smtp.gmail.com` (or your mail service host)
- `SMTP_PORT`: `587`
- `SMTP_USER`: `definedspacearchitecture@gmail.com`
- `SMTP_PASS`: Your Gmail App Password
- `CONTACT_RECIPIENT_EMAIL`: `definedspacearchitecture@gmail.com`

Click **Deploy**.

### Step 4: Connecting a Custom Domain (e.g. `definedspacearchitecture.com`)
1. In your Vercel Project Dashboard, navigate to **Settings → Domains**.
2. Type your purchased domain name (e.g., `definedspacearchitecture.com` and `www.definedspacearchitecture.com`) and click **Add**.
3. Vercel will show the required DNS records:
   - **A Record**:
     - Name: `@`
     - Value: `76.76.21.21`
   - **CNAME Record**:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
4. Log into your domain registrar (GoDaddy, Namecheap, Google Domains, Cloudflare, etc.) and add these DNS records.
5. Vercel will automatically provision a free SSL certificate (HTTPS) within a few minutes.
