import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Shield, Clock, AlertCircle } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { trackConversion } from '../utils/analytics';

interface InquiryFormProps {
  t: TranslationSchema;
  whatsappNumber: string;
  currentLangName: string;
  onInquirySubmitted?: () => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  t,
  whatsappNumber,
  currentLangName,
  onInquirySubmitted
}) => {
  const [formData, setFormData] = useState({
    name: '',
    contactMethod: 'whatsapp',
    contactValue: '',
    category: 'kundali_analysis',
    concern: '',
    preferredTime: 'Morning (09:00 AM – 12:00 PM IST)',
    preferredLanguage: currentLangName,
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.contactValue.trim()) {
      setErrorMsg('Please provide your phone number, WhatsApp, or email address.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Please provide your consent so the astrologer’s team may contact you.');
      return;
    }

    setLoading(true);

    try {
      let savedLocally = false;
      try {
        const res = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            source: 'homepage_form'
          })
        });
        if (!res.ok) {
          savedLocally = true;
        }
      } catch {
        savedLocally = true;
      }

      if (savedLocally) {
        // Fallback for static hosting like GitHub Pages
        try {
          const localList = JSON.parse(localStorage.getItem('acharya_inquiries') || '[]');
          localList.unshift({
            id: `inq-${Date.now()}`,
            createdAt: new Date().toISOString(),
            ...formData,
            status: 'new',
            source: 'homepage_form',
            notes: 'Recorded via client (GitHub Pages / Static)'
          });
          localStorage.setItem('acharya_inquiries', JSON.stringify(localList));
        } catch {}
      }

      trackConversion('contact_form_submit', {
        category: formData.category,
        language: formData.preferredLanguage,
        source: 'homepage_inquiry_form'
      });

      setSubmitted(true);
      if (onInquirySubmitted) onInquirySubmitted();
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred. Please try WhatsApp directly.');
    } finally {
      setLoading(false);
    }
  };

  const formattedWhatsAppUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
    `Namaste Acharya Shastri,\n\nName: ${formData.name || 'Friend'}\nService Needed: ${formData.category}\nLanguage: ${currentLangName}\nConcern: ${formData.concern || 'General consultation inquiry'}\nPreferred Time: ${formData.preferredTime}`
  )}`;

  return (
    <section id="contact" className="py-20 border-t border-amber-500/15 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
            <Send className="w-4 h-4" />
            <span>{t.form.kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
            {t.form.title}
          </h2>
          <p className="text-base text-slate-300/90 leading-relaxed font-normal">
            {t.form.subtitle}
          </p>
        </div>

        <div className="bg-[#0b112c]/90 border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-amber-100">
                  {t.form.successTitle}
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  {t.form.successMessage}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={formattedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('whatsapp_initiate', { source: 'post_submission_whatsapp' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.form.chatDirectly}</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      contactMethod: 'whatsapp',
                      contactValue: '',
                      category: 'kundali_analysis',
                      concern: '',
                      preferredTime: 'Morning (09:00 AM – 12:00 PM IST)',
                      preferredLanguage: currentLangName,
                      consent: false
                    });
                  }}
                  className="px-5 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-amber-200">
                    {t.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/25 text-slate-100 text-base sm:text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500 min-h-[46px]"
                  />
                </div>

                {/* Contact Method */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-amber-200">
                    {t.form.contactMethodLabel}
                  </label>
                  <select
                    value={formData.contactMethod}
                    onChange={e => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/25 text-slate-100 text-base sm:text-sm focus:outline-none focus:border-amber-400 min-h-[46px] cursor-pointer"
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="phone">Direct Phone Call</option>
                    <option value="email">Email</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Contact Value */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-amber-200">
                    {t.form.contactValueLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactValue}
                    onChange={e => setFormData({ ...formData, contactValue: e.target.value })}
                    placeholder={t.form.contactValuePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/25 text-slate-100 text-base sm:text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500 min-h-[46px]"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-amber-200">
                    {t.form.categoryLabel}
                  </label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/25 text-slate-100 text-base sm:text-sm focus:outline-none focus:border-amber-400 min-h-[46px] cursor-pointer"
                  >
                    {t.services.items.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Concern / Question */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-amber-200">
                  {t.form.concernLabel}
                </label>
                <textarea
                  rows={3}
                  value={formData.concern}
                  onChange={e => setFormData({ ...formData, concern: e.target.value })}
                  placeholder={t.form.concernPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/25 text-slate-100 text-base sm:text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Time slot */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-amber-200">
                    {t.form.timeLabel}
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/25 text-slate-100 text-base sm:text-sm focus:outline-none focus:border-amber-400 min-h-[46px] cursor-pointer"
                  >
                    <option value="Morning (09:00 AM – 12:00 PM IST)">Morning (09:00 AM – 12:00 PM IST)</option>
                    <option value="Afternoon (02:00 PM – 05:00 PM IST)">Afternoon (02:00 PM – 05:00 PM IST)</option>
                    <option value="Evening (05:00 PM – 07:30 PM IST)">Evening (05:00 PM – 07:30 PM IST)</option>
                    <option value="Weekend Slot">Weekend Slot</option>
                    <option value="Flexible">Any Available Time Slot</option>
                  </select>
                </div>

                {/* Discussion Language */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-amber-200">
                    {t.form.languageLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.preferredLanguage}
                    onChange={e => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/25 text-slate-100 text-base sm:text-sm focus:outline-none focus:border-amber-400 min-h-[46px]"
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3.5 cursor-pointer text-xs sm:text-sm text-slate-300 p-2 rounded-lg hover:bg-slate-900/60 min-h-[44px]">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded border-amber-500/40 text-amber-500 focus:ring-amber-400 cursor-pointer shrink-0"
                  />
                  <span className="leading-relaxed">{t.form.consentLabel}</span>
                </label>
              </div>

              {/* Submit Buttons Row */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-amber-500/15">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-amber-950/40 active:scale-[0.98] text-center flex items-center justify-center"
                >
                  {loading ? t.form.submitting : t.form.submitButton}
                </button>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-400 py-1">
                  <span>{t.form.orWhatsApp}</span>
                  <a
                    href={formattedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion('whatsapp_initiate', { source: 'form_direct_whatsapp_link' })}
                    className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 flex items-center gap-1 cursor-pointer min-h-[44px] py-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.form.chatDirectly}</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
