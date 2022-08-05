import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './resources';

const i18nInstance = (i18n as any)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupCookie: 'lang',
      lookupLocalStorage: 'lang',
    },
    load: 'languageOnly',
    resources,
    lng: 'en-us',
    fallbackLng: 'en-us',
    ns: Object.keys(resources['en-us']), // Map namespaces based on main language
    defaultNS: 'global',
    lowerCaseLng: true,
    supportedLngs: Object.keys(resources), // http://4umi.com/web/html/languagecodes.php
    saveMissing: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    },
  });

export default i18nInstance;
