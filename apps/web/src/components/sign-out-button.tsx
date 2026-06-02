"use client";

import { signOut } from "next-auth/react";
import { useTransition } from "react";
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
          await signOut({ callbackUrl: "/" });
        });
      }}
      disabled={isPending}
    >
      {isPending ? dict.common.signingOut : dict.common.signOut}
    </button>
  );
}
