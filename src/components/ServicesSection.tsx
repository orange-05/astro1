import React, { useState } from 'react';
import { Compass, BookOpen, Clock, CheckCircle2, ChevronRight, X, MessageSquare } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { trackConversion } from '../utils/analytics';

interface ServicesSectionProps {
  t: TranslationSchema;
  whatsappNumber: string;
  currentLangName: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  t,
  whatsappNumber,
  currentLangName
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const activeDetail = t.services.items.find(s => s.id === selectedServiceId);

  const handleConsultService = (serviceTitle: string) => {
    trackConversion('service_view', { category: serviceTitle, language: currentLangName });
    const text = `Namaste Acharya Shastri, I would like to consult with you regarding *${serviceTitle}* (${currentLangName}). Could you please guide me on availability?`;
    window.open(`https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 border-t border-amber-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
            <BookOpen className="w-4 h-4" />
            <span>{t.services.kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
            {t.services.title}
          </h2>
          <p className="text-base text-slate-300/90 leading-relaxed font-normal">
            {t.services.subtitle}
          </p>
        </div>

        {/* Asymmetric 5-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`celestial-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 border-amber-500/30' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Clean Human Editorial Numbering */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-amber-400 font-bold text-sm tracking-wider">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
                      Vedic Consultation
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Bottom Action Affordance */}
                <div className="pt-6 mt-6 border-t border-amber-500/10 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedServiceId(service.id)}
                    className="min-h-[44px] text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer py-2"
                  >
                    <span>{t.services.viewDetails}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleConsultService(service.title)}
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 transition-colors cursor-pointer"
                    title={t.services.consultThisService}
                    aria-label={`Consult on ${service.title} via WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-Depth Methodology, Requirements & Deliverables */}
        {activeDetail && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#0b112c] border-t sm:border border-amber-500/30 rounded-t-3xl sm:rounded-2xl shadow-2xl p-5 sm:p-8 space-y-5 max-h-[88vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedServiceId(null)}
                className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1.5 pr-8">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-400">
                  Comprehensive Service Outline
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
                  {activeDetail.title}
                </h3>
              </div>

              {/* Methodology details */}
              <div className="space-y-2">
                <h4 className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                  Classical Methodology
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeDetail.details}
                </p>
              </div>

              {/* Deliverables */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-amber-500/20 space-y-1.5">
                <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Consultation Deliverables</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeDetail.deliverables}
                </p>
              </div>

              {/* Prerequisites / Required Info */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-amber-500/20 space-y-1.5">
                <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Information Required</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeDetail.requirements}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 border-t border-amber-500/15">
                <button
                  onClick={() => setSelectedServiceId(null)}
                  className="w-full sm:w-auto min-h-[46px] px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium cursor-pointer"
                >
                  {t.services.closeDetails}
                </button>

                <button
                  onClick={() => {
                    handleConsultService(activeDetail.title);
                    setSelectedServiceId(null);
                  }}
                  className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.services.consultThisService}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
