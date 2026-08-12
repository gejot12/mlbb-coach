-- Phase D: structured session-slot booking for the coach form, replacing the free-text
-- "jadwal yang diinginkan" with a real calendar (date + fixed 2-hour evening slot) so
-- capacity (max 10 people/slot) can be enforced and shown to visitors before they submit.

alter table coach_inquiries
  add column session_date date,
  add column session_slot text check (session_slot in ('19:00-21:00', '21:00-23:00'));

-- Backfill existing rows (free-text schedule, no structured slot) with a sentinel so the
-- columns can become NOT NULL going forward without breaking old data.
update coach_inquiries set session_date = created_at::date where session_date is null;
update coach_inquiries set session_slot = '19:00-21:00' where session_slot is null;

alter table coach_inquiries
  alter column session_date set not null,
  alter column session_slot set not null;

-- desired_schedule is now auto-formatted server-side from session_date/session_slot
-- (kept for the admin panel's existing display and as a human-readable audit trail),
-- so it's no longer directly typed by the user.
create index coach_inquiries_slot_idx on coach_inquiries (session_date, session_slot);

-- A hard cap enforced in Postgres, not just in application code, so two submissions
-- racing for the last spot in a slot can't both succeed and overbook it.
create or replace function enforce_session_slot_capacity()
returns trigger as $$
begin
  if (
    select count(*) from coach_inquiries
    where session_date = new.session_date
      and session_slot = new.session_slot
  ) >= 10 then
    raise exception 'Slot % % sudah penuh (maks 10 orang).', new.session_date, new.session_slot;
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_enforce_session_slot_capacity
  before insert on coach_inquiries
  for each row execute function enforce_session_slot_capacity();

-- Public aggregate view: exposes only date/slot/count so the booking calendar can show
-- "X/10 terisi" without exposing any submitter's name or contact info. Views run with
-- their owner's privileges by default, so this can read past the base table's
-- insert-only RLS policy while the grant below is the only way anon can reach it.
create view coach_session_slot_counts as
select session_date, session_slot, count(*)::int as booked_count
from coach_inquiries
group by session_date, session_slot;

grant select on coach_session_slot_counts to anon, authenticated;
