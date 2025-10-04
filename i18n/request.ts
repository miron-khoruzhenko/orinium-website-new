// import { getRequestConfig } from "next-intl/server"
// import { routing } from "./routes"

// export default getRequestConfig(async ({ requestLocale }) => {
//   let locale = await requestLocale

//   if (!locale || !routing.locales.includes(locale as any)) {
//     locale = routing.defaultLocale
//   }

//   return {
//     locale,
//     messages: (await import(`@/messages/${locale}.json`)).default,
//   }
// })

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routes";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const common = (await import(`@/locales/${locale}/common.json`)).default;

  return {
    locale,
    messages: { common },
  };
});
