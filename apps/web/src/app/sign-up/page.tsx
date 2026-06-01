import Link from "next/link";
import { getDictionary } from "@/i18n";

export default function SignUpPage() {
  const dict = getDictionary();

  return (
    <main className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">{dict.auth.signUp.eyebrow}</p>
        <h1>{dict.auth.signUp.title}</h1>
        <p className="auth-text">{dict.auth.signUp.description}</p>

        <form className="auth-form">
          <label className="field">
            <span>{dict.auth.signUp.name}</span>
            <input type="text" placeholder={dict.auth.signUp.name} disabled />
          </label>
          <label className="field">
            <span>{dict.auth.signUp.email}</span>
            <input type="email" placeholder="you@example.com" disabled />
          </label>
          <label className="field">
            <span>{dict.auth.signUp.password}</span>
            <input type="password" placeholder={dict.auth.signUp.password} disabled />
          </label>

          <button className="button button-primary" type="button" disabled>
            {dict.auth.signUp.submit}
          </button>
        </form>

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
