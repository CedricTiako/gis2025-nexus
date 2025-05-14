import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.speakers'), href: '#speakers' },
    { name: t('nav.schedule'), href: '#schedule' },
    { name: t('nav.resources'), href: '#resources' },
    { name: t('nav.news'), href: '#news' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Globe className="h-8 w-8 text-blue-900 mr-2" />
          <a href="#" className="text-xl md:text-2xl font-bold text-blue-900">
            GIS<span className="text-blue-600">2025</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                isScrolled ? 'text-gray-800' : 'text-gray-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#register"
            className="bg-blue-800 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
          >
            {t('nav.register')}
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm pt-2 pb-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-blue-800 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-center transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.register')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;