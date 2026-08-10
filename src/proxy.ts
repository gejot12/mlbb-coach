import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE, isValidAdminSession } from "@/lib/auth/admin-session";

export async function proxy(request: NextRequest) {
  const session = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!(await isValidAdminSession(session))) {
    return NextResponse.redirect(new URL("/coach/admin/login", request.url));
  }
  return NextResponse.next();
}

// Exact-path match only — /coach/admin/login is a different path and is never gated.
export const config = {
  matcher: ["/coach/admin"],
};
