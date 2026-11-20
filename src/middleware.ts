import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const middleware = createMiddleware({
  ...routing,
  localePrefix: 'always'
});

export default function handleRequest(request: NextRequest) {
  const response = middleware(request);
  if (/^\/(?:[a-z]{2}\/)?day-trips(?:\/|$)/.test(request.nextUrl.pathname)) {
    // Next metadata lists the two languages in which the regional guides exist.
    response.headers.delete('link');
  }
  return response;
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
