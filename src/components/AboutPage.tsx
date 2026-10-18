import React, { useState } from 'react';
import { Award, BookOpen, HeartHandshake, ShieldCheck, MessageSquare, ArrowLeft, CheckCircle2, Compass } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { trackConversion } from '../utils/analytics';
import portraitImg from '../assets/images/astrologer_portrait_1792276938740.jpg';
import atmosphereImg from '../assets/images/vedic_study_atmosphere_1792276938599.jpg';

interface AboutPageProps {
  t: TranslationSchema;
  whatsappNumber: string;
  onNavigateHome: () => void;
  currentLangName: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  t,
  whatsappNumber,
  onNavigateHome,
  currentLangName
}) => {
  const [portraitError, setPortraitError] = useState(false);
  const [studyError, setStudyError] = useState(false);
  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const handleConsultClick = () => {
    trackConversion('whatsapp_initiate', { source: 'about_page_cta', language: currentLangName });
  };

  return (
    <div className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link & Header */}
        <div className="space-y-4">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </button>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
              <Compass className="w-4 h-4" />
              <span>{t.about.badge}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
              {t.about.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>

        {/* Biography & Portrait 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-indigo-950/70 group">
              {!portraitError ? (
                <img
                  src={portraitImg}
                  alt="Portrait of Acharya Keshava Shastri in traditional silk kurta in his classical study"
                  referrerPolicy="no-referrer"
                  onError={() => setPortraitError(true)}
                  className="w-full h-[460px] sm:h-[540px] object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-[460px] bg-slate-900 flex flex-col items-center justify-center p-8 text-center border border-amber-500/20">
                  <Award className="w-16 h-16 text-amber-400 mb-4" />
                  <h3 className="font-serif text-xl text-amber-200 font-semibold mb-2">Acharya Keshava Shastri</h3>
                  <p className="text-xs text-slate-400 max-w-xs">24+ Years Traditional Vedic Lineage</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b19]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/20">
                <div className="font-serif text-sm font-bold text-amber-200">
                  Acharya Keshava Shastri
                </div>
                <div className="text-[11px] text-slate-400">
                  Vedic Astrologer & Sanskrit Sahitya Scholar
                </div>
              </div>
            </div>
          </div>

          {/* Biography Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
              {t.about.bioTitle}
            </h2>

            <p>{t.about.bioP1}</p>
            <p>{t.about.bioP2}</p>
            <p>{t.about.bioP3}</p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-amber-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                24+ Years Documented Consultations
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Varanasi & Udupi Lineage
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Multi-Generational Discretion
              </span>
            </div>
          </div>
        </div>

        {/* Astrological Systems Practiced & Understood */}
        <div className="space-y-8 pt-8 border-t border-amber-500/15">
          <div className="text-left space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
              {t.about.systemsTitle}
            </h2>
            <p className="text-sm text-slate-300">
              {t.about.systemsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.systems.map((system, idx) => (
              <div
                key={system.name}
                className="celestial-card p-6 rounded-xl space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="font-serif text-amber-400 font-bold text-sm">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-serif text-lg font-bold text-amber-100">
                    {system.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-6">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Atmospheric Study & Verified Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-amber-500/15">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 flex items-center gap-3">
              <Award className="w-6 h-6 text-amber-400" />
              <span>{t.about.credentialsTitle}</span>
            </h2>

            <ul className="space-y-4 text-sm text-slate-300">
              {t.about.credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{cred}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 text-xs text-slate-400 leading-relaxed">
              <strong className="text-amber-300 block mb-1">Ethical Record Notice:</strong>
              Qualifications and years of consultation are verified and archived with registered cultural and astrological bodies. We refrain from sensationalized claims or manufactured superlatives.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
              {!studyError ? (
                <img
                  src={atmosphereImg}
                  alt="Classical Vedic astrology instruments, brass sundial, and sacred grantha parchment"
                  referrerPolicy="no-referrer"
                  onError={() => setStudyError(true)}
                  className="w-full h-[340px] sm:h-[400px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-[340px] bg-slate-900 flex items-center justify-center p-8 text-center border border-amber-500/20">
                  <BookOpen className="w-12 h-12 text-amber-400 mb-2" />
                  <p className="text-xs text-slate-400">Classical Vedic Manuscript Study</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b19]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-amber-500/20 text-xs text-amber-200">
                Classical Study Sanctum · Mathematical Ephemeris Research
              </div>
            </div>
          </div>
        </div>

        {/* Approach to Client Consultations */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0c1433] to-[#070b19] border border-amber-500/30 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
              <HeartHandshake className="w-4 h-4" />
              <span>Consultation Principles</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
              {t.about.approachTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <p>{t.about.approachP1}</p>
            <p>{t.about.approachP2}</p>
          </div>
        </div>

        {/* Authentic Client Reflections */}
        <div className="space-y-8 pt-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 text-center">
            {t.about.testimonialsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.testimonials.map((test, index) => (
              <div
                key={index}
                className="celestial-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <blockquote className="text-sm text-slate-300 italic leading-relaxed">
                  "{test.quote}"
                </blockquote>
                <div className="pt-4 border-t border-amber-500/10">
                  <div className="font-serif font-bold text-amber-200 text-sm">
                    {test.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {test.context}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prominent Private Consultation Call to Action */}
        <div className="pt-8 pb-4 text-center max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl font-bold text-amber-100">
            {t.about.ctaTitle}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t.about.ctaSubtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
                `Namaste Acharya Shastri, I have reviewed your background on the About page and would like to arrange a private consultation (${currentLangName}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleConsultClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-colors cursor-pointer shadow-lg shadow-amber-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.about.ctaButton}</span>
            </a>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-amber-500/30 text-amber-200 text-xs font-medium hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Back to Home Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
