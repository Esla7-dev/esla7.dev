# ESLAH - Architecture Portfolio Website

> A modern, responsive portfolio website for ESLAH (إصلاح), an architectural design and engineering firm specializing in execution-aware design solutions.

## 🌟 Features

- **Bilingual Support**: Arabic (RTL) and English content
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Smooth Animations**: Framer Motion for fluid interactions
- **Contact Form**: EmailJS integration for form submissions
- **Project Showcase**: Dynamic project filtering and detail pages
- **SEO Ready**: Prepared for meta tags and optimization
- **Error Handling**: Global error boundary for graceful error recovery

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (or use nvm: [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun package manager

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd esla7-design-to-build-main

# Install dependencies
npm install
# or
bun install

# Copy environment variables
cp .env.example .env

# Start the development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:8080`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (see `.env.example`):

```env
# Resend API Configuration (Required for contact form)
VITE_RESEND_API_KEY=re_your_api_key_here
VITE_RESEND_FROM_EMAIL=noreply@yourdomain.com

# Contact Information
VITE_CONTACT_EMAIL=info@eslah.com
VITE_CONTACT_PHONE=+20 123 456 7890
VITE_CONTACT_LOCATION=Cairo, Egypt

# Social Media Links
VITE_SOCIAL_LINKEDIN=https://www.linkedin.com/company/eslah
VITE_SOCIAL_INSTAGRAM=https://www.instagram.com/eslah
```

### Resend Setup

1. Create an account at [Resend](https://resend.com/)
2. Verify your domain or use the test domain
3. Generate an API key from the dashboard
4. Add the API key to your `.env` file:
   - `VITE_RESEND_API_KEY` - Your Resend API key
   - `VITE_RESEND_FROM_EMAIL` - Sender email (must be from verified domain)
   - `VITE_CONTACT_EMAIL` - Recipient email for contact form submissions

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── WhySection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                  # shadcn/ui components
│   └── ErrorBoundary.tsx    # Global error handler
├── pages/
│   ├── Index.tsx           # Homepage
│   ├── Projects.tsx        # Projects listing
│   ├── ProjectDetail.tsx   # Individual project page
│   └── NotFound.tsx        # 404 page
├── data/
│   └── projects.ts         # Project data & types
├── lib/
│   └── utils.ts            # Utility functions
└── App.tsx                 # Main app component
```

## 🛠️ Available Scripts

```sh
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🎨 Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS 3.4 with custom design system
- **Animations**: Framer Motion 12.28
- **Routing**: React Router 6.30
- **State Management**: TanStack Query 5.83
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Form Handling**: EmailJS
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library

## 📱 Pages & Routes

- `/` - Homepage with all sections
- `/projects` - All projects listing with filtering
- `/project/:id` - Individual project detail page
- `*` - 404 Not Found page

## ✅ Completed Features

- ✅ Responsive navigation with mobile menu
- ✅ All homepage sections (Hero, About, Services, Process, Projects, Capabilities, Why, Contact)
- ✅ Dynamic project filtering and detail pages
- ✅ Contact form with EmailJS integration
- ✅ Loading states and toast notifications
- ✅ Error boundary for error handling
- ✅ Environment variables configuration
- ✅ Social media links with fallbacks
- ✅ Professional 404 page

## 🔜 Future Enhancements

- [ ] Add SEO meta tags with react-helmet-async
- [ ] Implement dark mode toggle
- [ ] Add client testimonials section
- [ ] Create team/about page
- [ ] Add blog section for content marketing
- [ ] Integrate CMS (Sanity/Contentful) for content management
- [ ] Add internationalization (i18n) framework
- [ ] Implement progressive web app (PWA) features
- [ ] Add comprehensive unit and E2E tests
- [ ] Performance optimizations (lazy loading, code splitting)

## 📄 License

© 2026 ESLAH إصلاح. All rights reserved.

---

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
