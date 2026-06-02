"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocale } from "@/components/locale-provider";
import { SignOutButton } from "@/components/sign-out-button";

type AppHeaderProps = {
  currentPage?: "welcome" | "sign-in" | "sign-up";
};

export function AppHeader({ currentPage = "welcome" }: AppHeaderProps) {
  const { dict, locale, setLocale } = useLocale();
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const userName = session?.user?.name ?? session?.user?.email;

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-mark" href="/">
          <span className="brand-mark-badge">CL</span>
          <span className="brand-mark-copy">
            <strong>{dict.common.appName}</strong>
            <span>{dict.header.brandSubtitle}</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label={dict.header.ariaLabel}>
          <Link className="site-nav-link" href="/#workflow">
            {dict.header.nav.workflow}
          </Link>
          <Link className="site-nav-link" href="/#features">
            {dict.header.nav.features}
          </Link>
          <Link className="site-nav-link" href="/#overview">
            {dict.header.nav.overview}
          </Link>
        </nav>

        <div className="site-header-tools">
          <LanguageSwitcher
            currentLocale={locale}
            label={dict.header.localeLabel}
            locales={dict.header.locales}
            onChange={setLocale}
          />

          <div className="site-header-actions">
            {isAuthenticated ? (
              <>
                <span className="user-chip">
                  {dict.header.signedInAs} {userName}
                </span>
                <SignOutButton />
              </>
            ) : (
              <>
                <Link
                  className={`button button-ghost ${currentPage === "sign-in" ? "is-active" : ""}`}
                  href="/sign-in"
                >
                  {dict.common.signIn}
                </Link>
                <Link
                  className={`button button-primary ${currentPage === "sign-up" ? "is-active" : ""}`}
                  href="/sign-up"
                >
                  {dict.header.primaryCta}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
