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
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
  
  // Новый matcher говорит: "Применяй middleware ко всем путям, кроме тех, что ведут к api, папке _next или содержат точку в названии (т.е. являются файлами)".
    matcher: ['/((?!api|_next|.*\\..*).*)']
};