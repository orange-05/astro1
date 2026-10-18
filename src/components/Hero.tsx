import React, { useState } from 'react';
import { MessageSquare, Calendar, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { trackConversion } from '../utils/analytics';
import heroImage from '../assets/images/hero_celestial_sacred_1792276938127.jpg';

interface HeroProps {
  t: TranslationSchema;
  whatsappNumber: string;
  onOpenForm: () => void;
  onNavigateAbout: () => void;
  currentLangName: string;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  whatsappNumber,
  onOpenForm,
  onNavigateAbout,
  currentLangName
}) => {
  const [imgError, setImgError] = useState(false);
  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_initiate', { source: 'hero_primary_cta', language: currentLangName });
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Split: Editorial Value Prop on Left, High-Fidelity Sacred Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Narrative & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean unboxed editorial kicker (No pill box) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400/90">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>{t.hero.badge}</span>
              <span aria-hidden="true" className="text-amber-500/40">·</span>
              <span className="text-slate-400 normal-case font-normal">{currentLangName}</span>
            </div>

            {/* Dominant Hero Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-[44px] leading-[1.2] font-bold tracking-tight text-slate-100 max-w-2xl text-balance">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
                {t.hero.headline}
              </span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-sm sm:text-lg text-slate-300/90 leading-relaxed max-w-xl font-normal">
              {t.hero.subheadline}
            </p>

            {/* Direct Consultation CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
                  `Namaste Acharya Shastri, I would like to consult with you regarding an astrological guidance session (${currentLangName}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-950/50 hover:shadow-amber-500/25 transition-all cursor-pointer whitespace-nowrap min-h-[48px] active:scale-[0.98] group"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              <button
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-amber-500/30 bg-slate-900/60 hover:bg-slate-800/90 hover:border-amber-400/60 text-amber-200 font-semibold text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap min-h-[48px] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ctaInquiry}</span>
              </button>
            </div>

            {/* Ethical Reassurance Micro-Copy */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict Vedic Discretion · No Fear-Driven Rituals · 100% Confidential</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Sacred Imagery Anchor with Subtle Frame */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-indigo-950/80 group">
              {!imgError ? (
                <img
                  src={heroImage}
                  alt="Classical Vedic Astrology sanctuary with armillary sphere, horoscope chart, and brass diya lamp"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-[280px] sm:h-[400px] lg:h-[460px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              ) : (
                /* Resilient CSS/SVG Fallback Container */
                <div className="w-full h-[280px] sm:h-[400px] bg-gradient-to-br from-[#0c1433] via-[#070b19] to-[#121c44] flex flex-col items-center justify-center p-8 text-center border border-amber-500/20">
                  <Compass className="w-16 h-16 text-amber-400/60 mb-4 animate-spin-slow" />
                  <h3 className="font-serif text-xl text-amber-200 font-semibold mb-2">Vedic Astrological Sanctum</h3>
                  <p className="text-xs text-slate-400 max-w-xs">Traditional Parashara & Prashna Consultation</p>
                </div>
              )}

              {/* Measured contrast gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b19]/90 via-[#070b19]/20 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-300 font-serif">
                    Vedic Ephemeris & Jyotish Study
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Kashi & Udupi Gurukula Traditions
                  </div>
                </div>
                <button
                  onClick={onNavigateAbout}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 cursor-pointer"
                >
                  View Lineage →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Proof & Trust Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-amber-500/15 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-left space-y-1">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-300 tabular-nums">
              {t.hero.statLineage}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.hero.statLineageLabel}
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-300 tabular-nums">
              {t.hero.statConsultations}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.hero.statConsultationsLabel}
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">
              {t.hero.statEthics}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.hero.statEthicsLabel}
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-300">
              {t.hero.statLanguages}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.hero.statLanguagesLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
