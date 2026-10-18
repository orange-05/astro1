import React from 'react';
import { ShieldCheck, Lock, Award, HeartHandshake, AlertCircle } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';

interface TrustAndEthicsProps {
  t: TranslationSchema;
}

export const TrustAndEthics: React.FC<TrustAndEthicsProps> = ({ t }) => {
  const icons = [
    <ShieldCheck key="shield" className="w-5 h-5 text-emerald-400" />,
    <HeartHandshake key="heart" className="w-5 h-5 text-amber-400" />,
    <Lock key="lock" className="w-5 h-5 text-amber-400" />,
    <Award key="award" className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="trust" className="py-20 border-t border-amber-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.trust.kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
            {t.trust.title}
          </h2>
          <p className="text-base text-slate-300/90 leading-relaxed font-normal">
            {t.trust.subtitle}
          </p>
        </div>

        {/* 4 Pillars of the Vedic Ethical Charter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.trust.charterPoints.map((point, index) => (
            <div
              key={point.title}
              className="p-8 rounded-2xl bg-slate-900/60 border border-amber-500/20 space-y-4 hover:border-amber-400/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  {icons[index % icons.length]}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-100">
                  {point.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-12">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Legal & Regulatory Compliance Box (Google Ads policy compliant) */}
        <div className="mt-12 p-6 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-4 text-xs text-slate-400 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-semibold text-slate-300 text-sm">
              {t.trust.disclaimerTitle}
            </div>
            <p className="leading-relaxed">
              {t.trust.disclaimerText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
