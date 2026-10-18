import { SupportedLanguage } from '../types';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    process: string;
    trust: string;
    faq: string;
    contact: string;
    consultWhatsApp: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaWhatsApp: string;
    ctaInquiry: string;
    statLineage: string;
    statLineageLabel: string;
    statConsultations: string;
    statConsultationsLabel: string;
    statEthics: string;
    statEthicsLabel: string;
    statLanguages: string;
    statLanguagesLabel: string;
  };
  intro: {
    kicker: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    quoteAuthor: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    closeDetails: string;
    consultThisService: string;
    items: {
      id: string;
      title: string;
      summary: string;
      details: string;
      deliverables: string;
      requirements: string;
    }[];
  };
  process: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  trust: {
    kicker: string;
    title: string;
    subtitle: string;
    charterPoints: {
      title: string;
      description: string;
    }[];
    disclaimerTitle: string;
    disclaimerText: string;
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    bioTitle: string;
    bioP1: string;
    bioP2: string;
    bioP3: string;
    systemsTitle: string;
    systemsSubtitle: string;
    systems: {
      name: string;
      description: string;
    }[];
    credentialsTitle: string;
    credentials: string[];
    approachTitle: string;
    approachP1: string;
    approachP2: string;
    testimonialsTitle: string;
    testimonials: {
      quote: string;
      author: string;
      context: string;
    }[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  chatbot: {
    launcherLabel: string;
    assistantTitle: string;
    assistantSubtitle: string;
    step1Welcome: string;
    step2NamePrompt: string;
    namePlaceholder: string;
    step3ContactPrompt: string;
    contactMethodWhatsApp: string;
    contactMethodPhone: string;
    contactMethodEmail: string;
    contactPlaceholder: string;
    step4CategoryPrompt: string;
    categories: { id: string; label: string }[];
    step5ConcernPrompt: string;
    concernPlaceholder: string;
    step6TimePrompt: string;
    timeOptions: string[];
    step7ConsentPrompt: string;
    consentText: string;
    step8CompleteTitle: string;
    step8CompleteDesc: string;
    actionOpenWhatsApp: string;
    actionSubmitOnline: string;
    copiedNotice: string;
    fallbackHelp: string;
  };
  form: {
    kicker: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactMethodLabel: string;
    contactValueLabel: string;
    contactValuePlaceholder: string;
    categoryLabel: string;
    concernLabel: string;
    concernPlaceholder: string;
    timeLabel: string;
    languageLabel: string;
    consentLabel: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    orWhatsApp: string;
    chatDirectly: string;
  };
  footer: {
    aboutSnippet: string;
    quickLinks: string;
    contactInfo: string;
    hours: string;
    ethicsNotice: string;
    rightsReserved: string;
    adminAccess: string;
    techSeoReport: string;
  };
}

export const translations: Record<SupportedLanguage, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Acharya Shastri',
      services: 'Consultation Services',
      process: 'How It Works',
      trust: 'Trust & Ethics Charter',
      faq: 'FAQ',
      contact: 'Direct Contact',
      consultWhatsApp: 'Consult via WhatsApp'
    },
    hero: {
      badge: 'Classical Vedic Jyotish & Spiritual Consultation',
      headline: 'Grounded Astrological Wisdom for Life’s Critical Crossroads',
      subheadline: 'Authentic birth-chart analysis, Prashna horary guidance, and spiritual energy balancing rooted in classical Parashara traditions. Honest, confidential counsel with zero fear-mongering and zero unrealistic claims.',
      ctaWhatsApp: 'Initiate WhatsApp Consultation',
      ctaInquiry: 'Request Private Appointment',
      statLineage: '24+ Years',
      statLineageLabel: 'Documented Vedic Lineage',
      statConsultations: '10,000+',
      statConsultationsLabel: 'Private Consultations Completed',
      statEthics: '100% Ethical',
      statEthicsLabel: 'No Exploitative Guarantees',
      statLanguages: '12 Languages',
      statLanguagesLabel: 'Multilingual Inquiries Supported'
    },
    intro: {
      kicker: 'The Philosophy of Jyoti',
      title: 'Astrology as Illumination, Not Fatalism',
      paragraph1: 'Classical Vedic Jyotish originates from the root "Jyoti"—the divine light of discernment. It is neither fortune-telling nor an excuse for passive fatalism. Your Janam Kundali is an intricate cosmic map of your karmic tendencies, planetary dashas, and personal inclinations.',
      paragraph2: 'Acharya Keshava Shastri believes the goal of an authentic consultation is to illuminate options, clarify opportune timings (Muhurat), and provide practical, spiritual grounding so you make informed, confident choices with full personal agency.',
      quote: '"Planets guide the weather of life; your character, effort (Purushartha), and Dharma steer the ship."',
      quoteAuthor: 'Acharya Keshava Shastri'
    },
    services: {
      kicker: 'Consultation Offerings',
      title: 'Specialized Astrological & Spiritual Guidance',
      subtitle: 'Each consultation is individually prepared using manual planetary ephemeris calculations and classical texts.',
      viewDetails: 'View Methodology & Deliverables',
      closeDetails: 'Close Details',
      consultThisService: 'Consult on This Topic via WhatsApp',
      items: [
        {
          id: 'kundali_analysis',
          title: 'Janam Kundali & Complete Life Path Analysis',
          summary: 'In-depth evaluation of your natal chart (Lagna, Navamsha D-9, and Moon chart), currently active Mahadashas, and planetary transits.',
          details: 'A comprehensive study of your 12 bhavas (houses), planetary yogas, and doshas. Ideal for understanding fundamental life inclinations, recurring obstacles, and major turning points across career, family, and health.',
          deliverables: '60-minute in-depth audio or video consultation, natal planetary coordinates breakdown, and personalized Vedic remedies (mantras and ethical practices).',
          requirements: 'Exact Date of Birth, Exact Time of Birth, and Place of Birth (City/Country).'
        },
        {
          id: 'career_finance',
          title: 'Career, Business Decisions & Financial Timing',
          summary: 'Targeted timing analysis for career transitions, business ventures, partnerships, and auspicious execution windows (Muhurat).',
          details: 'Evaluation of the 10th house (Karma Bhava), Dashamsha (D-10 chart), and transit of Saturn, Jupiter, and Rahu/Ketu to diagnose stagnation, suitable industries, and optimal timing for major financial decisions.',
          deliverables: 'Focused strategic review, timeline of upcoming supportive vs challenging periods, and recommended Muhurat windows for signings or launches.',
          requirements: 'Birth details and specific business/career scenarios or contract questions.'
        },
        {
          id: 'marriage_compatibility',
          title: 'Vivaha & Relationship Compatibility (Kundali Milan)',
          summary: 'Traditional 36-point Ashta Koota matching coupled with deeper mental, psychological, and planetary alignment analysis.',
          details: 'Beyond routine computational scores, we analyze the 7th house, Venus/Mars balance, Manglik considerations, and Navamsha harmony to evaluate long-term emotional resilience, mutual respect, and family balance.',
          deliverables: 'Detailed written matching verdict, identification of potential friction areas, and constructive harmonizing remedies if minor doshas exist.',
          requirements: 'Birth details (Date, Time, Place) for both prospective partners.'
        },
        {
          id: 'spiritual_energy',
          title: 'Spiritual Energy Balancing & Negative Energy Remediation',
          summary: 'Ethical assessment of psychic heaviness, persistent obstacles, evil-eye (Drishti), and Navagraha planetary imbalances.',
          details: 'Addressing persistent feelings of stagnation, unexplained domestic friction, or heavy environmental energy through classical Vedic sanctification (Shanti Mantras, Kavacham, home cleansing principles, and charity-based Karma remedies). Strictly no fear-mongering or commercialized fear-exploitation.',
          deliverables: 'Diagnostic assessment of planetary influences, structured Vedic prayer protocols, and practical lifestyle / environment harmonizing steps.',
          requirements: 'Overview of experienced distress or household situation; birth details if available.'
        },
        {
          id: 'prashna_shastra',
          title: 'Prashna Shastra (Horary Question Consultation)',
          summary: 'Instant horary astrological analysis cast at the exact moment a pressing question is asked, when birth time is uncertain or absent.',
          details: 'Based on the classical Prashna Marga, the astrological snapshot of the cosmic clock at the query moment provides uncanny clarity regarding immediate decisions, lost assets, property matters, or urgent choices.',
          deliverables: 'Direct, focused answer regarding the immediate query outcome and decisive advisory.',
          requirements: 'A single, clear, heartfelt question and the current time and location of asking.'
        }
      ]
    },
    process: {
      kicker: 'Consultation Workflow',
      title: 'How to Request a Consultation',
      subtitle: 'A straightforward, respectful process ensuring complete preparation before we speak.',
      steps: [
        {
          number: '01',
          title: 'Submit Your Inquiry & Birth Information',
          description: 'Share your name, birth details (date, exact time, city), and the core questions you wish to address via WhatsApp or our secure inquiry form.'
        },
        {
          number: '02',
          title: 'Mathematical Ephemeris & Chart Calculation',
          description: 'Acharya Shastri manually calculates your divisional charts, planetary strengths (Shadbala), and Vimshottari dasha cycles prior to your session.'
        },
        {
          number: '03',
          title: 'Private Dialogue & Actionable Ethical Guidance',
          description: 'Connect directly via WhatsApp Voice/Video Call or in-person. Receive clear insights, constructive advice, and classical Sattvic remedies without pressure.'
        }
      ]
    },
    trust: {
      kicker: 'Commitment to Integrity',
      title: 'Our Ethical & Professional Charter',
      subtitle: 'Why clients across India and the global diaspora place their faith in Acharya Shastri’s guidance.',
      charterPoints: [
        {
          title: 'No Fabricated 100% Guarantees',
          description: 'Authentic astrology assesses planetary indicators and karmic tendencies. We strictly never claim supernatural 100% guarantees or miracle cures.'
        },
        {
          title: 'Zero Fear-Driven Commercial Exploitation',
          description: 'We never invent non-existent curses or demand exorbitant fees for secretive rituals. Prescribed remedies prioritize personal prayer, charity, and ethical discipline.'
        },
        {
          title: 'Uncompromised Confidentiality',
          description: 'Your birth records, personal dilemmas, and conversation notes are held with sacred discretion and never shared with any third party.'
        },
        {
          title: 'Direct Personal Attention',
          description: 'Every chart is analyzed personally by Acharya Shastri, not outsourced to automated algorithms or junior assistants.'
        }
      ],
      disclaimerTitle: 'Regulatory & Ethical Disclosure',
      disclaimerText: 'Astrological consultations are provided for spiritual insight, self-reflection, and perspective. They do not substitute for professional medical, legal, or licensed financial advisory services.'
    },
    faq: {
      kicker: 'Common Questions',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear answers regarding consultation procedures, required information, and remote sessions.',
      items: [
        {
          question: 'What details are required for a birth chart reading?',
          answer: 'For a comprehensive Janam Kundali consultation, you will need your exact date of birth, time of birth (as accurate as possible, ideally from birth records), and place of birth (city and state/country). If your birth time is unknown, Prashna Shastra (Horary Astrology) can be utilized instead.'
        },
        {
          question: 'Can the consultation be conducted remotely over WhatsApp?',
          answer: 'Yes. Over 60% of our clients consult remotely via WhatsApp voice call, video call, or detailed audio recordings. Remote consultations receive the exact same rigorous chart preparation and undivided attention as in-person appointments.'
        },
        {
          question: 'How do you approach evil eye, black magic fears, or negative energies?',
          answer: 'Acharya Shastri approaches these concerns through classical Vedic principles (Navagraha Shanti, protective Vedic mantras, and Vastu harmonization). We firmly reject superstition and extortionate fear-based claims. If an energetic imbalance is present, remedies focus on Sattvic prayer, mental tranquility, charity, and positive spiritual practices.'
        },
        {
          question: 'Which languages can consultations be conducted in?',
          answer: 'Acharya Shastri conducts direct consultations in English, Kannada, Hindi, Tamil, and Telugu. Inquiries received in other supported diaspora languages are coordinated with respectful written and audio communications.'
        },
        {
          question: 'How quickly will the astrologer’s team respond?',
          answer: 'Inquiries submitted during business hours (08:30 AM – 07:30 PM IST) typically receive a response within 1 to 3 hours. WhatsApp messages receive direct confirmation from our consultation coordinator.'
        }
      ]
    },
    about: {
      badge: 'About the Astrologer',
      title: 'Acharya Keshava Shastri',
      subtitle: 'A lifelong pursuit of authentic Vedic sciences, classical Sanskrit texts, and compassionate spiritual guidance.',
      bioTitle: 'Lineage, Training & Philosophy',
      bioP1: 'Born into an esteemed family tradition of Vedic scholars in Udupi, Karnataka, Acharya Keshava Shastri began his classical study of Sanskrit and astronomical calculations at an early age. He later spent over a decade under the tutelage of venerable masters in Varanasi, immersing himself in the Brihat Parashara Hora Shastra, Jaimini Sutras, and Prashna Marga.',
      bioP2: 'Over 24 years of active consultation practice, Acharya Shastri has guided thousands of individuals, families, entrepreneurs, and scholars through complex crossroads—from career stagnation and matrimonial compatibility to family harmony and deep spiritual questions.',
      bioP3: 'His method is distinctively grounded: he views the horoscope not as an unchangeable prison of destiny, but as a diagnostic mirror revealing innate karmic patterns. With this self-knowledge, the individual can exercise their Purushartha (free conscious effort) with greater clarity and courage.',
      systemsTitle: 'Astrological Systems & Traditions Understood',
      systemsSubtitle: 'Rooted exclusively in verified, classical Indian astrological methodologies:',
      systems: [
        {
          name: 'Parashara Vedic Jyotish',
          description: 'The foundation of Vedic predictive astrology, focusing on 16 divisional charts (Shodashvarga), planetary aspects, and Vimshottari dasha systems.'
        },
        {
          name: 'Prashna Marga (Horary Shastra)',
          description: 'The ancient South Indian science of casting charts at the exact moment of inquiry, invaluable for pressing decisions and time-sensitive clarity.'
        },
        {
          name: 'Jaimini Sutra Methodology',
          description: 'Subtle Chara dasha computations and Karakamsha analysis offering deep spiritual and soul-purpose (Atmakaraka) insights.'
        },
        {
          name: 'Muhurat & Vastu Harmonization',
          description: 'Astronomical election of auspicious timings for business, marriage, and home foundation, alongside spatial energy flow balancing.'
        }
      ],
      credentialsTitle: 'Verified Qualifications & Lineage Record',
      credentials: [
        'Jyotish Praveena & Jyotish Visharada titles awarded by the Indian Council of Astrological Sciences (ICAS).',
        'Traditional Sanskrit Sahitya Acharya certification from Sampurnanand Sanskrit University traditions.',
        'Over 24 continuous years of documented public and private consultation service with verified records.',
        'Trusted advisor to multi-generational families across India, the United Kingdom, North America, and the Caribbean.'
      ],
      approachTitle: 'Our Customer Consultation Approach',
      approachP1: 'When you sit for a consultation with Acharya Shastri—whether in person or over WhatsApp—you will find an empathetic listener and an analytical mind. There are no dramatic theatrics, fear tactics, or pressure to purchase commercial artifacts.',
      approachP2: 'Every recommendation is designed to empower you with clarity, practical timeline expectations, and authentic spiritual remedies that bring peace of mind.',
      testimonialsTitle: 'Reflections from Consulted Clients',
      testimonials: [
        {
          quote: 'Acharya Shastri’s reading during my career crossroads in 2023 was exceptionally grounded. He did not sell me expensive gems; he gave me exact timing for my contract transition that unfolded precisely as analyzed.',
          author: 'Venkatesh Murthy',
          context: 'Technology Director, Bengaluru'
        },
        {
          quote: 'His sensitivity and ethical approach during our family’s matrimonial matching was deeply reassuring. He explained the planetary dynamics in simple, loving language without creating unnecessary anxiety.',
          author: 'Dr. Savitha Nair',
          context: 'Consultant Physician, Kochi'
        },
        {
          quote: 'Even across time zones in the Caribbean, consulting Acharya ji felt like speaking to a wise elder in my own living room. The peace of mind after his spiritual guidance was immediate.',
          author: 'David R. Singh',
          context: 'Business Owner, Trinidad'
        }
      ],
      ctaTitle: 'Ready to Discuss Your Path?',
      ctaSubtitle: 'Initiate a direct, confidential dialogue with Acharya Shastri’s consultation team today.',
      ctaButton: 'Speak with Acharya Shastri on WhatsApp'
    },
    chatbot: {
      launcherLabel: 'Consultation Assistant',
      assistantTitle: 'Astrology Consultation Assistant',
      assistantSubtitle: 'Direct, confidential inquiry intake',
      step1Welcome: 'Namaste! Welcome to Acharya Shastri’s consultation sanctum. I can help coordinate your personal consultation with Acharya ji.',
      step2NamePrompt: 'May I know your full name?',
      namePlaceholder: 'Enter your name...',
      step3ContactPrompt: 'What is your preferred contact method and number/email?',
      contactMethodWhatsApp: 'WhatsApp',
      contactMethodPhone: 'Direct Call',
      contactMethodEmail: 'Email',
      contactPlaceholder: 'Enter your phone or email...',
      step4CategoryPrompt: 'Which area of guidance are you seeking today?',
      categories: [
        { id: 'kundali_analysis', label: 'Janam Kundali & Life Path' },
        { id: 'career_finance', label: 'Career & Financial Timing' },
        { id: 'marriage_compatibility', label: 'Marriage Compatibility (Kundali Milan)' },
        { id: 'spiritual_energy', label: 'Spiritual Energy / Negative Energy Cleansing' },
        { id: 'prashna_shastra', label: 'Urgent Specific Question (Prashna)' }
      ],
      step5ConcernPrompt: 'Please briefly describe your current situation or core question (no sensitive financial/medical details needed):',
      concernPlaceholder: 'Briefly mention what you would like Acharya ji to examine...',
      step6TimePrompt: 'What is your preferred timing for the consultation discussion?',
      timeOptions: [
        'Morning (09:00 AM – 12:00 PM IST)',
        'Afternoon (02:00 PM – 05:00 PM IST)',
        'Evening (05:00 PM – 07:30 PM IST)',
        'Weekend Morning',
        'Flexible / Any Available Slot'
      ],
      step7ConsentPrompt: 'Please confirm your consent for the astrologer’s team to follow up directly:',
      consentText: 'I agree to be contacted confidentially regarding this consultation inquiry.',
      step8CompleteTitle: 'Inquiry Prepared Successfully',
      step8CompleteDesc: 'Your request has been formulated. You can now connect directly on WhatsApp with your pre-filled inquiry, or submit it for team follow-up.',
      actionOpenWhatsApp: 'Continue on WhatsApp Now',
      actionSubmitOnline: 'Submit Online to Astrologer',
      copiedNotice: 'Consultation text copied to clipboard!',
      fallbackHelp: 'If WhatsApp doesn’t open on your device, your request is already securely submitted to Acharya Shastri’s team.'
    },
    form: {
      kicker: 'Inquiry Form',
      title: 'Request a Confidential Consultation',
      subtitle: 'Complete the details below and our consultation coordinator will contact you promptly.',
      nameLabel: 'Your Full Name *',
      namePlaceholder: 'e.g. Ramesh Narayan',
      contactMethodLabel: 'Preferred Communication Channel',
      contactValueLabel: 'Contact Information (Phone / WhatsApp / Email) *',
      contactValuePlaceholder: 'e.g. +91 98765 43210',
      categoryLabel: 'Consultation Category',
      concernLabel: 'Brief Description of Concern / Question',
      concernPlaceholder: 'Provide brief context or your main question for Acharya Shastri...',
      timeLabel: 'Preferred Time for Consultation',
      languageLabel: 'Preferred Discussion Language',
      consentLabel: 'I consent to sharing this information for a direct confidential consultation follow-up with Acharya Shastri’s team. *',
      submitButton: 'Submit Consultation Request',
      submitting: 'Securing Your Submission...',
      successTitle: 'Inquiry Received with Respect',
      successMessage: 'Thank you. Acharya Shastri’s team has received your consultation details and will reach out to schedule your appointment within 1–3 business hours.',
      orWhatsApp: 'Need immediate scheduling?',
      chatDirectly: 'Connect Instantly on WhatsApp'
    },
    footer: {
      aboutSnippet: 'Traditional Vedic Astrology consultations upholding the highest standards of dignity, classical texts, and compassion.',
      quickLinks: 'Navigation',
      contactInfo: 'Sanctum Coordinates',
      hours: 'Consultation Hours: Mon – Sat, 08:30 AM – 07:30 PM IST',
      ethicsNotice: 'Strict Ethical Standard: Consultations provide astrological guidance based on classical Jyotish. No 100% supernatural guarantees or claims of instant miracles are made. Respects Google Ads spiritual policies.',
      rightsReserved: 'Acharya Keshava Shastri Jyotish. All rights reserved.',
      adminAccess: 'Astrologer Team Portal',
      techSeoReport: 'SEO & 12-Month Roadmap'
    }
  },

  // Kannada (ಕನ್ನಡ)
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ಆಚಾರ್ಯ ಶಾಸ್ತ್ರಿಗಳ ಪರಿಚಯ',
      services: 'ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳು',
      process: 'ಕಾರ್ಯವಿಧಾನ',
      trust: 'ನಂಬಿಕೆ ಮತ್ತು ನೀತಿಸಂಹಿತೆ',
      faq: 'ಪ್ರಶ್ನೋತ್ತರಗಳು',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      consultWhatsApp: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ'
    },
    hero: {
      badge: 'ಪ್ರಾಚೀನ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ',
      headline: 'ಜೀವನದ ಮಹತ್ವದ ನಿರ್ಧಾರಗಳಿಗೆ ನಿಷ್ಕಪಟ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ',
      subheadline: 'ಪರಾಶರ ಪರಂಪರೆಯ ಶುದ್ಧ ಜನ್ಮ ಕುಂಡಲಿ ವಿಶ್ಲೇಷಣೆ, ಪ್ರಶ್ನ ಶಾಸ್ತ್ರ ಮತ್ತು ನಕಾರಾತ್ಮಕ ಶಕ್ತಿ ನಿವಾರಣೆ. ಯಾವುದೇ ಮೂಢನಂಬಿಕೆ ಅಥವಾ ಸುಳ್ಳು ಆಶ್ವಾಸನೆಗಳಿಲ್ಲದ ಪ್ರಾಮಾಣಿಕ ಸಮಾಲೋಚನೆ.',
      ctaWhatsApp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಮಾಲೋಚನೆ ಆರಂಭಿಸಿ',
      ctaInquiry: 'ಸಮಾಲೋಚನೆಗೆ ವಿನಂತಿಸಿ',
      statLineage: '24+ ವರ್ಷಗಳು',
      statLineageLabel: 'ವೈದಿಕ ಗುರುಕುಲ ಪರಂಪರೆ',
      statConsultations: '10,000+',
      statConsultationsLabel: 'ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಗಳು',
      statEthics: '100% ನೀತಿಬದ್ಧ',
      statEthicsLabel: 'ಸುಳ್ಳು ಭರವಸೆಗಳಿಲ್ಲ',
      statLanguages: '12 ಭಾಷೆಗಳು',
      statLanguagesLabel: 'ಸಂಪರ್ಕ ಬೆಂಬಲ'
    },
    intro: {
      kicker: 'ಜ್ಯೋತಿಷ್ಯದ ತತ್ವ',
      title: 'ಜ್ಯೋತಿ ಎಂದರೆ ಬೆಳಕು - ಮಾರ್ಗದರ್ಶನವೇ ಹೊರತು ವಿಧಿಯ ಗುಲಾಮಗಿರಿಯಲ್ಲ',
      paragraph1: 'ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯವು ದೈವಿಕ ಬೆಳಕಿನ ಸಂಕೇತವಾಗಿದೆ. ಇದು ಕೇವಲ ಭವಿಷ್ಯ ನುಡಿಯುವುದಲ್ಲ, ಬದಲಾಗಿ ವ್ಯಕ್ತಿಯ ಕರ್ಮ ಫಲಗಳು, ಗ್ರಹಗಳ ದಶಾ ಕಾಲ ಮತ್ತು ಅಂತಃಶಕ್ತಿಯನ್ನು ಗ್ರಹಿಸುವ ದಾರಿದೀಪ.',
      paragraph2: 'ಆಚಾರ್ಯ ಕೇಶವ ಶಾಸ್ತ್ರಿಗಳು ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿಯೂ ತನ್ನ ಸ್ವಪ್ರಯತ್ನ (ಪುರುಷಾರ್ಥ) ಮತ್ತು ಧರ್ಮದ ಮೂಲಕ ಉತ್ತಮ ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳಲು ಶಾಸ್ತ್ರೋಕ್ತ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.',
      quote: '"ಗ್ರಹಗಳು ಜೀವನದ ವಾತಾವರಣವನ್ನು ಸೂಚಿಸುತ್ತವೆ; ನಿಮ್ಮ ಧರ್ಮ ಮತ್ತು ಪ್ರಯತ್ನವು ದಾರಿಯನ್ನು ರೂಪಿಸುತ್ತದೆ."',
      quoteAuthor: 'ಆಚಾರ್ಯ ಕೇಶವ ಶಾಸ್ತ್ರಿ'
    },
    services: {
      kicker: 'ಸೇವಾ ವಿವರಗಳು',
      title: 'ಶಾಸ್ತ್ರೋಕ್ತ ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಮಾಲೋಚನೆಗಳು',
      subtitle: 'ಪ್ರತಿಯೊಂದು ಕುಂಡಲಿಯನ್ನು ಪ್ರಾಚೀನ ಗ್ರಂಥಗಳ ಪ್ರಕಾರ ಗಣಿತಬದ್ಧವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.',
      viewDetails: 'ವಿಧಾನ ಮತ್ತು ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
      closeDetails: 'ಮುಚ್ಚಿರಿ',
      consultThisService: 'ಈ ವಿಷಯದ ಬಗ್ಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ',
      items: [
        {
          id: 'kundali_analysis',
          title: 'ಸಂಪೂರ್ಣ ಜನ್ಮ ಕುಂಡಲಿ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಜೀವನ ಪಥ',
          summary: 'ಲಗ್ನ, ನವಾಂಶ (D-9) ಮತ್ತು ಚಂದ್ರ ಕುಂಡಲಿ ಹಾಗೂ ಪ್ರಸ್ತುತ ಮಹಾದಶೆಗಳ ಆಳವಾದ ವಿಶ್ಲೇಷಣೆ.',
          details: '12 ಭಾವಗಳು, ಗ್ರಹಗಳ ಯೋಗಗಳು ಮತ್ತು ದೋಷಗಳ ಪರಿಶೀಲನೆ. ಉದ್ಯೋಗ, ಆರೋಗ್ಯ, ವಿವಾಹ ಮತ್ತು ಆರ್ಥಿಕ ಏರಿಳಿತಗಳ ಸ್ಪಷ್ಟ ಚಿತ್ರಣ.',
          deliverables: '60 ನಿಮಿಷಗಳ ವಿಸ್ತೃತ ಆಡಿಯೋ/ವಿಡಿಯೋ ಸಮಾಲೋಚನೆ, ಕುಂಡಲಿ ವಿವರ ಮತ್ತು ಸರಳ ಸಾತ್ವಿಕ ಪರಿಹಾರಗಳು.',
          requirements: 'ನಿಖರ ಹುಟ್ಟಿದ ದಿನಾಂಕ, ಸಮಯ ಮತ್ತು ಹುಟ್ಟಿದ ಊರು.'
        },
        {
          id: 'career_finance',
          title: 'ಉದ್ಯೋಗ, ವ್ಯಾಪಾರ ಮತ್ತು ಆರ್ಥಿಕ ನಿರ್ಧಾರಗಳ ಸಮಯ (ಮುಹೂರ್ತ)',
          summary: 'ವೃತ್ತಿ ಬದಲಾವಣೆ, ವ್ಯಾಪಾರ ಹೂಡಿಕೆ ಮತ್ತು ಶನಿ-ರಾಹು ದಶಾ ಕಾಲದ ಶುಭ ಮುಹೂರ್ತ ವಿಶ್ಲೇಷಣೆ.',
          details: 'ದಶಮಾಂಶ (D-10) ಮತ್ತು ಕರ್ಮ ಭಾವದ ಪರಿಶೀಲನೆ ಮೂಲಕ ಉದ್ಯೋಗದ ಪ್ರಗತಿ ಹಾಗೂ ಆರ್ಥಿಕ ಬಿಕ್ಕಟ್ಟುಗಳ ಪರಿಹಾರ ಮಾರ್ಗ.',
          deliverables: 'ಮುಂದಿನ ಅನುಕೂಲಕರ ಸಮಯದ ಮುನ್ಸೂಚನೆ ಹಾಗೂ ವ್ಯಾಪಾರ/ಒಪ್ಪಂದಗಳಿಗೆ ಶುಭ ಮುಹೂರ್ತ.',
          requirements: 'ಹುಟ್ಟಿದ ವಿವರಗಳು ಮತ್ತು ನಿಮ್ಮ ವೃತ್ತಿಯ ನಿರ್ದಿಷ್ಟ ಸಂದೇಹಗಳು.'
        },
        {
          id: 'marriage_compatibility',
          title: 'ವಿವಾಹ ಹೊಂದಾಣಿಕೆ (ಜಾತಕ ಕೂಟ ಮತ್ತು ನವಾಂಶ ವಿಶ್ಲೇಷಣೆ)',
          summary: 'ಅಷ್ಟಕೂಟ 36 ಗುಣಗಳ ಜತೆಗೆ ಮನೋವೈಜ್ಞಾನಿಕ ಮತ್ತು ದಾಂಪತ್ಯ ಆಯುಷ್ಯ ಸಮನ್ವಯ ಪರಿಶೀಲನೆ.',
          details: 'ಕೇವಲ ಗುಣ ಎಣಿಕೆಯಲ್ಲದೆ ಸಪ್ತಮ ಭಾವ, ಮಾಂಗಲ್ಯ ದೋಷ ಮತ್ತು ಪರಸ್ಪರ ಗೌರವದ ಗ್ರಹ ಸ್ಥಿತಿಗಳನ್ನು ಕೂಲಂಕಷವಾಗಿ ನೋಡಲಾಗುತ್ತದೆ.',
          deliverables: 'ಸ್ಪಷ್ಟ ಹೊಂದಾಣಿಕೆ ವರದಿ ಹಾಗೂ ಸಣ್ಣಪುಟ್ಟ ದೋಷಗಳಿದ್ದರೆ ಸಾತ್ವಿಕ ಶಾಂತಿ ಮಾರ್ಗ.',
          requirements: 'ವರ ಮತ್ತು ವಧು ಇಬ್ಬರ ಹುಟ್ಟಿದ ವಿವರಗಳು.'
        },
        {
          id: 'spiritual_energy',
          title: 'ದೃಷ್ಟಿ ದೋಷ, ನಕಾರಾತ್ಮಕ ಶಕ್ತಿ ನಿವಾರಣೆ ಮತ್ತು ನವಗ್ರಹ ಶಾಂತಿ',
          summary: 'ಕುಟುಂಬದಲ್ಲಿ ಅಶಾಂತಿ, ದೃಷ್ಟಿ ದೋಷ ಹಾಗೂ ಗ್ರಹಗಳ ಅನಿಷ್ಟ ನಿವಾರಣೆಗೆ ಸಾತ್ವಿಕ ವೈದಿಕ ಕ್ರಮಗಳು.',
          details: 'ಯಾವುದೇ ಭಯ ಹುಟ್ಟಿಸುವ ಮಾಂತ್ರಿಕ ತಂತ್ರಗಳಿಲ್ಲದೆ, ವೇದೋಕ್ತ ಮಂತ್ರಗಳು, ಕವಚಗಳು ಮತ್ತು ದಾನ-ಧರ್ಮಗಳ ಮೂಲಕ ಶುದ್ಧ ಶಾಂತಿ.',
          deliverables: 'ಗ್ರಹಗಳ ಪ್ರಭಾವ ವಿಶ್ಲೇಷಣೆ, ನಿತ್ಯ ಪಠಿಸಬೇಕಾದ ಮಂತ್ರಗಳು ಹಾಗೂ ಮನೆ ಪರಿಸರದ ಶುದ್ಧೀಕರಣ ಸಲಹೆ.',
          requirements: 'ಸಮಸ್ಯೆಯ ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ ಮತ್ತು ಲಭ್ಯವಿದ್ದಲ್ಲಿ ಜಾತಕ ವಿವರ.'
        },
        {
          id: 'prashna_shastra',
          title: 'ಪ್ರಶ್ನ ಶಾಸ್ತ್ರ (ತುರ್ತು ನಿರ್ಧಾರಗಳಿಗೆ ತತ್ಕಾಲಿಕ ಕುಂಡಲಿ)',
          summary: 'ಹುಟ್ಟಿದ ಸಮಯ ತಿಳಿದಿಲ್ಲದಿದ್ದಾಗ ಅಥವಾ ತುರ್ತು ವಿಷಯಗಳಿಗೆ ಪ್ರಶ್ನೆ ಕೇಳಿದ ಕ್ಷಣದ ಕುಂಡಲಿ ವಿಶ್ಲೇಷಣೆ.',
          details: 'ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಾಚೀನ ಪ್ರಶ್ನ ಮಾರ್ಗದ ಪ್ರಕಾರ ಆ ಕ್ಷಣದ ಗ್ರಹಸ್ಥಿತಿಯಿಂದ ನೇರ ಮತ್ತು ನಿಖರ ಉತ್ತರ.',
          deliverables: 'ನಿಮ್ಮ ತುರ್ತು ಸಮಸ್ಯೆಗೆ ಸ್ಪಷ್ಟ ತೀರ್ಮಾನ ಮತ್ತು ಸೂಕ್ತ ಮಾರ್ಗದರ್ಶನ.',
          requirements: 'ಮನಸ್ಸಿನಿಂದ ಕೇಳಲಾದ ಒಂದು ಪ್ರಮುಖ ಪ್ರಶ್ನೆ ಮತ್ತು ಸ್ಥಳ.'
        }
      ]
    },
    process: {
      kicker: 'ಸಮಾಲೋಚನಾ ಹಂತಗಳು',
      title: 'ಸಮಾಲೋಚನೆ ಪಡೆಯುವುದು ಹೇಗೆ?',
      subtitle: 'ನಿಮ್ಮ ಸಮಯಕ್ಕೆ ಗೌರವ ಕೊಡುವ ನೇರ ಮತ್ತು ಪಾರದರ್ಶಕ ಹಂತಗಳು.',
      steps: [
        {
          number: '01',
          title: 'ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ',
          description: 'ನಿಮ್ಮ ಹೆಸರು, ಹುಟ್ಟಿದ ವಿವರ ಮತ್ತು ಪ್ರಶ್ನೆಗಳನ್ನು ವಾಟ್ಸಾಪ್ ಅಥವಾ ಫಾರ್ಮ್ ಮೂಲಕ ಕಳುಹಿಸಿ.'
        },
        {
          number: '02',
          title: 'ಗಣಿತೀಯ ಕುಂಡಲಿ ಪರಿಶೀಲನೆ',
          description: 'ಆಚಾರ್ಯರು ಸಮಾಲೋಚನೆಗೆ ಮುಂಚಿತವಾಗಿ ನಿಮ್ಮ ವರ್ಗ ಕುಂಡಲಿಗಳು ಮತ್ತು ದಶಾ ಕಾಲವನ್ನು ಕೂಲಂಕಷವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತಾರೆ.'
        },
        {
          number: '03',
          title: 'ನೇರ ಸಮಾಲೋಚನೆ ಮತ್ತು ಸಾತ್ವಿಕ ಪರಿಹಾರ',
          description: 'ವಾಟ್ಸಾಪ್ ಕರೆ ಅಥವಾ ಭೇಟಿಯ ಮೂಲಕ ನೇರವಾಗಿ ಮಾತನಾಡಿ, ಸ್ಪಷ್ಟ ದಾರಿ ಮತ್ತು ನೈಜ ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.'
        }
      ]
    },
    trust: {
      kicker: 'ಪ್ರಾಮಾಣಿಕತೆಯ ವಾಗ್ದಾನ',
      title: 'ನಮ್ಮ ನೀತಿಸಂಹಿತೆ ಮತ್ತು ನೈತಿಕ ಹೊಣೆಗಾರಿಕೆ',
      subtitle: 'ಸಾವಿರಾರು ಜನರು ಆಚಾರ್ಯ ಶಾಸ್ತ್ರಿಗಳ ಮಾರ್ಗದರ್ಶನವನ್ನು ಏಕೆ ನಂಬುತ್ತಾರೆ?',
      charterPoints: [
        {
          title: 'ಯಾವುದೇ 100% ಸುಳ್ಳು ಪವಾಡಗಳಿಲ್ಲ',
          description: 'ಜ್ಯೋತಿಷ್ಯವು ಗ್ರಹಗಳ ದಿಕ್ಕನ್ನು ತೋರಿಸುತ್ತದೆ. ಮನುಷ್ಯನ ಕರ್ಮ ಮತ್ತು ಸಂಕಲ್ಪವೇ ಅಂತಿಮ. ನಾವು ಮ್ಯಾಜಿಕ್ ಅಥವಾ ಮಾಂತ್ರಿಕ ಪವಾಡಗಳನ್ನು ಹೇಳುವುದಿಲ್ಲ.'
        },
        {
          title: 'ಭಯ ಹುಟ್ಟಿಸಿ ಹಣ ವಸೂಲಿ ಮಾಡುವುದಿಲ್ಲ',
          description: 'ಸುಳ್ಳು ಶಾಪಗಳ ಭಯ ತೋರಿಸಿ ದುಬಾರಿ ಪೂಜೆಗಳನ್ನು ಹೇರುವುದಿಲ್ಲ. ಸರಳ ಪ್ರಾರ್ಥನೆ, ಜಪ ಮತ್ತು ಸತ್ಕರ್ಮಗಳೇ ನಮ್ಮ ಪರಿಹಾರ.'
        },
        {
          title: 'ಸಂಪೂರ್ಣ ಗೌಪ್ಯತೆ',
          description: 'ನಿಮ್ಮ ಜಾತಕ ಮತ್ತು ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಅತ್ಯಂತ ಪಾವಿತ್ರ್ಯತೆಯಿಂದ ಕಾಪಾಡಲಾಗುತ್ತದೆ.'
        },
        {
          title: 'ಆಚಾರ್ಯರಿಂದಲೇ ನೇರ ವಿಶ್ಲೇಷಣೆ',
          description: 'ಯಾವುದೇ ಕಂಪ್ಯೂಟರ್ ಆಪ್ ಅಥವಾ ಸಹಾಯಕರಿಗೆ ವಹಿಸದೆ ಆಚಾರ್ಯ ಶಾಸ್ತ್ರಿಗಳೇ ಖುದ್ದು ಪರಿಶೀಲಿಸುತ್ತಾರೆ.'
        }
      ],
      disclaimerTitle: 'ಕಾನೂನುಬದ್ಧ ಮತ್ತು ನೈತಿಕ ಸ್ಪಷ್ಟನೆ',
      disclaimerText: 'ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆಗಳು ಆತ್ಮಾವಲೋಕನ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ಇದು ವೈದ್ಯಕೀಯ ಅಥವಾ ಕಾನೂನು ತಜ್ಞರ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.'
    },
    faq: {
      kicker: 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು',
      title: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
      subtitle: 'ಸಮಾಲೋಚನೆ ಕುರಿತು ನಿಮ್ಮ ಸಂದೇಹಗಳಿಗೆ ಸ್ಪಷ್ಟ ಉತ್ತರಗಳು.',
      items: [
        {
          question: 'ಜಾತಕ ಪರಿಶೀಲನೆಗೆ ಏನೆಲ್ಲಾ ವಿವರಗಳು ಬೇಕು?',
          answer: 'ನಿಖರವಾದ ಹುಟ್ಟಿದ ದಿನಾಂಕ, ಹುಟ್ಟಿದ ಸಮಯ (ಗಂಟೆ ಮತ್ತು ನಿಮಿಷ) ಹಾಗೂ ಹುಟ್ಟಿದ ಊರು ಅಗತ್ಯ. ಸಮಯ ಗೊತ್ತಿಲ್ಲದಿದ್ದರೆ ಪ್ರಶ್ನ ಶಾಸ್ತ್ರದ ಮೂಲಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಬಹುದು.'
        },
        {
          question: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ದೂರದಿಂದಲೇ ಸಮಾಲೋಚನೆ ಸಾಧ್ಯವೇ?',
          answer: 'ಹೌದು. ನಮ್ಮ ಶೇಕಡಾ 60ಕ್ಕೂ ಹೆಚ್ಚು ಗ್ರಾಹಕರು ವಾಟ್ಸಾಪ್ ವಿಡಿಯೋ ಅಥವಾ ವಾಯ್ಸ್ ಕರೆ ಮೂಲಕವೇ ಪೂರ್ಣ ತೃಪ್ತಿಯ ಸಮಾಲೋಚನೆ ಪಡೆಯುತ್ತಾರೆ.'
        },
        {
          question: 'ದೃಷ್ಟಿ ದೋಷ ಅಥವಾ ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗೆ ನಿಮ್ಮ ಪರಿಹಾರಗಳೇನು?',
          answer: 'ನಾವು ವೇದೋಕ್ತ ನವಗ್ರಹ ಶಾಂತಿ, ಸೂಕ್ತ ಮಂತ್ರ ಪಠಣ ಮತ್ತು ಧನಾತ್ಮಕ ಚಿಂತನೆಯ ಮೂಲಕ ಪರಿಹಾರ ಸೂಚಿಸುತ್ತೇವೆ. ಯಾವುದೇ ವಾಮಾಚಾರ ಅಥವಾ ಮೂಢನಂಬಿಕೆಯ ಆಚರಣೆಗಳನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.'
        },
        {
          question: 'ಯಾವ ಭಾಷೆಗಳಲ್ಲಿ ಮಾತನಾಡಬಹುದು?',
          answer: 'ಆಚಾರ್ಯ ಶಾಸ್ತ್ರಿಗಳು ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ, ತಮಿಳು ಮತ್ತು ತೆಲುಗು ಭಾಷೆಗಳಲ್ಲಿ ನೇರವಾಗಿ ಮಾತನಾಡುತ್ತಾರೆ.'
        },
        {
          question: 'ಸಂದೇಶ ಕಳುಹಿಸಿದ ಎಷ್ಟು ಸಮಯದಲ್ಲಿ ಪ್ರತಿಕ್ರಿಯೆ ಸಿಗುತ್ತದೆ?',
          answer: 'ಬೆಳಗ್ಗೆ 8:30 ರಿಂದ ಸಂಜೆ 7:30 ರ ಒಳಗಿನ ಸಂದೇಶಗಳಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ 1 ರಿಂದ 3 ಗಂಟೆಗಳಲ್ಲಿ ನಮ್ಮ ಸಂಯೋಜಕರು ಉತ್ತರಿಸುತ್ತಾರೆ.'
        }
      ]
    },
    about: {
      badge: 'ಜ್ಯೋತಿಷಿಗಳ ಪರಿಚಯ',
      title: 'ಆಚಾರ್ಯ ಕೇಶವ ಶಾಸ್ತ್ರಿ',
      subtitle: 'ಪ್ರಾಚೀನ ವೈದಿಕ ಶಾಸ್ತ್ರಗಳು, ಸಂಸ್ಕೃತ ಗ್ರಂಥಗಳು ಮತ್ತು ನಿಸ್ವಾರ್ಥ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ 24ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳ ಸೇವೆ.',
      bioTitle: 'ಪರಂಪರೆ, ಸಾಧನೆ ಮತ್ತು ಸಿದ್ಧಾಂತ',
      bioP1: 'ಉಡುಪಿಯ ಪ್ರಸಿದ್ಧ ವೈದಿಕ ಕುಟುಂಬದಲ್ಲಿ ಜನಿಸಿದ ಆಚಾರ್ಯ ಕೇಶವ ಶಾಸ್ತ್ರಿಗಳು ಬಾಲ್ಯದಲ್ಲೇ ಸಂಸ್ಕೃತ ಮತ್ತು ಖಗೋಳ ಗಣಿತವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿದರು. ನಂತರ ವಾರಾಣಸಿಯಲ್ಲಿ (ಕಾಶಿ) ದಶಕಗಳ ಕಾಲ ಶ್ರೇಷ್ಠ ವಿದ್ವಾಂಸರ ಬಳಿ ಪರಾಶರ, ಜೈಮಿನಿ ಮತ್ತು ಪ್ರಶ್ನ ಶಾಸ್ತ್ರಗಳನ್ನು ಆಳವಾಗಿ ಅಧ್ಯಯನ ಮಾಡಿದರು.',
      bioP2: '24 ವರ್ಷಗಳ ಸೇವೆಯಲ್ಲಿ ಸಾವಿರಾರು ಕುಟುಂಬಗಳಿಗೆ ಉದ್ಯೋಗ, ದಾಂಪತ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಗೊಂದಲಗಳಲ್ಲಿ ಸರಿಯಾದ ದಾರಿಯನ್ನು ತೋರಿಸಿದ್ದಾರೆ.',
      bioP3: 'ಕುಂಡಲಿಯನ್ನು ಹಣೆಬರಹದ ಕತ್ತಲೆಯಲ್ಲ, ಬದಲಾಗಿ ಬದುಕಿನ ಹಾದಿಯನ್ನು ಬೆಳಗುವ ದೀಪವೆಂದು ಆಚಾರ್ಯರು ಪರಿಗಣಿಸುತ್ತಾರೆ.',
      systemsTitle: 'ಕರಗತ ಮಾಡಿಕೊಂಡ ಶಾಸ್ತ್ರ ಪದ್ಧತಿಗಳು',
      systemsSubtitle: 'ಪ್ರಾಮಾಣಿಕ ವೈದಿಕ ಪದ್ಧತಿಗಳ ಮೇಲೆ ಸಂಪೂರ್ಣ ಪ್ರಭುತ್ವ:',
      systems: [
        { name: 'ಪರಾಶರ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ', description: 'ಷೋಡಶವರ್ಗ ಕುಂಡಲಿಗಳು ಮತ್ತು ವಿಂಶೋತ್ತರಿ ದಶಾ ಪದ್ಧತಿಯ ಸಮಗ್ರ ವಿಶ್ಲೇಷಣೆ.' },
        { name: 'ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಶ್ನ ಮಾರ್ಗ', description: 'ಕ್ಷಣಿಕ ಪ್ರಶ್ನೆಗಳಿಗೆ ತತ್ಕಾಲಿಕ ಗ್ರಹಸ್ಥಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಸ್ಪಷ್ಟ ಮಾರ್ಗದರ್ಶನ.' },
        { name: 'ಜೈಮಿನಿ ಸೂತ್ರ ಪದ್ಧತಿ', description: 'ಆತ್ಮಕಾರಕ ಮತ್ತು ಚರ ದಶಾ ಮೂಲಕ ಜೀವನದ ಮೂಲ ಉದ್ದೇಶದ ಶೋಧನೆ.' },
        { name: 'ಮುಹೂರ್ತ ಮತ್ತು ವಾಸ್ತು ಶಾಂತಿ', description: 'ಶುಭ ಕಾರ್ಯಗಳಿಗೆ ಗ್ರಹಬಲ ಮತ್ತು ಗೃಹ ಶಾಂತಿ ಸಮನ್ವಯ.' }
      ],
      credentialsTitle: 'ಅಧಿಕೃತ ಅರ್ಹತೆಗಳು ಮತ್ತು ಗೌರವಗಳು',
      credentials: [
        'ಭಾರತೀಯ ಜ್ಯೋತಿಷ್ಯ ಪರಿಷತ್ (ICAS) ನಿಂದ "ಜ್ಯೋತಿಷ ಪ್ರವೀಣ" ಮತ್ತು "ಜ್ಯೋತಿಷ ವಿಶಾರದ" ಬಿರುದು.',
        'ವಾರಾಣಸಿಯ ಸಂಪೂರ್ಣಾನಂದ ಸಂಸ್ಕೃತ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಸಾಹಿತ್ಯ ಆಚಾರ್ಯ ಅಧ್ಯಯನ.',
        '24 ವರ್ಷಗಳ ನಿರಂತರ ದಾಖಲಿತ ಪ್ರಾಮಾಣಿಕ ಸಮಾಲೋಚನಾ ಅನುಭವ.',
        'ಕರ್ನಾಟಕ, ಭಾರತ ಮತ್ತು ವಿದೇಶಗಳಲ್ಲಿನ ಸಾವಿರಾರು ಕುಟುಂಬಗಳ ನಂಬಿಕಸ್ಥ ಜ್ಯೋತಿಷಿ.'
      ],
      approachTitle: 'ಗ್ರಾಹಕರೊಂದಿಗಿನ ನಮ್ಮ ಒಡನಾಟದ ಶೈಲಿ',
      approachP1: 'ಆಚಾರ್ಯರ ಬಳಿ ಮಾತನಾಡುವಾಗ ನಿಮಗೆ ಒಬ್ಬ ಹಿರಿಯ ಮಾರ್ಗದರ್ಶಿಯ ಅನುಭವವಾಗುತ್ತದೆ. ಯಾವುದೇ ನಾಟಕೀಯತೆ, ಭಯಪಡಿಸುವುದು ಅಥವಾ ವಸ್ತುವಿಕ್ರಯದ ಆಮಿಷಗಳಿರುವುದಿಲ್ಲ.',
      approachP2: 'ಪ್ರತಿಯೊಂದು ಸಲಹೆಯೂ ನಿಮ್ಮ ಮನಸ್ಸಿಗೆ ನೆಮ್ಮದಿ ಮತ್ತು ಜೀವನಕ್ಕೆ ಸ್ಪಷ್ಟತೆಯನ್ನು ನೀಡುವ ಉದ್ದೇಶವನ್ನು ಹೊಂದಿರುತ್ತದೆ.',
      testimonialsTitle: 'ಗ್ರಾಹಕರ ನೈಜ ಅನುಭವಗಳು',
      testimonials: [
        {
          quote: 'ನನ್ನ ವೃತ್ತಿಜೀವನದ ಸಂಕಷ್ಟದ ಸಮಯದಲ್ಲಿ ಶಾಸ್ತ್ರಿಗಳ ಸಲಹೆ ನನಗೆ ಅತ್ಯಂತ ಸಹಕಾರಿಯಾಯಿತು. ದುಬಾರಿ ರತ್ನಗಳನ್ನು ಮಾರದೆ, ನಿಖರ ಸಮಯವನ್ನು ಹೇಳಿ ದಾರಿ ತೋರಿಸಿದರು.',
          author: 'ವೆಂಕಟೇಶ್ ಮೂರ್ತಿ',
          context: 'ಟೆಕ್ನಾಲಜಿ ಡೈರೆಕ್ಟರ್, ಬೆಂಗಳೂರು'
        },
        {
          quote: 'ಮಗಳ ವಿವಾಹ ಹೊಂದಾಣಿಕೆಯಲ್ಲಿ ಅವರ ತಾಳ್ಮೆ ಮತ್ತು ಸೌಜನ್ಯ ನಮಗೆ ಧೈರ್ಯ ನೀಡಿತು. ಸಣ್ಣ ದೋಷಗಳಿಗೆ ಹೆದರಿಸದೆ ಪರಿಹಾರ ತಿಳಿಸಿದರು.',
          author: 'ಡಾ. ಸವಿತಾ ನಾಯರ್',
          context: 'ವೈದ್ಯರು, ಮಂಗಳೂರು'
        }
      ],
      ctaTitle: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ ಬೇಕೇ?',
      ctaSubtitle: 'ಆಚಾರ್ಯ ಶಾಸ್ತ್ರಿಗಳ ತಂಡದೊಂದಿಗೆ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಇಂದೇ ಗೌಪ್ಯವಾಗಿ ಸಮಾಲೋಚಿಸಿ.',
      ctaButton: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆಚಾರ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ'
    },
    chatbot: {
      launcherLabel: 'ಜ್ಯೋತಿಷ್ಯ ಸಹಾಯಕ',
      assistantTitle: 'ಸಮಾಲೋಚನಾ ಸಹಾಯಕ',
      assistantSubtitle: 'ನೇರ ಮತ್ತು ಗೌಪ್ಯ ವಿಚಾರಣೆ',
      step1Welcome: 'ನಮಸ್ಕಾರ! ಆಚಾರ್ಯ ಕೇಶವ ಶಾಸ್ತ್ರಿಗಳ ಸಮಾಲೋಚನಾ ವಿಭಾಗಕ್ಕೆ ಸುಸ್ವಾಗತ. ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ನಿಗದಿಪಡಿಸಲು ನಾನು ನೆರವಾಗುತ್ತೇನೆ.',
      step2NamePrompt: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ತಿಳಿಸಿ:',
      namePlaceholder: 'ನಿಮ್ಮ ಹೆಸರು...',
      step3ContactPrompt: 'ಸಂಪರ್ಕಿಸಲು ನಿಮ್ಮ ಫೋನ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ ನೀಡಿ:',
      contactMethodWhatsApp: 'ವಾಟ್ಸಾಪ್',
      contactMethodPhone: 'ಕರೆ',
      contactMethodEmail: 'ಇಮೇಲ್',
      contactPlaceholder: 'ಸಂಖ್ಯೆ ಅಥವಾ ಇಮೇಲ್...',
      step4CategoryPrompt: 'ಯಾವ ವಿಷಯದ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ ಬಯಸುತ್ತೀರಿ?',
      categories: [
        { id: 'kundali_analysis', label: 'ಜನ್ಮ ಕುಂಡಲಿ ಮತ್ತು ಭವಿಷ್ಯ' },
        { id: 'career_finance', label: 'ಉದ್ಯೋಗ ಮತ್ತು ಆರ್ಥಿಕ ನಿರ್ಧಾರ' },
        { id: 'marriage_compatibility', label: 'ವಿವಾಹ ಹೊಂದಾಣಿಕೆ (ಜಾತಕ ಕೂಟ)' },
        { id: 'spiritual_energy', label: 'ದೃಷ್ಟಿ ದೋಷ / ನಕಾರಾತ್ಮಕ ಶಕ್ತಿ ನಿವಾರಣೆ' },
        { id: 'prashna_shastra', label: 'ತುರ್ತು ಪ್ರಶ್ನೆ (ಪ್ರಶ್ನ ಶಾಸ್ತ್ರ)' }
      ],
      step5ConcernPrompt: 'ನಿಮ್ಮ ಪ್ರಮುಖ ಪ್ರಶ್ನೆ ಅಥವಾ ಸಂದೇಹವನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಬರೆಯಿರಿ:',
      concernPlaceholder: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...',
      step6TimePrompt: 'ಸಮಾಲೋಚನೆಗೆ ನಿಮಗೆ ಯಾವ ಸಮಯ ಅನುಕೂಲಕರ?',
      timeOptions: [
        'ಬೆಳಗ್ಗೆ (09:00 AM – 12:00 PM)',
        'ಮಧ್ಯಾಹ್ನ (02:00 PM – 05:00 PM)',
        'ಸಂಜೆ (05:00 PM – 07:30 PM)',
        'ವಾರಾಂತ್ಯದ ಸಮಯ',
        'ಯಾವುದೇ ಸಮಯ ಸರಿ'
      ],
      step7ConsentPrompt: 'ಸಮಾಲೋಚನೆಗಾಗಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಬಳಸಲು ಸಮ್ಮತಿಸುತ್ತೀರಾ?',
      consentText: 'ಹೌದು, ನನ್ನ ವಿವರಗಳನ್ನು ಗೌಪ್ಯವಾಗಿ ಪರಿಶೀಲಿಸಲು ಸಮ್ಮತಿಸುತ್ತೇನೆ.',
      step8CompleteTitle: 'ವಿವರಗಳು ಸಿದ್ಧವಾಗಿವೆ',
      step8CompleteDesc: 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಕ್ರೋಢೀಕರಿಸಲಾಗಿದೆ. ಈಗ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಬಹುದು ಅಥವಾ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸಲ್ಲಿಸಬಹುದು.',
      actionOpenWhatsApp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮುಂದುವರಿಯಿರಿ',
      actionSubmitOnline: 'ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸಲ್ಲಿಸಿ',
      copiedNotice: 'ವಿವರಗಳನ್ನು ಕಾಪಿ ಮಾಡಲಾಗಿದೆ!',
      fallbackHelp: 'ವಾಟ್ಸಾಪ್ ತೆರೆಯದಿದ್ದರೆ ಚಿಂತಿಸಬೇಡಿ, ನಿಮ್ಮ ವಿವರಗಳು ಆಚಾರ್ಯರ ತಂಡಕ್ಕೆ ಸುರಕ್ಷಿತವಾಗಿ ತಲುಪಿವೆ.'
    },
    form: {
      kicker: 'ವಿಚಾರಣಾ ಫಾರ್ಮ್',
      title: 'ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಗೆ ವಿನಂತಿ',
      subtitle: 'ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ; ನಮ್ಮ ಸಂಯೋಜಕರು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
      nameLabel: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು *',
      namePlaceholder: 'ಉದಾ: ರಮೇಶ್ ಹೆಗಡೆ',
      contactMethodLabel: 'ಸಂಪರ್ಕ ಮಾಧ್ಯಮ',
      contactValueLabel: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ (ಫೋನ್ / ವಾಟ್ಸಾಪ್) *',
      contactValuePlaceholder: '+91 98765 43210',
      categoryLabel: 'ಸಮಾಲೋಚನಾ ವಿಷಯ',
      concernLabel: 'ಸಮಸ್ಯೆ ಅಥವಾ ಪ್ರಶ್ನೆಯ ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ',
      concernPlaceholder: 'ಆಚಾರ್ಯರು ಪರಿಶೀಲಿಸಬೇಕಾದ ಮುಖ್ಯ ಪ್ರಶ್ನೆ...',
      timeLabel: 'ಅನುಕೂಲಕರ ಸಮಯ',
      languageLabel: 'ಸಂಭಾಷಣೆಯ ಭಾಷೆ',
      consentLabel: 'ನನ್ನ ವಿವರಗಳನ್ನು ಗೌಪ್ಯ ಸಮಾಲೋಚನೆಗಾಗಿ ಬಳಸಲು ಸಮ್ಮತಿಸುತ್ತೇನೆ. *',
      submitButton: 'ಸಮಾಲೋಚನೆ ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ',
      submitting: 'ವಿವರಗಳನ್ನು ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
      successTitle: 'ವಿನಂತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ',
      successMessage: 'ಧನ್ಯವಾದಗಳು. ಆಚಾರ್ಯ ಶಾಸ್ತ್ರಿಗಳ ತಂಡವು 1–3 ಗಂಟೆಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.',
      orWhatsApp: 'ತಕ್ಷಣವೇ ಮಾತನಾಡಬೇಕೆ?',
      chatDirectly: 'ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ'
    },
    footer: {
      aboutSnippet: 'ವೈದಿಕ ಮೌಲ್ಯಗಳು, ಸಂಸ್ಕೃತ ಪರಂಪರೆ ಮತ್ತು ನೈತಿಕ ಪ್ರಾಮಾಣಿಕತೆಯಿಂದ ಕೂಡಿದ ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ.',
      quickLinks: 'ಮುಖ್ಯ ಪುಟಗಳು',
      contactInfo: 'ಕಚೇರಿ ವಿಳಾಸ',
      hours: 'ಸಮಯ: ಸೋಮ – ಶನಿ, 08:30 AM – 07:30 PM IST',
      ethicsNotice: 'ನೈತಿಕ ನೀತಿ: ಯಾವುದೇ 100% ಪವಾಡಗಳನ್ನು ಹೇಳಲಾಗುವುದಿಲ್ಲ. ಜ್ಯೋತಿಷ್ಯವು ದಾರಿದೀಪ ಮಾತ್ರ.',
      rightsReserved: 'ಆಚಾರ್ಯ ಕೇಶವ ಶಾಸ್ತ್ರಿ ಜ್ಯೋತಿಷ್ಯ. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      adminAccess: 'ಆಡಳಿತ ಮಂಡಳಿ',
      techSeoReport: 'ತಾಂತ್ರಿಕ ವರದಿ ಮತ್ತು ರೋಡ್‌ಮ್ಯಾಪ್'
    }
  },

  // Hindi (हिंदी)
  hi: {
    nav: {
      home: 'मुखपृष्ठ',
      about: 'आचार्य शास्त्री जी के बारे में',
      services: 'परामर्श सेवाएं',
      process: 'परामर्श प्रक्रिया',
      trust: 'विश्वास एवं नीति संहिता',
      faq: 'प्रश्नोत्तरी',
      contact: 'संपर्क करें',
      consultWhatsApp: 'व्हाट्सएप पर संपर्क करें'
    },
    hero: {
      badge: 'प्राचीन वैदिक ज्योतिष एवं आध्यात्मिक मार्गदर्शन',
      headline: 'जीवन के महत्वपूर्ण निर्णयों के लिए प्रामाणिक वैदिक ज्योतिषीय मार्गदर्शन',
      subheadline: 'पराशर परंपरा पर आधारित विशुद्ध जन्म कुंडली विश्लेषण, प्रश्न शास्त्र एवं नकारात्मक ऊर्जा निवारण। बिना किसी अंधविश्वास या झूठे दावों के सच्चा और गोपनीय परामर्श।',
      ctaWhatsApp: 'व्हाट्सएप पर परामर्श आरंभ करें',
      ctaInquiry: 'निजी परामर्श का अनुरोध करें',
      statLineage: '24+ वर्ष',
      statLineageLabel: 'प्रमाणित वैदिक परंपरा',
      statConsultations: '10,000+',
      statConsultationsLabel: 'सफल व्यक्तिगत परामर्श',
      statEthics: '100% नैतिक',
      statEthicsLabel: 'बिना किसी झूठे वादे के',
      statLanguages: '12 भाषाएं',
      statLanguagesLabel: 'बहुभाषी सहायता उपलब्ध'
    },
    intro: {
      kicker: 'ज्योतिष का मूल तत्व',
      title: 'ज्योति का अर्थ प्रकाश है - मार्गदर्शन, न कि भाग्यवादिता',
      paragraph1: 'वैदिक ज्योतिष "ज्योति" शब्द से उत्पन्न हुआ है, जिसका अर्थ है विवेक का प्रकाश। यह केवल भविष्यवाणियां करना नहीं, बल्कि मनुष्य के संचित कर्मों, ग्रहों की दशाओं और स्वभाव को समझने का विज्ञान है।',
      paragraph2: 'आचार्य केशव शास्त्री जी का मानना है कि एक सच्चे परामर्श का उद्देश्य व्यक्ति को सही समय (मुहूर्त) से अवगत कराना और अपने पुरुषार्थ द्वारा उचित निर्णय लेने में सक्षम बनाना है।',
      quote: '"ग्रह केवल जीवन के मौसम का संकेत देते हैं; आपका धर्म और पुरुषार्थ ही आपकी नौका का संचालन करते हैं।"',
      quoteAuthor: 'आचार्य केशव शास्त्री'
    },
    services: {
      kicker: 'हमारी सेवाएं',
      title: 'शास्त्रीय ज्योतिष एवं आध्यात्मिक परामर्श',
      subtitle: 'प्रत्येक कुंडली का परीक्षण प्राचीन खगोलीय गणित और प्रामाणिक ग्रंथों के आधार पर किया जाता है।',
      viewDetails: 'पद्धति और विवरण देखें',
      closeDetails: 'विवरण बंद करें',
      consultThisService: 'इस विषय पर व्हाट्सएप पर बात करें',
      items: [
        {
          id: 'kundali_analysis',
          title: 'संपूर्ण जन्म कुंडली विश्लेषण एवं जीवन पथ',
          summary: 'लग्न, नवमांश (D-9) एवं चंद्र कुंडली का गहरा अध्ययन, सक्रिय महादशाएं और गोचर प्रभाव।',
          details: '12 भावों, राजयोगों और दोषों का व्यापक विश्लेषण। करियर, परिवार, स्वास्थ्य और जीवन के महत्वपूर्ण मोड़ों पर स्पष्ट मार्गदर्शन।',
          deliverables: '60 मिनट का विस्तृत ऑडियो/वीडियो परामर्श और सात्विक वैदिक उपाय (मंत्र एवं जप)।',
          requirements: 'सटीक जन्म तिथि, जन्म समय और जन्म स्थान।'
        },
        {
          id: 'career_finance',
          title: 'करियर, व्यापार एवं आर्थिक निर्णय (शुभ मुहूर्त)',
          summary: 'करियर परिवर्तन, व्यापारिक साझेदारी, निवेश और शनि-राहु काल में शुभ समय का निर्धारण।',
          details: 'दशमांश (D-10) और दशम भाव का सूक्ष्म परीक्षण कर प्रगति की संभावनाएं एवं गतिरोध दूर करने के उपाय।',
          deliverables: 'आने वाले शुभ-अशुभ समय की विस्तृत समीक्षा और अनुबंध आदि के लिए श्रेष्ठ मुहूर्त।',
          requirements: 'जन्म विवरण एवं आपके करियर से जुड़े विशिष्ट प्रश्न।'
        },
        {
          id: 'marriage_compatibility',
          title: 'विवाह अनुकूलता एवं कुंडली मिलान (गुण मिलान)',
          summary: 'अष्टकूट 36 गुणों के साथ-साथ मानसिक, भावनात्मक और वैवाहिक दीर्घायु का गंभीर परीक्षण।',
          details: 'सप्तम भाव, मांगलिक विचार और नवमांश की सामंजस्यता का परीक्षण ताकि सुखी वैवाहिक जीवन सुनिश्चित हो सके।',
          deliverables: 'विस्तृत मिलान रिपोर्ट और यदि कोई सामान्य दोष हो तो उसके शांतिक उपाय।',
          requirements: 'वर और वधू दोनों के जन्म विवरण।'
        },
        {
          id: 'spiritual_energy',
          title: 'नजर दोष, नकारात्मक ऊर्जा एवं नवग्रह शांति',
          summary: 'पारिवारिक तनाव, नजर दोष एवं नकारात्मक ऊर्जा से मुक्ति के लिए वैदिक शांति विधान।',
          details: 'बिना किसी तांत्रिक भय या अंधविश्वास के, विशुद्ध वैदिक मंत्रों, कवच पाठ और दान-धर्म द्वारा सकारात्मक ऊर्जा की स्थापना।',
          deliverables: 'ग्रह स्थिति का विश्लेषण, नित्य पूजा निर्देश और घरेलू वातावरण की शुद्धि।',
          requirements: 'समस्या का संक्षिप्त विवरण और उपलब्ध जन्म विवरण।'
        },
        {
          id: 'prashna_shastra',
          title: 'प्रश्न शास्त्र (तात्कालिक प्रश्नों का समाधान)',
          summary: 'जब जन्म समय ज्ञात न हो अथवा तत्काल निर्णय लेना हो, तब प्रश्न काल की कुंडली द्वारा सटीक उत्तर।',
          details: 'दक्षिण भारत के विख्यात प्रश्न मार्ग के अनुसार प्रश्न पूछे जाने के क्षण का ग्रह विश्लेषण।',
          deliverables: 'आपके तात्कालिक प्रश्न का सीधा और व्यावहारिक उत्तर।',
          requirements: 'एक स्पष्ट और एकाग्र मन से पूछा गया प्रश्न।'
        }
      ]
    },
    process: {
      kicker: 'कार्यप्रणाली',
      title: 'परामर्श कैसे प्राप्त करें?',
      subtitle: 'एक पारदर्शी और सम्मानजनक प्रक्रिया ताकि परामर्श से पहले संपूर्ण तैयारी हो सके।',
      steps: [
        {
          number: '01',
          title: 'जन्म विवरण साझा करें',
          description: 'अपना नाम, जन्म तिथि, सही समय, स्थान और अपने मुख्य प्रश्न व्हाट्सएप अथवा फॉर्म द्वारा भेजें।'
        },
        {
          number: '02',
          title: 'गणितीय कुंडली निर्माण',
          description: 'आचार्य जी परामर्श से पूर्व आपकी वर्ग कुंडलियों, षडबल और विंशोत्तरी दशा चक्र का गहन गणितीय विश्लेषण करते हैं।'
        },
        {
          number: '03',
          title: 'प्रत्यक्ष परामर्श एवं सात्विक मार्गदर्शन',
          description: 'व्हाट्सएप कॉल अथवा प्रत्यक्ष मिलकर बात करें। बिना किसी दबाव के स्पष्ट एवं शास्त्रीय उपाय प्राप्त करें।'
        }
      ]
    },
    trust: {
      kicker: 'सत्यनिष्ठा का संकल्प',
      title: 'हमारी नैतिक एवं व्यावसायिक आचार संहिता',
      subtitle: 'देश और विदेश के हजारों श्रद्धालु आचार्य शास्त्री जी पर क्यों विश्वास करते हैं?',
      charterPoints: [
        {
          title: '100% चमत्कार का कोई झूठा दावा नहीं',
          description: 'ज्योतिष ग्रहों के प्रभाव को दर्शाता है, लेकिन मनुष्य का कर्म और ईश्वर कृपा सर्वोपरि है। हम कोई जादुई दावा नहीं करते।'
        },
        {
          title: 'भय दिखाकर धन ऐंठने का विरोध',
          description: 'हम कल्पित श्रापों का डर दिखाकर महंगी पूजाएं नहीं थोपते। सरल जप, दान और सत्कर्म ही हमारे उपाय हैं।'
        },
        {
          title: 'पूर्ण गोपनीयता',
          description: 'आपकी जन्म कुंडली और निजी बातें पूर्णतः सुरक्षित एवं गोपनीय रखी जाती हैं।'
        },
        {
          title: 'स्वयं आचार्य जी द्वारा विश्लेषण',
          description: 'प्रत्येक कुंडली का अध्ययन स्वयं आचार्य शास्त्री जी करते हैं, किसी स्वचालित कंप्यूटर सॉफ्टवेयर से नहीं।'
        }
      ],
      disclaimerTitle: 'वैधानिक एवं नैतिक सूचना',
      disclaimerText: 'ज्योतिषीय परामर्श आत्म-चिंतन और आध्यात्मिक मार्गदर्शन के लिए है। यह किसी पेशेवर चिकित्सा या कानूनी सलाह का विकल्प नहीं है।'
    },
    faq: {
      kicker: 'सामान्य प्रश्न',
      title: 'अक्सर पूछे जाने वाले सवाल',
      subtitle: 'परामर्श प्रक्रिया और नियमों के बारे में स्पष्ट जानकारी।',
      items: [
        {
          question: 'कुंडली विश्लेषण के लिए क्या जानकारी चाहिए?',
          answer: 'सटीक जन्म तिथि, जन्म समय (घंटे और मिनट) एवं जन्म स्थान आवश्यक है। यदि समय ज्ञात नहीं है तो प्रश्न शास्त्र उपयोगी होता है।'
        },
        {
          question: 'क्या व्हाट्सएप के माध्यम से दूर से परामर्श संभव है?',
          answer: 'हाँ, हमारे 60% से अधिक ग्राहक व्हाट्सएप वीडियो या वॉयस कॉल द्वारा ही परामर्श लेते हैं। इसमें भी उतनी ही एकाग्रता से मार्गदर्शन दिया जाता है।'
        },
        {
          question: 'नकारात्मक ऊर्जा या नजर दोष पर आपका क्या दृष्टिकोण है?',
          answer: 'हम वैदिक नवग्रह शांति, महामृत्युंजय या गायत्री जैसे सात्विक मंत्रों और मानसिक शुद्धि पर बल देते हैं। किसी अंधविश्वासी अनुष्ठान का समर्थन नहीं करते।'
        },
        {
          question: 'आचार्य जी किन भाषाओं में परामर्श देते हैं?',
          answer: 'आचार्य जी हिंदी, अंग्रेजी, कन्नड़, तमिल और तेलुगु में बातचीत करते हैं।'
        },
        {
          question: 'संदेश भेजने के कितनी देर में उत्तर मिलता है?',
          answer: 'कार्य समय (सुबह 8:30 से शाम 7:30 बजे) के दौरान आमतौर पर 1 से 3 घंटे के भीतर हमारे समन्वयक उत्तर देते हैं।'
        }
      ]
    },
    about: {
      badge: 'ज्योतिषाचार्य परिचय',
      title: 'आचार्य केशव शास्त्री',
      subtitle: 'वैदिक विज्ञान, संस्कृत ग्रंथों के गहन अध्ययन और आध्यात्मिक मार्गदर्शन में 24 वर्षों का समर्पित जीवन।',
      bioTitle: 'परंपरा, साधना एवं दर्शन',
      bioP1: 'कर्नाटक के उडुपी में एक प्रतिष्ठित वैदिक विद्वान परिवार में जन्मे आचार्य केशव शास्त्री जी ने बाल्यकाल से ही संस्कृत और खगोल शास्त्र का अध्ययन किया। तत्पश्चात उन्होंने काशी (वाराणसी) में दीर्घकाल तक प्रकांड विद्वानों के सान्निध्य में पराशर, जैमिनि और प्रश्न मार्ग का गहन अध्ययन किया।',
      bioP2: 'पिछले 24 वर्षों में आचार्य जी ने हजारों व्यक्तियों को जीवन के विभिन्न संकटों में सत्य का मार्ग दिखाया है।',
      bioP3: 'वे कुंडली को नियति का बंधन नहीं, बल्कि विवेक का दर्पण मानते हैं जिससे मनुष्य अपने पुरुषार्थ को सही दिशा दे सके।',
      systemsTitle: 'अध्ययन की गई शास्त्रीय पद्धतियां',
      systemsSubtitle: 'प्रामाणिक भारतीय ज्योतिष परंपराओं पर पूर्ण अधिकार:',
      systems: [
        { name: 'पराशर वैदिक ज्योतिष', description: 'षोडशवर्ग कुंडलियों और विंशोत्तरी दशा का संपूर्ण गणितीय विश्लेषण।' },
        { name: 'दक्षिण भारतीय प्रश्न मार्ग', description: 'विशिष्ट प्रश्नों के तात्कालिक समाधान हेतु अचूक खगोलीय विधि।' },
        { name: 'जैमिनि सूत्र पद्धति', description: 'आत्मकारक और चर दशा द्वारा जीवन के उच्च आध्यात्मिक उद्देश्य की खोज।' },
        { name: 'मुहूर्त एवं वास्तु समन्वय', description: 'शुभ कार्यों के लिए अनुकूल ग्रहों का चयन एवं गृह ऊर्जा संतुलन।' }
      ],
      credentialsTitle: 'प्रमाणित योग्यताएं एवं उपलब्धियां',
      credentials: [
        'इंडियन काउंसिल ऑफ एस्ट्रोलॉजिकल साइंसेज (ICAS) द्वारा "ज्योतिष प्रवीण" एवं "ज्योतिष विशारद" की उपाधि।',
        'संपूर्णानंद संस्कृत विश्वविद्यालय परंपरा से संस्कृत साहित्य आचार्य।',
        '24 वर्षों का अविरल एवं निष्कलंक ज्योतिषीय परामर्श अनुभव।',
        'भारत तथा विदेश के प्रतिष्ठित परिवारों के सम्मानित आध्यात्मिक मार्गदर्शक।'
      ],
      approachTitle: 'परामर्श की कार्यशैली',
      approachP1: 'जब आप आचार्य जी से बात करते हैं, तो आपको एक सच्चे हितैषी और विद्वान का सान्निध्य मिलता है। कोई दिखावा या भय नहीं होता।',
      approachP2: 'हर सलाह का उद्देश्य आपके मन को शांति और जीवन को स्पष्ट दिशा प्रदान करना होता है।',
      testimonialsTitle: 'परामर्श प्राप्त जनों के अनुभव',
      testimonials: [
        {
          quote: 'आचार्य जी का मार्गदर्शन मेरे करियर संकट में मील का पत्थर साबित हुआ। उन्होंने कोई महंगे नग नहीं बेचे, केवल समय का सही ज्ञान दिया।',
          author: 'वेंकटेश मूर्ति',
          context: 'प्रौद्योगिकी निदेशक, बेंगलुरु'
        },
        {
          quote: 'पारिवारिक मिलान में उनकी स्पष्टवादिता और सौम्यता ने हमारे मन से सभी शंकाएं दूर कर दीं।',
          author: 'डॉ. सविता नायर',
          context: 'वरिष्ठ चिकित्सक, कोच्चि'
        }
      ],
      ctaTitle: 'क्या आप अपने जीवन पर चर्चा करना चाहते हैं?',
      ctaSubtitle: 'आचार्य शास्त्री जी की टीम के साथ व्हाट्सएप पर सीधे और गोपनीय रूप से संपर्क करें।',
      ctaButton: 'व्हाट्सएप पर आचार्य जी से बात करें'
    },
    chatbot: {
      launcherLabel: 'परामर्श सहायक',
      assistantTitle: 'ज्योतिष परामर्श सहायक',
      assistantSubtitle: 'सीधा और गोपनीय परामर्श समन्वय',
      step1Welcome: 'नमस्ते! आचार्य केशव शास्त्री जी के परामर्श केंद्र में आपका स्वागत है। मैं आपका समय तय करने में सहायता करूँगा।',
      step2NamePrompt: 'कृपया आपका शुभ नाम बताएं:',
      namePlaceholder: 'आपका नाम...',
      step3ContactPrompt: 'आपसे संपर्क करने हेतु फोन नंबर या व्हाट्सएप दर्ज करें:',
      contactMethodWhatsApp: 'व्हाट्सएप',
      contactMethodPhone: 'कॉल',
      contactMethodEmail: 'ईमेल',
      contactPlaceholder: 'नंबर या ईमेल...',
      step4CategoryPrompt: 'आप किस विषय पर मार्गदर्शन प्राप्त करना चाहते हैं?',
      categories: [
        { id: 'kundali_analysis', label: 'जन्म कुंडली एवं भविष्य' },
        { id: 'career_finance', label: 'करियर एवं व्यापारिक निर्णय' },
        { id: 'marriage_compatibility', label: 'विवाह एवं कुंडली मिलान' },
        { id: 'spiritual_energy', label: 'नकारात्मक ऊर्जा / नजर दोष शांति' },
        { id: 'prashna_shastra', label: 'तात्कालिक प्रश्न (प्रश्न शास्त्र)' }
      ],
      step5ConcernPrompt: 'कृपया अपनी मुख्य समस्या या प्रश्न का संक्षेप में उल्लेख करें:',
      concernPlaceholder: 'अपना मुख्य प्रश्न यहां लिखें...',
      step6TimePrompt: 'परामर्श के लिए कौन सा समय आपके लिए सबसे उपयुक्त रहेगा?',
      timeOptions: [
        'प्रातःकाल (09:00 AM – 12:00 PM)',
        'दोपहर (02:00 PM – 05:00 PM)',
        'सायंकाल (05:00 PM – 07:30 PM)',
        'सप्ताहांत (शनिवार/रविवार)',
        'कोई भी उपलब्ध समय'
      ],
      step7ConsentPrompt: 'क्या आप इस जानकारी को परामर्श हेतु साझा करने की अनुमति देते हैं?',
      consentText: 'हाँ, मैं गोपनीय परामर्श हेतु सहमति देता हूँ।',
      step8CompleteTitle: 'विवरण तैयार है',
      step8CompleteDesc: 'आपकी जानकारी दर्ज कर ली गई है। अब आप सीधे व्हाट्सएप पर बातचीत आरंभ कर सकते हैं।',
      actionOpenWhatsApp: 'व्हाट्सएप पर आगे बढ़ें',
      actionSubmitOnline: 'ऑनलाइन जमा करें',
      copiedNotice: 'विवरण कॉपी हो गया है!',
      fallbackHelp: 'यदि व्हाट्सएप नहीं खुलता है, तो भी आपकी जानकारी आचार्य जी की टीम को सुरक्षित रूप से मिल चुकी है।'
    },
    form: {
      kicker: 'परामर्श प्रपत्र',
      title: 'गोपनीय परामर्श का अनुरोध करें',
      subtitle: 'कृपया निम्नलिखित विवरण भरें; हमारे परामर्श समन्वयक शीघ्र आपसे संपर्क करेंगे।',
      nameLabel: 'आपका पूरा नाम *',
      namePlaceholder: 'उदा. राजेश शर्मा',
      contactMethodLabel: 'पसंदीदा संपर्क माध्यम',
      contactValueLabel: 'फोन / व्हाट्सएप / ईमेल *',
      contactValuePlaceholder: '+91 98765 43210',
      categoryLabel: 'परामर्श श्रेणी',
      concernLabel: 'समस्या अथवा प्रश्न का संक्षिप्त विवरण',
      concernPlaceholder: 'आचार्य जी के समक्ष रखने योग्य प्रश्न लिखें...',
      timeLabel: 'पसंदीदा समय',
      languageLabel: 'बातचीत की भाषा',
      consentLabel: 'मैं आचार्य शास्त्री जी की टीम के साथ इस गोपनीय जानकारी को साझा करने की सहमति देता हूँ। *',
      submitButton: 'परामर्श अनुरोध भेजें',
      submitting: 'जानकारी भेजी जा रही है...',
      successTitle: 'अनुरोध प्राप्त हुआ',
      successMessage: 'धन्यवाद। आचार्य शास्त्री जी की टीम 1 से 3 घंटे के भीतर आपसे संपर्क करेगी।',
      orWhatsApp: 'क्या तुरंत बात करना चाहते हैं?',
      chatDirectly: 'व्हाट्सएप पर तुरंत जुड़ें'
    },
    footer: {
      aboutSnippet: 'वैदिक गरिमा, प्रामाणिक ग्रंथों और दयाभाव पर आधारित पारंपरिक ज्योतिष परामर्श।',
      quickLinks: 'महत्वपूर्ण लिंक',
      contactInfo: 'कार्यालय',
      hours: 'परामर्श समय: सोम – शनि, प्रातः 08:30 से सायं 07:30 IST',
      ethicsNotice: 'नैतिक नियम: किसी प्रकार के 100% चमत्कार का दावा नहीं किया जाता। ज्योतिष जीवन का दार्शनिक मार्गदर्शन है।',
      rightsReserved: 'आचार्य केशव शास्त्री ज्योतिष। सर्वाधिकार सुरक्षित।',
      adminAccess: 'प्रबंधन पोर्टल',
      techSeoReport: 'तकनीकी रिपोर्ट एवं रोडमैप'
    }
  },

  // Tamil (தமிழ்)
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'ஆச்சாரியார் சாஸ்திரிகள் பற்றி',
      services: 'ஜோதிட சேவைகள்',
      process: 'செயல்முறை',
      trust: 'நம்பகத்தன்மை & நெறிமுறைகள்',
      faq: 'கேள்வி பதில்கள்',
      contact: 'தொடர்புக்கு',
      consultWhatsApp: 'வாட்ஸ்அப் மூலம் தொடர்புகொள்ள'
    },
    hero: {
      badge: 'பாரம்பரிய வேத ஜோதிடம் & ஆன்மீக ஆலோசனை',
      headline: 'வாழ்க்கையின் முக்கிய முடிவுகளுக்கு நம்பகமான வேத ஜோதிட வழிகாட்டல்',
      subheadline: 'பராசரர் வழிவந்த துல்லியமான ஜாதக ஆய்வு, பிரஸ்ன சாஸ்திரம் மற்றும் ஆன்மீக ஆற்றல் சமநிலைப்படுத்துதல். மூடநம்பிக்கை அல்லது பொய்யான வாக்குறுதிகள் இல்லாத நேர்மையான ஆலோசனை.',
      ctaWhatsApp: 'வாட்ஸ்அப்பில் ஆலோசிக்கவும்',
      ctaInquiry: 'நேரடி ஆலோசனையை முன்பதிவு செய்ய',
      statLineage: '24+ ஆண்டுகள்',
      statLineageLabel: 'வேத பாரம்பரியம்',
      statConsultations: '10,000+',
      statConsultationsLabel: 'நிறைவேற்றப்பட்ட ஆலோசனைகள்',
      statEthics: '100% நேர்மை',
      statEthicsLabel: 'பொய்யான வாக்குறுதிகள் இல்லை',
      statLanguages: '12 மொழிகள்',
      statLanguagesLabel: 'மொழிகளில் ஆதரவு'
    },
    intro: {
      kicker: 'ஜோதிடத்தின் தத்துவம்',
      title: 'ஜோதிடம் என்பது வெளிச்சம் — விதியின் சிறையல்ல',
      paragraph1: 'வேத ஜோதிடம் "ஜோதி" என்ற தெய்வீக வெளிச்சத்திலிருந்து உருவானது. இது வெறுமனே எதிர்காலம் கணிப்பதல்ல, மாறாக ஒருவரது கர்ம வினைகள், கிரக தசா காலங்கள் மற்றும் வாழ்வியல் பாதையை தெளிவுபடுத்தும் நல்வழிகாட்டல்.',
      paragraph2: 'ஆச்சார்ய கேசவ சாஸ்திரிகள் ஒவ்வொருவரும் தமது சொந்த முயற்சியாலும் (புருஷார்த்தம்) தர்மத்தாலும் சரியான முடிவுகளை எடுக்க உதவுகிறார்.',
      quote: '"கிரகங்கள் வாழ்வின் வானிலையைக் காட்டுகின்றன; உங்களின் தர்மமும் முயற்சியுமே வாழ்வை வழிநடத்துகிறது."',
      quoteAuthor: 'ஆச்சார்ய கேசவ சாஸ்திரிகள்'
    },
    services: {
      kicker: 'சேவை விவரங்கள்',
      title: 'சிறப்பு வேத ஜோதிட ஆலோசனைகள்',
      subtitle: 'ஒவ்வொரு ஜாதகமும் பாரம்பரிய சாஸ்திர முறைப்படி கணித ரீதியாக ஆராயப்படுகிறது.',
      viewDetails: 'முழு விவரங்களை பார்க்க',
      closeDetails: 'மூடவும்',
      consultThisService: 'இதைப்பற்றி வாட்ஸ்அப்பில் பேச',
      items: [
        {
          id: 'kundali_analysis',
          title: 'முழுமையான ஜாதக கணிப்பு & வாழ்க்கை பாதை',
          summary: 'லக்னம், நவாம்சம் (D-9) மற்றும் சந்திர லக்னம், தசா புக்திகளின் ஆழ்ந்த ஆய்வு.',
          details: '12 பாவங்கள், ராஜயோகங்கள் மற்றும் தோஷங்களின் பரிசீலனை. தொழில், குடும்பம், ஆரோக்கியம் ஆகியவற்றில் தெளிவான பார்வை.',
          deliverables: '60 நிமிட விரிவான ஆடியோ/வீடியோ உரையாடல் மற்றும் எளிய சாத்விக பரிகாரங்கள்.',
          requirements: 'துல்லியமான பிறந்த தேதி, நேரம் மற்றும் ஊர்.'
        },
        {
          id: 'career_finance',
          title: 'தொழில், வியாபாரம் மற்றும் நிதி முடிவுகள் (சுப முகூர்த்தம்)',
          summary: 'தொழில் மாற்றம், புதிய வியாபாரம் மற்றும் சனி/ராகு காலங்களில் மேற்கொள்ள வேண்டிய உத்திகள்.',
          details: 'தசமாம்சம் (D-10) ஆய்வு மூலம் உகந்த தொழில் துறை மற்றும் வெற்றிக்கான காலக்கட்டங்கள் கணிப்பு.',
          deliverables: 'எதிர்வரும் சாதகமான காலங்களின் பட்டியல் மற்றும் ஒப்பந்தங்களுக்கான சுப முகூர்த்தம்.',
          requirements: 'பிறந்த குறிப்புகள் மற்றும் உங்கள் தொழில் சார்ந்த முக்கிய கேள்விகள்.'
        },
        {
          id: 'marriage_compatibility',
          title: 'திருமண பொருத்தம் (ஜாதகப் பொருத்தம் & நவாம்சம்)',
          summary: '36 அஷ்டகூட பொருத்தம் மட்டுமன்றி மன மற்றும் கிரக இணக்கத்தின் ஆழ்ந்த பரிசீலனை.',
          details: 'ஏழாம் பாவம், செவ்வாய் தோஷம் மற்றும் நீண்ட தம்பதி ஒற்றுமைக்கான கிரக அமைப்புகள் ஆய்வு.',
          deliverables: 'தெளிவான திருமண பொருத்த அறிக்கை மற்றும் பரிகார ஆலோசனைகள்.',
          requirements: 'மணமகன், மணமகள் இருவரின் பிறந்த விவரங்கள்.'
        },
        {
          id: 'spiritual_energy',
          title: 'கண் திருஷ்டி, எதிர்மறை ஆற்றல் நீக்கம் & நவகிரக சாந்தி',
          summary: 'குடும்ப அமைதியின்மை மற்றும் கண் திருஷ்டி நீங்க சாத்விக வேத வழிபாடுகள்.',
          details: 'பயமுறுத்தும் மாந்திரீக முறைகள் இன்றி, வேத மந்திரங்கள், கவசங்கள் மற்றும் தான தர்மங்கள் மூலம் நிம்மதி பெறுதல்.',
          deliverables: 'கிரக பாதிப்பு விளக்கம், நித்ய பூஜை மந்திரங்கள் மற்றும் இல்ல சுத்தி முறைகள்.',
          requirements: 'பிரச்சனையின் சுருக்கம் மற்றும் பிறந்த விவரங்கள்.'
        },
        {
          id: 'prashna_shastra',
          title: 'பிரஸ்ன சாஸ்திரம் (உடனடி கேள்விகளுக்கான துல்லிய தீர்வு)',
          summary: 'பிறந்த நேரம் தெரியாத போது அல்லது அவசர முடிவுகளுக்கு கேள்வி கேட்கும் கணத்தின் ஜாதக கணிப்பு.',
          details: 'தென்னிந்திய பாரம்பரிய பிரஸ்ன மார்க்க முறையின்படி உடனடி வழிகாட்டல்.',
          deliverables: 'உங்கள் உடனடி கேள்விக்கு தீர்க்கமான பதில் மற்றும் முடிவு.',
          requirements: 'மனப்பூர்வமாக கேட்கப்படும் ஒரு முக்கிய கேள்வி.'
        }
      ]
    },
    process: {
      kicker: 'செயல்முறை',
      title: 'ஆலோசனையை பெறுவது எப்படி?',
      subtitle: 'நேரடியான, கண்ணியமான மற்றும் வெளிப்படையான 3 படிகள்.',
      steps: [
        {
          number: '01',
          title: 'பிறந்த விவரங்களை பகிரவும்',
          description: 'உங்கள் பெயர், பிறந்த தேதி, நேரம், ஊர் மற்றும் கேள்விகளை வாட்ஸ்அப் அல்லது படிவம் மூலம் அனுப்பவும்.'
        },
        {
          number: '02',
          title: 'கணித ஜாதக கணிப்பு',
          description: 'ஆச்சார்யார் உங்கள் வர்க்க சக்கரங்கள் மற்றும் தசா புக்திகளை ஆழமாக ஆராய்கிறார்.'
        },
        {
          number: '03',
          title: 'நேரடி உரையாடல் & நல்வழி',
          description: 'வாட்ஸ்அப் அழைப்பு மூலம் நேரடியாக உரையாடி, தெளிவான ஆலோசனையையும் எளிய பரிகாரங்களையும் பெறவும்.'
        }
      ]
    },
    trust: {
      kicker: 'நம்பகத்தன்மை வாக்குறுதி',
      title: 'எங்கள் நெறிமுறை சாசனம்',
      subtitle: 'ஆயிரக்கணக்கான மக்கள் ஆச்சார்யாரை நம்புவதற்கான காரணங்கள்:',
      charterPoints: [
        {
          title: '100% மாயாஜால வாக்குறுதிகள் இல்லை',
          description: 'ஜோதிடம் கிரக நிலையை உணர்த்துகிறது. மனிதனின் முயற்சியும் இறை அருளுமே உண்மை. நாங்கள் வீண் மாயைகளை கூறுவதில்லை.'
        },
        {
          title: 'பயமுறுத்தி பணம் பறிக்கும் செயல் இல்லை',
          description: 'இல்லாத சாபங்களை கூறி விலை உயர்ந்த சடங்குகளை வற்புறுத்துவதில்லை. எளிய பிரார்தனைகளே சிறந்த பரிகாரம்.'
        },
        {
          title: 'முழுமையான ரகசியத்தன்மை',
          description: 'உங்கள் ஜாதக தகவல்களும் ஆலோசனைகளும் மிக உயர்ந்த ரகசியமாக பாதுகாக்கப்படுகின்றன.'
        },
        {
          title: 'ஆச்சார்யாரே நேரடியாக பார்க்கிறார்',
          description: 'எந்த தானியங்கி கணினி செயலிகளுக்கும் விடாமல் ஆச்சார்யாரே சுயமாக ஆராய்கிறார்.'
        }
      ],
      disclaimerTitle: 'சட்ட மற்றும் நெறிமுறை அறிவிப்பு',
      disclaimerText: 'ஜோதிட ஆலோசனைகள் ஆன்மீக வழிகாட்டலுக்கு மட்டுமே. இவை மருத்துவ அல்லது சட்ட ஆலோசனைகளுக்கு மாற்றாகாது.'
    },
    faq: {
      kicker: 'பொதுவான கேள்விகள்',
      title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      subtitle: 'ஆலோசனை செயல்முறைகள் பற்றிய தெளிவான பதில்கள்.',
      items: [
        {
          question: 'ஜாதகம் பார்க்க என்ன விவரங்கள் தேவை?',
          answer: 'சரியான பிறந்த தேதி, பிறந்த நேரம் மற்றும் பிறந்த ஊர் தேவை. நேரம் தெரியாவிட்டால் பிரஸ்ன சாஸ்திரம் மூலம் பார்க்கலாம்.'
        },
        {
          question: 'வாட்ஸ்அப் மூலமாக ஆலோசனை பெற முடியுமா?',
          answer: 'ஆம். எங்களது 60% மேற்பட்ட வாடிக்கையாளர்கள் வாட்ஸ்அப் வீடியோ அல்லது ஆடியோ அழைப்பு மூலமாகவே முழு திருப்தியுடன் ஆலோசனை பெறுகின்றனர்.'
        },
        {
          question: 'கண் திருஷ்டி மற்றும் எதிர்மறை சக்திக்கு என்ன பரிகாரம்?',
          answer: 'வேத நவகிரக சாந்தி, காயத்ரி அல்லது சாத்விக மந்திர ஜபம் மற்றும் தான தர்மங்கள் மூலமே நல்வழி காட்டுகிறோம்.'
        },
        {
          question: 'ஆச்சார்யார் எந்தெந்த மொழிகளில் பேசுகிறார்?',
          answer: 'ஆச்சார்யார் தமிழ், ஆங்கிலம், கன்னடம், ஹிந்தி மற்றும் தெலுங்கில் பேசுகிறார்.'
        },
        {
          question: 'செய்தி அனுப்பிய எவ்வளவு நேரத்தில் பதில் கிடைக்கும்?',
          answer: 'காலை 8:30 முதல் இரவு 7:30 மணி வரை அனுப்பப்படும் செய்திகளுக்கு 1 முதல் 3 மணி நேரத்திற்குள் பதில் வழங்கப்படும்.'
        }
      ]
    },
    about: {
      badge: 'ஜோதிட மாமேதை',
      title: 'ஆச்சார்ய கேசவ சாஸ்திரிகள்',
      subtitle: 'வேத அறிவியல், சமஸ்கிருத சாஸ்திரங்கள் மற்றும் ஆன்மீக சேவையில் 24 ஆண்டுகளுக்கும் மேலான அனுபவம்.',
      bioTitle: 'பாரம்பரியம், கல்வி மற்றும் தத்துவம்',
      bioP1: 'கர்நாடக மாநிலம் உடுப்பியில் உள்ள புகழ்பெற்ற வேத பண்டித குடும்பத்தில் பிறந்த ஆச்சார்யார், இளமையிலேயே சமஸ்கிருதம் மற்றும் வானியல் கணிதத்தை கற்றறிந்தார். பின் காசியில் (வாரணாசி) பல ஆண்டுகள் தங்கி பராசர, ஜைமினி, பிரஸ்ன சாஸ்திரங்களை முறைப்படி பயின்றார்.',
      bioP2: 'கடந்த 24 ஆண்டுகளில் பல்லாயிரக்கணக்கான மக்களுக்கு தொழில், குடும்பம், திருமண வாழ்வின் தடைகளை கடக்க வழிகாட்டியுள்ளார்.',
      bioP3: 'ஜாதகத்தை விதியின் பூட்டாக கருதாமல், அறிவின் கண்ணாடியாக கொண்டு புருஷார்த்தத்தை வளர்க்க வழிகாட்டுகிறார்.',
      systemsTitle: 'கைதேர்ந்த ஜோதிட சாஸ்திரங்கள்',
      systemsSubtitle: 'ஆழமாக பயின்ற பாரம்பரிய முறைகள்:',
      systems: [
        { name: 'பராசர வேத ஜோதிடம்', description: 'வர்க்க சக்கரங்கள் மற்றும் விம்சோத்தரி தசா அமைப்பின் முழு ஆய்வு.' },
        { name: 'தென்னிந்திய பிரஸ்ன மார்க்கம்', description: 'உடனடி கேள்விகளுக்கு அப்போதைய கிரக நிலை கொண்டு துல்லிய தீர்வு.' },
        { name: 'ஜைமினி சூத்திர முறை', description: 'ஆத்மகாரகர் மூலம் வாழ்வின் ஆன்மீக இலக்கை உணர்தல்.' },
        { name: 'முகூர்த்தம் & வாஸ்து அமைதி', description: 'சுப காரியங்களுக்கான உன்னத கிரக பலன் மற்றும் இல்ல சாந்தி.' }
      ],
      credentialsTitle: 'சான்றிதழ்கள் & அங்கீகாரம்',
      credentials: [
        'இந்திய ஜோதிட அறிவியல் கழகத்தின் (ICAS) "ஜோதிஷ பிரவீணா" மற்றும் "ஜோதிஷ விஷாரதா" பட்டங்கள்.',
        'வாரணாசி சம்பூர்ணானந்த சமஸ்கிருத மரபில் சாகித்ய ஆச்சார்ய பட்டம்.',
        '24 ஆண்டுகள் தொடர்ச்சியான நேர்மையான ஜோதிட சேவை.',
        'இந்தியா மற்றும் வெளிநாடுகளில் உள்ள பல்லாயிர குடும்பங்களின் நம்பிக்கைக்குரிய ஜோதிடர்.'
      ],
      approachTitle: 'எங்களின் அணுகுமுறை',
      approachP1: 'ஆச்சார்யாரிடம் பேசும்போது ஒரு அன்பான ஆசானின் வழிகாட்டலை உணர்வீர்கள். தேவையற்ற சடங்குகளோ, பயமுறுத்தல்களோ இருக்காது.',
      approachP2: 'ஒவ்வொரு ஆலோசனையும் உங்கள் மனதிற்கு அமைதியையும் நல்வழியையும் தரும் வகையில் அமையும்.',
      testimonialsTitle: 'பயனாளர்களின் அனுபவங்கள்',
      testimonials: [
        {
          quote: 'எனது தொழில் சிக்கலின் போது ஆச்சார்யாரின் வழிகாட்டல் பேருதவியாக இருந்தது. தேவையற்ற கற்களை விற்காமல் சரியான காலத்தை சுட்டிக்காட்டினார்.',
          author: 'வெங்கடேஷ் மூர்த்தி',
          context: 'தொழில்நுட்ப இயக்குனர், பெங்களூரு'
        },
        {
          quote: 'திருமண பொருத்தத்தில் அவரின் பொறுமையும் தெளிவும் எங்கள் குடும்பத்திற்கு பெரும் நிம்மதியை அளித்தது.',
          author: 'டாக்டர் சவிதா நாயர்',
          context: 'மருத்துவர், கொச்சி'
        }
      ],
      ctaTitle: 'உங்களின் சந்தேகங்களை தீர்க்க வேண்டுமா?',
      ctaSubtitle: 'வாட்ஸ்அப் மூலம் ஆச்சார்யாரின் குழுவை உடனே ரகசியமாக தொடர்பு கொள்ளுங்கள்.',
      ctaButton: 'வாட்ஸ்அப்பில் ஆச்சார்யாரை தொடர்பு கொள்ள'
    },
    chatbot: {
      launcherLabel: 'ஜோதிட உதவியாளர்',
      assistantTitle: 'ஜோதிட ஆலோசனை உதவியாளர்',
      assistantSubtitle: 'நேரடி மற்றும் ரகசிய தகவல் பதிவு',
      step1Welcome: 'வணக்கம்! ஆச்சார்ய கேசவ சாஸ்திரிகளின் ஆலோசனை மையத்திற்கு வருகை தந்தமைக்கு நன்றி. தங்கள் ஆலோசனையை பதிவு செய்ய நான் உதவுகிறேன்.',
      step2NamePrompt: 'தங்கள் முழு பெயரை தெரிவிக்கவும்:',
      namePlaceholder: 'உங்கள் பெயர்...',
      step3ContactPrompt: 'தங்களை தொடர்புகொள்ள தொலைபேசி எண் அல்லது வாட்ஸ்அப் எண்:',
      contactMethodWhatsApp: 'வாட்ஸ்அப்',
      contactMethodPhone: 'அழைப்பு',
      contactMethodEmail: 'மின்னஞ்சல்',
      contactPlaceholder: 'எண் அல்லது மின்னஞ்சல்...',
      step4CategoryPrompt: 'எந்த துறை சார்ந்த வழிகாட்டல் தேவை?',
      categories: [
        { id: 'kundali_analysis', label: 'ஜாதக கணிப்பு & எதிர்காலம்' },
        { id: 'career_finance', label: 'தொழில் & நிதி முடிவுகள்' },
        { id: 'marriage_compatibility', label: 'திருமண பொருத்தம்' },
        { id: 'spiritual_energy', label: 'கண் திருஷ்டி / எதிர்மறை ஆற்றல் நீக்கம்' },
        { id: 'prashna_shastra', label: 'உடனடி கேள்வி (பிரஸ்னம்)' }
      ],
      step5ConcernPrompt: 'தங்களின் முக்கிய கேள்வி அல்லது பிரச்சனையை சுருக்கமாக குறிப்பிடவும்:',
      concernPlaceholder: 'உங்கள் கேள்வியை இங்கே எழுதவும்...',
      step6TimePrompt: 'ஆலோசனைக்கு உகந்த நேரம் எது?',
      timeOptions: [
        'காலை (09:00 AM – 12:00 PM)',
        'மதியம் (02:00 PM – 05:00 PM)',
        'மாலை (05:00 PM – 07:30 PM)',
        'வார இறுதி',
        'எந்த நேரமும் சம்மதம்'
      ],
      step7ConsentPrompt: 'இந்த தகவல்களை ஆலோசனைக்காக பயன்படுத்த சம்மதிக்கிறீர்களா?',
      consentText: 'ஆம், ரகசிய ஆலோசனைக்காக எனது தகவல்களை பகிர சம்மதிக்கிறேன்.',
      step8CompleteTitle: 'தகவல்கள் தயார்',
      step8CompleteDesc: 'தங்களின் தகவல் பெறப்பட்டது. இப்போது நேரடியாக வாட்ஸ்அப்பில் உரையாடலை தொடரலாம்.',
      actionOpenWhatsApp: 'வாட்ஸ்அப்பில் தொடரவும்',
      actionSubmitOnline: 'படிவத்தை சமர்ப்பிக்கவும்',
      copiedNotice: 'தகவல் நகலெடுக்கப்பட்டது!',
      fallbackHelp: 'வாட்ஸ்அப் திறக்காவிட்டாலும் தங்களின் தகவல் பாதுகாப்பாக பதிவு செய்யப்பட்டுள்ளது.'
    },
    form: {
      kicker: 'விசாரணை படிவம்',
      title: 'ரகசிய ஆலோசனைக்கான முன்பதிவு',
      subtitle: 'கீழே உள்ள விவரங்களை பூர்த்தி செய்யவும்; எங்கள் குழுவினர் விரைவில் தொடர்புகொள்வர்.',
      nameLabel: 'உங்கள் முழு பெயர் *',
      namePlaceholder: 'எ.கா: சுப்பிரமணியன்',
      contactMethodLabel: 'தொடர்பு வழி',
      contactValueLabel: 'தொலைபேசி / வாட்ஸ்அப் / மின்னஞ்சல் *',
      contactValuePlaceholder: '+91 98765 43210',
      categoryLabel: 'ஆலோசனை வகை',
      concernLabel: 'கேள்வி அல்லது பிரச்சனை சுருக்கம்',
      concernPlaceholder: 'ஆச்சார்யார் கவனிக்க வேண்டிய முக்கிய விவரம்...',
      timeLabel: 'உகந்த நேரம்',
      languageLabel: 'உரையாடல் மொழி',
      consentLabel: 'ரகசிய ஆலோசனைக்காக எனது தகவலை பயன்படுத்த சம்மதிக்கிறேன். *',
      submitButton: 'ஆலோசனை கோரிக்கையை அனுப்பவும்',
      submitting: 'பதிவு செய்யப்படுகிறது...',
      successTitle: 'கோரிக்கை பெறப்பட்டது',
      successMessage: 'நன்றி. ஆச்சார்யாரின் குழுவினர் 1-3 மணி நேரத்திற்குள் தங்களை தொடர்புகொள்வர்.',
      orWhatsApp: 'உடனடியாக பேச வேண்டுமா?',
      chatDirectly: 'வாட்ஸ்அப்பில் உடனடியாக இணையவும்'
    },
    footer: {
      aboutSnippet: 'வேத நெறிமுறைகள், சமஸ்கிருத சாஸ்திரங்கள் மற்றும் நேர்மையுடன் கூடிய பாரம்பரிய ஜோதிட ஆலோசனை.',
      quickLinks: 'பக்கங்கள்',
      contactInfo: 'முகவரி',
      hours: 'நேரம்: திங்கள் – சனி, காலை 08:30 முதல் இரவு 07:30 IST',
      ethicsNotice: 'நெறிமுறை அறிவிப்பு: எந்தவித மாயாஜால 100% வாக்குறுதிகளும் அளிக்கப்படுவதில்லை. ஜோதிடம் வழிகாட்டி மட்டுமே.',
      rightsReserved: 'ஆச்சார்ய கேசவ சாஸ்திரிகள் ஜோதிடம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      adminAccess: 'நிர்வாக தளம்',
      techSeoReport: 'தொழில்நுட்ப அறிக்கை'
    }
  },

  // Telugu (తెలుగు)
  te: {
    nav: {
      home: 'హోమ్',
      about: 'ఆచార్య శాస్త్రి గారి గురించి',
      services: 'జ్యోతిష్య సేవలు',
      process: 'ప్రక్రియ',
      trust: 'విశ్వసనీయత & నీతి సంహిత',
      faq: 'ప్రశ్నోత్తరాలు',
      contact: 'సంప్రదించండి',
      consultWhatsApp: 'వాట్సాప్‌లో సంప్రదించండి'
    },
    hero: {
      badge: 'ప్రాచీన వైదిక జ్యోతిష్యం & ఆధ్యాత్మిక మార్గదర్శకత్వం',
      headline: 'జీవితపు కీలక నిర్ణయాలకు నిజాయితీతో కూడిన వైదిక జ్యోతిష్య సలహా',
      subheadline: 'పరాశర సంప్రదాయ జన్మ కుండలి విశ్లేషణ, ప్రశ్న శాస్త్రం మరియు ప్రతికూల శక్తి నివారణ. మూఢనమ్మకాలు లేదా అవాస్తవ వాగ్దానాలు లేని స్పష్టమైన సంప్రదింపులు.',
      ctaWhatsApp: 'వాట్సాప్‌లో మాట్లాడండి',
      ctaInquiry: 'ప్రత్యేక సమయాన్ని కోరండి',
      statLineage: '24+ సంవత్సరాలు',
      statLineageLabel: 'వైదిక గురుకుల సంప్రదాయం',
      statConsultations: '10,000+',
      statConsultationsLabel: 'వ్యక్తిగత సంప్రదింపులు',
      statEthics: '100% నైతికం',
      statEthicsLabel: 'మోసపూరిత హామీలు లేవు',
      statLanguages: '12 భాషలు',
      statLanguagesLabel: 'బహుభాషా సహాయం'
    },
    intro: {
      kicker: 'జ్యోతిష్య తత్త్వం',
      title: 'జ్యోతి అంటే వెలుగు — విధికి బానిసత్వం కాదు',
      paragraph1: 'వైదిక జ్యోతిష్యం "జ్యోతి" అనే పదం నుంచి ఉద్భవించింది, అనగా దివ్య జ్ఞానపు వెలుగు. ఇది కేవలం భవిష్యత్తు చెప్పడం కాదు, మనిషి కర్మానుసార సంకేతాలు మరియు కాలగతులను చూపే మార్గదర్శి.',
      paragraph2: 'ఆచార్య కేశవ శాస్త్రి గారు ప్రతి వ్యక్తి తన ధర్మం మరియు స్వప్రయత్నం (పురుషార్థం) ద్వారా సరైన నిర్ణయాలు తీసుకునేలా చేస్తారు.',
      quote: '"గ్రహాలు వాతావరణాన్ని మాత్రమే సూచిస్తాయి; మీ ధర్మం మరియు ప్రయత్నమే నావను నడుపుతాయి."',
      quoteAuthor: 'ఆచార్య కేశవ శాస్త్రి'
    },
    services: {
      kicker: 'సేవలు',
      title: 'శాస్త్రీయ జ్యోతిష్య & ఆధ్యాత్మిక సంప్రదింపులు',
      subtitle: 'ప్రతి జాతక చక్రాన్ని ప్రాచీన సిద్ధాంతాల ప్రకారం గణితబద్ధంగా పరిశీలిస్తాము.',
      viewDetails: 'విధానం మరియు వివరాలు',
      closeDetails: 'మూసివేయి',
      consultThisService: 'ఈ అంశంపై వాట్సాప్‌లో మాట్లాడండి',
      items: [
        {
          id: 'kundali_analysis',
          title: 'సంపూర్ణ జన్మ కుండలి విశ్లేషణ & జీవిత మార్గం',
          summary: 'లగ్నం, నవాంశ (D-9), చంద్ర లగ్నం మరియు మహర్దశల సమగ్ర అధ్యయనం.',
          details: '12 భావాలు, గ్రహ యోగాలు మరియు దోషాల విశ్లేషణ. ఉద్యోగం, ఆరోగ్యం, ఆర్థిక విషయాలపై నిక్కచ్చైన సమాచారం.',
          deliverables: '60 నిమిషాల సమగ్ర ఆడియో/వీడియో సంభాషణ మరియు సాత్విక పరిహారాలు.',
          requirements: 'ఖచ్చితమైన పుట్టిన తేదీ, సమయం మరియు ప్రదేశం.'
        },
        {
          id: 'career_finance',
          title: 'ఉద్యోగం, వ్యాపారం మరియు ఆర్థిక నిర్ణయాలు (ముహూర్తం)',
          summary: 'ఉద్యోగ మార్పు, వ్యాపార పెట్టుబడులు మరియు శని/రాహు దశలలో అనుకూల సమయ విశ్లేషణ.',
          details: 'దశమాంశ చక్రం ఆధారంగా వృత్తిలో ఎదుగుదల మరియు అనుకూల రంగాల ఎంపిక.',
          deliverables: 'రాబోయే అనుకూల కాలాల జాబితా మరియు వ్యాపారాలకు శుభ ముహూర్తం.',
          requirements: 'పుట్టిన వివరాలు మరియు మీ వృత్తిపరమైన సందేహాలు.'
        },
        {
          id: 'marriage_compatibility',
          title: 'వివాహ పొంతన (గుణ మేళనం & నవాంశ పరిశీలన)',
          summary: '36 గుణాల కలయికతో పాటు మానసిక మరియు వైవాహిక ఆయుర్దాయ గ్రహ పరిశీలన.',
          details: 'సప్తమ భావం, కుజ దోషం మరియు దాంపత్య సుఖానికి సంబంధించిన గ్రహాల విశ్లేషణ.',
          deliverables: 'వివరణాత్మక సరిపోలిక నివేదిక మరియు చిన్నపాటి దోషాలుంటే పరిహారాలు.',
          requirements: 'వధూవరుల ఇద్దరి పుట్టిన వివరాలు.'
        },
        {
          id: 'spiritual_energy',
          title: 'దిష్టి దోషం, ప్రతికూల శక్తి నివారణ & నవగ్రహ శాంతి',
          summary: 'కుటుంబ అశాంతి, దిష్టి మరియు గ్రహ బాధల నివారణకు వేదోక్త శాంతి మార్గాలు.',
          details: 'అనవసర మూఢనమ్మకాలు లేకుండా వేద మంత్రాలు, కవచాలు మరియు దానధర్మాల ద్వారా మానసిక శాంతి.',
          deliverables: 'గ్రహ దోష వివరణ, నిత్య జప మంత్రాలు మరియు గృహ శుద్ధి మార్గాలు.',
          requirements: 'సమస్య వివరాలు మరియు పుట్టిన వివరాలు.'
        },
        {
          id: 'prashna_shastra',
          title: 'ప్రశ్న శాస్త్రం (తక్షణ సందేహాలకు పరిష్కారం)',
          summary: 'పుట్టిన సమయం తెలియనప్పుడు లేదా అత్యవసర నిర్ణయాలకు ఆ క్షణపు గ్రహస్థితి గణనం.',
          details: 'దక్షిణ భారత ప్రాచీన ప్రశ్న మార్గం ఆధారంగా తక్షణ మరియు సూటి సమాధానం.',
          deliverables: 'మీ ప్రశ్నకు స్పష్టమైన మార్గదర్శకత్వం.',
          requirements: 'మనస్ఫూర్తిగా అడిగే ఒక ముఖ్యమైన ప్రశ్న.'
        }
      ]
    },
    process: {
      kicker: 'సంప్రదింపు విధానం',
      title: 'సంప్రదించడం ఎలా?',
      subtitle: 'స్పష్టమైన, పారదర్శకమైన మరియు గౌరవప్రదమైన 3 అంచెలు.',
      steps: [
        {
          number: '01',
          title: 'వివరాలు తెలియజేయండి',
          description: 'మీ పేరు, పుట్టిన తేదీ, సమయం, ఊరు మరియు మీ ప్రశ్నలను వాట్సాప్ లేదా ఫారమ్ ద్వారా పంపండి.'
        },
        {
          number: '02',
          title: 'శాస్త్రీయ జాతక గణనం',
          description: 'ఆచార్యుల వారు సంభాషణకు ముందే మీ వర్గ చక్రాలు, దశా కాలాలను లోతుగా గణిస్తారు.'
        },
        {
          number: '03',
          title: 'ప్రత్యక్ష సంప్రదింపు & పరిహారం',
          description: 'వాట్సాప్ ద్వారా నేరుగా మాట్లాడి, స్పష్టమైన సలహాలు మరియు ఎటువంటి ఒత్తిడి లేని పరిహారాలు పొందండి.'
        }
      ]
    },
    trust: {
      kicker: 'విశ్వసనీయత',
      title: 'మా నైతిక నియమావళి',
      subtitle: 'వేలాది మంది ఆచార్య శాస్త్రి గారిని ఎందుకు విశ్వసిస్తారు?',
      charterPoints: [
        {
          title: '100% అద్భుతాల తప్పుడు హామీలు ఉండవు',
          description: 'జ్యోతిష్యం గ్రహాల దిశను చూపుతుంది. మనుషుల ప్రయత్నం, కర్మలే ప్రధానం. మేము అసత్య వాగ్దానాలు చేయము.'
        },
        {
          title: 'భయం పెట్టి దోచుకునే విధానం లేదు',
          description: 'శాపాల భయం చూపి ఖరీదైన పూజలను రుద్దము. సరళమైన జపం, ప్రార్థన, దానాలే మా మార్గాలు.'
        },
        {
          title: 'పూర్తి గోప్యత',
          description: 'మీ వ్యక్తిగత విషయాలు మరియు జాతక వివరాలు అత్యంత గోప్యంగా ఉంచబడతాయి.'
        },
        {
          title: 'ఆచార్యులే స్వయంగా విశ్లేషిస్తారు',
          description: 'ఏదో కంప్యూటర్ సాఫ్ట్‌వేర్‌పై ఆధారపడకుండా ఆచార్య శాస్త్రి గారే స్వయంగా చూస్తారు.'
        }
      ],
      disclaimerTitle: 'నైతిక & న్యాయపరమైన ప్రకటన',
      disclaimerText: 'జ్యోతిష్య సలహాలు ఆధ్యాత్మిక మార్గదర్శకత్వం కోసం మాత్రమే. ఇవి వైద్య లేదా న్యాయ సలహాలకు ప్రత్యామ్నాయం కావు.'
    },
    faq: {
      kicker: 'సందేహాలు',
      title: 'తరచూ అడిగే ప్రశ్నలు',
      subtitle: 'సంప్రదింపు విధానంపై సందేహాలకు సమాధానాలు.',
      items: [
        {
          question: 'జాతకం చూడటానికి ఏ వివరాలు అవసరం?',
          answer: 'ఖచ్చితమైన పుట్టిన తేదీ, సమయం మరియు ఊరు అవసరం. సమయం తెలియకపోతే ప్రశ్న శాస్త్రం ద్వారా మార్గం పొందవచ్చు.'
        },
        {
          question: 'వాట్సాప్ ద్వారా దూరం నుంచే మాట్లాడవచ్చా?',
          answer: 'తప్పకుండా. మా క్లయింట్లలో 60% పైగా వాట్సాప్ వీడియో లేదా వాయిస్ కాల్ ద్వారానే పూర్తి సంతృప్తితో సలహాలు పొందుతున్నారు.'
        },
        {
          question: 'దిష్టి దోషం లేదా నెగెటివ్ ఎనర్జీకి మీ పరిష్కారం ఏమిటి?',
          answer: 'మేము వేదోక్త నవగ్రహ శాంతి, గాయత్రీ మంత్రం మరియు సాత్విక పద్ధతుల ద్వారా మాత్రమే మార్గం చూపుతాము. చేతబడులు, క్షుద్ర పూజలను ఖండిస్తాము.'
        },
        {
          question: 'ఆచార్యుల వారు ఏ భాషలలో మాట్లాడగలరు?',
          answer: 'ఆచార్యుల వారు తెలుగు, ఇంగ్లీష్, కన్నడ, హిందీ మరియు తమిళంలో సంభాషిస్తారు.'
        },
        {
          question: 'సందేశం పంపిన ఎంత సేపటికి స్పందన వస్తుంది?',
          answer: 'పనివేళల్లో (ఉదయం 8:30 నుండి రాత్రి 7:30 వరకు) సాధారణంగా 1 నుండి 3 గంటలలోపు స్పందిస్తారు.'
        }
      ]
    },
    about: {
      badge: 'జ్యోతిష పండితులు',
      title: 'ఆచార్య కేశవ శాస్త్రి',
      subtitle: 'వైదిక విజ్ఞానం, సంస్కృత శాస్త్రాలు మరియు ఆధ్యాత్మిక సేవలో 24 ఏళ్ల అపార అనుభవం.',
      bioTitle: 'సంప్రదాయం, సాధన మరియు సిద్ధాంతం',
      bioP1: 'కర్ణాటకలోని ఉడుపిలో ప్రసిద్ధ వైదిక కుటుంబంలో జన్మించిన ఆచార్యుల వారు చిన్ననాటి నుంచే సంస్కృతం, ఖగోళ శాస్త్రం అభ్యసించారు. అనంతరం వారణాసిలో (కాశీ) పరాశర, జైమిని, ప్రశ్న శాస్త్రాలను మహా పండితుల వద్ద శ్రద్ధగా నేర్చుకున్నారు.',
      bioP2: 'గత 24 ఏళ్లలో వేలాది మందికి ఉద్యోగ, వివాహ, కుటుంబ సమస్యలలో సరైన దారి చూపించారు.',
      bioP3: 'జాతకాన్ని విధి రాతగా కాక, జ్ఞాన దీపంగా భావించి పురుషార్థం వైపు నడిపిస్తారు.',
      systemsTitle: 'నిష్ణాతులైన జ్యోతిష్య పద్ధతులు',
      systemsSubtitle: 'ప్రాచీన వైదిక పద్ధతులపై సంపూర్ణ పట్టు:',
      systems: [
        { name: 'పరాశర వైదిక జ్యోతిష్యం', description: 'షోడశవర్గ చక్రాలు మరియు వింశోత్తరి దశల సమగ్ర విశ్లేషణ.' },
        { name: 'దక్షిణ భారత ప్రశ్న మార్గం', description: 'తక్షణ ప్రశ్నలకు తాత్కాలిక గ్రహస్థితి ఆధారంగా నిక్కచ్చైన సమాధానం.' },
        { name: 'జైమిని సూత్ర పద్ధతి', description: 'ఆత్మకారకుడు మరియు చర దశల ద్వారా జీవిత అంతరార్ధ దర్శనం.' },
        { name: 'ముహూర్తం & వాస్తు సమన్వయం', description: 'శుభకార్యాలకు గ్రహ బలం మరియు గృహ శాంతి.' }
      ],
      credentialsTitle: 'అధికారిక గుర్తింపులు',
      credentials: [
        'ఇండియన్ కౌన్సిల్ ఆఫ్ ఆస్ట్రలాజికల్ సైన్సెస్ (ICAS) నుండి "జ్యోతిష ప్రవీణ" మరియు "జ్యోతిష విశారద" బిరుదులు.',
        'సంపూర్ణానంద సంస్కృత విశ్వవిద్యాలయ సంప్రదాయం నుండి సాహిత్య ఆచార్య.',
        '24 ఏళ్ల నిరంతర నిజాయితీతో కూడిన సేవ.',
        'భారతదేశం మరియు విదేశాలలోని ప్రముఖ కుటుంబాల నమ్మకమైన సలహాదారు.'
      ],
      approachTitle: 'మా సంప్రదింపుల శైలి',
      approachP1: 'ఆచార్యుల వారితో మాట్లాడేటప్పుడు ఒక ఆత్మీయ గురువుతో మాట్లాడిన అనుభూతి కలుగుతుంది. భయం లేదా వ్యాపార ధోరణి ఉండదు.',
      approachP2: 'ప్రతి సలహా మీ మనస్సుకు ప్రశాంతతను, జీవితానికి స్పష్టతను అందించేలా ఉంటుంది.',
      testimonialsTitle: 'వినియోగదారుల అనుభవాలు',
      testimonials: [
        {
          quote: 'నా వృత్తిపరమైన సమస్యల సమయంలో ఆచార్యుల వారి సలహా ఎంతో మేలు చేసింది. ఖరీదైన రత్నాలు అమ్మకుండా సరైన కాలాన్ని సూచించారు.',
          author: 'వెంకటేష్ మూర్తి',
          context: 'టెక్నాలజీ డైరెక్టర్, బెంగళూరు'
        },
        {
          quote: 'వివాహ పొంతనలో వారి స్పష్టత మరియు సున్నితత్వం మా కుటుంబానికి ఎంతో సాంత్వన కలిగించింది.',
          author: 'డా. సవితా నాయర్',
          context: 'వైద్యురాలు, కొచ్చి'
        }
      ],
      ctaTitle: 'మీ సమస్యలపై చర్చించాలనుకుంటున్నారా?',
      ctaSubtitle: 'ఆచార్య శాస్త్రి గారి బృందంతో వాట్సాప్ ద్వారా వెంటనే గోప్యంగా సంప్రదించండి.',
      ctaButton: 'వాట్సాప్‌లో ఆచార్యులను సంప్రదించండి'
    },
    chatbot: {
      launcherLabel: 'జ్యోతిష్య సహాయకుడు',
      assistantTitle: 'జ్యోతిష్య సహాయకుడు',
      assistantSubtitle: 'నేరుగా గోప్య సంప్రదింపు',
      step1Welcome: 'నమస్కారం! ఆచార్య కేశవ శాస్త్రి గారి సంప్రదింపుల విభాగానికి స్వాగతం. మీ సమయాన్ని కేటాయించడానికి నేను సహాయం చేస్తాను.',
      step2NamePrompt: 'దయచేసి మీ పూర్తి పేరు తెలపండి:',
      namePlaceholder: 'మీ పేరు...',
      step3ContactPrompt: 'మిమ్మల్ని సంప్రదించడానికి ఫోన్ నంబర్ లేదా వాట్సాప్ ఇవ్వండి:',
      contactMethodWhatsApp: 'వాట్సాప్',
      contactMethodPhone: 'కాల్',
      contactMethodEmail: 'ఈమెయిల్',
      contactPlaceholder: 'నంబర్ లేదా ఈమెయిల్...',
      step4CategoryPrompt: 'ఏ విషయమై సలహా కోరుతున్నారు?',
      categories: [
        { id: 'kundali_analysis', label: 'జన్మ కుండలి & భవిష్యత్తు' },
        { id: 'career_finance', label: 'ఉద్యోగం & ఆర్థిక నిర్ణయాలు' },
        { id: 'marriage_compatibility', label: 'వివాహ పొంతన' },
        { id: 'spiritual_energy', label: 'దిష్టి దోషం / నెగెటివ్ ఎనర్జీ నివారణ' },
        { id: 'prashna_shastra', label: 'తక్షణ ప్రశ్న (ప్రశ్న శాస్త్రం)' }
      ],
      step5ConcernPrompt: 'మీ ముఖ్య సమస్య లేదా ప్రశ్నను క్లుప్తంగా రాయండి:',
      concernPlaceholder: 'మీ ప్రశ్నను ఇక్కడ రాయండి...',
      step6TimePrompt: 'మాట్లాడటానికి అనుకూలమైన సమయం ఏది?',
      timeOptions: [
        'ఉదయం (09:00 AM – 12:00 PM)',
        'మధ్యాహ్నం (02:00 PM – 05:00 PM)',
        'సాయంత్రం (05:00 PM – 07:30 PM)',
        'వారాంతం',
        'ఏ సమయమైనా సరే'
      ],
      step7ConsentPrompt: 'ఈ సమాచారాన్ని సంప్రదింపుల కోసం ఉపయోగించడానికి అంగీకరిస్తున్నారా?',
      consentText: 'అవును, నా సమాచారాన్ని గోప్యంగా పరిశీలించడానికి సమ్మతిస్తున్నాను.',
      step8CompleteTitle: 'వివరాలు సిద్ధమయ్యాయి',
      step8CompleteDesc: 'మీ వివరాలు నమోదయ్యాయి. ఇప్పుడు వాట్సాప్‌లో నేరుగా మాట్లాడవచ్చు.',
      actionOpenWhatsApp: 'వాట్సాప్‌లో కొనసాగండి',
      actionSubmitOnline: 'ఆన్‌లైన్‌లో సమర్పించండి',
      copiedNotice: 'సమాచారం కాపీ చేయబడింది!',
      fallbackHelp: 'వాట్సాప్ ఓపెన్ కాకపోయినా మీ వివరాలు ఆచార్యుల బృందానికి సురక్షితంగా చేరాయి.'
    },
    form: {
      kicker: 'సంప్రదింపు ఫారమ్',
      title: 'గోప్య సంప్రదింపు కోసం అభ్యర్థన',
      subtitle: 'క్రింది వివరాలను పూరించండి; మా కోఆర్డినేటర్ త్వరలోనే సంప్రదిస్తారు.',
      nameLabel: 'మీ పూర్తి పేరు *',
      namePlaceholder: 'ఉదా: వెంకట్రావు',
      contactMethodLabel: 'సంప్రదింపు మార్గం',
      contactValueLabel: 'ఫోన్ / వాట్సాప్ / ఈమెయిల్ *',
      contactValuePlaceholder: '+91 98765 43210',
      categoryLabel: 'విభాగం',
      concernLabel: 'సమస్య లేదా ప్రశ్న వివరణ',
      concernPlaceholder: 'ఆచార్యుల వారు పరిశీలించాల్సిన ముఖ్యాంశం...',
      timeLabel: 'అనుకూల సమయం',
      languageLabel: 'సంభాషణ భాష',
      consentLabel: 'గోప్య సంప్రదింపు కోసం నా వివరాలు ఉపయోగించడానికి అంగీకరిస్తున్నాను. *',
      submitButton: 'అభ్యర్థన పంపండి',
      submitting: 'సమర్పిస్తున్నాము...',
      successTitle: 'అభ్యర్థన అందింది',
      successMessage: 'ధన్యవాదాలు. ఆచార్యుల బృందం 1-3 గంటలలో మిమ్మల్ని సంప్రదిస్తుంది.',
      orWhatsApp: 'వెంటనే మాట్లాడాలా?',
      chatDirectly: 'వాట్సాప్‌లో నేరుగా కలవండి'
    },
    footer: {
      aboutSnippet: 'వైదిక విలువలు, ప్రాచీన గ్రంథాలు మరియు నిజాయితీతో కూడిన సంప్రదాయ జ్యోతిష్య సేవలు.',
      quickLinks: 'లింకులు',
      contactInfo: 'చిరునామా',
      hours: 'సమయం: సోమ – శని, ఉదయం 08:30 నుండి రాత్రి 07:30 IST',
      ethicsNotice: 'నైతిక స్పష్టత: 100% పనులవుతాయనే తప్పుడు వాగ్దానాలు చేయబడవు. జ్యోతిష్యం దారి చూపే మార్గదర్శి మాత్రమే.',
      rightsReserved: 'ఆచార్య కేశవ శాస్త్రి జ్యోతిష్యం. సర్వహక్కులు ప్రత్యేకించబడినవి.',
      adminAccess: 'నిర్వహణ విభాగం',
      techSeoReport: 'టెక్నికల్ రిపోర్ట్'
    }
  },

  // Malayalam (മലയാളം)
  ml: {
    nav: {
      home: 'ഹോം',
      about: 'ആചാര്യ ശാസ്ത്രിയെക്കുറിച്ച്',
      services: 'ജ്യോതിഷ സേവനങ്ങൾ',
      process: 'പ്രക്രിയ',
      trust: 'വിശ്വാസ്യത & ധാർമ്മികത',
      faq: 'ചോദ്യോത്തരങ്ങൾ',
      contact: 'ബന്ധപ്പെടുക',
      consultWhatsApp: 'വാട്സ്ആപ്പിൽ സംസാരിക്കാം'
    },
    hero: {
      badge: 'വേദ ജ്യോതിഷവും ആത്മീയ മാർഗ്ഗദർശനവും',
      headline: 'ജീവിതത്തിലെ നിർണായക തീരുമാനങ്ങൾക്ക് വിശ്വസനീയമായ വേദ ജ്യോതിഷം',
      subheadline: 'പരാശര പാരമ്പര്യ ജാതക വിശകലനം, പ്രശ്ന ചിന്ത, ദൃഷ്ടി ദോഷ പരിഹാരം. അന്ധവിശ്വാസങ്ങളോ വ്യാജ വാഗ്ദാനങ്ങളോ ഇല്ലാത്ത ആധികാരികമായ ജ്യോതിഷ നിർദ്ദേശങ്ങൾ.',
      ctaWhatsApp: 'വാട്സ്ആപ്പിൽ സംഭാഷണം തുടങ്ങൂ',
      ctaInquiry: 'കൂടിക്കാഴ്ചക്ക് സമയം നിശ്ചയിക്കൂ',
      statLineage: '24+ വർഷം',
      statLineageLabel: 'വേദ ഗുരുകുല പാരമ്പര്യം',
      statConsultations: '10,000+',
      statConsultationsLabel: 'വ്യക്തിഗത ആലോചനകൾ',
      statEthics: '100% ധാർമ്മികം',
      statEthicsLabel: 'വ്യാജ അവകാശവാദങ്ങളില്ല',
      statLanguages: '12 ഭാഷകൾ',
      statLanguagesLabel: 'വിവിധ ഭാഷകളിൽ പിന്തുണ'
    },
    intro: {
      kicker: 'ജ്യോതിഷ ദർശനം',
      title: 'ജ്യോതി എന്നാൽ പ്രകാശം — വിധിയുടെ അടിമത്തമല്ല',
      paragraph1: 'വേദ ജ്യോതിഷം വിവേകത്തിന്റെ ദിവ്യപ്രകാശമാണ്. ഇത് കേവലം ഭാഗ്യപരീക്ഷണമല്ല, കർമ്മഗതികളെയും ദശാകാലങ്ങളെയും അറിഞ്ഞ് സ്വയം മുന്നേറാനുള്ള ദീപമാണ്.',
      paragraph2: 'ആചാര്യ കേശവ ശാസ്ത്രി ഓരോ വ്യക്തിക്കും അവരുടെ ധർമ്മവും പുരുഷാർത്ഥവും തിരിച്ചറിഞ്ഞ് ജീവിക്കാൻ പ്രാപ്തമാക്കുന്നു.',
      quote: '"ഗ്രഹങ്ങൾ ജീവിത കാലാവസ്ഥയെ സൂചിപ്പിക്കുന്നു; നിങ്ങളുടെ കർമ്മമാണ് ജീവിത നൗകയെ തുഴയുന്നത്."',
      quoteAuthor: 'ആചാര്യ കേശവ ശാസ്ത്രി'
    },
    services: {
      kicker: 'സേവനങ്ങൾ',
      title: 'ആധികാരിക ജ്യോതിഷ & ആത്മീയ സേവനങ്ങൾ',
      subtitle: 'ഓരോ ജാതകവും പ്രാചീന തത്വങ്ങൾക്കനുസരിച്ച് ഗണിതപരമായി പരിശോധിക്കുന്നു.',
      viewDetails: 'വിശദാംശങ്ങൾ കാണുക',
      closeDetails: 'അടയ്ക്കുക',
      consultThisService: 'ഇതിനെക്കുറിച്ച് വാട്സ്ആപ്പിൽ സംസാരിക്കാം',
      items: [
        {
          id: 'kundali_analysis',
          title: 'സമ്പൂർണ്ണ ജാതക നിരൂപണവും ജീവിത വഴികളും',
          summary: 'ലഗ്നം, നവാംശം (D-9), ചന്ദ്ര ലഗ്നം, മഹാദശകൾ എന്നിവയുടെ സൂക്ഷ്മ പരിശോധന.',
          details: '12 ഭാവങ്ങൾ, രാജയോഗങ്ങൾ, ദോഷങ്ങൾ എന്നിവ വിലയിരുത്തി തൊഴിൽ, ആരോഗ്യം, സാമ്പത്തികം എന്നിവയിൽ വ്യക്തത നൽകുന്നു.',
          deliverables: '60 മിനിറ്റ് വോയ്‌സ്/വീഡിയോ സംവാദം, സാത്വിക പരിഹാരങ്ങൾ.',
          requirements: 'കൃത്യമായ ജനന തീയതി, സമയം, സ്ഥലം.'
        },
        {
          id: 'career_finance',
          title: 'തൊഴിൽ, ബിസിനസ്സ്, സാമ്പത്തിക തീരുമാനങ്ങൾ (മുഹൂർത്തം)',
          summary: 'തൊഴിൽ മാറ്റം, ബിസിനസ്സ് നിക്ഷേപം എന്നിവയ്ക്ക് അനുയോജ്യമായ സമയ നിർണയം.',
          details: 'ദശമാംശ ചക്രം പരിശോധിച്ച് വിജയകരമായ പ്രവർത്തന മേഖലകളും മുന്നേറ്റത്തിനുള്ള കാലവും നിർദ്ദേശിക്കുന്നു.',
          deliverables: 'ഭാവി ശുഭകാല നിർണയവും കരാറുകൾ ഒപ്പിടാൻ ശുഭ മുഹൂർത്തവും.',
          requirements: 'ജനന വിവരങ്ങളും തൊഴിൽ സംബന്ധമായ ചോദ്യങ്ങളും.'
        },
        {
          id: 'marriage_compatibility',
          title: 'വിവാഹ പൊരുത്തം (ജാതക പൊരുത്തവും നവാംശ ചിന്തയും)',
          summary: 'അഷ്ടകൂട പൊരുത്തത്തോടൊപ്പം ദാമ്പത്യ ഐക്യവും ദീർഘായുസ്സും പരിശോധിക്കുന്നു.',
          details: 'ഏഴാം ഭാവം, ചൊവ്വാദോഷം, പരസ്പര പൊരുത്തം എന്നിവയുടെ സമഗ്ര വിലയിരുത്തൽ.',
          deliverables: 'വിശദമായ പൊരുത്ത റിപ്പോർട്ടും സാത്വിക ശാന്തി മാർഗ്ഗങ്ങളും.',
          requirements: 'വരന്റെയും വധുവിന്റെയും ജനന വിവരങ്ങൾ.'
        },
        {
          id: 'spiritual_energy',
          title: 'കണ്ണേറ്, ദൃഷ്ടി ദോഷം, നവഗ്രഹ ശാന്തി',
          summary: 'കുടുംബ സമാധാനക്കേടുകൾക്കും നെഗറ്റീവ് ഊർജ്ജത്തിനും ശാസ്ത്രീയ പരിഹാരങ്ങൾ.',
          details: 'ഭയം ജനിപ്പിക്കുന്ന മാന്ത്രിക കർമ്മങ്ങളില്ലാതെ, വേദ മന്ത്രങ്ങൾ, കവചങ്ങൾ, ദാനങ്ങൾ വഴി ശാന്തി.',
          deliverables: 'ഗ്രഹ സ്വാധീന വിവരണം, നിത്യ പ്രാർത്ഥനാ ക്രമങ്ങൾ.',
          requirements: 'പ്രശ്നത്തിന്റെ ചുരുക്കവും ജനന വിവരങ്ങളും.'
        },
        {
          id: 'prashna_shastra',
          title: 'പ്രശ്ന ശാസ്ത്രം (പെട്ടെന്നുള്ള തീരുമാനങ്ങൾക്ക്)',
          summary: 'ജനന സമയം ലഭ്യമല്ലാത്തപ്പോഴോ അടിയന്തര സാഹചര്യങ്ങളിലോ ചോദ്യ സമയത്തെ ഗ്രഹനില വിശകലനം.',
          details: 'ദക്ഷിണേന്ത്യൻ പ്രശ്ന മാർഗ്ഗ പ്രകാരം തൽക്ഷണവും സൂക്ഷ്മവുമായ ഉത്തരം.',
          deliverables: 'അടിയന്തര ചോദ്യത്തിന് കൃത്യമായ ഉപദേശം.',
          requirements: 'ആത്മാർത്ഥമായ ഒരൊറ്റ ചോദ്യം.'
        }
      ]
    },
    process: {
      kicker: 'നടപടിക്രമം',
      title: 'ആലോചന എങ്ങനെ സാധ്യമാക്കാം?',
      subtitle: 'ആദരവും സുതാര്യതയും ഉറപ്പുവരുത്തുന്ന 3 ലളിതമായ ഘട്ടങ്ങൾ.',
      steps: [
        {
          number: '01',
          title: 'വിവരങ്ങൾ പങ്കുവെക്കൂ',
          description: 'പേര്, ജനന വിവരങ്ങൾ, ചോദ്യങ്ങൾ എന്നിവ വാട്സ്ആപ്പിലോ ഫോമിലോ നൽകുക.'
        },
        {
          number: '02',
          title: 'ഗണിത ജാതക നിർമ്മിതി',
          description: 'ആചാര്യൻ സംഭാഷണത്തിന് മുൻപായി ഗ്രഹനിലകളും ദശാചക്രങ്ങളും വിശദമായി കണക്കുകൂട്ടുന്നു.'
        },
        {
          number: '03',
          title: 'നേരിട്ടുള്ള സംഭാഷണം & മാർഗ്ഗദർശനം',
          description: 'വാട്സ്ആപ്പ് വഴി നേരിട്ട് സംസാരിച്ച് വ്യക്തമായ മാർഗ്ഗനിർദ്ദേശങ്ങളും സാത്വിക പരിഹാരങ്ങളും നേടുക.'
        }
      ]
    },
    trust: {
      kicker: 'ധാർമ്മിക പ്രതിബദ്ധത',
      title: 'ഞങ്ങളുടെ ധാർമ്മിക ചട്ടം',
      subtitle: 'എന്തുകൊണ്ട് ജനങ്ങൾ ആചാര്യ ശാസ്ത്രിയെ വിശ്വസിക്കുന്നു?',
      charterPoints: [
        {
          title: '100% അത്ഭുത വാഗ്ദാനങ്ങളില്ല',
          description: 'ജ്യോതിഷം സാധ്യതകളെ സൂചിപ്പിക്കുന്നു. മനുഷ്യന്റെ കർമ്മവും ഈശ്വരാധീനവുമാണ് പ്രധാനം.'
        },
        {
          title: 'ഭയപ്പെടുത്തി ചൂഷണം ചെയ്യുന്നില്ല',
          description: 'ശപിക്കപ്പെട്ടു എന്ന് ഭയപ്പെടുത്തി ചെലവേറിയ പൂജകൾ അടിച്ചേൽപ്പിക്കില്ല. ലളിതമായ പ്രാർത്ഥനകളാണ് ഞങ്ങളുടെ പരിഹാരം.'
        },
        {
          title: 'സമ്പൂർണ്ണ രഹസ്യസ്വഭാവം',
          description: 'നിങ്ങളുടെ വിവരങ്ങളും ആലോചനകളും അതീവ രഹസ്യമായി സൂക്ഷിക്കുന്നു.'
        },
        {
          title: 'ആചാര്യൻ നേരിട്ട് പരിശോധിക്കുന്നു',
          description: 'കമ്പ്യൂട്ടർ സോഫ്റ്റ്‌വെയറുകൾക്ക് വിടാതെ ആചാര്യൻ തന്നെ നേരിട്ട് പഠിക്കുന്നു.'
        }
      ],
      disclaimerTitle: 'നിയമപരമായ അറിയിപ്പ്',
      disclaimerText: 'ജ്യോതിഷ ആലോചനകൾ ആത്മീയ മാർഗ്ഗദർശനത്തിന് മാത്രമുള്ളതാണ്. ഇത് വൈദ്യ, നിയമോപദേശങ്ങൾക്ക് പകരമല്ല.'
    },
    faq: {
      kicker: 'സംശയങ്ങൾ',
      title: 'പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ',
      subtitle: 'ആലോചനാ രീതികളെക്കുറിച്ചുള്ള മറുപടികൾ.',
      items: [
        {
          question: 'ജാതകം നോക്കാൻ എന്തെല്ലാം വിവരങ്ങൾ വേണം?',
          answer: 'കൃത്യമായ ജനന തീയതി, സമയം, സ്ഥലം എന്നിവ വേണം. സമയമില്ലെങ്കിൽ പ്രശ്ന ശാസ്ത്രം ഉപയോഗിക്കാം.'
        },
        {
          question: 'വാട്സ്ആപ്പ് വഴി വിദൂരമായി സംസാരിക്കാൻ സാധിക്കുമോ?',
          answer: 'തീർച്ചയായും. ഞങ്ങളുടെ 60 ശതമാനത്തിലധികം പേരും വാട്സ്ആപ്പ് വോയ്‌സ്/വീഡിയോ കോൾ വഴിയാണ് സംസാരിക്കുന്നത്.'
        },
        {
          question: 'ദൃഷ്ടി ദോഷങ്ങൾക്കുള്ള നിങ്ങളുടെ സമീപനം എന്താണ്?',
          answer: 'വേദ നവഗ്രഹ ശാന്തി, ഗായത്രി ജപം, മാനസിക ശാന്തി എന്നിവയിലൂടെയാണ് പരിഹാരം നിർദ്ദേശിക്കുന്നത്.'
        },
        {
          question: 'ആചാര്യൻ ഏതെല്ലാം ഭാഷകളിൽ സംസാരിക്കും?',
          answer: 'ഇംഗ്ലീഷ്, മലയാളം (സഹായത്തോടെ), തമിഴ്, തെലുങ്ക്, കന്നഡ, ഹിന്ദി എന്നിവയിൽ സംഭാഷണം സാധ്യമാണ്.'
        },
        {
          question: 'സന്ദേശത്തിന് എത്ര സമയത്തിനകം മറുപടി ലഭിക്കും?',
          answer: 'പ്രവൃത്തി സമയങ്ങളിൽ (രാവിലെ 8:30 മുതൽ വൈകുന്നേരം 7:30 വരെ) 1 മുതൽ 3 മണിക്കൂറിനുള്ളിൽ മറുപടി നൽകും.'
        }
      ]
    },
    about: {
      badge: 'ജ്യോതിഷ പണ്ഡിതൻ',
      title: 'ആചാര്യ കേശവ ശാസ്ത്രി',
      subtitle: 'വേദ വിജ്ഞാനം, സംസ്കൃത ശാസ്ത്രങ്ങൾ, ആത്മീയ സേവനം എന്നിവയിൽ 24 വർഷത്തെ പരിചയം.',
      bioTitle: 'പാരമ്പര്യം, വിദ്യാഭ്യാസം, തത്ത്വം',
      bioP1: 'കർണ്ണാടകയിലെ ഉഡുപ്പിയിൽ പ്രശസ്ത വേദ കുടുംബത്തിൽ ജനിച്ച ആചാര്യൻ ചെറുപ്പത്തിലേ സംസ്കൃതവും ജ്യോതിഷ ഗണിതവും അഭ്യസിച്ചു. പിന്നീട് വാരാണസിയിൽ ദീർഘകാലം താമസിച്ച് പരാശര, ജൈമിനി, പ്രശ്ന ശാസ്ത്രങ്ങളിൽ അഗാധ പാണ്ഡിത്യം നേടി.',
      bioP2: 'കഴിഞ്ഞ 24 വർഷമായി അനേകം കുടുംബങ്ങൾക്ക് ജീവിത പ്രതിസന്ധികളിൽ ആശ്വാസമായി നിലകൊള്ളുന്നു.',
      bioP3: 'ജാതകത്തെ ബന്ധനമായല്ല, മനസ്സിന് വഴികാട്ടുന്ന വെളിച്ചമായാണ് അദ്ദേഹം കാണുന്നത്.',
      systemsTitle: 'അഭ്യസിച്ച ശാസ്ത്ര ശാഖകൾ',
      systemsSubtitle: 'പരമ്പരാഗത വേദ ജ്യോതിഷ രീതികൾ:',
      systems: [
        { name: 'പരാശര വേദ ജ്യോതിഷം', description: 'ഷോഡശവർഗ്ഗ ചക്രങ്ങളും വിംശോത്തരി ദശാപദ്ധതിയും.' },
        { name: 'ദക്ഷിണേന്ത്യൻ പ്രശ്ന മാർഗ്ഗം', description: 'ക്ഷണനേരത്തെ ഗ്രഹനില അടിസ്ഥാനമാക്കിയുള്ള വ്യക്തമായ ഉത്തരം.' },
        { name: 'ജൈമിനി സൂത്ര പാരമ്പര്യം', description: 'ആത്മകാരക ചിന്തയിലൂടെ ആത്മീയ ലക്ഷ്യം കണ്ടെത്തൽ.' },
        { name: 'മുഹൂർത്ത ചിന്ത & വാസ്തു ശാന്തി', description: 'ശുഭകാര്യങ്ങൾക്കുള്ള കാലബലവും ഗൃഹ സമാധാനവും.' }
      ],
      credentialsTitle: 'യോഗ്യതകളും ബഹുമതികളും',
      credentials: [
        'ഇന്ത്യൻ കൗൺസിൽ ഓഫ് ആസ്ട്രോളജിക്കൽ സയൻസസിന്റെ (ICAS) "ജ്യോതിഷ പ്രവീണ", "ജ്യോതിഷ വിശാരദ" പദവികൾ.',
        'സമ്പൂർണാനന്ദ സംസ്കൃത വിശ്വവിദ്യാലയ പാരമ്പര്യത്തിൽ നിന്നുള്ള സാഹിത്യ ആചാര്യ ബിരുദം.',
        '24 വർഷത്തെ വിശ്വസനീയമായ സേവന ചരിത്രം.',
        'ഇന്ത്യയിലും വിദേശത്തുമുള്ള അനേകം പ്രമുഖ കുടുംബങ്ങളുടെ ജ്യോതിഷോപദേഷ്ടാവ്.'
      ],
      approachTitle: 'ഞങ്ങളുടെ സമീപനം',
      approachP1: 'ആചാര്യനുമായി സംസാരിക്കുമ്പോൾ ഒരു ആത്മാർത്ഥ സ്നേഹിതന്റെയും ഗുരുവിന്റെയും സാമീപ്യം അനുഭവപ്പെടും. ഭയപ്പെടുത്തലോ കച്ചവട താല്പര്യങ്ങളോ ഉണ്ടാകില്ല.',
      approachP2: 'നിങ്ങളുടെ മനസ്സിന് സമാധാനവും ജീവിതത്തിന് വെളിച്ചവും നൽകുക എന്നതാണ് മുഖ്യ ലക്ഷ്യം.',
      testimonialsTitle: 'അനുഭവ സാക്ഷ്യങ്ങൾ',
      testimonials: [
        {
          quote: 'എന്റെ ജോലിയിലെ വലിയ പ്രതിസന്ധി ഘട്ടത്തിൽ ആചാര്യന്റെ ഉപദേശം വളരെ തുണയായി. വിലകൂടിയ രത്നങ്ങളൊന്നും നിർദ്ദേശിക്കാതെ സമയം ചൂണ്ടിക്കാട്ടി.',
          author: 'വെങ്കിടേഷ് മൂർത്തി',
          context: 'ടെക്നോളജി ഡയറക്ടർ, ബാംഗ്ലൂർ'
        },
        {
          quote: 'വിവാഹ പൊരുത്തത്തിൽ അദ്ദേഹത്തിന്റെ ശാന്തമായ സമീപനം ഞങ്ങൾക്ക് വലിയ ആശ്വാസമായിരുന്നു.',
          author: 'ഡോ. സവിതാ നായർ',
          context: 'കൺസൾട്ടന്റ് ഫിസിഷ്യൻ, കൊച്ചി'
        }
      ],
      ctaTitle: 'സംശയങ്ങൾക്ക് വ്യക്തത തേടുന്നുവോ?',
      ctaSubtitle: 'ആചാര്യ ശാസ്ത്രിയുടെ ടീമുമായി വാട്സ്ആപ്പിൽ സുരക്ഷിതമായി ബന്ധപ്പെടൂ.',
      ctaButton: 'വാട്സ്ആപ്പിൽ ആചാര്യനുമായി സംസാരിക്കൂ'
    },
    chatbot: {
      launcherLabel: 'ജ്യോതിഷ സഹായി',
      assistantTitle: 'ജ്യോതിഷ സഹായി',
      assistantSubtitle: 'നേരിട്ടുള്ള സംഭാഷണ രജിസ്ട്രേഷൻ',
      step1Welcome: 'നമസ്കാരം! ആചാര്യ കേശവ ശാസ്ത്രിയുടെ കൺസൾട്ടേഷൻ സെന്ററിലേക്ക് സ്വാഗതം. കൂടിക്കാഴ്ച ക്രമീകരിക്കാൻ ഞാൻ സഹായിക്കാം.',
      step2NamePrompt: 'താങ്കളുടെ പേര് വ്യക്തമാക്കാമോ:',
      namePlaceholder: 'പേര്...',
      step3ContactPrompt: 'ബന്ധപ്പെടാനുള്ള ഫോൺ നമ്പർ അല്ലെങ്കിൽ വാട്സ്ആപ്പ്:',
      contactMethodWhatsApp: 'വാട്സ്ആപ്പ്',
      contactMethodPhone: 'കോൾ',
      contactMethodEmail: 'ഇമെയിൽ',
      contactPlaceholder: 'നമ്പർ / ഇമെയിൽ...',
      step4CategoryPrompt: 'ഏത് വിഷയത്തിലാണ് ഉപദേശം തേടുന്നത്?',
      categories: [
        { id: 'kundali_analysis', label: 'ജാതക നിരൂപണം & ഭാവി' },
        { id: 'career_finance', label: 'തൊഴിൽ & സാമ്പത്തിക തീരുമാനങ്ങൾ' },
        { id: 'marriage_compatibility', label: 'വിവാഹ പൊരുത്തം' },
        { id: 'spiritual_energy', label: 'ദൃഷ്ടി ദോഷം / നെഗറ്റീവ് എനർജി പരിഹാരം' },
        { id: 'prashna_shastra', label: 'പ്രത്യേക ചോദ്യം (പ്രശ്നം)' }
      ],
      step5ConcernPrompt: 'താങ്കളുടെ പ്രധാന ചോദ്യം ചുരുക്കത്തിൽ രേഖപ്പെടുത്തുക:',
      concernPlaceholder: 'ചോദ്യം ഇവിടെ എഴുതുക...',
      step6TimePrompt: 'സംസാരിക്കാൻ സൗകര്യപ്രദമായ സമയം ഏതാണ്?',
      timeOptions: [
        'രാവിലെ (09:00 AM – 12:00 PM)',
        'ഉച്ചയ്ക്ക് (02:00 PM – 05:00 PM)',
        'വൈകുന്നേരം (05:00 PM – 07:30 PM)',
        'വാരാന്ത്യം',
        'ഏത് സമയവും'
      ],
      step7ConsentPrompt: 'ഈ വിവരങ്ങൾ ആലോചനക്കായി പങ്കുവെക്കാൻ സമ്മതിക്കുന്നുണ്ടോ?',
      consentText: 'അതെ, രഹസ്യമായി പരിശോധിക്കാൻ ഞാൻ സമ്മതിക്കുന്നു.',
      step8CompleteTitle: 'വിവരങ്ങൾ തയ്യാറാണ്',
      step8CompleteDesc: 'വിവരങ്ങൾ രേഖപ്പെടുത്തി. ഇപ്പോൾ വാട്സ്ആപ്പിൽ നേരിട്ട് തുടരാവുന്നതാണ്.',
      actionOpenWhatsApp: 'വാട്സ്ആപ്പിൽ തുടരുക',
      actionSubmitOnline: 'ഓൺലൈനായി സമർപ്പിക്കുക',
      copiedNotice: 'വിവരം കോപ്പി ചെയ്തു!',
      fallbackHelp: 'വാട്സ്ആപ്പ് തുറന്നില്ലെങ്കിലും താങ്കളുടെ വിവരം സുരക്ഷിതമായി ലഭിച്ചിട്ടുണ്ട്.'
    },
    form: {
      kicker: 'അന്വേഷണ ഫോം',
      title: 'വ്യക്തിഗത ആലോചനയ്ക്ക് സമയം തേടാം',
      subtitle: 'വിവരങ്ങൾ രേഖപ്പെടുത്തുക; ഞങ്ങളുടെ പ്രതിനിധി ഉടൻ ബന്ധപ്പെടും.',
      nameLabel: 'മുഴുവൻ പേര് *',
      namePlaceholder: 'ഉദാ: വേണുഗോപാൽ',
      contactMethodLabel: 'ആശയവിനിമയ മാർഗ്ഗം',
      contactValueLabel: 'ഫോൺ / വാട്സ്ആപ്പ് / ഇമെയിൽ *',
      contactValuePlaceholder: '+91 98765 43210',
      categoryLabel: 'വിഭാഗം',
      concernLabel: 'ചോദ്യത്തിന്റെ ചുരുക്കം',
      concernPlaceholder: 'ആചാര്യൻ പരിശോധിക്കേണ്ട പ്രധാന വിഷയം...',
      timeLabel: 'അനുയോജ്യമായ സമയം',
      languageLabel: 'സംഭാഷണ ഭാഷ',
      consentLabel: 'രഹസ്യ പരിശോധനയ്ക്കായി എന്റെ വിവരങ്ങൾ നൽകാൻ സമ്മതിക്കുന്നു. *',
      submitButton: 'അപേക്ഷ അയക്കുക',
      submitting: 'സമർപ്പിക്കുന്നു...',
      successTitle: 'വിവരം ലഭിച്ചു',
      successMessage: 'നന്ദി. ആചാര്യന്റെ ടീം 1-3 മണിക്കൂറിനുള്ളിൽ ബന്ധപ്പെടുന്നതാണ്.',
      orWhatsApp: 'ഉടൻ സംസാരിക്കണമോ?',
      chatDirectly: 'വാട്സ്ആപ്പിൽ ഉടൻ ബന്ധപ്പെടാം'
    },
    footer: {
      aboutSnippet: 'വേദ മൂല്യങ്ങളും ആധികാരിക ശാസ്ത്രങ്ങളും കാത്തുസൂക്ഷിക്കുന്ന പരമ്പരാഗത ജ്യോതിഷ കേന്ദ്രം.',
      quickLinks: 'ലിങ്കുകൾ',
      contactInfo: 'വിലാസം',
      hours: 'സമയം: തിങ്കൾ – ശനി, രാവിലെ 08:30 മുതൽ വൈകുന്നേരം 07:30 IST',
      ethicsNotice: 'ധാർമ്മിക നയം: അത്ഭുത രോഗശാന്തികളോ 100% വ്യാജ വാഗ്ദാനങ്ങളോ നൽകുന്നില്ല.',
      rightsReserved: 'ആചാര്യ കേശവ ശാസ്ത്രി ജ്യോതിഷം. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
      adminAccess: 'അഡ്മിൻ പോർട്ടൽ',
      techSeoReport: 'ടെക്നിക്കൽ റിപ്പോർട്ട്'
    }
  },

  // Marathi (मराठी)
  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      about: 'आचार्य शास्त्रींविषयी',
      services: 'ज्योतिष सेवा',
      process: 'पद्धत',
      trust: 'विश्वास आणि आचारसंहिता',
      faq: 'प्रश्नोत्तरे',
      contact: 'संपर्क',
      consultWhatsApp: 'व्हॉट्सॲपवर संपर्क साधा'
    },
    hero: {
      badge: 'प्राचीन वैदिक ज्योतिष आणि आध्यात्मिक मार्गदर्शन',
      headline: 'जीवनातील महत्त्वपूर्ण निर्णयांसाठी प्रामाणिक वैदिक ज्योतिषीय मार्गदर्शन',
      subheadline: 'पराशर परंपरेवर आधारित अचूक जन्मपत्रिका विश्लेषण, प्रश्न शास्त्र आणि नकारात्मक ऊर्जा निवारण. कोणत्याही अंधश्रद्धेशिवाय किंवा खोट्या दाव्यांशिवाय गोपनीय सल्ला.',
      ctaWhatsApp: 'व्हॉट्सॲपवर चर्चा सुरू करा',
      ctaInquiry: 'वैयक्तिक भेटीची वेळ निश्चित करा',
      statLineage: '24+ वर्षे',
      statLineageLabel: 'प्रमाणित वैदिक परंपरा',
      statConsultations: '10,000+',
      statConsultationsLabel: 'यशस्वी वैयक्तिक मार्गदर्शन',
      statEthics: '100% नैतिक',
      statEthicsLabel: 'खोट्या हमींचा अभाव',
      statLanguages: '12 भाषा',
      statLanguagesLabel: 'बहुभाषिक समर्थन'
    },
    intro: {
      kicker: 'ज्योतिषाचे मूळ तत्त्व',
      title: 'ज्योति म्हणजे प्रकाश — नशिबाची गुलामगिरी नव्हे',
      paragraph1: 'वैदिक ज्योतिष हे विवेक आणि ज्ञानाचा दिव्य प्रकाश आहे. हे केवळ भविष्यकथन नसून माणसाच्या कर्मानुसार योग्य दिशा दर्शवणारे शास्त्र आहे.',
      paragraph2: 'आचार्य केशव शास्त्री प्रत्येक व्यक्तीला स्वतःचे सामर्थ्य आणि धर्माच्या आधारे योग्य निर्णय घेण्यास प्रवृत्त करतात.',
      quote: '"ग्रह केवळ परिस्थितीचा अंदाज देतात; तुमचे प्रयत्न आणि धर्मच जीवनाची नौका चालवतात."',
      quoteAuthor: 'आचार्य केशव शास्त्री'
    },
    services: {
      kicker: 'आमच्या सेवा',
      title: 'अभिजात ज्योतिष आणि आध्यात्मिक सल्ला',
      subtitle: 'प्रत्येक जन्मपत्रिकेचे परीक्षण प्राचीन ग्रंथांच्या आधारे गणितीय पद्धतीने केले जाते.',
      viewDetails: 'तपशील पहा',
      closeDetails: 'बंद करा',
      consultThisService: 'या विषयावर व्हॉट्सॲपवर चर्चा करा',
      items: [
        {
          id: 'kundali_analysis',
          title: 'संपूर्ण जन्मपत्रिका विश्लेषण आणि जीवन दिशा',
          summary: 'लग्न, नवमांश (D-9) आणि चंद्र कुंडलीचा सखोल अभ्यास, महादशा आणि गोचर ग्रहांचे परिणाम.',
          details: '12 भावांचे परीक्षण, राजयोग आणि दोषांची माहिती. नोकरी, व्यवसाय, आरोग्य आणि कौटुंबिक जीवनात स्पष्टता.',
          deliverables: '60 मिनिटांचे विस्तृत ऑडिओ/व्हिडिओ मार्गदर्शन आणि सात्त्विक वैदिक उपाय.',
          requirements: 'अचूक जन्म तारीख, जन्म वेळ आणि जन्म ठिकाण.'
        },
        {
          id: 'career_finance',
          title: 'करिअर, व्यवसाय आणि आर्थिक निर्णय (शुभ मुहूर्त)',
          summary: 'नोकरी बदल, नवीन व्यवसाय आणि शनी-राहू काळात योग्य वेळेची निवड.',
          details: 'दशमांश चक्राचा अभ्यास करून प्रगतीच्या संधी आणि संकटांवर मात करण्याचे मार्ग.',
          deliverables: 'येणाऱ्या शुभ काळाची माहिती आणि करारांसाठी शुभ मुहूर्त.',
          requirements: 'जन्म तपशील आणि करिअरविषयी मुख्य प्रश्न.'
        },
        {
          id: 'marriage_compatibility',
          title: 'विवाह जुळवणी (गुणमेलन आणि नवमांश विचार)',
          summary: '36 गुणांशिवाय मानसिक व वैवाहिक सौख्याचे सखोल परीक्षण.',
          details: 'सप्तम भाव, मंगळ दोष आणि दीर्घकालीन वैवाहिक सुखाचा अभ्यास.',
          deliverables: 'स्पष्ट जुळवणी अहवाल आणि आवश्यक असल्यास सात्त्विक शांती उपाय.',
          requirements: 'दोघांचेही जन्म तपशील.'
        },
        {
          id: 'spiritual_energy',
          title: 'दृष्ट दोष, नकारात्मक ऊर्जा निवारण आणि नवग्रह शांती',
          summary: 'कौटुंबिक अस्वस्थता आणि नकारात्मक ऊर्जेपासून मुक्तीसाठी वैदिक शांती विधान.',
          details: 'कोणत्याही तांत्रिक भीतीशिवाय सात्त्विक मंत्र, स्तोत्र आणि दानधर्माद्वारे सकारात्मकता निर्माण करणे.',
          deliverables: 'ग्रहस्थितीचे विश्लेषण, नित्य पूजा सूचना.',
          requirements: 'समस्येचा संक्षिप्त सारांश आणि जन्म तपशील.'
        },
        {
          id: 'prashna_shastra',
          title: 'प्रश्न शास्त्र (तातडीच्या प्रश्नांसाठी अचूक मार्गदर्शन)',
          summary: 'जन्म वेळ माहीत नसताना किंवा तत्काळ निर्णय घ्यायचा असताना प्रश्नवेळच्या कुंडलीवरून उत्तर.',
          details: 'दक्षिण भारतीय प्रश्न मार्गानुसार त्या क्षणाच्या ग्रहस्थितीवरून स्पष्ट मार्गदर्शन.',
          deliverables: 'तातडीच्या प्रश्नाचे थेट आणि व्यावहारिक उत्तर.',
          requirements: 'मनापासून विचारलेला एक मुख्य प्रश्न.'
        }
      ]
    },
    process: {
      kicker: 'कार्यपद्धती',
      title: 'मार्गदर्शन कसे मिळवावे?',
      subtitle: 'पारदर्शक आणि सोपी 3 पायऱ्यांची पद्धत.',
      steps: [
        {
          number: '01',
          title: 'माहिती पाठवा',
          description: 'नाव, जन्म तपशील आणि प्रश्न व्हॉट्सॲप किंवा फॉर्मद्वारे पाठवा.'
        },
        {
          number: '02',
          title: 'शास्त्रीय कुंडली परीक्षण',
          description: 'आचार्य शास्त्रीजी संभाषणापूर्वी तुमच्या वर्गकुंडल्या आणि दशांचा सखोल अभ्यास करतात.'
        },
        {
          number: '03',
          title: 'थेट संवाद आणि सात्त्विक उपाय',
          description: 'व्हॉट्सॲपवर थेट बोलून शंकांचे निरसन करा आणि सोपे उपाय जाणून घ्या.'
        }
      ]
    },
    trust: {
      kicker: 'विश्वासार्हता',
      title: 'आमची नैतिक आचारसंहिता',
      subtitle: 'हजारो भाविक आचार्य शास्त्रीजींवर का विश्वास ठेवतात?',
      charterPoints: [
        {
          title: 'कोणतेही खोटे चमत्कारी दावे नाहीत',
          description: 'ज्योतिष शास्त्राने ग्रहांची दिशा समजते. माणसाचे कर्म आणि ईश्वरी कृपाच महत्त्वाची आहे.'
        },
        {
          title: 'भीती दाखवून लूट नाही',
          description: 'काल्पनिक शापांची भीती दाखवून महागड्या पूजा लादल्या जात नाहीत. साधी प्रार्थना आणि जप हेच उपाय आहेत.'
        },
        {
          title: 'संपूर्ण गोपनीयता',
          description: 'तुमची माहिती आणि प्रश्न पूर्णतः गोपनीय ठेवले जातात.'
        },
        {
          title: 'आचार्यजींकडून थेट परीक्षण',
          description: 'कोणत्याही संगणक सॉफ्टवेअरवर न विसंबता आचार्यजी स्वतः अभ्यास करतात.'
        }
      ],
      disclaimerTitle: 'कायदेशीर आणि नैतिक सूचना',
      disclaimerText: 'ज्योतिषीय मार्गदर्शन केवळ आत्मपरीक्षण आणि आध्यात्मिक दिशेसाठी आहे. हे वैद्यकीय किंवा कायदेशीर सल्ल्याला पर्याय नाही.'
    },
    faq: {
      kicker: 'शंका निरसन',
      title: 'सतत विचारले जाणारे प्रश्न',
      subtitle: 'मार्गदर्शन पद्धतीविषयी स्पष्ट उत्तरे.',
      items: [
        {
          question: 'जन्मपत्रिकेसाठी कोणती माहिती आवश्यक आहे?',
          answer: 'अचूक जन्म तारीख, जन्म वेळ आणि जन्म ठिकाण. वेळ माहीत नसल्यास प्रश्न शास्त्राचा वापर करता येतो.'
        },
        {
          question: 'व्हॉट्सॲपवरून घरबसल्या बोलणे शक्य आहे का?',
          answer: 'होय, आमचे ६०% पेक्षा जास्त ग्राहक व्हॉट्सॲप व्हिडिओ किंवा ऑडिओ कॉलद्वारे समाधानकारक सल्ला घेतात.'
        },
        {
          question: 'नकारात्मक ऊर्जेवर तुमचा काय उपाय आहे?',
          answer: 'आम्ही वैदिक नवग्रह शांती, गायत्री मंत्र आणि सात्त्विक आचरणावर भर देतो. कोणत्याही अंधश्रद्धेला थारा देत नाही.'
        },
        {
          question: 'आचार्यजी कोणत्या भाषांमध्ये बोलतात?',
          answer: 'आचार्यजी हिंदी, इंग्रजी, कन्नड, तमिळ आणि तेलुगूमध्ये संवाद साधतात.'
        },
        {
          question: 'संदेश पाठवल्यावर किती वेळात उत्तर मिळेल?',
          answer: 'कामकाजाच्या वेळेत (सकाळी ८:३० ते संध्याकाळी ७:३०) साधारणपणे १ ते ३ तासांत उत्तर दिले जाते.'
        }
      ]
    },
    about: {
      badge: 'ज्योतिषाचार्य परिचय',
      title: 'आचार्य केशव शास्त्री',
      subtitle: 'वैदिक ज्ञान, संस्कृत ग्रंथ आणि आध्यात्मिक मार्गदर्शनात २४ वर्षांची निरंतर सेवा.',
      bioTitle: 'परंपरा, साधना आणि विचार',
      bioP1: 'उडुपी (कर्नाटक) येथील प्रतिष्ठित वैदिक कुटुंबात जन्मलेल्या आचार्यजींनी लहानपणापासून संस्कृत आणि खगोलशास्त्राचा अभ्यास केला. नंतर काशीमध्ये (वाराणसी) दीर्घकाळ राहून पराशर, जैमिनी आणि प्रश्न शास्त्राचे सखोल अध्ययन केले.',
      bioP2: 'गेल्या २४ वर्षांत हजारो लोकांना करिअर, विवाह आणि कौटुंबिक अडचणींत योग्य मार्ग दाखवला आहे.',
      bioP3: 'जन्मपत्रिका हे नशिबाचे बंधन नसून माणसाच्या कर्माला योग्य दिशा देणारा आरसा आहे, असा त्यांचा विश्वास आहे.',
      systemsTitle: 'पारंगत असलेल्या ज्योतिष शाखा',
      systemsSubtitle: 'प्रामाणिक वैदिक पद्धतींवर पूर्ण प्रभुत्व:',
      systems: [
        { name: 'पराशर वैदिक ज्योतिष', description: 'षोडशवर्ग कुंडल्या आणि विंशोत्तरी दशा पद्धतीचा सखोल अभ्यास.' },
        { name: 'दक्षिण भारतीय प्रश्न मार्ग', description: 'तातडीच्या प्रश्नांवर त्यावेळच्या ग्रहस्थितीवरून अचूक उत्तर.' },
        { name: 'जैमिनी सूत्र पद्धती', description: 'आत्मकारक आणि चर दशांद्वारे आध्यात्मिक हेतू शोधणे.' },
        { name: 'मुहूर्त आणि वास्तू समन्वय', description: 'शुभ कार्यांसाठी योग्य वेळ आणि घरातील ऊर्जा संतुलन.' }
      ],
      credentialsTitle: 'मान्यता आणि पदव्या',
      credentials: [
        'इंडियन कौन्सिल ऑफ ॲस्ट्रॉलॉजिकल सायन्सेस (ICAS) तर्फे "ज्योतिष प्रवीण" आणि "ज्योतिष विशारद" पदव्या.',
        'संपूर्णानंद संस्कृत विश्वविद्यालय परंपरेतून साहित्य आचार्य.',
        '२४ वर्षांचा निष्कलंक आणि विश्वासू अनुभव.',
        'देश-विदेशातील प्रतिष्ठित कुटुंबांचे आदरणीय मार्गदर्शक.'
      ],
      approachTitle: 'मार्गदर्शन शैली',
      approachP1: 'आचार्यजींशी बोलताना एका ज्ञानी आणि आपुलकीच्या मार्गदर्शकाचा सहवास लाभतो. कोणताही दिखावा किंवा भीती नसते.',
      approachP2: 'प्रत्येक सल्ल्याचा उद्देश मनाला शांती आणि जीवनाला स्पष्टता देणे हाच असतो.',
      testimonialsTitle: 'अनुभव',
      testimonials: [
        {
          quote: 'करिअरमधील कठीण काळात आचार्यजींचा सल्ला दिशादर्शक ठरला. कोणतेही महागडे खडे न विकता त्यांनी योग्य काळ सांगितला.',
          author: 'व्यंकटेश मूर्ती',
          context: 'टेक्नॉलॉजी संचालक, बेंगळुरू'
        },
        {
          quote: 'विवाह जुळवणीतील त्यांची सौम्यता आणि स्पष्टता आमच्या कुटुंबासाठी अत्यंत दिलासादायक होती.',
          author: 'डॉ. सविता नायर',
          context: 'वरिष्ठ चिकित्सक, कोची'
        }
      ],
      ctaTitle: 'आपल्या प्रश्नांवर चर्चा करायची आहे का?',
      ctaSubtitle: 'आचार्य शास्त्रीजींच्या चमूशी व्हॉट्सॲपवर थेट आणि गोपनीय संवाद साधा.',
      ctaButton: 'व्हॉट्सॲपवर आचार्यजींशी बोला'
    },
    chatbot: {
      launcherLabel: 'ज्योतिष सहाय्यक',
      assistantTitle: 'ज्योतिष सहाय्यक',
      assistantSubtitle: 'थेट आणि गोपनीय नोंदणी',
      step1Welcome: 'नमस्ते! आचार्य केशव शास्त्रीजींच्या मार्गदर्शन केंद्रात आपले स्वागत आहे. वेळ निश्चित करण्यासाठी मी मदत करेन.',
      step2NamePrompt: 'कृपया आपले पूर्ण नाव सांगा:',
      namePlaceholder: 'नाव...',
      step3ContactPrompt: 'संपर्कासाठी फोन नंबर किंवा व्हॉट्सॲप द्या:',
      contactMethodWhatsApp: 'व्हॉट्सॲप',
      contactMethodPhone: 'कॉल',
      contactMethodEmail: 'ईमेल',
      contactPlaceholder: 'नंबर किंवा ईमेल...',
      step4CategoryPrompt: 'कोणत्या विषयावर सल्ला हवा आहे?',
      categories: [
        { id: 'kundali_analysis', label: 'जन्मपत्रिका आणि भविष्य' },
        { id: 'career_finance', label: 'करिअर आणि आर्थिक निर्णय' },
        { id: 'marriage_compatibility', label: 'विवाह जुळवणी' },
        { id: 'spiritual_energy', label: 'दृष्ट दोष / नकारात्मक ऊर्जा शांती' },
        { id: 'prashna_shastra', label: 'तातडीचा प्रश्न (प्रश्न शास्त्र)' }
      ],
      step5ConcernPrompt: 'आपल्या समस्येचा थोडक्यात उल्लेख करा:',
      concernPlaceholder: 'आपला प्रश्न येथे लिहा...',
      step6TimePrompt: 'बोलण्यासाठी कोणती वेळ योग्य राहील?',
      timeOptions: [
        'सकाळी (09:00 AM – 12:00 PM)',
        'दुपारी (02:00 PM – 05:00 PM)',
        'संध्याकाळी (05:00 PM – 07:30 PM)',
        'शनिवार/रविवार',
        'केव्हाही'
      ],
      step7ConsentPrompt: 'माहिती सल्ल्यासाठी वापरण्यास आपली संमती आहे का?',
      consentText: 'होय, गोपनीय सल्ल्यासाठी संमती आहे.',
      step8CompleteTitle: 'माहिती तयार आहे',
      step8CompleteDesc: 'आपली माहिती नोंदवली आहे. आता आपण थेट व्हॉट्सॲपवर बोलू शकता.',
      actionOpenWhatsApp: 'व्हॉट्सॲपवर पुढे जा',
      actionSubmitOnline: 'ऑनलाइन पाठवा',
      copiedNotice: 'माहिती कॉपी झाली!',
      fallbackHelp: 'व्हॉट्सॲप उघडले नाही तरी आपली माहिती सुरक्षितपणे पोहोचली आहे.'
    },
    form: {
      kicker: 'चौकशी फॉर्म',
      title: 'गोपनीय सल्ल्यासाठी विनंती',
      subtitle: 'खालील माहिती भरा; आमचे समन्वयक लवकरच संपर्क साधतील.',
      nameLabel: 'पूर्ण नाव *',
      namePlaceholder: 'उदा. प्रकाश जोशी',
      contactMethodLabel: 'संपर्क माध्यम',
      contactValueLabel: 'फोन / व्हॉट्सॲप / ईमेल *',
      contactValuePlaceholder: '+91 98765 43210',
      categoryLabel: 'श्रेणी',
      concernLabel: 'प्रश्नाचा सारांश',
      concernPlaceholder: 'आचार्यजींनी पाहावयाचा मुख्य मुद्दा...',
      timeLabel: 'सोयीची वेळ',
      languageLabel: 'संभाषणाची भाषा',
      consentLabel: 'गोपनीय सल्ल्यासाठी माझी माहिती वापरण्यास संमती आहे. *',
      submitButton: 'विनंती पाठवा',
      submitting: 'पाठवत आहे...',
      successTitle: 'विनंती मिळाली',
      successMessage: 'धन्यवाद. आचार्यजींची टीम १ ते ३ तासांत संपर्क करेल.',
      orWhatsApp: 'त्वरित बोलायचे आहे का?',
      chatDirectly: 'व्हॉट्सॲपवर लगेच जोडा'
    },
    footer: {
      aboutSnippet: 'वैदिक मूल्ये आणि प्रामाणिक शास्त्रांवर आधारलेले अभिजात ज्योतिषीय मार्गदर्शन केंद्र.',
      quickLinks: 'दुवे',
      contactInfo: 'पत्ता',
      hours: 'वेळ: सोम – शनि, सकाळी ०८:३० ते संध्याकाळी ०७:३० IST',
      ethicsNotice: 'नैतिक नियम: १००% चमत्काराचे खोटे दावे केले जात नाहीत.',
      rightsReserved: 'आचार्य केशव शास्त्री ज्योतिष. सर्व हक्क सुरक्षित.',
      adminAccess: 'प्रशासन पोर्टल',
      techSeoReport: 'तांत्रिक अहवाल'
    }
  },

  // Jamaican Patois (International Diaspora)
  jam: {
    nav: {
      home: 'Uom',
      about: 'Bout Acharya Shastri',
      services: 'Consoltation Saabis',
      process: 'Ou It Wok',
      trust: 'Chros & Etiks Chata',
      faq: 'Kweschan Dem',
      contact: 'Kaal Wi',
      consultWhatsApp: 'Taak Pan WhatsApp'
    },
    hero: {
      badge: 'Chroo Veedik Astroloji & Spiritwal Gaidans',
      headline: 'Solida Veedik Wizdom Fi Di Big Disijan Dem Inna Yu Laif',
      subheadline: 'Ril Janam Kundali biert chaat riidin, Prashna kweschan gaidans, an spiritwal enaji balansin fram di enshent Parashara ruut. No fiek promiz, no duppy fiyaz, chroo an hones gaidans pan WhatsApp.',
      ctaWhatsApp: 'Stat WhatsApp Consoltation',
      ctaInquiry: 'Bukin Fi Wan-Pan-Wan Seshon',
      statLineage: '24+ Yaaz',
      statLineageLabel: 'Ones Veedik Liniej',
      statConsultations: '10,000+',
      statConsultationsLabel: 'Praisek Consoltation Don',
      statEthics: '100% Oneste',
      statEthicsLabel: 'No Fiek Mirikil Claim',
      statLanguages: '12 Ting',
      statLanguagesLabel: 'Multilingual Sopout'
    },
    intro: {
      kicker: 'Di Fiilosofi a Jyoti',
      title: 'Astroloji a Lait, Not No Baan Prisn',
      paragraph1: 'Veedik Jyotish kom fram di wod "Jyoti"—we miin di hooman lait fi si tings klyar. Dis a no no obeah or fortune-tellin fi mek yu fraid. Yu chaat sho di enaji an karmik patan dem we yu bawaan wid.',
      paragraph2: 'Acharya Keshava Shastri biliib say consoltation fi opn yu ai, sho yu di bes taim fi muuv, mek yu pick yu path wid klyar chros an chroo powa.',
      quote: '"Di planit dem a di weda; yu charakta an yu haad wok a di radda fi yu ship."',
      quoteAuthor: 'Acharya Keshava Shastri'
    },
    services: {
      kicker: 'We Wi Dwiin',
      title: 'Veedik Spiritwal & Astroloji Gaidans',
      subtitle: 'Evri chaat don kalkyuliet chroo-an-chroo wid enshent kalkyulieshan.',
      viewDetails: 'Si Evri Diitiel',
      closeDetails: 'Kluoz Diitiel',
      consultThisService: 'Taak Pan Dis Pan WhatsApp',
      items: [
        {
          id: 'kundali_analysis',
          title: 'Full Janam Kundali & Laif Chaat Riidin',
          summary: 'Diip anaisis pan yu bawaan chaat, D-9 Navamsha, an di dashas dem we a run pan yu now.',
          details: 'Wi look pan all 12 hauz dem fi kariir, fambily, helth, an di big tonin paint inna yu joni.',
          deliverables: '60 minit vadio/audiyo consoltation pan WhatsApp an personal Veedik mantras.',
          requirements: 'Ekzak bawaan date, taim, an di sitii/konchri we yu baan.'
        },
        {
          id: 'career_finance',
          title: 'Bizniz, Kariir Muuvz & Manii Taimin (Muhurat)',
          summary: 'No di bes taim fi switsh job, stat bizniz or invest we di planit dem a align fi yu.',
          details: 'Examin 10th house an D-10 chart so yu don put manii inna bag wid huol inna di rong season.',
          deliverables: 'Brakedown a di gud taimin an auspicious Muhurat dates.',
          requirements: 'Bawaan diitiel an yu speshifik bizniz kweschan.'
        },
        {
          id: 'marriage_compatibility',
          title: 'Marid & Lov Kompatibiliti (Kundali Milan)',
          summary: '36-point matchin plus diip spiriitual alignment so two soul kyan stan chrang togeda.',
          details: 'Wi check 7th house, Venus/Mars an how fi balance out any friction so love stay solid.',
          deliverables: 'Full matching report an peacemakin Veedik remedies.',
          requirements: 'Bawaan diitiel fi bot paatna.'
        },
        {
          id: 'spiritual_energy',
          title: 'Nigativ Enaji Kliinsin & Ievil Ai (Drishti) Protekshan',
          summary: 'Ones assesment fi heavy feeling, bad vibes, jinx or obeah fiyaz tru pure Veedik mantras.',
          details: 'Wi strictly reject obeah extortion or scary tales. Wi use pure Sattvic Shanti mantras, home purification, an charity.',
          deliverables: 'Clear guidance, protective prayers, an practical spiritual cleansing steps.',
          requirements: 'Summary a we yu a face, plus bawaan date if yu hav it.'
        },
        {
          id: 'prashna_shastra',
          title: 'Prashna Shastra (Imidiet Kweschan Riidin)',
          summary: 'Wen yu no hav yu bawaan taim but yu nid wan straight ansa now now fi an urgent matter.',
          details: 'Classical South Indian Prashna Marga kalkyuliet di cosmos at di ekzak minit yu ask.',
          deliverables: 'Clear, direct advice an path forward.',
          requirements: 'Wan serious kweschan an di taim yu a ask it.'
        }
      ]
    },
    process: {
      kicker: 'Stepps Fi Buk',
      title: 'Ou Fi Get Yu Consoltation',
      subtitle: 'Simpil, straight, no headache process pon WhatsApp.',
      steps: [
        {
          number: '01',
          title: 'Sen Yu Bawaan Diitiel',
          description: 'Sen yu niem, bawaan date, taim, an di city pon WhatsApp or our saif form.'
        },
        {
          number: '02',
          title: 'Enshent Chaat Kalkyulieshan',
          description: 'Acharya Shastri kalkyuliet yu divisional chaat and dashas bifuo di call.'
        },
        {
          number: '03',
          title: 'Wan-Pan-Wan WhatsApp Diialog',
          description: 'Jain pon WhatsApp call or video, get plain ansa, no fear, pure healing.'
        }
      ]
    },
    trust: {
      kicker: 'Chros & Oneste',
      title: 'Our Etiks & Pledj',
      subtitle: 'Why dem inna di Caribbean an abroad chros Acharya Shastri:',
      charterPoints: [
        {
          title: 'No 100% Fiek Mirikil Guarantees',
          description: 'Astroloji sho di cosmic weada, but God an yu action dem mata. Wi don sell snake oil.'
        },
        {
          title: 'No Fiyaz Fi Tek Yu Manii',
          description: 'Wi neva mek up fake curses fi charge big sum. Simpil prayer, fasting, an charity a di medicine.'
        },
        {
          title: '100% Praivet & Sakrid',
          description: 'Evriting yu sheyr remain lock tightly, no third paati eva si it.'
        },
        {
          title: 'Acharya Himself Wok Pan It',
          description: 'No bot or junior assistant; Shastri ji handles every consultation.'
        }
      ],
      disclaimerTitle: 'Ligal & Spiritwal Notis',
      disclaimerText: 'Consoltation a fi spiritwal upliftment an clarity. It no replace dakta, laawya or financial advisor.'
    },
    faq: {
      kicker: 'Ansaz',
      title: 'Kweschan Dem We Piipl Aks',
      subtitle: 'Klyar ansa bout di WhatsApp seshon.',
      items: [
        {
          question: 'We information mi nid fi a riidin?',
          answer: 'Yu bawaan date, di ekzak taim (pan bawaan papaz if possibul), an di town/konchri. If no taim, Prashna Shastra kyan wok.'
        },
        {
          question: 'Kyan wi du dis ova WhatsApp fram out a di konchri?',
          answer: 'Yes! Most a our clients consult pan WhatsApp voice call, video or voicenote fram Jamaica, Trinidad, UK, US, Canada.'
        },
        {
          question: 'Ou yu dil wid bad eye, obeah fiyaz or heavy enaji?',
          answer: 'Acharya Shastri uses classical Vedic Navagraha Shanti mantras and light. Wi reject fear tactics or greedy rituals.'
        },
        {
          question: 'We language Acharya Shastri chat in?',
          answer: 'English, Hindi, Kannada, Tamil, Telugu, with supportive team messaging for Caribbean clients.'
        },
        {
          question: 'Ou kwik wi get a respons?',
          answer: 'Within 1 to 3 hours pan WhatsApp business time.'
        }
      ]
    },
    about: {
      badge: 'Bout Di Aastrolaja',
      title: 'Acharya Keshava Shastri',
      subtitle: '24+ yaaz a sacred Veedik texts, Sanskrit discaplin, an compassionate gaidans.',
      bioTitle: 'Liniej, Trinin & Soul Journey',
      bioP1: 'Baan in Udupi inna sacred scholar fambily, Acharya Keshava Shastri learn Sanskrit and celestial math fram early youth. Him stay years in Varanasi under grandmasters learning Parashara and Prashna Marga.',
      bioP2: 'Over 24 years him guide tens a tousands a families an business people tru dark crossrodes.',
      bioP3: 'Him si di chaat as a lamp fi shain pan yu life, so yu walk wid pride and wisdom.',
      systemsTitle: 'Enshent Sistim Dem We Him Practis',
      systemsSubtitle: 'Mastery over traditional Indian astrological branches:',
      systems: [
        { name: 'Parashara Vedic Astroloji', description: 'Deep calculation of Shodashvarga and Vimshottari dashas.' },
        { name: 'Prashna Marga (Horary Shastra)', description: 'Divine celestial clock answers at the very minute you ask.' },
        { name: 'Jaimini Sutra System', description: 'Soul-purpose Atmakaraka guidance.' },
        { name: 'Muhurat & Auspicious Taimin', description: 'Timing for business deals, marriage, and home blessings.' }
      ],
      credentialsTitle: 'Vetted Badges & Liniej Record',
      credentials: [
        'Jyotish Praveena & Jyotish Visharada titles awarded by the Indian Council of Astrological Sciences (ICAS).',
        'Sanskrit Sahitya Acharya certification from Varanasi university lineages.',
        '24 unbroken years of documented personal consultations.',
        'Trusted spiritual advisor to families in the Caribbean, UK, and North America.'
      ],
      approachTitle: 'Ou Wi Chriit Wi Clients',
      approachP1: 'Wen yu sit wid Acharya Shastri pan WhatsApp, yu talk to a wise elder. No drama, no scare tactics.',
      approachP2: 'Every guidance bring peace, clear deadlines, and honest prayer recommendations.',
      testimonialsTitle: 'Reflekshan Fram Clients',
      testimonials: [
        {
          quote: 'Acharya ji did give me di exact month when my overseas contract would open up. No fake gems, just pure truth.',
          author: 'Venkatesh Murthy',
          context: 'Tech Director'
        },
        {
          quote: 'Talking from Kingston, Jamaica, di whole process on WhatsApp was smooth, sacred, and respectful.',
          author: 'David R. Singh',
          context: 'Business Owner'
        }
      ],
      ctaTitle: 'Redi Fi Taak Bout Yu Paat?',
      ctaSubtitle: 'Messij di team pan WhatsApp now fi set up yu private reading.',
      ctaButton: 'Taak Pan WhatsApp Wid Acharya Shastri'
    },
    chatbot: {
      launcherLabel: 'Astroloji Asistant',
      assistantTitle: 'Astroloji Consoltation Asistant',
      assistantSubtitle: 'Direct, saif intake pan WhatsApp',
      step1Welcome: 'Greetings! Welcom to Acharya Shastri’s sanctum. Mi kyan elp yu buk a private consoltation.',
      step2NamePrompt: 'We niem wi fi kaal yu?',
      namePlaceholder: 'Enta yu niem...',
      step3ContactPrompt: 'Watsapp numba or iimiel we bes fi reach yu?',
      contactMethodWhatsApp: 'WhatsApp',
      contactMethodPhone: 'Fone',
      contactMethodEmail: 'Iimiel',
      contactPlaceholder: 'Enta numba or iimiel...',
      step4CategoryPrompt: 'We kind a gaidans yu lookin fi?',
      categories: [
        { id: 'kundali_analysis', label: 'Bawaan Chaat & Laif Pat' },
        { id: 'career_finance', label: 'Kariir & Manii Taimin' },
        { id: 'marriage_compatibility', label: 'Lov & Marid Matchin' },
        { id: 'spiritual_energy', label: 'Bad Enaji & Ievil Ai Kliinsin' },
        { id: 'prashna_shastra', label: 'Speshifik Urjent Kweschan (Prashna)' }
      ],
      step5ConcernPrompt: 'Brieffli tell wi bout we yu a go tru (no sensitive info needed):',
      concernPlaceholder: 'Type a short summary...',
      step6TimePrompt: 'We taim a di die suit yu bes fi a call?',
      timeOptions: [
        'Maanin Taim',
        'Afta-nuun Taim',
        'Iivnin Taim',
        'Wiikend',
        'Eni Taim'
      ],
      step7ConsentPrompt: 'Yu gi wi di nod fi contact yu pan WhatsApp fi dis consoltation?',
      consentText: 'Yes, mi gi consent fi private follow-up.',
      step8CompleteTitle: 'Evriting Set Pon Pon!',
      step8CompleteDesc: 'Yu details redi. Yu kyan tap di button now fi open WhatsApp wid evriting pre-filled.',
      actionOpenWhatsApp: 'Kontiniu Pan WhatsApp Now',
      actionSubmitOnline: 'Sen Tru Website',
      copiedNotice: 'Tekst kapiid to klipbuod!',
      fallbackHelp: 'If WhatsApp no opn right away, no worri, our team hav yu inquiry safe.'
    },
    form: {
      kicker: 'Bukin Form',
      title: 'Bukin Fi Private Consoltation',
      subtitle: 'Fil out yu details below an our coordinator will messij yu kwik.',
      nameLabel: 'Yu Full Niem *',
      namePlaceholder: 'e.g. Marcus Campbell',
      contactMethodLabel: 'Preffered Way Fi Chat',
      contactValueLabel: 'WhatsApp / Fone / Iimiel *',
      contactValuePlaceholder: '+1 876 555 0192',
      categoryLabel: 'Consoltation Category',
      concernLabel: 'Short Summary a Yu Kweschan',
      concernPlaceholder: 'Tell Acharya Shastri what you need checked...',
      timeLabel: 'Bes Taim Fi Taak',
      languageLabel: 'Preffered Language',
      consentLabel: 'Mi agree fi di team contact mi confidentially fi dis consultation. *',
      submitButton: 'Sen Consoltation Rikes',
      submitting: 'Sendin...',
      successTitle: 'Inquiry Risiv Wid Respek',
      successMessage: 'Tenki. Acharya Shastri’s team will message yu pon WhatsApp within 1–3 hours.',
      orWhatsApp: 'Nid fi chat rite now?',
      chatDirectly: 'Connect Pan WhatsApp Imidietli'
    },
    footer: {
      aboutSnippet: 'Traditional Veedik Astroloji preserving sacred dignity, texts, an true healing without false promises.',
      quickLinks: 'Navigation',
      contactInfo: 'Sanctum Coordinates',
      hours: 'Consultation Hours: Mon – Sat, 08:30 AM – 07:30 PM IST',
      ethicsNotice: 'Strict Ethics: No fake 100% supernatural cures. Genuine Vedic astrological guidance respecting Google Ads policies.',
      rightsReserved: 'Acharya Keshava Shastri Jyotish. All rights reserved.',
      adminAccess: 'Astrologer Portal',
      techSeoReport: 'SEO & 12-Month Plan'
    }
  },

  // Yoruba (International Diaspora)
  yor: {
    nav: {
      home: 'Ilé',
      about: 'Nípa Acharya Shastri',
      services: 'Àwọn Iṣẹ́ Ìmọ̀ràn',
      process: 'Bí Ó Ṣe Ń Ṣiṣẹ́',
      trust: 'Ìgbẹ́kẹ̀lé àti Ìwà Ọmọlúwàbí',
      faq: 'Àwọn Ìbéèrè',
      contact: 'Kàn Sí Wa',
      consultWhatsApp: 'Bá Wa Sọ̀rọ̀ lórí WhatsApp'
    },
    hero: {
      badge: 'Ìmọ̀ Ìràwọ̀ Vedic àti Ìtọ́sọ́nà Ẹ̀mí',
      headline: 'Ọgbọ́n Vedic tòótọ́ fún àwọn ìpinnu pàtàkì nínú ayé rẹ',
      subheadline: 'Àyẹ̀wò àtẹ ìbí (Janam Kundali), ìtọ́sọ́nà lórí àwọn ìbéèrè pàtàkì, àti ìwẹ̀nùmọ́ agbára ẹ̀mí láti ọ̀dọ̀ Acharya Keshava Shastri láìsí ẹ̀tàn tàbí ẹ̀rù.',
      ctaWhatsApp: 'Bẹ̀rẹ̀ lórí WhatsApp',
      ctaInquiry: 'Béèrè fún Àkókò Ìpàdé',
      statLineage: 'Ọdún 24+',
      statLineageLabel: 'Ìtàn Ìran Vedic Tòótọ́',
      statConsultations: '10,000+',
      statConsultationsLabel: 'Àwọn Ìgbìmọ̀ràn Pípé',
      statEthics: '100% Òtítọ́',
      statEthicsLabel: 'Kò sí Ìlérí Èké',
      statLanguages: 'Èdè 12',
      statLanguagesLabel: 'Àtìlẹ́yìn Èdè Púpọ̀'
    },
    intro: {
      kicker: 'Ọgbọ́n Jyoti',
      title: 'Ìmọ̀ Ìràwọ̀ gẹ́gẹ́ bí ìmọ́lẹ̀, kì í ṣe ẹ̀wọ̀n àyànmọ́',
      paragraph1: 'Vedic Jyotish wá láti inú ọ̀rọ̀ "Jyoti" tó túmọ̀ sí ìmọ́lẹ̀ òye. Kì í ṣe sọ́tẹ́lẹ̀ asán, ṣùgbọ́n láti mọ ọ̀nà tó yẹ kí o tọ̀ gẹ́gẹ́ bí àwọn ìràwọ̀ rẹ ṣe wà.',
      paragraph2: 'Acharya Shastri ń ràn ọ́ lọ́wọ́ láti ṣe àwọn ìpinnu tó tọ́ pẹ̀lú ọgbọ́n àti àlàáfíà.',
      quote: '"Àwọn ìràwọ̀ ń fi ojú-ọjọ́ hàn; ìwà àti akitiyan rẹ ló ń tukọ̀ ayé rẹ."',
      quoteAuthor: 'Acharya Keshava Shastri'
    },
    services: {
      kicker: 'Àwọn Iṣẹ́ Wa',
      title: 'Ìmọ̀ràn Ìràwọ̀ àti Ẹ̀mí',
      subtitle: 'Gbogbo àtẹ ìbí ni a ń ṣe ìṣirò rẹ̀ pẹ̀lú ìṣọ́ra.',
      viewDetails: 'Wo Àwọn Kúlẹ̀kúlẹ̀',
      closeDetails: 'Pa Kúlẹ̀kúlẹ̀ Dé',
      consultThisService: 'Bá Wa Sọ̀rọ̀ nípa èyí lórí WhatsApp',
      items: [
        {
          id: 'kundali_analysis',
          title: 'Àyẹ̀wò Àtẹ Ìbí (Janam Kundali) àti Ọ̀nà Ayé',
          summary: 'Àyẹ̀wò kíkún lórí àtẹ ìbí rẹ, àwọn ipò ìràwọ̀, àti àwọn àkókò ìgbé-ayé rẹ.',
          details: 'Ìmọ̀ràn lórí iṣẹ́, ìlera, ìdílé, àti àwọn àkókò tó dára láti ṣe àwọn ìgbésẹ̀ pàtàkì.',
          deliverables: 'Ìpàdé orí fóònù/fídíò fún ìṣẹ́jú 60 àti àwọn àdúrà Vedic tó mọ́.',
          requirements: 'Ọjọ́ ìbí, àkókò ìbí tòótọ́, àti ìlú ìbí.'
        },
        {
          id: 'career_finance',
          title: 'Iṣẹ́, Òwò àti Àkókò Ìṣúnná Owó',
          summary: 'Mọ àkókò tó dára jùlọ láti bẹ̀rẹ̀ òwò tuntun tàbí yí iṣẹ́ padà.',
          details: 'Àyẹ̀wò ipò ìràwọ̀ kẹwàá fún àṣeyọrí nínú owó àti iṣẹ́.',
          deliverables: 'Àtòjọ àwọn àkókò tó dára jùlọ fún àwọn àdéhùn.',
          requirements: 'Àkọsílẹ̀ ìbí àti àwọn ìbéèrè lórí iṣẹ́ rẹ.'
        },
        {
          id: 'marriage_compatibility',
          title: 'Ìbáramu Ìgbéyàwó àti Ìbáṣepọ̀',
          summary: 'Àyẹ̀wò ìmọ̀ràn lórí ìfẹ́ àti ìbáramu àwọn ẹ̀mí méjì fún àlàáfíà.',
          details: 'Àyẹ̀wò kíkún láti yẹra fún aáwọ̀ àti láti mú ìfẹ́ jíjinlẹ̀ wá.',
          deliverables: 'Ìròyìn ìbáramu pípé àti àwọn ìmọ̀ràn fún àlàáfíà.',
          requirements: 'Àkọsílẹ̀ ìbí àwọn méjèèjì.'
        },
        {
          id: 'spiritual_energy',
          title: 'Ìwẹ̀nùmọ́ Agbára Búburú àti Ojú Búburú',
          summary: 'Àyẹ̀wò tòótọ́ fún àwọn ìṣòro ẹ̀mí àti àwọn àdúrà Vedic mímọ́ fún ààbò.',
          details: 'Láìsí ẹ̀tàn tàbí ẹ̀rù, a ń lo àwọn àdúrà mímọ́ Vedic àti ìfẹ́ láti mú àlàáfíà wá.',
          deliverables: 'Àwọn àdúrà ààbò àti ìtọ́sọ́nà ìwẹ̀nùmọ́ ilé.',
          requirements: 'Àkópọ̀ ohun tó ń ṣẹlẹ̀.'
        },
        {
          id: 'prashna_shastra',
          title: 'Prashna Shastra (Ìbéèrè Kíákíá)',
          summary: 'Nígbà tí o kò bá mọ àkókò ìbí rẹ, a ń lo àkókò tí o béèrè ìbéèrè náà láti fún ọ ní ìdáhùn.',
          details: 'Ọ̀nà ìbílẹ̀ South India láti gba ìdáhùn tààrà fún àwọn ọ̀ràn pàjáwìrì.',
          deliverables: 'Ìdáhùn tààrà àti ìtọ́sọ́nà.',
          requirements: 'Ìbéèrè kan tó ṣe pàtàkì sí ọ.'
        }
      ]
    },
    process: {
      kicker: 'Ìgbésẹ̀',
      title: 'Bí O Ṣe Lè Gba Ìmọ̀ràn',
      subtitle: 'Àwọn ìgbésẹ̀ mẹ́ta tó rọrùn lórí WhatsApp.',
      steps: [
        { number: '01', title: 'Fi Àwọn Ìsọfúnni Rẹ Ránṣẹ́', description: 'Fi orúkọ rẹ, ọjọ́ ìbí àti àwọn ìbéèrè rẹ ránṣẹ́ lórí WhatsApp.' },
        { number: '02', title: 'Ìṣirò Àtẹ Ìbí', description: 'Acharya Shastri yóò ṣe ìṣirò kíkún kí ẹ tó sọ̀rọ̀.' },
        { number: '03', title: 'Ìpàdé Tààrà lórí WhatsApp', description: 'Sọ̀rọ̀ tààrà, gba ìmọ̀ràn tó yé kunkun láìsí ẹ̀rù.' }
      ]
    },
    trust: {
      kicker: 'Òtítọ́ Inú',
      title: 'Àdéhùn Ìwà Títọ́ Wa',
      subtitle: 'Èéṣe tí àwọn ènìyàn fi gbẹ́kẹ̀lé Acharya Shastri:',
      charterPoints: [
        { title: 'Kò sí Ìlérí Iṣẹ́ Ìyanu Èké', description: 'Ìmọ̀ ìràwọ̀ ń fi ọ̀nà hàn; Ọlọ́run àti iṣẹ́ ọwọ́ rẹ ló ṣe pàtàkì.' },
        { title: 'Kò sí Ẹ̀rù Láti Gba Owó', description: 'A kì í fi ẹ̀rù ba ènìyàn láti gba owó ńlá. Àdúrà mímọ́ àti oore ṣíṣe ni oògùn wa.' },
        { title: 'Àṣírí Rẹ Wà Ní Ìpamọ́', description: 'Gbogbo ohun tí o bá sọ fún wa jẹ́ àṣírí pátápátá.' },
        { title: 'Acharya Fúnra Rẹ̀ Ló Ń Ṣe É', description: 'Kì í ṣe kọ̀ǹpútà tàbí ọmọ-iṣẹ́ kan ló ń bẹ́wò rẹ̀.' }
      ],
      disclaimerTitle: 'Àkíyèsí Òfin',
      disclaimerText: 'Ìmọ̀ràn yìí wà fún ìmọ̀ ẹ̀mí nìkan, kì í ṣe dípò oníṣègùn tàbí agbẹjọ́rò.'
    },
    faq: {
      kicker: 'Àwọn Ìbéèrè',
      title: 'Àwọn Ìbéèrè tí a Máa ń Béèrè',
      subtitle: 'Àwọn ìdáhùn tó ṣe kedere.',
      items: [
        { question: 'Àwọn nǹkan wo ni mo nílò fún àyẹ̀wò?', answer: 'Ọjọ́ ìbí rẹ, àkókò ìbí tòótọ́, àti ìlú tí a bí ọ sí.' },
        { question: 'Ṣé a lè ṣe é lórí WhatsApp láti orílẹ̀-èdè mìíràn?', answer: 'Bẹ́ẹ̀ ni! Ọ̀pọ̀ àwọn oníbàárà wa ló ń sọ̀rọ̀ láti orí WhatsApp láti orílẹ̀-èdè bíi Nigeria, UK, US.' },
        { question: 'Báwo lẹ ṣe ń ṣe sí ojú búburú àti agbára òkùnkùn?', answer: 'A ń lo àwọn àdúrà Vedic Navagraha Shanti mímọ́ àti ìmọ́lẹ̀ ẹ̀mí, kì í ṣe ẹ̀tàn.' },
        { question: 'Àwọn èdè wo ni Acharya ń sọ?', answer: 'Gẹ̀ẹ́sì, Hindi, Kannada, Tamil, Telugu, pẹ̀lú àtìlẹ́yìn èdè fún àwọn oníbàárà oríṣìíríṣìí.' },
        { question: 'Báwo ni ìdáhùn ṣe máa tètè dé?', answer: 'Láàárín wákàtí 1 sí 3 nínú àkókò iṣẹ́.' }
      ]
    },
    about: {
      badge: 'Nípa Onímọ̀ Ìràwọ̀',
      title: 'Acharya Keshava Shastri',
      subtitle: 'Ọdún 24+ ti ìmọ̀ Vedic àti ìtọ́sọ́nà ẹ̀mí tòótọ́.',
      bioTitle: 'Ìran àti Ọgbọ́n',
      bioP1: 'A bí i sínú ìdílé àwọn onímọ̀ Vedic ní Udupi, Karnataka. Ó kẹ́kọ̀ọ́ ní Varanasi lábẹ́ àwọn olùkọ́ ńlá lórí Parashara àti Prashna Marga.',
      bioP2: 'Fún ọdún 24, ó ti ṣe amọ̀nà ẹgbẹẹgbẹ̀rún ènìyàn kọjá àwọn ìṣòro ayé.',
      bioP3: 'Ó ka àtẹ ìbí sí ìmọ́lẹ̀ tó ń tọ́ka sí àwọn àǹfààní àti àlàáfíà.',
      systemsTitle: 'Àwọn Ọ̀nà Ìmọ̀ràn tí Ó Mọ̀ Dáadáa',
      systemsSubtitle: 'Àwọn ọ̀nà Vedic tòótọ́:',
      systems: [
        { name: 'Parashara Vedic Astroloji', description: 'Àyẹ̀wò kíkún ti Shodashvarga àti Vimshottari.' },
        { name: 'Prashna Marga (Horary Shastra)', description: 'Ìdáhùn kíákíá fún àwọn ìbéèrè pàjáwìrì.' },
        { name: 'Jaimini Sutra', description: 'Ìtọ́sọ́nà lórí ète ẹ̀mí rẹ.' },
        { name: 'Muhurat & Vastu', description: 'Yíyan àkókò tó dára fún òwò àti àlàáfíà ilé.' }
      ],
      credentialsTitle: 'Àwọn Ẹ̀rí Ẹ̀kọ́',
      credentials: [
        'Akọle Jyotish Praveena & Jyotish Visharada lati ICAS.',
        'Ijẹrisi Sanskrit Sahitya Acharya lati Varanasi.',
        'Ọdun 24 ti iṣẹ alamọdaju ti a fọwọsi.',
        'Oludamoran igbẹkẹle si ọpọlọpọ awọn idile agbaye.'
      ],
      approachTitle: 'Ọ̀nà tí A Ń Gbà Bá Àwọn Oníbàárà Sọ̀rọ̀',
      approachP1: 'Nígbà tí o bá ń sọ̀rọ̀ pẹ̀lú Acharya Shastri, o ń bá àgbàlagbà olóye sọ̀rọ̀. Kò sí ẹ̀rù kankan.',
      approachP2: 'Gbogbo ìmọ̀ràn ló ń mú àlàáfíà wá sí ọkàn rẹ.',
      testimonialsTitle: 'Ẹ̀rí Àwọn Oníbàárà',
      testimonials: [
        { quote: 'Acharya ji fún mi ní àkókò tó péye fún iṣẹ́ mi láìsí títà ohun èlò olówó iyebíye.', author: 'Venkatesh Murthy', context: 'Olùdarí Ẹ̀rọ' },
        { quote: 'Ìbáṣepọ̀ lórí WhatsApp jẹ́ onírẹ̀lẹ̀ àti mímọ́.', author: 'David R. Singh', context: 'Oníṣòwò' }
      ],
      ctaTitle: 'Ṣé o ti ṣetán láti sọ̀rọ̀?',
      ctaSubtitle: 'Kàn sí ẹgbẹ́ wa lórí WhatsApp lónìí.',
      ctaButton: 'Bá Acharya Shastri Sọ̀rọ̀ lórí WhatsApp'
    },
    chatbot: {
      launcherLabel: 'Olùrànlọ́wọ́ Ìmọ̀ràn',
      assistantTitle: 'Olùrànlọ́wọ́ Ìmọ̀ Ìràwọ̀',
      assistantSubtitle: 'Ìbánisọ̀rọ̀ tààrà lórí WhatsApp',
      step1Welcome: 'Ẹ kú àbọ̀! Mo lè ràn ọ́ lọ́wọ́ láti ṣètò ìgbìmọ̀ràn rẹ pẹ̀lú Acharya Shastri.',
      step2NamePrompt: 'Kí ni orúkọ rẹ?',
      namePlaceholder: 'Kọ orúkọ rẹ...',
      step3ContactPrompt: 'Nọ́mbà WhatsApp tàbí imeeli rẹ:',
      contactMethodWhatsApp: 'WhatsApp',
      contactMethodPhone: 'Fóònù',
      contactMethodEmail: 'Imeeli',
      contactPlaceholder: 'Nọ́mbà tàbí imeeli...',
      step4CategoryPrompt: 'Irúfẹ́ ìmọ̀ràn wo ni o ń wá?',
      categories: [
        { id: 'kundali_analysis', label: 'Àtẹ Ìbí & Ọ̀nà Ayé' },
        { id: 'career_finance', label: 'Iṣẹ́ & Àkókò Owó' },
        { id: 'marriage_compatibility', label: 'Ìbáramu Ìgbéyàwó' },
        { id: 'spiritual_energy', label: 'Ìwẹ̀nùmọ́ Agbára Búburú' },
        { id: 'prashna_shastra', label: 'Ìbéèrè Pàjáwìrì (Prashna)' }
      ],
      step5ConcernPrompt: 'Ṣàlàyé ní ṣókí ohun tí o fẹ́ kí a yẹ̀wò:',
      concernPlaceholder: 'Kọ àkópọ̀ rẹ̀ síbí...',
      step6TimePrompt: 'Àkókò wo ló rọrùn fún ọ láti sọ̀rọ̀?',
      timeOptions: ['Àárọ̀', 'Ọ̀sán', 'Ìrọ̀lẹ́', 'Òpin Ọ̀sẹ̀', 'Àkókò Kí Ké'],
      step7ConsentPrompt: 'Ṣé o gbà kí a kàn sí ọ lórí WhatsApp ní ìkọ̀kọ̀?',
      consentText: 'Bẹ́ẹ̀ ni, mo fowó sí i.',
      step8CompleteTitle: 'Gbogbo Nǹkan Ti Ṣetán!',
      step8CompleteDesc: 'O lè tẹ bọ́tìnì yìí báyìí láti bẹ̀rẹ̀ lórí WhatsApp.',
      actionOpenWhatsApp: 'Tẹ̀síwájú lórí WhatsApp',
      actionSubmitOnline: 'Fi Ránṣẹ́ lórí Ayélujára',
      copiedNotice: 'A ti da kọ̀ǹpútà rẹ!',
      fallbackHelp: 'Bí WhatsApp kò bá ṣí, má bẹ̀rù, ìbéèrè rẹ ti dé ọ̀dọ̀ wa.'
    },
    form: {
      kicker: 'Fọ́ọ̀mù Ìbéèrè',
      title: 'Béèrè fún Ìgbìmọ̀ràn Àṣírí',
      subtitle: 'Kọ àwọn kúlẹ̀kúlẹ̀ rẹ síbí, a ó sì kàn sí ọ kíákíá.',
      nameLabel: 'Orúkọ Kíkún *',
      namePlaceholder: 'Fún àpẹẹrẹ: Babatunde Adeleke',
      contactMethodLabel: 'Ọ̀nà Ìbánisọ̀rọ̀',
      contactValueLabel: 'Nọ́mbà Fóònù / WhatsApp / Imeeli *',
      contactValuePlaceholder: '+234 800 000 0000',
      categoryLabel: 'Ẹ̀ka Ìmọ̀ràn',
      concernLabel: 'Àkópọ̀ Ìbéèrè Rẹ',
      concernPlaceholder: 'Kọ ohun tí o fẹ́ kí Acharya Shastri yẹ̀wò...',
      timeLabel: 'Àkókò tí O Fẹ́',
      languageLabel: 'Èdè tí O Fẹ́',
      consentLabel: 'Mo gbà kí wọ́n kàn sí mi ní ìkọ̀kọ̀ fún ìgbìmọ̀ràn yìí. *',
      submitButton: 'Fi Ìbéèrè Ránṣẹ́',
      submitting: 'Ń fi ránṣẹ́...',
      successTitle: 'A ti gba ìbéèrè rẹ pẹ̀lú ọ̀wọ̀',
      successMessage: 'Ẹ ṣeun. Ẹgbẹ́ Acharya Shastri yóò kàn sí ọ láàárín wákàtí 1 sí 3.',
      orWhatsApp: 'Ṣé o fẹ́ sọ̀rọ̀ báyìí?',
      chatDirectly: 'Kàn Sí Wa lórí WhatsApp Kíákíá'
    },
    footer: {
      aboutSnippet: 'Ìmọ̀ Ìràwọ̀ Vedic tòótọ́ tó ń bọ̀wọ̀ fún ọmọnìyàn àti òtítọ́.',
      quickLinks: 'Àwọn Ọ̀nà',
      contactInfo: 'Àtẹ Ìbánisọ̀rọ̀',
      hours: 'Àkókò: Ajé – Àbámẹ́ta, 08:30 AM – 07:30 PM IST',
      ethicsNotice: 'Àkíyèsí Ìwà Títọ́: Kò sí ìlérí iṣẹ́ ìyanu asán.',
      rightsReserved: 'Acharya Keshava Shastri Jyotish. Gbogbo ẹ̀tọ́ wà ní ìpamọ́.',
      adminAccess: 'Ilé Ìṣàkóso',
      techSeoReport: 'Ìròyìn Ẹ̀rọ & SEO'
    }
  },

  // Igbo (International Diaspora)
  ig: {
    nav: {
      home: 'Ulo',
      about: 'Banyere Acharya Shastri',
      services: 'Ọrụ Ndụmọdụ',
      process: 'Otu Ọ Na-arụ Ọrụ',
      trust: 'Ntụkwasị Obi & Omume',
      faq: 'Ajụjụ Ndị A Na-ajụkarị',
      contact: 'Kpọtụrụ Anyị',
      consultWhatsApp: 'Kparịta ụka na WhatsApp'
    },
    hero: {
      badge: 'Ezi Amamihe Vedic Astrology & Nduzi Ime Mmụọ',
      headline: 'Ezi Amamihe Vedic Maka Mkpebi Ndụ Dị Mkpa',
      subheadline: 'Nnyocha chaatị ọmụmụ Janam Kundali, nduzi Prashna, na nhazigharị ume ime mmụọ site n’aka Acharya Keshava Shastri na-enweghị ụgha ma ọ bụ egwu.',
      ctaWhatsApp: 'Mmalite na WhatsApp',
      ctaInquiry: 'Rịọ Oge Ndụmọdụ',
      statLineage: 'Afọ 24+',
      statLineageLabel: 'Ezi Usoro Ọmụmụ Vedic',
      statConsultations: '10,000+',
      statConsultationsLabel: 'Ndụmọdụ Ndị Emere',
      statEthics: '100% Eziokwu',
      statEthicsLabel: 'Enweghị Nkwa Ụgha',
      statLanguages: 'Asụsụ 12',
      statLanguagesLabel: 'Nkwado Asụsụ Dị Iche Iche'
    },
    intro: {
      kicker: 'Nkà Ihe Ọmụma nke Jyoti',
      title: 'Astrology Dị Ka Ìhè, Ọ Bụghị Agbụ nke Akara Aka',
      paragraph1: 'Vedic Jyotish sitere na okwu "Jyoti"—nke pụtara ìhè Chineke nke nghọta. Ọ bụghị naanị ịkọ ọdịnihu kama ọ bụ ịghọta ụzọ kwesịrị ekwesị ị ga-esi bie ndụ.',
      paragraph2: 'Acharya Keshava Shastri na-enyere onye ọ bụla aka ime mkpebi doro anya site n’ezi uche na ịdị uchu.',
      quote: '"Kpakpando na-egosi ihu igwe; àgwà na mbọ gị na-akwọ ụgbọ ndụ gị."',
      quoteAuthor: 'Acharya Keshava Shastri'
    },
    services: {
      kicker: 'Ọrụ Anyị',
      title: 'Ndụmọdụ Vedic Astrology & Ime Mmụọ',
      subtitle: 'A na-eji nlezianya na mgbakọ oge ochie agbakọ chaatị ọ bụla.',
      viewDetails: 'Lee Nkọwa Niile',
      closeDetails: 'Mechie Nkọwa',
      consultThisService: 'Kparịta maka nke a na WhatsApp',
      items: [
        {
          id: 'kundali_analysis',
          title: 'Nnyocha Chaatị Ọmụmụ (Janam Kundali) na Ụzọ Ndụ',
          summary: 'Nnyocha zuru oke nke chaatị ọmụmụ gị, ọnọdụ mbara ala, na oge ndụ dị iche iche.',
          details: 'Nduzi maka ọrụ, ezinụlọ, ahụike, na oge kwesịrị ekwesị iji mee mgbanwe dị mkpa.',
          deliverables: 'Oge mkparịta ụka nkeji 60 na WhatsApp na ekpere Vedic dị nsọ.',
          requirements: 'Ụbọchị ọmụmụ, oge ọmụmụ kwụ ọtọ, na ebe amụrụ gị.'
        },
        {
          id: 'career_finance',
          title: 'Ọrụ, Azụmahịa na Oge Ego',
          summary: 'Mara oge kacha mma ịmalite azụmahịa ma ọ bụ gbanwee ọrụ.',
          details: 'Nnyocha mbara ala nke iri maka ọganihu akụ na ụba na ndụ ọrụ.',
          deliverables: 'Ndepụta oge kacha mma maka nkwekọrịta na mmalite ọhụrụ.',
          requirements: 'Nkọwa ọmụmụ na ajụjụ banyere ọrụ gị.'
        },
        {
          id: 'marriage_compatibility',
          title: 'Ndakọrịta Alụmdi na Nwunye na Mmekọrịta',
          summary: 'Nlele omume na nghọta ime mmụọ n’etiti mmadụ abụọ maka udo na ịhụnanya.',
          details: 'Iji zere esemokwu na iwulite ezinụlọ kwụsiri ike.',
          deliverables: 'Akụkọ ndakọrịta zuru oke na ndụmọdụ maka udo.',
          requirements: 'Nkọwa ọmụmụ nke mmadụ abụọ ahụ.'
        },
        {
          id: 'spiritual_energy',
          title: 'Nchacha Ume Ọjọọ na Anya Ọjọọ (Drishti)',
          summary: 'Nnyocha eziokwu maka nsogbu ime mmụọ na ekpere Vedic dị nsọ maka nchebe.',
          details: 'Na-enweghị egwu ma ọ bụ nrigbu, anyị na-eji ekpere udo na omume ọma enyere aka.',
          deliverables: 'Ekpere nchebe na usoro nhicha gburugburu ụlọ.',
          requirements: 'Nchịkọta nke ọnọdụ gị.'
        },
        {
          id: 'prashna_shastra',
          title: 'Prashna Shastra (Ajụjụ Mberede)',
          summary: 'Mgbe ị na-amaghị oge ọmụmụ gị, a na-eji oge ị jụrụ ajụjụ ahụ agbakọ azịza.',
          details: 'Usoro oge ochie nke South India iji nweta azịza ozugbo.',
          deliverables: 'Azịza doro anya na nduzi ozugbo.',
          requirements: 'Otu ajụjụ dị mkpa n’obi gị.'
        }
      ]
    },
    process: {
      kicker: 'Nzọụkwụ',
      title: 'Otu Ị Ga-esi Nweta Ndụmọdụ',
      subtitle: 'Nzọụkwụ 3 dị mfe na WhatsApp.',
      steps: [
        { number: '01', title: 'Ziga Ozi Ọmụmụ Gị', description: 'Ziga aha, ụbọchị ọmụmụ na ajụjụ gị na WhatsApp ma ọ bụ ụdị ntanetị.' },
        { number: '02', title: 'Mgbakọ Chaatị Vedic', description: 'Acharya Shastri ga-eji nlezianya gbakọọ chaatị gị tupu mkparịta ụka.' },
        { number: '03', title: 'Mkparịta Ụka na WhatsApp', description: 'Kparịta ụka ozugbo, nweta ezi nduzi na-enweghị egwu ọ bụla.' }
      ]
    },
    trust: {
      kicker: 'Ntụkwasị Obi',
      title: 'Ụkpụrụ Omume Anyị',
      subtitle: 'Ihe mere puku kwuru puku ji atụkwasị Acharya Shastri obi:',
      charterPoints: [
        { title: 'Enweghị Ọrụ Ebube Ụgha', description: 'Astrology na-egosi ụzọ; Chineke na mbọ gị ka kacha mkpa.' },
        { title: 'Enweghị Ịtụ Egwu Iji Nweta Ego', description: 'Anyị anaghị atụ ndị mmadụ egwu iji nweta ego. Ekpere dị mfe na inye ndị ogbenye bụ ọgwụgwọ anyị.' },
        { title: 'Ihe Nzuzo Gị Dị Nchebe', description: 'Ihe niile ị gwara anyị bụ ihe nzuzo zuru oke.' },
        { title: 'Acharya N’onwe Ya Na-eleba Anya', description: 'Ọ bụghị kọmputa ma ọ bụ onye enyemaka na-eme ya.' }
      ],
      disclaimerTitle: 'Ọkwa Iwu',
      disclaimerText: 'Ndụmọdụ a bụ maka nduzi ime mmụọ naanị, ọ bụghị maka ọgwụgwọ ahụike ma ọ bụ ndụmọdụ iwu.'
    },
    faq: {
      kicker: 'Ajụjụ',
      title: 'Ajụjụ Ndị A Na-ajụkarị',
      subtitle: 'Azịza doro anya banyere usoro anyị.',
      items: [
        { question: 'Kedu ihe m chọrọ maka ndụmọdụ?', answer: 'Ụbọchị ọmụmụ gị, oge ọmụmụ ziri ezi, na ebe amụrụ gị.' },
        { question: 'Anyị nwere ike ịme ya na WhatsApp site na mba ọzọ?', answer: 'Ee! Ọtụtụ n’ime ndị ahịa anyị na-akparịta ụka site na WhatsApp site na Nigeria, UK, US.' },
        { question: 'Kedu ka unu si eme banyere anya ọjọọ na ume ọjọọ?', answer: 'Anyị na-eji ekpere Vedic Navagraha Shanti na ìhè ime mmụọ eme ihe n’enweghị aghụghọ.' },
        { question: 'Kedu asụsụ Acharya na-asụ?', answer: 'Bekee, Hindi, Kannada, Tamil, Telugu, na nkwado ederede maka ndị ahịa mba dị iche iche.' },
        { question: 'Ogologo oge ole ka ọ na-ewe iji nweta azịza?', answer: 'N’ime awa 1 ruo 3 n’oge ọrụ.' }
      ]
    },
    about: {
      badge: 'Banyere Onye Ọkà Mmụta',
      title: 'Acharya Keshava Shastri',
      subtitle: 'Afọ 24+ nke amamihe Vedic na nduzi ime mmụọ nke eziokwu.',
      bioTitle: 'Ọmụmụ na Nkà Ihe Ọmụma',
      bioP1: 'A mụrụ ya n’ezinụlọ ndị ọkà mmụta Vedic na Udupi, Karnataka. Ọ gụrụ akwụkwọ na Varanasi n’okpuru ndị nkụzi ukwu na Parashara na Prashna Marga.',
      bioP2: 'Ruo afọ 24, ọ na-eduzi ọtụtụ ezinụlọ na ndị ọchụnta ego gafee oge siri ike.',
      bioP3: 'Ọ na-ahụ chaatị dị ka ìhè na-enye olileanya na udo nke uche.',
      systemsTitle: 'Usoro Oge Ochie Ọ Maara nke Ọma',
      systemsSubtitle: 'Usoro Vedic ziri ezi:',
      systems: [
        { name: 'Parashara Vedic Astroloji', description: 'Nnyocha zuru oke nke Shodashvarga na Vimshottari.' },
        { name: 'Prashna Marga (Horary Shastra)', description: 'Azịza ozugbo maka ajụjụ mberede.' },
        { name: 'Jaimini Sutra', description: 'Nduzi banyere ebumnuche mkpụrụ obi gị.' },
        { name: 'Muhurat & Vastu', description: 'Ịhọrọ oge dị mma maka azụmahịa na udo n’ụlọ.' }
      ],
      credentialsTitle: 'Akwụkwọ Asambodo',
      credentials: [
        'Aha Jyotish Praveena & Jyotish Visharada sitere na ICAS.',
        'Asambodo Sanskrit Sahitya Acharya sitere na mahadum Varanasi.',
        'Afọ 24 nke ọrụ ndụmọdụ a kwadoro.',
        'Onye ndụmọdụ tụkwasịrị obi na ọtụtụ ezinụlọ n’ụwa niile.'
      ],
      approachTitle: 'Otu Anyị Si Emeso Ndị Ahịa Anyị',
      approachP1: 'Mgbe gị na Acharya Shastri na-akparịta ụka, ị na-agwa okenye maara ihe okwu. Enweghị egwu ma ọ bụ aghụghọ.',
      approachP2: 'Ndụmọdụ niile na-eweta udo na nghọta doro anya.',
      testimonialsTitle: 'Ihe Ndị Mmadụ Kwuru',
      testimonials: [
        { quote: 'Acharya ji nyere m aka n’oge ọrụ m siri ike na-ereghị m nkume dị oké ọnụ ahịa.', author: 'Venkatesh Murthy', context: 'Onye Nduzi Nkà na Ụzụ' },
        { quote: 'Nkwurịta okwu na WhatsApp dị nsọ ma nwee nkwanye ùgwù dị ukwuu.', author: 'David R. Singh', context: 'Onye Ọchụnta Ego' }
      ],
      ctaTitle: 'Ị dịla njikere ikwurịta banyere ụzọ gị?',
      ctaSubtitle: 'Kpọtụrụ ndị otu anyị na WhatsApp taa.',
      ctaButton: 'Gwa Acharya Shastri Okwu na WhatsApp'
    },
    chatbot: {
      launcherLabel: 'Onye Enyemaka Astrology',
      assistantTitle: 'Onye Enyemaka Astrology',
      assistantSubtitle: 'Njikọ ozugbo na WhatsApp',
      step1Welcome: 'Ndewo! Enwere m ike inyere gị aka ịhazi oge ndụmọdụ gị na Acharya Shastri.',
      step2NamePrompt: 'Kedu aha gị?',
      namePlaceholder: 'Tinye aha gị...',
      step3ContactPrompt: 'Nọmba WhatsApp ma ọ bụ email gị:',
      contactMethodWhatsApp: 'WhatsApp',
      contactMethodPhone: 'Ekwentị',
      contactMethodEmail: 'Email',
      contactPlaceholder: 'Tinye nọmba ma ọ bụ email...',
      step4CategoryPrompt: 'Kedu ụdị nduzi ị na-achọ?',
      categories: [
        { id: 'kundali_analysis', label: 'Chaatị Ọmụmụ & Ụzọ Ndụ' },
        { id: 'career_finance', label: 'Ọrụ & Oge Ego' },
        { id: 'marriage_compatibility', label: 'Ndakọrịta Alụmdi na Nwunye' },
        { id: 'spiritual_energy', label: 'Nchacha Ume Ọjọọ' },
        { id: 'prashna_shastra', label: 'Ajụjụ Mberede (Prashna)' }
      ],
      step5ConcernPrompt: 'Kọwaa nkenke ihe ị chọrọ ka anyị nyochaa:',
      concernPlaceholder: 'Dee nchịkọta n’ebe a...',
      step6TimePrompt: 'Kedu oge kacha mma ị ga-achọ ka anyị kparịta ụka?',
      timeOptions: ['Ụtụtụ', 'Ehihie', 'Mgbede', 'Izu Ụka', 'Oge Ọ Bụla'],
      step7ConsentPrompt: 'Ị kwenyere ka anyị kpọtụrụ gị na WhatsApp na nzuzo?',
      consentText: 'Ee, ekwere m.',
      step8CompleteTitle: 'Ihe Niile Dị Njikere!',
      step8CompleteDesc: 'Ị nwere ike pịa bọtịnụ dị n’okpuru iji bido na WhatsApp ugbu a.',
      actionOpenWhatsApp: 'Gaa n’ihu na WhatsApp',
      actionSubmitOnline: 'Nyefee na Ntanetị',
      copiedNotice: 'Edepụtaghachiri ya!',
      fallbackHelp: 'Ọ bụrụ na WhatsApp emegheghị, echegbula, ozi gị eruola anyị aka.'
    },
    form: {
      kicker: 'Ụdị Ajụjụ',
      title: 'Rịọ Maka Ndụmọdụ Nzuzo',
      subtitle: 'Dejupụta nkọwa gị n’okpuru, anyị ga-akpọtụrụ gị ngwa ngwa.',
      nameLabel: 'Aha zuru ezu *',
      namePlaceholder: 'Dịka: Emeka Okafor',
      contactMethodLabel: 'Ụzọ Nkwurịta Okwu',
      contactValueLabel: 'Nọmba Ekwentị / WhatsApp / Email *',
      contactValuePlaceholder: '+234 800 000 0000',
      categoryLabel: 'Ụdị Ndụmọdụ',
      concernLabel: 'Nchịkọta Ajụjụ Gị',
      concernPlaceholder: 'Dee ihe ịchọrọ ka Acharya Shastri nyochaa...',
      timeLabel: 'Oge Ị Chọrọ',
      languageLabel: 'Asụsụ Ị Chọrọ',
      consentLabel: 'Ekwere m ka e jiri ozi a kpọtụrụ m na nzuzo maka ndụmọdụ a. *',
      submitButton: 'Ziga Arịrịọ Ndụmọdụ',
      submitting: 'Na-eziga...',
      successTitle: 'Anatala arịrịọ gị n’ụzọ nkwanye ùgwù',
      successMessage: 'Daalụ. Ndị otu Acharya Shastri ga-akpọtụrụ gị n’ime awa 1 ruo 3.',
      orWhatsApp: 'Ị chọrọ ikwu okwu ugbu a?',
      chatDirectly: 'Kụọ Akara na WhatsApp Ozugbo'
    },
    footer: {
      aboutSnippet: 'Ezi Vedic Astrology na-asọpụrụ ùgwù mmadụ na eziokwu dị nsọ.',
      quickLinks: 'Njikọ Ọsọ Ọsọ',
      contactInfo: 'Ebe Anyị Dị',
      hours: 'Oge: Mọnde – Satọde, 08:30 AM – 07:30 PM IST',
      ethicsNotice: 'Ọkwa Omume: Enweghị nkwa ọrụ ebube ụgha ọ bụla.',
      rightsReserved: 'Acharya Keshava Shastri Jyotish. Ikike niile echekwabara.',
      adminAccess: 'Ọnụ Ụzọ Ndị Nlekọta',
      techSeoReport: 'Akụkọ Nkà na Ụzụ & SEO'
    }
  },

  // Hausa (International Diaspora)
  ha: {
    nav: {
      home: 'Gida',
      about: 'Game da Acharya Shastri',
      services: 'Ayyukan Nasiha',
      process: 'Yadda Yake Aiki',
      trust: 'Aminci da Da’a',
      faq: 'Tambayoyi',
      contact: 'Tuntube Mu',
      consultWhatsApp: 'Yi Magana a WhatsApp'
    },
    hero: {
      badge: 'Ilimin Taurari na Vedic na Gaskiya & Jagorar Ruhaniya',
      headline: 'Hikimar Vedic ta Gaskiya don Manyan Hukunce-hukuncen Rayuwa',
      subheadline: 'Binciken taswirar haihuwa na Janam Kundali, jagorar Prashna, da daidaita ƙarfin ruhi daga Acharya Keshava Shastri ba tare da tsoro ko yaudara ba.',
      ctaWhatsApp: 'Fara Magana a WhatsApp',
      ctaInquiry: 'Nemi Lokacin Ganawa',
      statLineage: 'Shekaru 24+',
      statLineageLabel: 'Ingantaccen Tsarin Vedic',
      statConsultations: '10,000+',
      statConsultationsLabel: 'Nasihar da Aka Kammala',
      statEthics: '100% Gaskiya',
      statEthicsLabel: 'Babu Ƙaryar Alƙawari',
      statLanguages: 'Harsuna 12',
      statLanguagesLabel: 'Tallafin Harsuna Masu Yawa'
    },
    intro: {
      kicker: 'Falsafar Jyoti',
      title: 'Ilimin Taurari a Matsayin Haske, Ba Sarkar Ƙaddara Ba',
      paragraph1: 'Vedic Jyotish ya samo asali ne daga kalmar "Jyoti"—wanda ke nufin hasken fahimta na Ubangiji. Ba wai tsinkaya ba ce kawai, amma fahimtar hanyar da ta dace don gudanar da rayuwa bisa hikima.',
      paragraph2: 'Acharya Keshava Shastri yana taimaka wa kowane mutum ya yanke shawara mai kyau da kyakkyawan tunani.',
      quote: '"Taurari suna nuna yanayin rayuwa; halinka da ƙoƙarinka ne ke sarrafa jirgin rayuwarka."',
      quoteAuthor: 'Acharya Keshava Shastri'
    },
    services: {
      kicker: 'Ayyukanmu',
      title: 'Nasihar Taurari da Ruhaniya ta Vedic',
      subtitle: 'Ana lissafin kowace taswira da kulawa ta musamman bisa tsofaffin littattafai.',
      viewDetails: 'Duba Cikakkun Bayanai',
      closeDetails: 'Rufe Bayanai',
      consultThisService: 'Yi magana a kan wannan a WhatsApp',
      items: [
        {
          id: 'kundali_analysis',
          title: 'Binciken Taswirar Haihuwa (Janam Kundali) da Hanyar Rayuwa',
          summary: 'Cikakken bincike kan taswirar haihuwarka, matsayin taurari, da lokutan sauye-sauyen rayuwarka.',
          details: 'Jagora kan aiki, iyali, lafiya, da lokutan da suka dace don ɗaukar manyan matakai.',
          deliverables: 'Minti 60 na tattaunawa ta sauti/bidiyo a WhatsApp da addu’o’in Vedic masu tsarki.',
          requirements: 'Ranar haihuwa, ainihin lokacin haihuwa, da garin da aka haife ka.'
        },
        {
          id: 'career_finance',
          title: 'Aiki, Kasuwanci da Lokacin Kuɗi',
          summary: 'Sanin lokaci mafi kyau don canza aiki ko fara sabuwar kasuwanci.',
          details: 'Binciken gida na goma don samun nasara a fannin dukiya da aikin yi.',
          deliverables: 'Jerin mafi kyawun lokuta don rattaba hannu kan yarjejeniya.',
          requirements: 'Bayanin haihuwa da tambayoyinka kan aiki.'
        },
        {
          id: 'marriage_compatibility',
          title: 'Daidaituwar Aure da Dangantaka',
          summary: 'Binciken halaye da fahimtar juna tsakanin mutane biyu don samun zaman lafiya.',
          details: 'Don guje wa saɓani da gina iyali mai ƙarfi da soyayya.',
          deliverables: 'Cikakken rahoton daidaituwa da shawarwari don samun salama.',
          requirements: 'Bayanin haihuwa na mutanen biyu.'
        },
        {
          id: 'spiritual_energy',
          title: 'Tsabtace Mummunan Ƙarfi da Mugun Ido (Drishti)',
          summary: 'Bincike na gaskiya kan matsalolin ruhi da addu’o’in Vedic don kariya.',
          details: 'Ba tare da tsoro ko yaudara ba, muna amfani da addu’o’in zaman lafiya da ayyukan alheri.',
          deliverables: 'Addu’o’in kariya da jagorar tsabtace muhallin gida.',
          requirements: 'Taƙaitaccen bayanin halin da kake ciki.'
        },
        {
          id: 'prashna_shastra',
          title: 'Prashna Shastra (Tambaya ta Gaggawa)',
          summary: 'Lokacin da ba ka san ainihin lokacin haihuwarka ba, ana amfani da lokacin da ka yi tambayar.',
          details: 'Tsohuwar hanyar Kudancin Indiya don samun amsa nan take kan lamuran gaggawa.',
          deliverables: 'Amsa kai tsaye da jagora mai amfani.',
          requirements: 'Tambaya ɗaya mai mahimmanci a zuciyarka.'
        }
      ]
    },
    process: {
      kicker: 'Matakai',
      title: 'Yadda Ake Samun Nasiha',
      subtitle: 'Matakai 3 masu sauƙi a WhatsApp.',
      steps: [
        { number: '01', title: 'Aika Bayananka', description: 'Aika sunanka, ranar haihuwa da tambayoyinka a WhatsApp ko a kan shafinmu.' },
        { number: '02', title: 'Lissafin Taswira', description: 'Acharya Shastri zai bincika taswirarka sosai kafin ku yi magana.' },
        { number: '03', title: 'Tattaunawa a WhatsApp', description: 'Yi magana kai tsaye, sami bayani daki-daki ba tare da tsoro ba.' }
      ]
    },
    trust: {
      kicker: 'Aminci',
      title: 'Yarjejeniyar Da’a Tamu',
      subtitle: 'Dalilin da ya sa dubban mutane suka amince da Acharya Shastri:',
      charterPoints: [
        { title: 'Babu Ƙaryar Al’ajabi', description: 'Ilimin taurari yana nuna hanya ne; Allah da ƙoƙarinka ne mafi muhimmanci.' },
        { title: 'Babu Tsoratarwa don Karɓar Kuɗi', description: 'Ba ma tsoratar da mutane don neman kuɗi. Addu’a mai sauƙi da sadaka ne hanyoyinmu.' },
        { title: 'Sirrinka Yana Tsare', description: 'Duk abin da ka gaya mana sirri ne ba wanda zai sani.' },
        { title: 'Acharya Da Kansa Ke Bincike', description: 'Ba na’ura ko wani mataimaki ne ke duba shi ba.' }
      ],
      disclaimerTitle: 'Sanarwa ta Doka',
      disclaimerText: 'Wannan nasiha ce ta fannin ruhi kawai, ba ta maye gurbin likita ko lauya ba.'
    },
    faq: {
      kicker: 'Tambayoyi',
      title: 'Tambayoyin da Aka Fi Yi',
      subtitle: 'Amsoshi a bayyane kan yadda muke aiki.',
      items: [
        { question: 'Me nake buƙata don bincike?', answer: 'Ranar haihuwarka, ainihin lokacin haihuwa, da garin da aka haife ka.' },
        { question: 'Shin za a iya yi a WhatsApp daga wata ƙasa?', answer: 'Ƙwarai kuwa! Yawancin abokan cinikinmu suna magana ta WhatsApp daga Nigeria, UK, da US.' },
        { question: 'Yaya kuke magance mugun ido ko baƙin ƙarfi?', answer: 'Muna amfani da addu’o’in Vedic Navagraha Shanti da hasken ruhi ba tare da yaudara ba.' },
        { question: 'Wadanne harsuna Acharya yake ji?', answer: 'Turanci, Hindi, Kannada, Tamil, Telugu, da taimakon saƙo a wasu harsunan.' },
        { question: 'Yaushe zan sami amsa idan na tura saƙo?', answer: 'Cikin sa’o’i 1 zuwa 3 a lokacin aiki.' }
      ]
    },
    about: {
      badge: 'Game da Masanin',
      title: 'Acharya Keshava Shastri',
      subtitle: 'Shekaru 24+ na ilimin Vedic da jagorar ruhaniya ta gaskiya.',
      bioTitle: 'Tarihi da Falsafa',
      bioP1: 'An haife shi a cikin dangin masana Vedic a Udupi, Karnataka. Ya yi karatu a Varanasi a ƙarƙashin manyan malamai a Parashara da Prashna Marga.',
      bioP2: 'Tsawon shekaru 24, ya jagoranci dubban iyalai da ƴan kasuwa a lokuta masu wuya.',
      bioP3: 'Yana ganin taswirar taurari a matsayin haske mai ba da bege da natsuwa.',
      systemsTitle: 'Tsofaffin Hanyoyin da Ya Kware a Kansu',
      systemsSubtitle: 'Hanyoyin Vedic na asali:',
      systems: [
        { name: 'Parashara Vedic Astroloji', description: 'Cikakken lissafin Shodashvarga da Vimshottari.' },
        { name: 'Prashna Marga (Horary Shastra)', description: 'Amsa nan take don tambayoyi na gaggawa.' },
        { name: 'Jaimini Sutra', description: 'Jagora kan manufar rayuwarka ta asali.' },
        { name: 'Muhurat & Vastu', description: 'Zaɓar lokaci mafi kyau don kasuwanci da zaman lafiyar gida.' }
      ],
      credentialsTitle: 'Shaidun Karatu',
      credentials: [
        'Lakabin Jyotish Praveena & Jyotish Visharada daga ICAS.',
        'Takardar shaidar Sanskrit Sahitya Acharya daga Varanasi.',
        'Shekaru 24 na aiki na kwarai da aka tabbatar.',
        'Mai ba da shawara ga iyalai da dama a duniya.'
      ],
      approachTitle: 'Yadda Muke Mu’amala da Abokan Ciniki',
      approachP1: 'Idan kana magana da Acharya Shastri, kana magana ne da babban mutum mai hikima. Babu wata damuwa ko yaudara.',
      approachP2: 'Duk shawararsa tana kawo natsuwa da sauƙi a zuciya.',
      testimonialsTitle: 'Shaidun Mutane',
      testimonials: [
        { quote: 'Acharya ji ya taimake ni sosai a lokacin da nake cikin damuwar aiki ba tare da ya sayar min da dutse mai tsada ba.', author: 'Venkatesh Murthy', context: 'Darakta a fannin Fasaha' },
        { quote: 'Magana a WhatsApp tana da sauƙi da girmamawa sosai.', author: 'David R. Singh', context: 'Ɗan Kasuwa' }
      ],
      ctaTitle: 'Shin kana son tattauna hanyar rayuwarka?',
      ctaSubtitle: 'Tuntubi ƙungiyarmu a WhatsApp yau.',
      ctaButton: 'Yi Magana da Acharya Shastri a WhatsApp'
    },
    chatbot: {
      launcherLabel: 'Mataimakin Nasiha',
      assistantTitle: 'Mataimakin Ilimin Taurari',
      assistantSubtitle: 'Kai tsaye a WhatsApp',
      step1Welcome: 'Sannu! Zan iya taimaka maka ka shirya lokacin ganawa da Acharya Shastri.',
      step2NamePrompt: 'Mene ne cikakken sunanka?',
      namePlaceholder: 'Rubuta sunanka...',
      step3ContactPrompt: 'Lambar WhatsApp ko email ɗinka:',
      contactMethodWhatsApp: 'WhatsApp',
      contactMethodPhone: 'Waya',
      contactMethodEmail: 'Email',
      contactPlaceholder: 'Lamba ko email...',
      step4CategoryPrompt: 'Wane irin jagora kake buƙata?',
      categories: [
        { id: 'kundali_analysis', label: 'Taswirar Haihuwa & Rayuwa' },
        { id: 'career_finance', label: 'Aiki & Lokacin Kuɗi' },
        { id: 'marriage_compatibility', label: 'Daidaituwar Aure' },
        { id: 'spiritual_energy', label: 'Tsabtace Mummunan Ƙarfi' },
        { id: 'prashna_shastra', label: 'Tambaya ta Gaggawa (Prashna)' }
      ],
      step5ConcernPrompt: 'Bayyana a taƙaice abin da kake son a bincika:',
      concernPlaceholder: 'Rubuta a nan...',
      step6TimePrompt: 'Wane lokaci ya fi dacewa da kai?',
      timeOptions: ['Safe', 'Rana', 'Yamma', 'Karshen Mako', 'Kowane Lokaci'],
      step7ConsentPrompt: 'Ka amince mu tuntube ka a asirce a WhatsApp?',
      consentText: 'Eh, na amince.',
      step8CompleteTitle: 'Komai Ya Shiryu!',
      step8CompleteDesc: 'Kuna iya danna maɓallin da ke ƙasa don ci gaba a WhatsApp yanzu.',
      actionOpenWhatsApp: 'Ci gaba a WhatsApp',
      actionSubmitOnline: 'Aika ta Shafin Gizo',
      copiedNotice: 'An kofe rubutun!',
      fallbackHelp: 'Idan WhatsApp bai buɗe ba, kada ka damu, saƙonka ya riga ya isa gare mu.'
    },
    form: {
      kicker: 'Fom ɗin Nasiha',
      title: 'Nemi Lokacin Nasiha na Sirri',
      subtitle: 'Cika bayananka a ƙasa, wakilanmu za su tuntube ka ba da jimawa ba.',
      nameLabel: 'Cikakken Suna *',
      namePlaceholder: 'Misali: Ibrahim Garba',
      contactMethodLabel: 'Hanyar Sadarwa',
      contactValueLabel: 'Lambar Waya / WhatsApp / Email *',
      contactValuePlaceholder: '+234 800 000 0000',
      categoryLabel: 'Rukuni',
      concernLabel: 'Taƙaitaccen Bayanin Tambayarka',
      concernPlaceholder: 'Rubuta abin da kake son Acharya Shastri ya duba...',
      timeLabel: 'Lokacin da Kake So',
      languageLabel: 'Harshen da Kake So',
      consentLabel: 'Na amince a yi amfani da wannan bayanin don tuntubata a asirce. *',
      submitButton: 'Aika Buƙatar Nasiha',
      submitting: 'Ana aikowa...',
      successTitle: 'An karɓi buƙatarka da girmamawa',
      successMessage: 'Mun gode. Ƙungiyar Acharya Shastri za ta tuntube ka cikin sa’o’i 1 zuwa 3.',
      orWhatsApp: 'Kana son yin magana a yanzu?',
      chatDirectly: 'Haɗu da Mu a WhatsApp Nan Take'
    },
    footer: {
      aboutSnippet: 'Ilimin Taurari na Vedic na gargajiya mai mutunta ɗan adam da gaskiya.',
      quickLinks: 'Hanyoyin Sauri',
      contactInfo: 'Wurin Zama',
      hours: 'Lokaci: Litinin – Asabar, 08:30 AM – 07:30 PM IST',
      ethicsNotice: 'Sanarwar Da’a: Babu wani ƙaryar al’ajabi.',
      rightsReserved: 'Acharya Keshava Shastri Jyotish. Duka haƙƙoƙi a tsare suke.',
      adminAccess: 'Kofar Masu Gudanarwa',
      techSeoReport: 'Rahoton Fasaha & SEO'
    }
  },

  // Trinidad & Tobago English Creole (International Diaspora)
  tt: {
    nav: {
      home: 'Home',
      about: 'Bout Acharya Shastri',
      services: 'Consultation Services',
      process: 'How It Does Work',
      trust: 'Trust & Ethics Charter',
      faq: 'Questions',
      contact: 'Reach Us',
      consultWhatsApp: 'Lime on WhatsApp'
    },
    hero: {
      badge: 'Classical Vedic Jyotish & Spiritual Healing',
      headline: 'Deep Vedic Wisdom for Life Big Turning Points',
      subheadline: 'True birth-chart reading, Prashna horary clarity, and spiritual energy balancing from Acharya Keshava Shastri. Real respectful guidance without no obeah scare tactics or false promises.',
      ctaWhatsApp: 'Chat Direct on WhatsApp',
      ctaInquiry: 'Book a Private Reading',
      statLineage: '24+ Years',
      statLineageLabel: 'Vedic Lineage Certified',
      statConsultations: '10,000+',
      statConsultationsLabel: 'Consultations Completed',
      statEthics: '100% Honest',
      statEthicsLabel: 'No Exploitative Promises',
      statLanguages: '12 Languages',
      statLanguagesLabel: 'Multilingual Support'
    },
    intro: {
      kicker: 'The Spirit of Jyoti',
      title: 'Astrology as Light, Not Fatalism',
      paragraph1: 'Classical Vedic astrology comes from "Jyoti"—the sacred light that shows you the path clear clear. It is not fortune-telling or superstition; your Janam Kundali is a cosmic map of your life lessons, karmic energies, and dashas.',
      paragraph2: 'Acharya Shastri does help you see what ahead so you could make wise moves with courage, good mind, and full control over your own choices.',
      quote: '"The planets do show the weather, but your own character and right action does steer your boat."',
      quoteAuthor: 'Acharya Keshava Shastri'
    },
    services: {
      kicker: 'What We Do',
      title: 'Vedic Astrological & Spiritual Consultations',
      subtitle: 'Every horoscope calculated personally using ancient planetary texts.',
      viewDetails: 'See All Details',
      closeDetails: 'Close Details',
      consultThisService: 'Talk on This via WhatsApp',
      items: [
        {
          id: 'kundali_analysis',
          title: 'Full Janam Kundali & Life Path Breakdown',
          summary: 'In-depth study of your birth chart, Navamsha D-9, planetary dashas, and current transits.',
          details: 'We analyze your 12 houses to show the road ahead for career, family, health, and major changes.',
          deliverables: '60 minutes WhatsApp audio/video consultation and personal Vedic remedies.',
          requirements: 'Exact Date, Time, and Place of Birth.'
        },
        {
          id: 'career_finance',
          title: 'Career Moves, Business & Financial Timing (Muhurat)',
          summary: 'Know the right time to change jobs, invest in business, and dodge rough planetary periods.',
          details: 'Examination of your 10th house and Dashamsha (D-10) for prosperous timing.',
          deliverables: 'Clear timeline of good vs challenging months and auspicious dates.',
          requirements: 'Birth details and your specific work/business queries.'
        },
        {
          id: 'marriage_compatibility',
          title: 'Marriage & Relationship Compatibility (Kundali Milan)',
          summary: 'Traditional 36-point matching plus deep psychological and spiritual harmony check.',
          details: 'Beyond routine scores, we inspect the 7th house and mutual planets so love stay firm and sweet.',
          deliverables: 'Written matching assessment and peaceful harmonizing remedies.',
          requirements: 'Birth details for both partners.'
        },
        {
          id: 'spiritual_energy',
          title: 'Spiritual Energy Clearing & Evil Eye (Nazar/Drishti) Protection',
          summary: 'Honest clearing for heavy feelings, persistent obstacles, or negative energies with sacred Vedic mantras.',
          details: 'We strictly reject fear-mongering obeah claims or extortion. We use pure Sattvic Shanti prayers, home blessings, and charity.',
          deliverables: 'Diagnostic assessment, protective mantras, and practical household clearing steps.',
          requirements: 'Brief note of what you experiencing; birth details if you have them.'
        },
        {
          id: 'prashna_shastra',
          title: 'Prashna Shastra (Urgent Question Clarity)',
          summary: 'When you do not have your exact birth time, or when you need a straight answer right now.',
          details: 'Ancient South Indian horary system cast at the exact minute you ask your question.',
          deliverables: 'Direct, clear advice on the outcome and best move.',
          requirements: 'One clear question and the time you asking it.'
        }
      ]
    },
    process: {
      kicker: 'Simple Steps',
      title: 'How to Get Your Consultation',
      subtitle: 'A clean, easy process right on WhatsApp.',
      steps: [
        { number: '01', title: 'Send Your Details', description: 'Send your name, birth date, time, town, and questions on WhatsApp or our form.' },
        { number: '02', title: 'Mathematical Chart Preparation', description: 'Acharya Shastri calculates your divisional charts and dashas before the call.' },
        { number: '03', title: 'One-on-One WhatsApp Session', description: 'Connect directly on voice or video, get clear answers, and pure peace of mind.' }
      ]
    },
    trust: {
      kicker: 'Our Word',
      title: 'Trust & Ethics Charter',
      subtitle: 'Why people in Trinidad & Tobago, the Caribbean, and abroad trust Acharya Shastri:',
      charterPoints: [
        { title: 'No Fake 100% Miracles', description: 'Astrology shows the energetic flow; God and your own actions are what shape life. We do not sell false magic.' },
        { title: 'No Fear Tactics to Squeeze Money', description: 'We never make up imaginary curses to charge you heavy money for rituals. Simple prayer and charity are our remedy.' },
        { title: 'Total Discretion & Privacy', description: 'Everything you share stays completely confidential between you and the astrologer.' },
        { title: 'Acharya Shastri Does It Personally', description: 'No automated computer bots; Shastri ji checks every single chart himself.' }
      ],
      disclaimerTitle: 'Legal & Spiritual Notice',
      disclaimerText: 'Consultations are for spiritual guidance and insight. They do not replace professional medical or legal advice.'
    },
    faq: {
      kicker: 'Questions',
      title: 'Frequently Asked Questions',
      subtitle: 'Straightforward answers about our WhatsApp consultations.',
      items: [
        { question: 'What birth details I need for a reading?', answer: 'Your date of birth, exact time of birth (from your hospital record if possible), and place of birth. If no time, Prashna Shastra works.' },
        { question: 'Can we do the consultation on WhatsApp from Trinidad or overseas?', answer: 'Yes, absolutely! Most of our Caribbean and international clients consult smoothly over WhatsApp voice or video call.' },
        { question: 'How you handle evil eye, maljo, or bad energy fears?', answer: 'Acharya Shastri uses classical Vedic Navagraha Shanti mantras, home blessings, and light. No fear-mongering, no fake rituals.' },
        { question: 'What languages does Acharya speak?', answer: 'English, Hindi, Kannada, Tamil, Telugu, with supportive team coordination for Caribbean clients.' },
        { question: 'How quick will I get a response?', answer: 'Within 1 to 3 hours during business hours on WhatsApp.' }
      ]
    },
    about: {
      badge: 'About the Master',
      title: 'Acharya Keshava Shastri',
      subtitle: '24+ years of dedicated Vedic scholarship, classical Sanskrit, and compassionate spiritual service.',
      bioTitle: 'Lineage, Journey & Philosophy',
      bioP1: 'Born into an esteemed scholar lineage in Udupi, Acharya Keshava Shastri studied Sanskrit and astronomy from boy days. He later spent over a decade in Varanasi under revered gurus learning Parashara and Prashna Marga.',
      bioP2: 'Over 24 years, he has guided thousands through career difficulties, family troubles, and relationship questions.',
      bioP3: 'He views the horoscope as a lantern to guide your steps, not a chain around your feet.',
      systemsTitle: 'Classical Astrological Systems Understood',
      systemsSubtitle: 'Mastery over traditional Vedic disciplines:',
      systems: [
        { name: 'Parashara Vedic Astroloji', description: 'Deep calculation of Shodashvarga and Vimshottari dashas.' },
        { name: 'Prashna Marga (Horary Shastra)', description: 'Direct celestial answers at the exact time you ask.' },
        { name: 'Jaimini Sutra System', description: 'Soul-purpose Atmakaraka guidance.' },
        { name: 'Muhurat & Vastu Harmonization', description: 'Auspicious timing for ventures and home blessing.' }
      ],
      credentialsTitle: 'Vetted Credentials',
      credentials: [
        'Jyotish Praveena & Jyotish Visharada titles awarded by the Indian Council of Astrological Sciences (ICAS).',
        'Traditional Sanskrit Sahitya Acharya certification from Varanasi university lineages.',
        'Over 24 unbroken years of documented public and private consultation service.',
        'Trusted spiritual advisor to families across Trinidad, Guyana, the UK, and North America.'
      ],
      approachTitle: 'How We Treat Our Clients',
      approachP1: 'When you sit for a session with Acharya Shastri on WhatsApp, you talking to a wise, caring elder. No theatrics, no fear.',
      approachP2: 'Every guidance is designed to give you clarity, peace of mind, and realistic expectations.',
      testimonialsTitle: 'Words from Consulted Clients',
      testimonials: [
        { quote: 'Acharya ji gave me the exact timing for my job transition in 2023. No expensive gems, just plain truth.', author: 'Venkatesh Murthy', context: 'Tech Director' },
        { quote: 'Consulting from Port of Spain felt like talking to a trusted elder in my own house. The peace of mind was real.', author: 'David R. Singh', context: 'Business Owner, Trinidad' }
      ],
      ctaTitle: 'Ready to Walk in Clarity?',
      ctaSubtitle: 'Message Acharya Shastri’s team on WhatsApp today to set up your private reading.',
      ctaButton: 'Speak with Acharya Shastri on WhatsApp'
    },
    chatbot: {
      launcherLabel: 'Consultation Assistant',
      assistantTitle: 'Astrology Consultation Assistant',
      assistantSubtitle: 'Direct, confidential WhatsApp intake',
      step1Welcome: 'Namaste! Welcome to Acharya Shastri’s consultation sanctum. I can help set up your private session right away.',
      step2NamePrompt: 'What name should we call you?',
      namePlaceholder: 'Enter your name...',
      step3ContactPrompt: 'What is your WhatsApp number or email to reach you?',
      contactMethodWhatsApp: 'WhatsApp',
      contactMethodPhone: 'Phone',
      contactMethodEmail: 'Email',
      contactPlaceholder: 'Number or email...',
      step4CategoryPrompt: 'What area you looking for guidance on today?',
      categories: [
        { id: 'kundali_analysis', label: 'Birth Chart & Life Path' },
        { id: 'career_finance', label: 'Career & Financial Timing' },
        { id: 'marriage_compatibility', label: 'Relationship & Marriage Matching' },
        { id: 'spiritual_energy', label: 'Spiritual Clearing / Evil Eye (Maljo) Protection' },
        { id: 'prashna_shastra', label: 'Specific Urgent Question (Prashna)' }
      ],
      step5ConcernPrompt: 'Briefly describe what you going through (no sensitive private details needed):',
      concernPlaceholder: 'Write a short summary...',
      step6TimePrompt: 'What time of day suits you best for a call?',
      timeOptions: ['Morning Time', 'Afternoon Time', 'Evening Time', 'Weekend', 'Anytime Available'],
      step7ConsentPrompt: 'You give consent for the team to message you privately on WhatsApp?',
      consentText: 'Yes, I agree to be contacted confidentially.',
      step8CompleteTitle: 'All Set & Ready!',
      step8CompleteDesc: 'Your request is formulated. You can tap the button below to open WhatsApp with everything pre-filled.',
      actionOpenWhatsApp: 'Continue on WhatsApp Now',
      actionSubmitOnline: 'Submit Online to Team',
      copiedNotice: 'Consultation text copied!',
      fallbackHelp: 'If WhatsApp does not open right away, no worries, your inquiry is already safely received by our team.'
    },
    form: {
      kicker: 'Inquiry Form',
      title: 'Request a Private Consultation',
      subtitle: 'Fill out your details below and our coordinator will message you promptly.',
      nameLabel: 'Your Full Name *',
      namePlaceholder: 'e.g. David R. Singh',
      contactMethodLabel: 'Preferred Communication Channel',
      contactValueLabel: 'WhatsApp / Phone / Email *',
      contactValuePlaceholder: '+1 868 555 0192',
      categoryLabel: 'Consultation Category',
      concernLabel: 'Brief Summary of Your Question',
      concernPlaceholder: 'Provide brief context for Acharya Shastri...',
      timeLabel: 'Best Time to Talk',
      languageLabel: 'Preferred Discussion Language',
      consentLabel: 'I consent to sharing this information for a direct confidential consultation follow-up. *',
      submitButton: 'Submit Consultation Request',
      submitting: 'Submitting...',
      successTitle: 'Inquiry Received with Respect',
      successMessage: 'Thank you. Acharya Shastri’s team has received your details and will reach out on WhatsApp within 1–3 hours.',
      orWhatsApp: 'Need immediate scheduling?',
      chatDirectly: 'Connect Instantly on WhatsApp'
    },
    footer: {
      aboutSnippet: 'Traditional Vedic Astrology consultations upholding the highest standards of dignity, classical texts, and compassion.',
      quickLinks: 'Navigation',
      contactInfo: 'Sanctum Coordinates',
      hours: 'Consultation Hours: Mon – Sat, 08:30 AM – 07:30 PM IST',
      ethicsNotice: 'Strict Ethical Standard: Consultations provide astrological guidance based on classical Jyotish. No 100% supernatural guarantees or miracle cures are made.',
      rightsReserved: 'Acharya Keshava Shastri Jyotish. All rights reserved.',
      adminAccess: 'Astrologer Team Portal',
      techSeoReport: 'SEO & 12-Month Roadmap'
    }
  }
};

export function getTranslation(lang: SupportedLanguage): TranslationSchema {
  return translations[lang] || translations.en;
}
