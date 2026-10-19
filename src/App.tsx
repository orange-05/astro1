import React, { useState, useEffect } from 'react';
import { SupportedLanguage, AstrologerConfig } from './types';
import { DEFAULT_LANGUAGE, getLanguageMeta } from './i18n/languages';
import { getTranslation } from './i18n/translations';
import { CelestialCanvas } from './components/CelestialCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { ConsultationProcess } from './components/ConsultationProcess';
import { TrustAndEthics } from './components/TrustAndEthics';
import { FAQSection } from './components/FAQSection';
import { InquiryForm } from './components/InquiryForm';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { WhatsAppChatbot } from './components/WhatsAppChatbot';
import { AdminDrawer } from './components/AdminDrawer';
import { SEOAndHostingModal } from './components/SEOAndHostingModal';
import { MobileBottomBar } from './components/MobileBottomBar';

const DEFAULT_CONFIG: AstrologerConfig = {
  astrologerName: 'Acharya Keshava Shastri',
  lineage: '24+ Years Traditional Vedic Lineage (Varanasi & Udupi Traditions)',
  whatsappNumber: '+919876543210',
  displayPhone: '+91 98765 43210',
  email: 'acharya.shastri.jyotish@gmail.com',
  consultationHours: 'Monday – Saturday: 08:30 AM – 07:30 PM IST',
  consultationModes: ['In-Person (Bengaluru / Varanasi)', 'Direct WhatsApp Video/Voice', 'Detailed Written Kundali Report'],
  baseLocation: 'Vedic Consultation Sanctum, Indiranagar, Bengaluru & Varanasi, India',
  languagesSpoken: ['English', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Hindi', 'Marathi']
};

export default function App() {
  // Multilingual preference with localStorage persistence & URL query param support
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const paramLang = urlParams.get('lang') as SupportedLanguage;
      if (paramLang && ['en', 'kn', 'ta', 'te', 'ml', 'hi', 'mr', 'jam', 'yor', 'ig', 'ha', 'tt'].includes(paramLang)) {
        return paramLang;
      }
      const saved = localStorage.getItem('acharya_jyotish_lang') as SupportedLanguage;
      if (saved && ['en', 'kn', 'ta', 'te', 'ml', 'hi', 'mr', 'jam', 'yor', 'ig', 'ha', 'tt'].includes(saved)) {
        return saved;
      }
    }
    return DEFAULT_LANGUAGE;
  });

  // Page 1 vs Page 2 navigation state - supports root paths, subdirectories (/astro1/), and query params (?page=about)
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('page') === 'about') return 'about';
      if (window.location.pathname.endsWith('/about') || window.location.hash === '#about') {
        return 'about';
      }
    }
    return 'home';
  });

  // Modal / Drawer states
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [seoModalOpen, setSeoModalOpen] = useState(false);

  // Dynamic Astrologer Configuration
  const [config, setConfig] = useState<AstrologerConfig>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('acharya_config');
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return DEFAULT_CONFIG;
  });

  const t = getTranslation(currentLang);
  const currentLangMeta = getLanguageMeta(currentLang);

  // Fetch initial config from backend API with localStorage fallback for static hosting
  useEffect(() => {
    fetch('/api/config')
      .then(res => {
        if (!res.ok) throw new Error('Static host');
        return res.json();
      })
      .then(data => {
        if (data && data.whatsappNumber) {
          setConfig(prev => ({ ...prev, ...data }));
          try {
            localStorage.setItem('acharya_config', JSON.stringify(data));
          } catch {}
        }
      })
      .catch(() => {});
  }, []);

  // Sync Language and Meta tags dynamically for SEO & accessibility
  useEffect(() => {
    document.documentElement.lang = currentLang;
    localStorage.setItem('acharya_jyotish_lang', currentLang);

    // Sync document title and description based on active page and language
    if (currentPage === 'about') {
      document.title = `${t.about.title} — Biography & Vedic Astrological Lineage`;
    } else {
      document.title = `Acharya Shastri — Authentic Vedic Astrology Consultations (${currentLangMeta.name})`;
    }

    // Dynamic Schema.org structured data (ProfessionalService & Person)
    const baseSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': 'https://acharyashastri-astrology.com/#sanctum',
          name: 'Acharya Shastri Vedic Astrological Sanctum',
          description: t.hero.subheadline,
          telephone: config.whatsappNumber,
          email: config.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '12th Main Road, Indiranagar',
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: '560038',
            addressCountry: 'IN'
          },
          openingHours: 'Mo-Sa 08:30-19:30',
          priceRange: '$$',
          knowsLanguage: config.languagesSpoken
        },
        {
          '@type': 'Person',
          '@id': 'https://acharyashastri-astrology.com/#acharya',
          name: 'Acharya Keshava Shastri',
          jobTitle: 'Vedic Astrologer & Sanskrit Sahitya Scholar',
          description: t.about.bioP1,
          worksFor: {
            '@id': 'https://acharyashastri-astrology.com/#sanctum'
          }
        }
      ]
    };

    const schemaId = 'primary-schema-ld-json';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(baseSchema);
  }, [currentLang, currentPage, t, config]);

  const handleSelectLang = (lang: SupportedLanguage) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleNavigate = (page: 'home' | 'about', anchor?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (page === 'about') {
        url.searchParams.set('page', 'about');
      } else {
        url.searchParams.delete('page');
      }
      if (currentLang !== 'en') {
        url.searchParams.set('lang', currentLang);
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  // Support browser back/forward buttons on GitHub Pages & custom domains
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('page') === 'about' || window.location.pathname.endsWith('/about') || window.location.hash === '#about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
      const paramLang = urlParams.get('lang') as SupportedLanguage;
      if (paramLang && ['en', 'kn', 'ta', 'te', 'ml', 'hi', 'mr', 'jam', 'yor', 'ig', 'ha', 'tt'].includes(paramLang)) {
        setCurrentLang(paramLang);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleScrollToForm = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070b19] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Subtle celestial canvas backdrop */}
      <CelestialCanvas />

      {/* Top Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        t={t}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        whatsappNumber={config.whatsappNumber}
        onOpenChatbot={() => setChatbotOpen(true)}
      />

      {/* Main Two-Page Routing with Mobile Safe Area Padding */}
      <main className="relative z-10 pb-20 lg:pb-0">
        {currentPage === 'home' ? (
          <div>
            {/* Hero Section */}
            <Hero
              t={t}
              whatsappNumber={config.whatsappNumber}
              onOpenForm={handleScrollToForm}
              onNavigateAbout={() => handleNavigate('about')}
              currentLangName={currentLangMeta.name}
            />

            {/* Introduction: Philosophy of Jyoti */}
            <IntroSection
              t={t}
              onNavigateAbout={() => handleNavigate('about')}
            />

            {/* Specialized Astrological Services Overview */}
            <ServicesSection
              t={t}
              whatsappNumber={config.whatsappNumber}
              currentLangName={currentLangMeta.name}
            />

            {/* How It Works: 3-Step Consultation Mechanism */}
            <ConsultationProcess
              t={t}
              onOpenForm={handleScrollToForm}
              whatsappNumber={config.whatsappNumber}
              currentLangName={currentLangMeta.name}
            />

            {/* Authentic Trust & Ethical Charter */}
            <TrustAndEthics t={t} />

            {/* Frequently Asked Questions (with Schema.org FAQPage) */}
            <FAQSection t={t} />

            {/* Confidential Consultation Intake Form */}
            <InquiryForm
              t={t}
              whatsappNumber={config.whatsappNumber}
              currentLangName={currentLangMeta.name}
            />
          </div>
        ) : (
          /* Page 2: Dedicated About Us */
          <AboutPage
            t={t}
            whatsappNumber={config.whatsappNumber}
            onNavigateHome={() => handleNavigate('home')}
            currentLangName={currentLangMeta.name}
          />
        )}
      </main>

      {/* Global Professional Footer */}
      <Footer
        t={t}
        config={config}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenSeoModal={() => setSeoModalOpen(true)}
      />

      {/* WhatsApp Hybrid Conversational Assistant Widget */}
      <WhatsAppChatbot
        t={t}
        whatsappNumber={config.whatsappNumber}
        currentLangName={currentLangMeta.name}
        isOpen={chatbotOpen}
        onClose={() => setChatbotOpen(false)}
        onOpen={() => setChatbotOpen(true)}
      />

      {/* Ergonomic Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar
        t={t}
        whatsappNumber={config.whatsappNumber}
        currentLang={currentLang}
        onOpenChatbot={() => setChatbotOpen(true)}
        onScrollToForm={handleScrollToForm}
        onOpenLangModal={() => {}}
      />

      {/* Astrologer Team & Inquiries Review Drawer */}
      <AdminDrawer
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        config={config}
        onUpdateConfig={updated => setConfig(prev => ({ ...prev, ...updated }))}
      />

      {/* Technical SEO, Google Ads Compliance & 12-Month Roadmap Modal */}
      <SEOAndHostingModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
