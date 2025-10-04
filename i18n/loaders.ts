// export async function loadNamespaces(locale: Locale, namespaces: string[]) {
//   const entries = await Promise.all(
//     namespaces.map(async (ns) => {
//       const mod = await import(`@/locales/${locale}/${ns}.json`);
//       return [ns, mod.default] as const;
//     })
//   );
//   return Object.fromEntries(entries) as Record<string, Record<string, unknown>>;
// }


export async function loadRouteNamespace(locale: Locale, route: string) {
  const mod = await import(`@/locales/${locale}/${route}/index.ts`);
  return { [route]: mod.default };
}
