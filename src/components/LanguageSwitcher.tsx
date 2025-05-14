import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      aria-label={`Switch to ${i18n.language === 'en' ? 'French' : 'English'}`}
    >
      <Globe className="h-4 w-4 text-gray-600" />
      <span className="text-sm font-medium text-gray-600 uppercase">{i18n.language}</span>
    </button>
  );
};

export default LanguageSwitcher;