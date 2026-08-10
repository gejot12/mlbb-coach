# MLBB Coach

Situs edukasi komunitas untuk Mobile Legends: Bang Bang — hero guide (item build, counter,
sinergi), panduan rotasi role per menit, draft pick simulator ala turnamen, patch notes, jadwal
& hasil match kompetitif (M Series, MPL Indonesia/Philippines/Malaysia), serta form kontak coach
online. Dibangun dengan Next.js (App Router) + TypeScript + Tailwind + Supabase.

Repo ini open-source (lihat [LICENSE](./LICENSE)) — salah satu alasannya adalah syarat akses
gratis [LiquipediaDB API](https://liquipedia.net/api-terms-of-use) untuk sinkronisasi data match.

## Setup

```bash
npm install
cp .env.local.example .env.local   # isi dengan kredensial asli, lihat di bawah
npm run dev
```

### 1. Konten statis hero/item/role (tidak butuh setup apa pun)

Halaman Hero Guide, Rotasi Role, dan Draft Simulator berjalan dari data statis di `src/data/`
— langsung jalan begitu `npm run dev` dijalankan, tanpa database.

### 2. Supabase (Patch Notes & Match)

1. Buat project baru di [supabase.com](https://supabase.com).
2. Salin `Project URL`, `anon public key`, dan `service_role key` dari Settings → API ke
   `.env.local`.
3. Jalankan migration `supabase/migrations/0001_init.sql`, lalu `supabase/seed.sql` lewat SQL
   Editor di Supabase Studio (atau via Supabase CLI).

### 3. LiquipediaDB API (sinkronisasi match otomatis, opsional)

Halaman Match tetap jalan dengan data manual di `supabase/seed.sql` tanpa langkah ini. Untuk
sinkronisasi otomatis dari Liquipedia:

1. Ajukan akses lewat channel **#api-help** di [Discord Liquipedia](https://discord.com/invite/liquipedia)
   atau form di [liquipedia.net/api](https://liquipedia.net/api) — akses gratis dibatasi untuk
   proyek edukasi/non-komersial yang open-source, dan sering diberikan untuk jangka waktu
   terbatas. Jelaskan bahwa proyek ini bersifat edukasi komunitas.
2. Setelah disetujui, isi `LIQUIPEDIA_API_KEY` dan `LIQUIPEDIA_USER_AGENT` di `.env.local`.
3. **Implementasikan `queryMatches` di `src/lib/liquipedia/client.ts` dari nol** sesuai
   dokumentasi asli yang diberikan setelah approval. Catatan penting: LPDB (LiquipediaDB) itu
   sistem proprietary Liquipedia sendiri, **bukan** MediaWiki Cargo API generik (`action=cargoquery`)
   — jangan asumsikan bentuknya sebelum baca dokumentasi resminya. `queryMatches` saat ini
   sengaja berupa stub yang throw error, bukan implementasi tebakan.
4. Set `CRON_SECRET` di environment variables Vercel (bukan cuma `.env.local`) — Vercel Cron
   otomatis mengirim header `Authorization: Bearer <CRON_SECRET>` ke `/api/sync/liquipedia`
   sesuai jadwal di `vercel.json`.

## Testing

```bash
npm run test    # Vitest — data-integrity hero/item + draft engine
npm run build   # type-check + production build
```

## Struktur

- `src/data/` — hero, item, role guide, dan format draft (statis, di-review lewat git diff)
- `src/lib/draft/` — state machine draft simulator + logic saran counter-pick
- `src/lib/liquipedia/` — client LiquipediaDB API + sync ke tabel `matches`
- `supabase/migrations/`, `supabase/seed.sql` — schema & data awal Patch Notes/Match
- `src/app/` — halaman (App Router), termasuk route group per fitur
