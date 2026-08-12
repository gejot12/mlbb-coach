"use client";

import { useMemo, useState } from "react";
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

const WEEKDAY_LABELS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

function toIsoDate(utcMs: number): string {
  const d = new Date(utcMs);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** 6x7 grid (Sun-first) of ISO dates covering `month` plus its leading/trailing days. */
function buildMonthGrid(year: number, month: number): string[][] {
  const firstOfMonth = Date.UTC(year, month, 1, 12);
  const firstWeekday = new Date(firstOfMonth).getUTCDay();
  const gridStart = firstOfMonth - firstWeekday * 86_400_000;

  const weeks: string[][] = [];
  for (let w = 0; w < 6; w++) {
    const week: string[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(toIsoDate(gridStart + (w * 7 + d) * 86_400_000));
    }
    weeks.push(week);
  }
  return weeks;
}

function monthLabel(year: number, month: number): string {
  return new Intl.DateTimeFormat("id-ID", { month: "long", year: "numeric" }).format(
    new Date(Date.UTC(year, month, 15, 12)),
  );
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
  const validDates = useMemo(() => new Set(dates), [dates]);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(dates[0]);
  const [selectedSlot, setSelectedSlot] = useState<SessionSlot | undefined>(undefined);

  const [year, monthIdx] = (selectedDate ?? dates[0] ?? "1970-01-01").split("-").map(Number);
  const [displayYear, setDisplayYear] = useState(year);
  const [displayMonth, setDisplayMonth] = useState(monthIdx - 1);

  const minMonth = dates[0]?.slice(0, 7);
  const maxMonth = dates[dates.length - 1]?.slice(0, 7);
  const currentMonthKey = `${displayYear}-${String(displayMonth + 1).padStart(2, "0")}`;
  const canGoPrev = !minMonth || currentMonthKey > minMonth;
  const canGoNext = !maxMonth || currentMonthKey < maxMonth;

  function shiftMonth(delta: number) {
    const next = new Date(Date.UTC(displayYear, displayMonth + delta, 1));
    setDisplayYear(next.getUTCFullYear());
    setDisplayMonth(next.getUTCMonth());
  }

  function pickDate(date: string) {
    if (!validDates.has(date)) return;
    setSelectedDate(date);
    setSelectedSlot(undefined);
  }

  const weeks = buildMonthGrid(displayYear, displayMonth);

  return (
    <div>
      <input type="hidden" name="session_date" value={selectedDate ?? ""} />
      <input type="hidden" name="session_slot" value={selectedSlot ?? ""} />

      <p className="text-sm font-medium">Tanggal</p>
      <div className="mt-1.5 rounded-md border border-black/10 p-3 dark:border-white/10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            disabled={!canGoPrev}
            aria-label="Bulan sebelumnya"
            className="rounded p-1 text-foreground/60 hover:text-amber-500 disabled:pointer-events-none disabled:opacity-30"
          >
            ‹
          </button>
          <p className="text-sm font-semibold capitalize">{monthLabel(displayYear, displayMonth)}</p>
          <button
            type="button"
            onClick={() => shiftMonth(1)}
            disabled={!canGoNext}
            aria-label="Bulan berikutnya"
            className="rounded p-1 text-foreground/60 hover:text-amber-500 disabled:pointer-events-none disabled:opacity-30"
          >
            ›
          </button>
        </div>

        <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-foreground/40">
          {WEEKDAY_LABELS.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7 gap-1">
          {weeks.flatMap((week, wi) =>
            week.map((date, di) => {
              const inMonth = Number(date.slice(5, 7)) - 1 === displayMonth;
              const selectable = validDates.has(date);
              const isSelected = selectedDate === date;
              const dayNum = Number(date.slice(8, 10));
              return (
                <button
                  key={`${wi}-${di}`}
                  type="button"
                  disabled={!selectable}
                  onClick={() => pickDate(date)}
                  className={`aspect-square rounded-md text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-amber-500 text-black"
                      : selectable
                        ? "text-foreground hover:bg-amber-500/10"
                        : `cursor-not-allowed ${inMonth ? "text-foreground/25" : "text-foreground/10"}`
                  }`}
                >
                  {dayNum}
                </button>
              );
            }),
          )}
        </div>
      </div>
      {selectedDate && (
        <p className="mt-1.5 text-xs text-foreground/50 capitalize">{formatSessionDateLabel(selectedDate)}</p>
      )}
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
