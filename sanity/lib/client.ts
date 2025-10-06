import { createClient } from 'next-sanity'
import { baseOptions } from '../config/sanity.client';

// 1. Централизованный клиент Sanity
export const sanityClient = createClient({
  ...baseOptions,
  useCdn: process.env.NODE_ENV === 'production',
})

// 2. Универсальная функция для выполнения GROQ-запросов
type SanityFetchParams = {
  query: string;
  params?: Record<string, any>;
};

export async function sanityFetch<T>({ query, params = {} }: SanityFetchParams): Promise<T> {
  const useCdn = sanityClient.config().useCdn
  
  return sanityClient.fetch(query, params, {
    cache: useCdn ? 'force-cache' : 'no-store',
  });
}