"use client";

import { useActionState } from "react";
import { submitCoachInquiry, type CoachInquiryFormState } from "@/lib/actions/coach-inquiry";
import { PREFERRED_ROLE_OPTIONS } from "@/lib/validation/coach-inquiry";

const initialCoachInquiryState: CoachInquiryFormState = { status: "idle" };

const fieldBaseClass =
  "w-full rounded-md border border-black/10 px-3 py-2 text-sm outline-none focus:border-amber-500/60 dark:border-white/10";
const inputClass = `${fieldBaseClass} bg-transparent`;
// Select needs an explicit solid background (not transparent): the native option-list
// popup renders using the <select>'s own background/text color, not the page's — with
// bg-transparent it fell back to the browser's white default, making the near-white
// --foreground text unreadable ("putih semua").
const selectClass = `${fieldBaseClass} bg-background-elevated text-foreground`;
const labelClass = "text-sm font-medium";

export function CoachInquiryForm() {
  const [state, formAction, pending] = useActionState(submitCoachInquiry, initialCoachInquiryState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
        <p className="font-semibold text-emerald-600 dark:text-emerald-400">Terkirim!</p>
        <p className="mt-1 text-sm text-foreground/70">{state.message}</p>
      </div>
    );
  }

  const fieldErrors = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-4">
      {/* Honeypot — hidden from real users, off-screen instead of display:none so basic bots still fill it. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p className="rounded-md bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400">{state.message}</p>
      )}

      <div>
        <label htmlFor="name" className={labelClass}>
          Nama
        </label>
        <input id="name" name="name" required className={`mt-1 ${inputClass}`} />
        {fieldErrors.name && <p className="mt-1 text-xs text-rose-500">{fieldErrors.name[0]}</p>}
      </div>

      <div>
        <label htmlFor="contact" className={labelClass}>
          Email atau WhatsApp
        </label>
        <input id="contact" name="contact" required className={`mt-1 ${inputClass}`} />
        {fieldErrors.contact && <p className="mt-1 text-xs text-rose-500">{fieldErrors.contact[0]}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="preferred_role" className={labelClass}>
            Role yang mau dilatih
          </label>
          <select id="preferred_role" name="preferred_role" defaultValue="" className={`mt-1 ${selectClass}`}>
            <option value="">— Pilih —</option>
            {PREFERRED_ROLE_OPTIONS.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="current_rank" className={labelClass}>
            Rank saat ini
          </label>
          <input id="current_rank" name="current_rank" placeholder="mis. Mythic 500" className={`mt-1 ${inputClass}`} />
        </div>
      </div>

      <div>
        <label htmlFor="desired_schedule" className={labelClass}>
          Jadwal yang diinginkan
        </label>
        <textarea
          id="desired_schedule"
          name="desired_schedule"
          required
          rows={3}
          placeholder="mis. Sabtu-Minggu malam, atau sebutkan hari & jam yang kamu punya"
          className={`mt-1 ${inputClass}`}
        />
        {fieldErrors.desired_schedule && <p className="mt-1 text-xs text-rose-500">{fieldErrors.desired_schedule[0]}</p>}
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Catatan tambahan (opsional)
        </label>
        <textarea id="notes" name="notes" rows={3} placeholder="Kendala spesifik, hero favorit, dll." className={`mt-1 ${inputClass}`} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-amber-500 px-4 py-2 font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Mengirim…" : "Kirim Pengajuan"}
      </button>
    </form>
  );
}
