"use client";

import { type Locale } from "@/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  locales: Record<Locale, string>;
  onChange: (locale: Locale) => void;
};

export function LanguageSwitcher({
  currentLocale,
  label,
  locales,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div className="language-switcher" aria-label={label} role="group">
      {Object.entries(locales).map(([locale, localeLabel]) => {
        const typedLocale = locale as Locale;
        const isActive = typedLocale === currentLocale;

        return (
          <button
            key={typedLocale}
            className={`locale-button ${isActive ? "is-active" : ""}`}
            onClick={() => onChange(typedLocale)}
            type="button"
          >
            {localeLabel}
          </button>
        );
      })}
    </div>
  );
}
