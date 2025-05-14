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
      className="flex items-center space-x-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium uppercase">{i18n.language}</span>
    </button>
  );
};

export default LanguageSwitcher;