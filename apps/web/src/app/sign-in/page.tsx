"use client";

import Link from "next/link";
import { AppHeader } from "@/components/app-header";
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

        <form className="auth-form">
          <label className="field">
            <span>{dict.auth.signIn.email}</span>
            <input type="email" placeholder="you@example.com" disabled />
          </label>
          <label className="field">
            <span>{dict.auth.signIn.password}</span>
            <input type="password" placeholder={dict.auth.signIn.password} disabled />
          </label>

          <button className="button button-primary" type="button" disabled>
            {dict.auth.signIn.submit}
          </button>
        </form>

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
