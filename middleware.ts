// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routes';

// Возвращаем middleware к его финальному, чистому виду.
export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  // localePrefix: 'as-needed' 
});

export const config = {
  matcher: [
    // '/((?!api|_next/static|_next/image|favicon.ico).*)'
    // '/((?!api|_next|.*\\..*).*)'
    // '/((?!api|_next/static|_next/image|favicon.ico|admin).*)'
    '/((?!api|_next/static|_next/image|admin|.*\\..*).*)'

  ]
};