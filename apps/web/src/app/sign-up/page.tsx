"use client";

import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { AuthButton } from "@/components/auth-button";
import { useLocale } from "@/components/locale-provider";

export default function SignUpPage() {
  const { dict } = useLocale();

  return (
    <main className="auth-shell">
      <AppHeader currentPage="sign-up" />
      <div className="auth-card">
        <p className="eyebrow">{dict.auth.signUp.eyebrow}</p>
        <h1>{dict.auth.signUp.title}</h1>
        <p className="auth-text">{dict.auth.signUp.description}</p>

        <div className="auth-form">
          <AuthButton mode="sign-up" />
          <p className="auth-helper-text">{dict.auth.signUp.helper}</p>
        </div>

        <p className="auth-link-row">
          {dict.auth.signUp.alternate} <Link href="/sign-in">{dict.auth.signUp.alternateLink}</Link>
        </p>
        <p className="auth-link-row">
          <Link href="/">{dict.common.backToWelcome}</Link>
        </p>
      </div>
    </main>
  );
}
