"use client";

import { useActionState } from "react";
import { loginAdmin, type AdminLoginState } from "@/lib/actions/admin-auth";

const initialAdminLoginState: AdminLoginState = { status: "idle" };

export function AdminLoginForm() {
  const [state, formAction, pending] = useActionState(loginAdmin, initialAdminLoginState);

  return (
    <form action={formAction} className="mt-6 space-y-4">
      {state.status === "error" && (
        <p className="rounded-md bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400">{state.message}</p>
      )}
      <div>
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="mt-1 w-full rounded-md border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-amber-500/60 dark:border-white/10"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-amber-500 px-4 py-2 font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Masuk…" : "Masuk"}
      </button>
    </form>
  );
}
