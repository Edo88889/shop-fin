import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './locales/en/translation.json';
import armenian from './locales/am/translation.json';
i18n.use(initReactI18next).init({
  fallbackLng: 'am',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: english,
    },
    am: {
      translation: armenian,
    },
  },
});

export default i18n;
