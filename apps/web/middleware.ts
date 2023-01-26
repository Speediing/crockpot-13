// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { get } from "@vercel/edge-config";

export async function middleware(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") || "CA";
  const shouldShowBanner = await get("shouldShowBanner");
  const buttonArrayReversed = await get("buttonArrayReversed");
  const shouldRevButtons = buttonArrayReversed[country];
  return NextResponse.rewrite(
    new URL(
      `/home/${shouldShowBanner.toString()}/${shouldRevButtons.toString()}`,
      request.url
    )
  );
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|home).*)",
  ],
};
