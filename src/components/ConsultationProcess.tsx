import React from 'react';
import { Calendar, Cpu, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';

interface ConsultationProcessProps {
  t: TranslationSchema;
  onOpenForm: () => void;
  whatsappNumber: string;
  currentLangName: string;
}

export const ConsultationProcess: React.FC<ConsultationProcessProps> = ({
  t,
  onOpenForm,
  whatsappNumber,
  currentLangName
}) => {
  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section id="process" className="py-20 border-t border-amber-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
            <Calendar className="w-4 h-4" />
            <span>{t.process.kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
            {t.process.title}
          </h2>
          <p className="text-base text-slate-300/90 leading-relaxed font-normal">
            {t.process.subtitle}
          </p>
        </div>

        {/* 3 Step Editorial Sequence with Horizontal Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {t.process.steps.map((step, idx) => (
            <div
              key={step.number}
              className="celestial-card rounded-2xl p-8 relative flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Step Number in Tabular Bold Serif */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400/80 tabular-nums">
                    {step.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400">
                    Stage {idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-amber-100 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-500/10 text-xs text-amber-400/80 flex items-center gap-1 font-medium">
                <span>Vedic Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Process CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-colors cursor-pointer"
          >
            <span>Begin Step 01: Submit Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
              `Namaste Acharya Shastri, I would like to schedule a consultation following your 3-step process (${currentLangName}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-amber-500/30 hover:border-amber-400 text-amber-300 font-medium text-xs tracking-wide transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Or Connect on WhatsApp Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
