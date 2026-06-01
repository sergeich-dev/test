import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Welcome back</p>
        <h1>Sign in to Creator Lab</h1>
        <p className="auth-text">Authentication UI placeholder for the next implementation step.</p>

        <form className="auth-form">
          <label className="field">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" disabled />
          </label>
          <label className="field">
            <span>Password</span>
            <input type="password" placeholder="Password" disabled />
          </label>

          <button className="button button-primary" type="button" disabled>
            Sign In
          </button>
        </form>

        <p className="auth-link-row">
          New here? <Link href="/sign-up">Create an account</Link>
        </p>
        <p className="auth-link-row">
          <Link href="/">Back to welcome page</Link>
        </p>
      </div>
    </main>
  );
}

