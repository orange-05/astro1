import React from 'react';
import { ShieldAlert, Compass, MessageSquare, Phone, Mail, MapPin, KeyRound, Server } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { AstrologerConfig } from '../types';

interface FooterProps {
  t: TranslationSchema;
  config: AstrologerConfig;
  onNavigate: (page: 'home' | 'about', anchor?: string) => void;
  onOpenAdmin: () => void;
  onOpenSeoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  config,
  onNavigate,
  onOpenAdmin,
  onOpenSeoModal
}) => {
  const cleanWaNumber = config.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <footer className="border-t border-amber-500/20 bg-[#050814] text-slate-400 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="font-serif text-xl font-bold text-amber-200">
              Acharya Shastri
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              {t.footer.aboutSnippet}
            </p>
            <div className="text-[11px] text-amber-400/80 font-medium">
              {config.lineage}
            </div>
          </div>

          {/* Column 2: Navigation Mirror */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-sm text-slate-200 uppercase tracking-wider">
              {t.footer.quickLinks}
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'services')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'process')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t.nav.process}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'trust')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t.nav.trust}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'faq')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sanctum Coordinates & Contact */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-sm text-slate-200 uppercase tracking-wider">
              {t.footer.contactInfo}
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{config.baseLocation}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${config.whatsappNumber}`} className="hover:text-amber-300 transition-colors">
                  {config.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${cleanWaNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors text-emerald-400"
                >
                  WhatsApp: {config.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{config.email}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Compliance Governance */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-sm text-slate-200 uppercase tracking-wider">
              Consultation Hours
            </div>
            <p className="text-slate-300">
              {config.consultationHours}
            </p>
            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>Consultations: In-Person & Remote WhatsApp Video/Voice</div>
              <div>Advance Scheduling Required</div>
            </div>
          </div>
        </div>

        {/* Ethical Standard Disclosure Box */}
        <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-400 text-[11px] leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
          <p>{t.footer.ethicsNotice}</p>
        </div>

        {/* Bottom Bar: Copyright, XML sitemap link, Technical SEO, and Admin Portal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {t.footer.rightsReserved}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              XML Sitemap
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              Robots.txt
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenSeoModal}
              className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Server className="w-3 h-3 text-amber-400" />
              <span>{t.footer.techSeoReport}</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenAdmin}
              className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <KeyRound className="w-3 h-3 text-amber-400" />
              <span>{t.footer.adminAccess}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
