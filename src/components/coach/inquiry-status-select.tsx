"use client";

import { useTransition } from "react";
import { updateInquiryStatus } from "@/lib/actions/admin-inquiries";
import type { CoachInquiryStatus } from "@/lib/types/coach-inquiry";

const STATUS_OPTIONS: CoachInquiryStatus[] = ["new", "contacted", "scheduled", "closed"];

export function InquiryStatusSelect({ id, status }: { id: string; status: CoachInquiryStatus }) {
  const [isPending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={isPending}
      onChange={(e) => {
        const next = e.target.value as CoachInquiryStatus;
        startTransition(() => {
          updateInquiryStatus(id, next);
        });
      }}
      className="rounded-md border border-black/10 bg-background-elevated px-2 py-1 text-sm capitalize text-foreground disabled:opacity-50 dark:border-white/10"
    >
      {STATUS_OPTIONS.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
