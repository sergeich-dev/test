"use client";

import { useTransition } from "react";
import { signOutUser } from "@/auth-actions";
import { useLocale } from "@/components/locale-provider";

export function SignOutButton() {
  const { dict } = useLocale();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="button button-ghost"
      type="button"
      onClick={() => {
        startTransition(async () => {
          await signOutUser();
        });
      }}
      disabled={isPending}
    >
      {isPending ? dict.common.signingOut : dict.common.signOut}
    </button>
  );
}
