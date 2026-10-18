import React from 'react';
import { Sparkles, Sun, Compass, ArrowRight } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';

interface IntroSectionProps {
  t: TranslationSchema;
  onNavigateAbout: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ t, onNavigateAbout }) => {
  return (
    <section className="py-16 sm:py-20 border-t border-amber-500/15 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Subtle unboxed kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400/80">
          <Sun className="w-4 h-4 text-amber-400" />
          <span>{t.intro.kicker}</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 max-w-2xl mx-auto text-balance">
          {t.intro.title}
        </h2>

        {/* 2-Paragraph Explanatory Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-slate-300 text-sm sm:text-base leading-relaxed">
          <div className="space-y-4 p-6 rounded-xl bg-slate-900/40 border border-amber-500/15 backdrop-blur-sm">
            <div className="text-amber-400 font-serif font-bold text-lg">01. Understanding the Cosmic Map</div>
            <p>{t.intro.paragraph1}</p>
          </div>

          <div className="space-y-4 p-6 rounded-xl bg-slate-900/40 border border-amber-500/15 backdrop-blur-sm">
            <div className="text-amber-400 font-serif font-bold text-lg">02. Empowering Free Will & Dharma</div>
            <p>{t.intro.paragraph2}</p>
          </div>
        </div>

        {/* Astrologer Philosophy Quote Card */}
        <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-amber-950/20 to-indigo-950/40 border border-amber-500/30 text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-lg sm:text-xl italic text-amber-100/90 leading-relaxed">
            {t.intro.quote}
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              {t.intro.quoteAuthor}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={onNavigateAbout}
              className="text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
            >
              <span>Read Biography & Method</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
