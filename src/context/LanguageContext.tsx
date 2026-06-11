"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { translations } from "@/data/translations";

type Language = "en" | "ar";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // Keep HTML direction and language in sync with current state
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  // Translation helper: resolves dot-notation strings, e.g., t("hero.title")
  const t = useCallback((key: string): any => {
    const keys = key.split(".");
    let value: any = translations[lang];

    for (const k of keys) {
      if (value && k in value) {
        value = value[k];
      } else {
        return key; // Fallback to raw key string if translation is missing
      }
    }

    return value;
  }, [lang]);

  const providerValue = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={providerValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
