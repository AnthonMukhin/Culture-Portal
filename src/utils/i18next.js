import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { default as locales, languages } from '../locales';

i18n
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: Object.keys(languages).find(lang => languages[lang].default),
    lng: Object.keys(languages).find(lang => languages[lang].default),
    debug: false,
    preload: ['ru', 'en', 'by'],
    initImmediate: false,
    react: {
      wait: true,
    },
  });

  export default i18n;
