"use client";

import { useState } from "react";
import {
  SESSION_SLOTS,
  SESSION_SLOT_CAPACITY,
  formatSessionDateLabel,
  type SessionSlot,
} from "@/data/coach-session-slots";
import type { SessionSlotCount } from "@/lib/types/coach-inquiry";

export function slotCountKey(date: string, slot: string): string {
  return `${date}|${slot}`;
}

export function buildSlotCountMap(counts: SessionSlotCount[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const c of counts) map.set(slotCountKey(c.session_date, c.session_slot), c.booked_count);
  return map;
}

export function SessionSlotPicker({
  dates,
  slotCounts,
  fieldErrors,
}: {
  dates: string[];
  slotCounts: SessionSlotCount[];
  fieldErrors?: Record<string, string[]>;
}) {
  const countMap = buildSlotCountMap(slotCounts);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(dates[0]);
  const [selectedSlot, setSelectedSlot] = useState<SessionSlot | undefined>(undefined);

  function pickDate(date: string) {
    setSelectedDate(date);
    setSelectedSlot(undefined);
  }

  return (
    <div>
      <input type="hidden" name="session_date" value={selectedDate ?? ""} />
      <input type="hidden" name="session_slot" value={selectedSlot ?? ""} />

      <p className="text-sm font-medium">Tanggal</p>
      <div className="mt-1.5 flex gap-1.5 overflow-x-auto pb-1">
        {dates.map((date) => (
          <button
            key={date}
            type="button"
            onClick={() => pickDate(date)}
            className={`shrink-0 rounded-md border px-2.5 py-1.5 text-xs font-medium capitalize transition-colors ${
              selectedDate === date
                ? "border-amber-500/60 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                : "border-black/10 hover:border-amber-500/40 dark:border-white/10"
            }`}
          >
            {formatSessionDateLabel(date)}
          </button>
        ))}
      </div>
      {fieldErrors?.session_date && <p className="mt-1 text-xs text-rose-500">{fieldErrors.session_date[0]}</p>}

      <p className="mt-4 text-sm font-medium">Jam (WIB)</p>
      <div className="mt-1.5 grid grid-cols-2 gap-2">
        {SESSION_SLOTS.map((slot) => {
          const booked = selectedDate ? (countMap.get(slotCountKey(selectedDate, slot)) ?? 0) : 0;
          const full = booked >= SESSION_SLOT_CAPACITY;
          const active = selectedSlot === slot;
          return (
            <button
              key={slot}
              type="button"
              disabled={!selectedDate || full}
              onClick={() => setSelectedSlot(slot)}
              className={`rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                active
                  ? "border-amber-500/60 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  : "border-black/10 hover:border-amber-500/40 dark:border-white/10"
              }`}
            >
              <span>{slot}</span>
              <span
                className={`block text-xs font-normal ${
                  full ? "text-rose-500" : "text-foreground/50"
                }`}
              >
                {full ? "Penuh" : `${booked}/${SESSION_SLOT_CAPACITY} terisi`}
              </span>
            </button>
          );
        })}
      </div>
      {fieldErrors?.session_slot && <p className="mt-1 text-xs text-rose-500">{fieldErrors.session_slot[0]}</p>}
    </div>
  );
}
