import React, { createContext, useContext, useState } from 'react';

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

export const useLanguageContext = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0]);

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