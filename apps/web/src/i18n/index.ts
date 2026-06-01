import { en } from "./dictionaries/en";
import { ru } from "./dictionaries/ru";

export const dictionaries = {
  en,
  ru,
} as const;

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "ru";
export const localeStorageKey = "creator-lab-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value != null && locales.includes(value as Locale);
}

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale];
}
