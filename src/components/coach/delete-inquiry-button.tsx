"use client";

import { useTransition } from "react";
import { deleteInquiry } from "@/lib/actions/admin-inquiries";

export function DeleteInquiryButton({ id, name }: { id: string; name: string }) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (!window.confirm(`Hapus pengajuan dari "${name}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    startTransition(() => {
      deleteInquiry(id);
    });
  }

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={handleClick}
      className="text-sm font-medium text-rose-500/70 hover:text-rose-500 disabled:opacity-50"
    >
      {isPending ? "Menghapus…" : "Hapus"}
    </button>
  );
}
