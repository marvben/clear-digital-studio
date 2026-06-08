import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const country = req.headers.get('cf-ipcountry') || 'US';

  const res = NextResponse.next();

  res.cookies.set('country', country, {
    path: '/',
    sameSite: 'lax',
    secure: true,
  });

  return res;
}
