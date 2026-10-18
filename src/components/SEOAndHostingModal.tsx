import React, { useState } from 'react';
import { X, Search, ShieldCheck, Server, Calendar, CheckCircle2, ExternalLink, Code2, Copy, Check } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { SUPPORTED_LANGUAGES } from '../i18n/languages';

interface SEOAndHostingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: SupportedLanguage;
}

export const SEOAndHostingModal: React.FC<SEOAndHostingModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [activeTab, setActiveTab] = useState<'seo' | 'ads' | 'hosting' | 'roadmap'>('seo');
  const [copiedScript, setCopiedScript] = useState(false);

  if (!isOpen) return null;

  const backupScript = `#!/bin/bash
# 12-Month Automated Backup Script for Astrologer Inquiries & Config
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/var/backups/acharya-shastri-jyotish"
DATA_DIR="./data"

mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/astrology_backup_$TIMESTAMP.tar.gz" "$DATA_DIR"

# Keep last 30 daily backups
find "$BACKUP_DIR" -type f -name "*.tar.gz" -mtime +30 -exec rm {} \\;
echo "Backup successfully archived: astrology_backup_$TIMESTAMP.tar.gz"`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-4xl max-h-[90vh] bg-[#0b112c] border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-amber-500/20 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-amber-100">
                Technical SEO, Compliance & 12-Month Management Blueprint
              </h2>
              <p className="text-xs text-slate-400">
                Audited against Google Search Console, Google Ads Policies, and Core Web Vitals
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-6 py-2.5 bg-slate-900/60 border-b border-amber-500/15 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'seo' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Technical SEO & Hreflang
          </button>
          <button
            onClick={() => setActiveTab('ads')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'ads' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Google Ads Policy Compliance
          </button>
          <button
            onClick={() => setActiveTab('hosting')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'hosting' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Hosting & Backup Automation
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'roadmap' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            12-Month Ongoing Roadmap
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-300">
          {/* TAB 1: Technical SEO */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-base font-bold text-amber-200">
                  Search Engine Indexation & Architecture
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  The application implements server-side routes for <code className="text-amber-300">/sitemap.xml</code> and <code className="text-amber-300">/robots.txt</code>, comprehensive Schema.org JSON-LD structured data (ProfessionalService, Person, FAQPage, BreadcrumbList), and localized hreflang tags for all 12 supported languages.
                </p>
              </div>

              {/* Direct Server Endpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 hover:border-amber-400/50 flex items-center justify-between group transition-colors"
                >
                  <div>
                    <div className="font-semibold text-slate-100 flex items-center gap-1.5">
                      <span>/sitemap.xml</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Dynamic XML Sitemap with 12 hreflang locales
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </a>

                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 hover:border-amber-400/50 flex items-center justify-between group transition-colors"
                >
                  <div>
                    <div className="font-semibold text-slate-100 flex items-center gap-1.5">
                      <span>/robots.txt</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Crawler directives protecting APIs & allowing pages
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </a>
              </div>

              {/* Live Hreflang Mapping Audit */}
              <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-3">
                <div className="font-semibold text-amber-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Multilingual SEO Hreflang Mapping (Active: {currentLang})</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-[11px]">
                  {SUPPORTED_LANGUAGES.map(lang => (
                    <div
                      key={lang.code}
                      className={`p-2 rounded border ${
                        currentLang === lang.code
                          ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-semibold'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="font-mono text-amber-400">{lang.code}</div>
                      <div>{lang.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schema.org Types */}
              <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-2">
                <div className="font-semibold text-amber-300">Active Schema.org JSON-LD Entities:</div>
                <ul className="space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong>ProfessionalService</strong> (Acharya Shastri Vedic Astrological Sanctum)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong>Person</strong> (Acharya Keshava Shastri, Astrological Scholar)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong>FAQPage</strong> (5 verified consumer questions and structured answers)</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: Google Ads Policy Compliance */}
          {activeTab === 'ads' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-base font-bold text-amber-200">
                  Google Ads & PPC Landing Page Policy Compliance
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Astrology and spiritual advisory services are subject to strict scrutiny under Google Advertising Policies regarding Misleading Content, Unrealistic Outcomes, and Personal Hardship targeting.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1.5">
                  <div className="font-semibold text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Zero Misleading Claims Policy Compliant</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    The website contains NO claims of "100% Guaranteed Success", "Instant Miracles in 24 Hours", or "World’s Best Astrologer". All descriptions present astrology as spiritual perspective and guidance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1.5">
                  <div className="font-semibold text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Negative Energy & Evil-Eye Ethical Framing</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Services addressing negative energy and evil-eye are strictly framed around Vedic prayers (Navagraha Shanti, protective mantras, charity, and meditation). No extortionate claims of black magic curse removal are made.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1.5">
                  <div className="font-semibold text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Privacy & PII-Safe Conversion Dispatch</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Event tracking for WhatsApp initiations, inquiry form submissions, and phone calls dispatches category and language metadata with zero personal details (names, phone numbers, and emails are stripped).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Hosting & Backups */}
          {activeTab === 'hosting' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-base font-bold text-amber-200">
                  Production Deployment & Automated Backups
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Recommended configuration for Google Cloud Run, Docker containers, or Linux VPS (Ubuntu 22.04 LTS).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-amber-300">Automated Daily Backup Bash Script</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(backupScript);
                      setCopiedScript(true);
                      setTimeout(() => setCopiedScript(false), 2000);
                    }}
                    className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 cursor-pointer"
                  >
                    {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedScript ? 'Copied' : 'Copy Script'}</span>
                  </button>
                </div>
                <pre className="p-3 rounded bg-slate-950 font-mono text-[11px] text-amber-200/90 overflow-x-auto">
                  {backupScript}
                </pre>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-1.5">
                  <div className="font-semibold text-slate-100">HTTPS & SSL Renewal</div>
                  <p className="text-slate-400 text-[11px]">
                    Automatic Let’s Encrypt certificate renewal via Certbot cron on port 443 with TLS 1.3 encryption.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-1.5">
                  <div className="font-semibold text-slate-100">Uptime & Health Checks</div>
                  <p className="text-slate-400 text-[11px]">
                    Continuous HTTP ping probe on <code className="text-amber-300">/api/config</code> with 30-second interval alert dispatch via email or SMS.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 12-Month Roadmap */}
          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-base font-bold text-amber-200">
                  Practical 12-Month SEO & Organic Growth Roadmap
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Quarterly milestones to build digital domain authority, expand verified local listings, and improve Google Visibility.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-2">
                  <div className="font-semibold text-amber-300 flex items-center justify-between">
                    <span>Quarter 1 (Months 1–3): Technical Baseline & Google Search Console</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Foundation</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Verify domain ownership in Google Search Console; submit /sitemap.xml; set up Google Business Profile in Bengaluru and Varanasi; verify NAP (Name, Address, Phone) consistency across local citation directories.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-2">
                  <div className="font-semibold text-amber-300 flex items-center justify-between">
                    <span>Quarter 2 (Months 4–6): Multilingual Content Refinement & Review Capture</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">Engagement</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Audit regional language queries (Kannada, Tamil, Telugu, Hindi); human-review diaspora translations; implement structured post-consultation WhatsApp feedback collection for verified Google reviews.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-2">
                  <div className="font-semibold text-amber-300 flex items-center justify-between">
                    <span>Quarter 3 (Months 7–9): Core Web Vitals & Compliant Google Ads Pilot</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Conversion</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) on mobile 4G networks; run test Google Ads Search campaigns strictly targeting keyword phrases like "Vedic horoscope consultation" and "Prashna astrology reading".
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-2">
                  <div className="font-semibold text-amber-300 flex items-center justify-between">
                    <span>Quarter 4 (Months 10–12): Annual Technical Audit & Lineage Archival</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Authority</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Annual technical crawl audit; update planetary ephemeris references for upcoming year; publish annual Vedic calendar (Panchang / Muhurat guide) as indexable organic asset.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
