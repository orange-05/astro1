import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, CheckCircle2, ChevronRight, Copy, Check, Shield, CornerDownLeft } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { trackConversion } from '../utils/analytics';

interface WhatsAppChatbotProps {
  t: TranslationSchema;
  whatsappNumber: string;
  currentLangName: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onInquirySubmitted?: () => void;
}

type Step =
  | 'welcome'
  | 'name'
  | 'contact'
  | 'category'
  | 'concern'
  | 'time'
  | 'consent'
  | 'complete';

export const WhatsAppChatbot: React.FC<WhatsAppChatbotProps> = ({
  t,
  whatsappNumber,
  currentLangName,
  isOpen,
  onClose,
  onOpen,
  onInquirySubmitted
}) => {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'phone' | 'email'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [category, setCategory] = useState(t.chatbot.categories[0]?.id || 'kundali_analysis');
  const [categoryLabel, setCategoryLabel] = useState(t.chatbot.categories[0]?.label || 'Janam Kundali & Life Path');
  const [concern, setConcern] = useState('');
  const [preferredTime, setPreferredTime] = useState(t.chatbot.timeOptions[0] || 'Morning');
  const [consentGiven, setConsentGiven] = useState(false);

  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedToDb, setSubmittedToDb] = useState(false);

  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Reset chatbot when opened fresh if already completed
  const handleOpen = () => {
    onOpen();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const handleNextFromName = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;
    setName(inputVal.trim());
    setInputVal('');
    setStep('contact');
  };

  const handleNextFromContact = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;
    setContactValue(inputVal.trim());
    setInputVal('');
    setStep('category');
  };

  const handleSelectCategory = (catId: string, label: string) => {
    setCategory(catId);
    setCategoryLabel(label);
    setStep('concern');
  };

  const handleNextFromConcern = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setConcern(inputVal.trim() || 'General guidance inquiry');
    setInputVal('');
    setStep('time');
  };

  const handleSelectTime = (time: string) => {
    setPreferredTime(time);
    setStep('consent');
  };

  const handleConsentAndProceed = async () => {
    setConsentGiven(true);
    setIsSubmitting(true);

    try {
      // Record securely to backend API
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Website Visitor',
          contactMethod,
          contactValue,
          category,
          concern: concern || 'General consultation inquiry',
          preferredTime,
          preferredLanguage: currentLangName,
          source: 'whatsapp_assistant'
        })
      });

      if (res.ok) {
        setSubmittedToDb(true);
        if (onInquirySubmitted) onInquirySubmitted();
      }

      trackConversion('inquiry_qualified', {
        category,
        language: currentLangName,
        source: 'whatsapp_chatbot'
      });
    } catch (e) {
      console.warn('Backend logging note:', e);
    } finally {
      setIsSubmitting(false);
      setStep('complete');
    }
  };

  const formattedWhatsAppMessage = `Namaste Acharya Shastri,

*Personal Consultation Inquiry*
• Name: ${name}
• Contact: ${contactValue} (${contactMethod})
• Consultation Topic: ${categoryLabel}
• Concern Summary: ${concern || 'Looking for astrological guidance'}
• Preferred Slot: ${preferredTime}
• Preferred Language: ${currentLangName}

I would like to confirm consultation availability with your team.`;

  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(formattedWhatsAppMessage)}`;

  const handleCopyText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedWhatsAppMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };



  return (
    <>
      {/* Floating launcher trigger - offset on mobile to not clash with bottom bar */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-semibold text-xs tracking-wide shadow-2xl shadow-amber-950/80 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-300/40 min-h-[44px]"
          aria-label="Open WhatsApp Consultation Assistant"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span className="whitespace-nowrap">{t.chatbot.launcherLabel}</span>
        </button>
      )}

      {/* Chatbot Window: Native Mobile Bottom Sheet on small screens, Floating Modal on desktop */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 w-full sm:w-[420px] h-[88vh] sm:h-[560px] bg-[#0b112c] border-t sm:border border-amber-500/30 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl">
          {/* Mobile Drag Handle */}
          <div className="sm:hidden w-12 h-1 bg-amber-500/30 rounded-full mx-auto mt-2 mb-1" />

          {/* Header */}
          <div className="px-4 py-3 sm:p-4 border-b border-amber-500/20 bg-slate-950/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-amber-100">
                  {t.chatbot.assistantTitle}
                </h3>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {t.chatbot.assistantSubtitle} · {currentLangName}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Flow Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {/* Step 1: Welcome message */}
            <div className="flex items-start gap-2 max-w-[88%]">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif font-bold">
                ॐ
              </div>
              <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900/90 border border-amber-500/15 text-slate-200 leading-relaxed">
                {t.chatbot.step1Welcome}
              </div>
            </div>

            {/* Step 2: Name Prompt & Response */}
            {step === 'welcome' && (
              <div className="pt-2 text-center">
                <button
                  onClick={() => setStep('name')}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Start Consultation Intake →
                </button>
              </div>
            )}

            {(step === 'name' || name) && (
              <>
                <div className="flex items-start gap-2 max-w-[88%]">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif font-bold">
                    ॐ
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900/90 border border-amber-500/15 text-slate-200">
                    {t.chatbot.step2NamePrompt}
                  </div>
                </div>

                {name && (
                  <div className="flex justify-end">
                    <div className="p-3 rounded-2xl rounded-tr-none bg-amber-500/20 border border-amber-500/30 text-amber-100 font-medium max-w-[80%]">
                      {name}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Step 3: Contact method prompt & response */}
            {(step === 'contact' || contactValue) && (
              <>
                <div className="flex items-start gap-2 max-w-[88%]">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif font-bold">
                    ॐ
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900/90 border border-amber-500/15 text-slate-200 space-y-2">
                    <p>{t.chatbot.step3ContactPrompt}</p>
                    {step === 'contact' && (
                      <div className="flex gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setContactMethod('whatsapp')}
                          className={`px-2 py-1 rounded text-[11px] border cursor-pointer ${
                            contactMethod === 'whatsapp' ? 'bg-amber-500/20 border-amber-400 text-amber-200' : 'border-slate-700 text-slate-400'
                          }`}
                        >
                          {t.chatbot.contactMethodWhatsApp}
                        </button>
                        <button
                          type="button"
                          onClick={() => setContactMethod('phone')}
                          className={`px-2 py-1 rounded text-[11px] border cursor-pointer ${
                            contactMethod === 'phone' ? 'bg-amber-500/20 border-amber-400 text-amber-200' : 'border-slate-700 text-slate-400'
                          }`}
                        >
                          {t.chatbot.contactMethodPhone}
                        </button>
                        <button
                          type="button"
                          onClick={() => setContactMethod('email')}
                          className={`px-2 py-1 rounded text-[11px] border cursor-pointer ${
                            contactMethod === 'email' ? 'bg-amber-500/20 border-amber-400 text-amber-200' : 'border-slate-700 text-slate-400'
                          }`}
                        >
                          {t.chatbot.contactMethodEmail}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {contactValue && (
                  <div className="flex justify-end">
                    <div className="p-3 rounded-2xl rounded-tr-none bg-amber-500/20 border border-amber-500/30 text-amber-100 font-medium max-w-[80%]">
                      {contactValue} ({contactMethod})
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Step 4: Category Selection */}
            {(step === 'category' || (category && step !== 'name' && step !== 'contact' && step !== 'welcome')) && (
              <>
                <div className="flex items-start gap-2 max-w-[88%]">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif font-bold">
                    ॐ
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900/90 border border-amber-500/15 text-slate-200 space-y-2">
                    <p>{t.chatbot.step4CategoryPrompt}</p>

                    {step === 'category' && (
                      <div className="flex flex-col gap-1.5 pt-1">
                        {t.chatbot.categories.map(cat => (
                          <button
                            key={cat.id}
                            onClick={() => handleSelectCategory(cat.id, cat.label)}
                            className="text-left px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-amber-500/20 text-amber-200 text-xs transition-colors border border-amber-500/10 cursor-pointer flex items-center justify-between"
                          >
                            <span>{cat.label}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {step !== 'category' && (
                  <div className="flex justify-end">
                    <div className="p-3 rounded-2xl rounded-tr-none bg-amber-500/20 border border-amber-500/30 text-amber-100 font-medium max-w-[80%]">
                      {categoryLabel}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Step 5: Concern Description */}
            {(step === 'concern' || (concern && step !== 'category' && step !== 'name' && step !== 'contact' && step !== 'welcome')) && (
              <>
                <div className="flex items-start gap-2 max-w-[88%]">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif font-bold">
                    ॐ
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900/90 border border-amber-500/15 text-slate-200">
                    {t.chatbot.step5ConcernPrompt}
                  </div>
                </div>

                {concern && (
                  <div className="flex justify-end">
                    <div className="p-3 rounded-2xl rounded-tr-none bg-amber-500/20 border border-amber-500/30 text-amber-100 max-w-[80%]">
                      {concern}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Step 6: Preferred Time Selection */}
            {(step === 'time' || (step === 'consent' || step === 'complete')) && (
              <>
                <div className="flex items-start gap-2 max-w-[88%]">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif font-bold">
                    ॐ
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900/90 border border-amber-500/15 text-slate-200 space-y-2">
                    <p>{t.chatbot.step6TimePrompt}</p>

                    {step === 'time' && (
                      <div className="flex flex-col gap-1.5 pt-1">
                        {t.chatbot.timeOptions.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleSelectTime(opt)}
                            className="text-left px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-amber-500/20 text-amber-200 text-xs transition-colors border border-amber-500/10 cursor-pointer"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {(step === 'consent' || step === 'complete') && (
                  <div className="flex justify-end">
                    <div className="p-3 rounded-2xl rounded-tr-none bg-amber-500/20 border border-amber-500/30 text-amber-100 font-medium max-w-[80%]">
                      {preferredTime}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Step 7: Consent Prompt */}
            {step === 'consent' && (
              <div className="flex items-start gap-2 max-w-[88%]">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif font-bold">
                  ॐ
                </div>
                <div className="p-4 rounded-2xl rounded-tl-none bg-slate-900/90 border border-amber-500/15 text-slate-200 space-y-3">
                  <p className="text-amber-200 font-medium">{t.chatbot.step7ConsentPrompt}</p>
                  <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-300">
                    <input
                      type="checkbox"
                      checked={consentGiven}
                      onChange={e => setConsentGiven(e.target.checked)}
                      className="mt-0.5 rounded border-amber-500/40 text-amber-500 focus:ring-amber-400 cursor-pointer"
                    />
                    <span>{t.chatbot.consentText}</span>
                  </label>
                  <button
                    disabled={!consentGiven || isSubmitting}
                    onClick={handleConsentAndProceed}
                    className="w-full py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-semibold text-xs transition-all cursor-pointer"
                  >
                    {isSubmitting ? 'Securing Inquiry...' : 'Confirm & Proceed →'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 8: Complete with Dual WhatsApp Handoff & Fallback */}
            {step === 'complete' && (
              <div className="p-4 rounded-xl bg-slate-900/95 border border-amber-500/30 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.chatbot.step8CompleteTitle}</span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {t.chatbot.step8CompleteDesc}
                </p>

                {submittedToDb && (
                  <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Inquiry recorded safely for Acharya Shastri’s team.</span>
                  </div>
                )}

                {/* Primary WhatsApp Action (Native Anchor tag for mobile and iframe compatibility) */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackConversion('whatsapp_initiate', {
                      category,
                      language: currentLangName,
                      source: 'chatbot_handoff'
                    });
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs tracking-wide shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>{t.chatbot.actionOpenWhatsApp}</span>
                </a>

                {/* Graceful Fallback: Copy to Clipboard */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <button
                    onClick={handleCopyText}
                    className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? t.chatbot.copiedNotice : 'Copy Inquiry Message'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setStep('welcome');
                      setName('');
                      setContactValue('');
                      setConcern('');
                    }}
                    className="hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    Start Over
                  </button>
                </div>

                <p className="text-[10px] text-slate-500 leading-tight">
                  {t.chatbot.fallbackHelp}
                </p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom input area for name, contact, and concern */}
          {(step === 'name' || step === 'contact' || step === 'concern') && (
            <form
              onSubmit={
                step === 'name'
                  ? handleNextFromName
                  : step === 'contact'
                  ? handleNextFromContact
                  : handleNextFromConcern
              }
              className="p-3 border-t border-amber-500/20 bg-slate-950 flex items-center gap-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <input
                type="text"
                autoFocus
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder={
                  step === 'name'
                    ? t.chatbot.namePlaceholder
                    : step === 'contact'
                    ? t.chatbot.contactPlaceholder
                    : t.chatbot.concernPlaceholder
                }
                className="flex-1 px-3.5 py-3 rounded-xl bg-slate-900 border border-amber-500/20 text-slate-100 text-base sm:text-xs focus:outline-none focus:border-amber-400 placeholder:text-slate-500 min-h-[44px]"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 transition-colors cursor-pointer shrink-0"
                aria-label="Send response"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};
