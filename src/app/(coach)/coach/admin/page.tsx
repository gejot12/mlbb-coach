import { createSupabaseServiceClient, isSupabaseServiceConfigured } from "@/lib/supabase/server";
import type { CoachInquiry } from "@/lib/types/coach-inquiry";
import { logoutAdmin } from "@/lib/actions/admin-auth";
import { InquiryStatusSelect } from "@/components/coach/inquiry-status-select";
import { Card } from "@/components/ui/card";
import { SupabaseSetupNotice } from "@/components/ui/supabase-setup-notice";

export const dynamic = "force-dynamic";

async function getInquiries(): Promise<CoachInquiry[]> {
  const supabase = createSupabaseServiceClient();
  const { data, error } = await supabase
    .from("coach_inquiries")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export default async function AdminInquiriesPage() {
  const configured = isSupabaseServiceConfigured();
  const inquiries = configured ? await getInquiries() : [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Pengajuan Coach</h1>
        <form action={logoutAdmin}>
          <button type="submit" className="text-sm text-foreground/60 hover:text-amber-500">
            Keluar
          </button>
        </form>
      </div>

      <div className="mt-6">
        {!configured ? (
          <SupabaseSetupNotice />
        ) : inquiries.length === 0 ? (
          <p className="text-foreground/60">Belum ada pengajuan.</p>
        ) : (
          <div className="space-y-3">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-medium">{inquiry.name}</p>
                    <p className="text-sm text-foreground/60">{inquiry.contact}</p>
                  </div>
                  <InquiryStatusSelect id={inquiry.id} status={inquiry.status} />
                </div>
                <dl className="mt-3 flex flex-wrap gap-x-4 text-sm text-foreground/70">
                  {inquiry.preferred_role && (
                    <div>
                      <dt className="inline font-medium">Role: </dt>
                      <dd className="inline">{inquiry.preferred_role}</dd>
                    </div>
                  )}
                  {inquiry.current_rank && (
                    <div>
                      <dt className="inline font-medium">Rank: </dt>
                      <dd className="inline">{inquiry.current_rank}</dd>
                    </div>
                  )}
                </dl>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Jadwal: </span>
                  {inquiry.desired_schedule}
                  <span className="text-foreground/50">
                    {" "}
                    ({inquiry.session_date} · {inquiry.session_slot})
                  </span>
                </p>
                {inquiry.notes && (
                  <p className="mt-1 text-sm text-foreground/70">
                    <span className="font-medium">Catatan: </span>
                    {inquiry.notes}
                  </p>
                )}
                <p className="mt-2 text-xs text-foreground/40">
                  {new Date(inquiry.created_at).toLocaleString("id-ID")}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
