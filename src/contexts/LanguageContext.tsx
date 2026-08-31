import React, { createContext, useContext, useEffect, useState } from 'react';

interface LanguageContextProps {
  language: Language;
  setLanguageContext: (newLanguage: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const languages = [
  {
    displayName: "English",
    countryCode: "USA",
    languageCode: "en-US",
  },
  {
    displayName: "日本語",
    countryCode: "JPN",
    languageCode: "ja-JP",
  }
];

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return languages[0];
  }

  let savedLanguage: string | null = null;
  try {
    savedLanguage = window.localStorage.getItem('portfolio-language');
  } catch {
    // Language selection still works when browser storage is unavailable.
  }

  const languageCode = savedLanguage ?? window.navigator.language;

  return languageCode.startsWith('ja') ? languages[1] : languages[0];
};

export const useLanguageContext = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language.languageCode.startsWith('ja') ? 'ja' : 'en';
    try {
      window.localStorage.setItem('portfolio-language', language.languageCode);
    } catch {
      // Ignore blocked storage; the in-memory selection remains active.
    }
  }, [language]);

  const setLanguageContext = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const value = {
    language,
    setLanguageContext,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
