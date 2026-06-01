import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Get started</p>
        <h1>Create your Creator Lab account</h1>
        <p className="auth-text">Registration UI placeholder for the next implementation step.</p>

        <form className="auth-form">
          <label className="field">
            <span>Name</span>
            <input type="text" placeholder="Your name" disabled />
          </label>
          <label className="field">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" disabled />
          </label>
          <label className="field">
            <span>Password</span>
            <input type="password" placeholder="Create a password" disabled />
          </label>

          <button className="button button-primary" type="button" disabled>
            Sign Up
          </button>
        </form>

        <p className="auth-link-row">
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </p>
        <p className="auth-link-row">
          <Link href="/">Back to welcome page</Link>
        </p>
      </div>
    </main>
  );
}

