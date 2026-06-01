import { ru } from "./dictionaries/ru";

export const dictionaries = {
  ru,
} as const;

export type Locale = keyof typeof dictionaries;

export const defaultLocale: Locale = "ru";

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale];
}

