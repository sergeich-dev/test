"use client";

import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { AuthButton } from "@/components/auth-button";
import { useLocale } from "@/components/locale-provider";

export default function SignInPage() {
  const { dict } = useLocale();

  return (
    <main className="auth-shell">
      <AppHeader currentPage="sign-in" />
      <div className="auth-card">
        <p className="eyebrow">{dict.auth.signIn.eyebrow}</p>
        <h1>{dict.auth.signIn.title}</h1>
        <p className="auth-text">{dict.auth.signIn.description}</p>

        <div className="auth-form">
          <AuthButton mode="sign-in" />
          <p className="auth-helper-text">{dict.auth.signIn.helper}</p>
        </div>

        <p className="auth-link-row">
          {dict.auth.signIn.alternate} <Link href="/sign-up">{dict.auth.signIn.alternateLink}</Link>
        </p>
        <p className="auth-link-row">
          <Link href="/">{dict.common.backToWelcome}</Link>
        </p>
      </div>
    </main>
  );
}
