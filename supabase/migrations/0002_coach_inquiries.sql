-- Phase C: coach inquiry contact form. No accounts/payments — just a stored inquiry the
-- site owner follows up on manually (via the password-gated /coach/admin page).

create table coach_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  preferred_role text,
  current_rank text,
  desired_schedule text not null,
  notes text,
  status text not null default 'new' check (status in ('new', 'contacted', 'scheduled', 'closed')),
  created_at timestamptz not null default now()
);
create index coach_inquiries_status_created_idx on coach_inquiries (status, created_at desc);

alter table coach_inquiries enable row level security;

-- Public may INSERT (submit the form) but never SELECT — protects submitted contact info.
-- The admin page reads via the service-role client, which bypasses RLS entirely.
create policy "public insert coach_inquiries" on coach_inquiries for insert
  with check (true);
