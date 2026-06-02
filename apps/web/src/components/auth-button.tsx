"use client";

import { useTransition } from "react";
import { signInWithGoogle } from "@/auth-actions";
import { useLocale } from "@/components/locale-provider";

type AuthButtonProps = {
  mode: "sign-in" | "sign-up";
};

export function AuthButton({ mode }: AuthButtonProps) {
  const { dict } = useLocale();
  const [isPending, startTransition] = useTransition();

  const copy = mode === "sign-in" ? dict.auth.signIn : dict.auth.signUp;

  return (
    <button
      className="button button-primary auth-provider-button"
      type="button"
      onClick={() => {
        startTransition(async () => {
          await signInWithGoogle();
        });
      }}
      disabled={isPending}
    >
      <span className="provider-mark" aria-hidden="true">
        G
      </span>
      {isPending ? copy.pending : copy.google}
    </button>
  );
}
