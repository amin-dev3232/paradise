import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const pathname: string = req.nextUrl.pathname;
  const token: string | undefined = req.cookies.get('auth-token')?.value;

  // روت هایی که کاملا محافظت میشن
  const protectedPaths: string[] = ['/user-profile'];
  const isProtected: boolean = protectedPaths.some((route) => pathname.startsWith(route));

  // فقط روت هایی که بچه هاشون نیاز به محافظت دارن
  const publicParents: string[] = ['/rooms'];
  const isChildProtected: boolean = publicParents.some((route) => pathname.startsWith(route) && pathname !== route);

  const needAuth: boolean = isChildProtected || isProtected;

  if (needAuth && !token) {
    return NextResponse.redirect(new URL('/create-account', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/rooms/:path*', '/user-profile/:path*'],
};
