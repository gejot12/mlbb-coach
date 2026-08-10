// Placeholder auth, not real accounts — a single shared password gates /coach/admin.
// Uses Web Crypto (available in both the Edge middleware runtime and Node) rather than
// node:crypto, since middleware.ts needs to call this too.

export const ADMIN_SESSION_COOKIE = "admin_session";

async function computeSessionToken(): Promise<string> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("ADMIN_PASSWORD belum diisi di .env.local");
  }
  const data = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function isValidAdminSession(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;
  try {
    return cookieValue === (await computeSessionToken());
  } catch {
    return false;
  }
}

export async function getAdminSessionToken(): Promise<string> {
  return computeSessionToken();
}
