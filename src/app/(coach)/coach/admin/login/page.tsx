import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/coach/admin-login-form";

export const metadata: Metadata = {
  title: "Admin Login — MLBB Coach",
};

export default function AdminLoginPage() {
  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="text-2xl font-bold tracking-tight">Admin Login</h1>
      <p className="mt-2 text-sm text-foreground/60">Khusus pengelola situs — untuk lihat pengajuan coach.</p>
      <AdminLoginForm />
    </div>
  );
}
