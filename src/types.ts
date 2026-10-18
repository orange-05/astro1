export type SupportedLanguage =
  | 'en'   // English
  | 'kn'   // Kannada (ಕನ್ನಡ)
  | 'ta'   // Tamil (தமிழ்)
  | 'te'   // Telugu (తెలుగు)
  | 'ml'   // Malayalam (മലയാളം)
  | 'hi'   // Hindi (हिंदी)
  | 'mr'   // Marathi (मराठी)
  | 'jam'  // Jamaican Patois
  | 'yor'  // Yorùbá
  | 'ig'   // Igbo
  | 'ha'   // Hausa
  | 'tt';  // Trinidad & Tobago English Creole

export interface LanguageMeta {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  region: 'Indian' | 'International Diaspora';
  flag: string;
}

export interface Inquiry {
  id: string;
  createdAt: string;
  name: string;
  contactMethod: 'whatsapp' | 'phone' | 'email';
  contactValue: string;
  category: string;
  concern: string;
  preferredTime: string;
  preferredLanguage: string;
  status: 'new' | 'contacted' | 'completed' | 'archived';
  source: string;
  notes?: string;
}

export interface AstrologerConfig {
  astrologerName: string;
  lineage: string;
  whatsappNumber: string;
  displayPhone: string;
  email: string;
  consultationHours: string;
  consultationModes: string[];
  baseLocation: string;
  languagesSpoken: string[];
}

export interface ServiceDetail {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  deliverablesKey: string;
  idealForKey: string;
  duration: string;
}
