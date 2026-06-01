"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  localeStorageKey,
  type Locale,
} from "@/i18n";

type LocaleContextValue = {
  dict: ReturnType<typeof getDictionary>;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey);

    if (isLocale(savedLocale)) {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
      return;
    }

    document.documentElement.lang = defaultLocale;
  }, []);

  function setLocale(locale: Locale) {
    setLocaleState(locale);
    window.localStorage.setItem(localeStorageKey, locale);
    document.documentElement.lang = locale;
  }

  const value = useMemo(
    () => ({
      dict: getDictionary(locale),
      locale,
      setLocale,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (context == null) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
