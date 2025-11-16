# Wood works

A modern, high-performance interior design showcase website built with Next.js, featuring exceptional web vitals scores and comprehensive SEO optimization.

🔗 **Live Site:** [https://pskinteriors.vercel.app/](https://pskinteriors.vercel.app/)

## 📊 Performance Metrics

- **Performance:** 97-100
- **Accessibility:** 96-100
- **Best Practices:** 96-100
- **SEO:** 100
- **First Contentful Paint:** 0.6-0.8s
- **Largest Contentful Paint:** 0.7-0.9s

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Hosting:** [Vercel](https://vercel.com/)

## ✨ Features

### Image Optimization
- **File Size:** All images optimized to < 200KB
- **Format:** WebP format for superior compression
- **Placeholder:** Blur placeholders for smooth loading experience
- **Accessibility:** Detailed alt text and semantic file names
- **Performance:** Lazy loading and responsive images

### User Interface
- **Drawers:** Smooth slide-out navigation components
- **Dark Mode:** System-aware theme switching with manual toggle
- **Toast Notifications:** Real-time user feedback system
- **Responsive Design:** Mobile-first, fully responsive across all devices

### Legal & Compliance
- **Privacy Policy:** Comprehensive privacy documentation
- **Cookie Policy:** Transparent cookie usage information
- **Credits & Attribution:** Proper attribution for resources used

### SEO Optimization
- **Meta Tags:** Complete metadata for all pages
- **Open Graph:** Social media preview optimization
- **Structured Data:** Schema.org markup for rich snippets
- **Sitemap:** XML sitemap for search engine crawling
- **Performance:** Optimized Core Web Vitals (>95 score)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ssr0095/Wood-works.git
   cd Wood-works
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_PHONE_LINK=9894596902
   NEXT_PUBLIC_PHONE_TEXT=+91 98945-96902
   NEXT_PUBLIC_EMAIL=care@pskinteriors.in
   NEXT_PUBLIC_WHATSAPP_TEXT=Hey!%20I%20saw%20your%20collection%20and%20loved%20it.%20Can%20you%20help%20me%20with%20sizes%20and%20pricing?
   NEXT_PUBLIC_FRONTEND_DOMAIN=pskinteriors.in
   NEXT_PUBLIC_INSTAGRAM_LINK=https://www.instagram.com/cousins_.fashion?igsh=aGZmaXRpNmJ2NWQ2
   NEXT_PUBLIC_FACEBOOK_LINK=https://www.facebook.com/cousins.fashion
   NEXT_PUBLIC_LINKEDIN_LINK=https://www.instagram.com/cousins_.fashion?igsh=aGZmaXRpNmJ2NWQ2
   NEXT_PUBLIC_TWITTER_LINK=https://www.instagram.com/cousins_.fashion?igsh=aGZmaXRpNmJ2NWQ2
   ANALYZE=true
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
psk-interiors/
├── app/                    # Next.js app directory
│   ├── (root)/              
│     └── layout.tsx         # Root layout with metadata
│     └── page.tsx           # Home page
│     └── services/          # Services page
│     └── ...               # Other pages
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   └── ...               # Custom components
├── public/               # Static assets
│   └── assets/          
│     └── images/          # Optimized images
│   ├── assets.tsx           # Centrolized assets control
├── styles/              # Custom styles
└── lib/                 # Utility functions
```

## 🔍 SEO Features

- Dynamic metadata generation per page
- Structured data for services and organization
- Open Graph tags for social sharing
- Twitter Card optimization
- Semantic HTML structure
- Optimized meta descriptions and titles

## 📈 Optimization Techniques

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind CSS purging
- Font optimization with next/font
- Minimal JavaScript bundle size
- CDN delivery through Vercel Edge Network

## 📄 License

[Creative Commons Attribution-NonCommercial (CC BY-NC)](https://github.com/ssr0095/Wood-works/blob/main/LICENSE)

## 👥 Author

Sriram S

---

**Note:** This project prioritizes performance, accessibility, and SEO best practices to deliver an exceptional user experience.
