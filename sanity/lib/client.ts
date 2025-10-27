import { createClient } from 'next-sanity'
import { baseOptions } from '../config/sanity.client';

export const sanityClient = createClient({
  ...baseOptions,
  useCdn: false,
});

type SanityFetchParams = {
  query: string;
  params?: Record<string, any>;
};

export async function sanityFetch<T>({ query, params = {} }: SanityFetchParams): Promise<T> {
  // Для продакшена используем ревалидацию, для разработки - нет кеша
  if (process.env.NODE_ENV === 'production') {
    return sanityClient.fetch(query, params, {
      next: {
        // Устанавливаем время жизни кеша 60 секунд.
        // Это наша подстраховка на случай гонки состояний.
        revalidate: 60, 
      },
    });
  }
  
  // В режиме разработки всегда получаем свежие данные
  return sanityClient.fetch(query, params, { cache: 'no-store' });
}
