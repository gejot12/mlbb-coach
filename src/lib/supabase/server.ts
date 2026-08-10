import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function isSupabaseServiceConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseServiceRoleKey);
}

/**
 * Public client — safe to use from Server Components and Server Actions. Only ever as
 * privileged as the current RLS policies allow: SELECT on the content tables (leagues,
 * patch_notes, matches) and INSERT-only on coach_inquiries (see migrations 0001/0002).
 */
export function createSupabaseServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase belum dikonfigurasi. Isi NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY di .env.local.',
    );
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}

/**
 * Privileged client — bypasses RLS via the service role key. Server-only: used for the
 * coach-inquiry admin view, seed/manual writes, and the Liquipedia sync route. Never
 * import this from a Client Component or anything bundled to the browser.
 */
export function createSupabaseServiceClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      'Supabase service role belum dikonfigurasi. Isi SUPABASE_SERVICE_ROLE_KEY di .env.local (server-only, jangan pernah expose ke client).',
    );
  }
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });
}
