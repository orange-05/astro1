import React, { useState } from 'react';
import { Globe, Menu, X, MessageSquare, Phone } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { SUPPORTED_LANGUAGES, getLanguageMeta } from '../i18n/languages';
import { TranslationSchema } from '../i18n/translations';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  currentLang: SupportedLanguage;
  onSelectLang: (lang: SupportedLanguage) => void;
  t: TranslationSchema;
  currentPage: 'home' | 'about';
  onNavigate: (page: 'home' | 'about', anchor?: string) => void;
  whatsappNumber: string;
  onOpenChatbot: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  t,
  currentPage,
  onNavigate,
  whatsappNumber,
  onOpenChatbot,
  theme,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const currentLangMeta = getLanguageMeta(currentLang);

  const handleLinkClick = (page: 'home' | 'about', anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, anchor);
  };

  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/15 bg-[#070b19]/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in luxury serif) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
          aria-label="Acharya Shastri Jyotish Sanctuary"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-amber-200/90 group-hover:text-amber-100 transition-colors whitespace-nowrap block">
            Acharya Shastri
          </span>
          <span className="text-[11px] font-sans tracking-widest uppercase text-amber-400/60 block -mt-1">
            Vedic Jyotish Sanctum
          </span>
        </button>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleLinkClick('home')}
            className={`whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors cursor-pointer py-1 border-b-2 ${
              currentPage === 'home' ? 'border-amber-400 text-amber-200' : 'border-transparent'
            }`}
          >
            {t.nav.home}
          </button>

          <button
            onClick={() => handleLinkClick('about')}
            className={`whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors cursor-pointer py-1 border-b-2 ${
              currentPage === 'about' ? 'border-amber-400 text-amber-200' : 'border-transparent'
            }`}
          >
            {t.nav.about}
          </button>

          <button
            onClick={() => handleLinkClick('home', 'services')}
            className="whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors cursor-pointer py-1 border-b-2 border-transparent"
          >
            {t.nav.services}
          </button>

          <button
            onClick={() => handleLinkClick('home', 'process')}
            className="whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors cursor-pointer py-1 border-b-2 border-transparent"
          >
            {t.nav.process}
          </button>

          <button
            onClick={() => handleLinkClick('home', 'trust')}
            className="whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors cursor-pointer py-1 border-b-2 border-transparent"
          >
            {t.nav.trust}
          </button>

          <button
            onClick={() => handleLinkClick('home', 'faq')}
            className="whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors cursor-pointer py-1 border-b-2 border-transparent"
          >
            {t.nav.faq}
          </button>
        </nav>

        {/* Zone 3: Dark/Light Mode Toggle + Language Selector + Primary Consultation CTA */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          {/* Day / Night Theme Toggle */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg border border-amber-500/25 bg-slate-900/80 text-xs font-medium text-amber-200 hover:border-amber-400/50 hover:bg-slate-800 transition-all cursor-pointer whitespace-nowrap min-h-[44px]"
              aria-label="Select Language"
              aria-expanded={langDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-medium max-w-[80px] sm:max-w-none truncate">{currentLangMeta.nativeName}</span>
              <span className="text-[10px] text-amber-400/70 uppercase">({currentLangMeta.code})</span>
            </button>

            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-64 rounded-xl bg-[#0b112c] border border-amber-500/30 shadow-2xl z-50 py-2 max-h-[75vh] overflow-y-auto">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider border-b border-amber-500/15">
                    Indian Languages
                  </div>
                  {SUPPORTED_LANGUAGES.filter(l => l.region === 'Indian').map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-amber-500/15 transition-colors cursor-pointer min-h-[42px] ${
                        currentLang === lang.code ? 'text-amber-300 font-semibold bg-amber-500/20' : 'text-slate-300'
                      }`}
                    >
                      <span className="font-serif text-sm">{lang.nativeName}</span>
                      <span className="text-[11px] text-slate-400">{lang.name}</span>
                    </button>
                  ))}

                  <div className="px-3 py-1.5 mt-2 text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider border-t border-b border-amber-500/15">
                    International Diaspora
                  </div>
                  {SUPPORTED_LANGUAGES.filter(l => l.region === 'International Diaspora').map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-amber-500/15 transition-colors cursor-pointer min-h-[42px] ${
                        currentLang === lang.code ? 'text-amber-300 font-semibold bg-amber-500/20' : 'text-slate-300'
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      <span className="text-[11px] text-slate-400">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Primary Action Button (Direct WhatsApp Consultation) */}
          <a
            href={`https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
              `Namaste Acharya Shastri, I would like to inquire about a personal astrology consultation (${currentLangMeta.name}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-slate-950 font-semibold text-xs tracking-wide shadow-md shadow-amber-950/40 hover:shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap min-h-[44px]"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
            <span>{t.nav.consultWhatsApp}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-amber-400 hover:bg-amber-500/10 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-500/20 bg-[#070b19] px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Quick Theme Switcher in Mobile Drawer */}
          <div className="pt-1">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} variant="full" />
          </div>

          <div className="flex flex-col space-y-1 pt-1">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left px-3 rounded-xl text-sm min-h-[44px] flex items-center ${
                currentPage === 'home' ? 'bg-amber-500/15 text-amber-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className={`text-left px-3 rounded-xl text-sm min-h-[44px] flex items-center ${
                currentPage === 'about' ? 'bg-amber-500/15 text-amber-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleLinkClick('home', 'services')}
              className="text-left px-3 rounded-xl text-sm text-slate-300 hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleLinkClick('home', 'process')}
              className="text-left px-3 rounded-xl text-sm text-slate-300 hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              {t.nav.process}
            </button>
            <button
              onClick={() => handleLinkClick('home', 'trust')}
              className="text-left px-3 rounded-xl text-sm text-slate-300 hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              {t.nav.trust}
            </button>
            <button
              onClick={() => handleLinkClick('home', 'faq')}
              className="text-left px-3 rounded-xl text-sm text-slate-300 hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => handleLinkClick('home', 'contact')}
              className="text-left px-3 rounded-xl text-sm text-slate-300 hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
                `Namaste Acharya Shastri, I would like to inquire about a personal consultation (${currentLangMeta.name}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 font-bold text-xs text-center min-h-[46px] shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              {t.nav.consultWhatsApp}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChatbot();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-amber-500/30 text-amber-300 text-xs font-semibold min-h-[46px] bg-slate-900"
            >
              <Phone className="w-3.5 h-3.5" />
              {t.chatbot.launcherLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
