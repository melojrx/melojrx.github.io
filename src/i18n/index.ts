import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationPT from './locales/pt.json';
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';

// Translation resources
const resources = {
  pt: {
    translation: translationPT,
  },
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    resources,
    fallbackLng: 'en', // Fallback language
    lng: 'en', // Default language
    debug: import.meta.env.DEV, // Enable debug in development
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Language detector options
    detection: {
      // Order of detection
      order: ['localStorage', 'querystring', 'navigator'],
      // Keys to lookup language from
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
      // Cache user language
      caches: ['localStorage'],
    },

    react: {
      // Wait for translations to load before rendering
      useSuspense: true,
    },
  });

export default i18n;
