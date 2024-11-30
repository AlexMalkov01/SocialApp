import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Для загрузки переводов с сервера
  .use(LanguageDetector) // Для автоматического определения языка
  .use(initReactI18next) // Интеграция с React
  .init({
    fallbackLng: "en", // Резервный язык
    lng: "ru", // Язык по умолчанию
    debug: __IS_DEV__, // Включить логи для разработки
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к JSON-файлам с переводами
    },
    interpolation: {
      escapeValue: false, // Для работы с React JSX (не экранирует строки)
    },
    react: {
      useSuspense: true, // Включить suspense для загрузки переводов
    },
  });

export default i18n;
