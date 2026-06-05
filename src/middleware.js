import { NextResponse } from "next/server";

export function middleware(req) {
  const token =
    req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  const publicRoutes = [
    "/login",
    "/register",
    "/forgot-password",
  ];

  const isPublic =
    publicRoutes.includes(pathname);

  if (!token && !isPublic) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/candidate/:path*",
    "/recruiter/:path*",
    "/admin/:path*",
    "/login",
    "/register",
    "/forgot-password",
  ],
};