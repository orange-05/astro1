import { LanguageMeta, SupportedLanguage } from '../types';

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  // Indian Languages
  { code: 'en', name: 'English', nativeName: 'English', region: 'Indian', flag: '🌐' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', region: 'Indian', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', region: 'Indian', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', region: 'Indian', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', region: 'Indian', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', region: 'Indian', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', region: 'Indian', flag: '🇮🇳' },

  // International Diaspora
  { code: 'jam', name: 'Jamaican Patois', nativeName: 'Patwa (Jamaica)', region: 'International Diaspora', flag: '🇯🇲' },
  { code: 'yor', name: 'Yoruba', nativeName: 'Èdè Yorùbá', region: 'International Diaspora', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo', region: 'International Diaspora', flag: '🇳🇬' },
  { code: 'ha', name: 'Hausa', nativeName: 'Harshen Hausa', region: 'International Diaspora', flag: '🇳🇬' },
  { code: 'tt', name: 'Trinidad & Tobago Creole', nativeName: 'Trini Creole', region: 'International Diaspora', flag: '🇹🇹' }
];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export function getLanguageMeta(code: SupportedLanguage): LanguageMeta {
  return SUPPORTED_LANGUAGES.find(l => l.code === code) || SUPPORTED_LANGUAGES[0];
}
