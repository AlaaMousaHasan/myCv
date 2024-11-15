import React, { createContext, useState, useContext } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const loadTranslations = (lang) => {
        try {
            // Dynamically import the translation file based on the language
            return require(`./locales/${lang}/translation.json`);
        } catch (error) {
            console.error(`Error loading translations for ${lang}`, error);
            return {}; // Fallback to empty object if translation file is missing
        }
    };

    const translations = loadTranslations(language);

    const changeLanguage = (lang) => setLanguage(lang);

    const t = (key) => {
        return key.split('.').reduce((acc, part) => acc && acc[part], translations);
    };

    return (
        <TranslationContext.Provider value={{ t, changeLanguage }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext);
