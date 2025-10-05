import { getRequestConfig } from "next-intl/server";
import { routing } from "./routes";

const namespaces = [
  { name: 'common', path: 'common.json' },
  { name: 'home', path: 'home/index' }, // Убираем .ts расширение для импорта
];

export default getRequestConfig(async ({ requestLocale }) => {
  // Используем requestLocale вместо locale
  let locale = await requestLocale;
  
  // Проверяем, что локаль валидная
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  try {
    // Загружаем все пространства имен параллельно
    const promises = namespaces.map(async (ns) => {
      try {
        const module = await import(`@/locales/${locale}/${ns.path}`);
        return { name: ns.name, messages: module.default };
      } catch (error) {
        console.error(`Failed to load namespace ${ns.name} for locale ${locale}:`, error);
        return { name: ns.name, messages: {} };
      }
    });

    const loadedNamespaces = await Promise.all(promises);

    // Собираем все загруженные переводы в один объект
    const messages = loadedNamespaces.reduce((acc, ns) => {
      acc[ns.name] = ns.messages;
      return acc;
    }, {} as Record<string, any>);

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Error loading translations for locale ${locale}:`, error);
    return {
      locale: routing.defaultLocale,
      messages: {},
    };
  }
});