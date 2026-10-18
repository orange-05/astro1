import React from 'react';
import { MessageSquare, Calendar, Phone, Globe, Sparkles } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { SupportedLanguage } from '../types';
import { getLanguageMeta } from '../i18n/languages';
import { trackConversion } from '../utils/analytics';

interface MobileBottomBarProps {
  t: TranslationSchema;
  whatsappNumber: string;
  currentLang: SupportedLanguage;
  onOpenChatbot: () => void;
  onScrollToForm: () => void;
  onOpenLangModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  t,
  whatsappNumber,
  currentLang,
  onOpenChatbot,
  onScrollToForm,
  onOpenLangModal
}) => {
  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');
  const langMeta = getLanguageMeta(currentLang);

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_initiate', { source: 'mobile_sticky_bottom_bar', language: langMeta.name });
  };

  return (
    <nav
      aria-label="Mobile Action Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070b19]/95 backdrop-blur-xl border-t border-amber-500/25 px-3 py-2 shadow-2xl pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 items-center gap-1.5 text-center">
        {/* Button 1: Direct WhatsApp Consultation (Primary Thumb Target) */}
        <a
          href={`https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
            `Namaste Acharya Shastri, I would like to inquire about a personal astrology consultation (${langMeta.name}).`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="col-span-2 min-h-[46px] px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs tracking-wide shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950 shrink-0" />
          <span className="truncate">WhatsApp Chat</span>
        </a>

        {/* Button 2: Interactive Intake Assistant */}
        <button
          type="button"
          onClick={onOpenChatbot}
          className="min-h-[46px] px-2 py-1.5 rounded-xl bg-slate-900 border border-amber-500/25 text-amber-200 hover:bg-slate-800 text-[11px] font-medium flex flex-col items-center justify-center gap-0.5 transition-transform active:scale-95 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="truncate">Assistant</span>
        </button>

        {/* Button 3: Book / Inquire Form Scroll */}
        <button
          type="button"
          onClick={onScrollToForm}
          className="min-h-[46px] px-2 py-1.5 rounded-xl bg-slate-900 border border-amber-500/25 text-amber-200 hover:bg-slate-800 text-[11px] font-medium flex flex-col items-center justify-center gap-0.5 transition-transform active:scale-95 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span className="truncate">Book Slot</span>
        </button>
      </div>
    </nav>
  );
};
