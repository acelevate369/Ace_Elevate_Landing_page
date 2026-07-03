import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Check local storage for saved language, default to 'en'
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('ace_elevate_lang');
    return savedLang ? savedLang : 'en';
  });

  // Update local storage when language changes
  useEffect(() => {
    localStorage.setItem('ace_elevate_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'id' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
