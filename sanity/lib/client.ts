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
  revalidate?: number; // Время в секундах или false для отключения
};

export async function sanityFetch<T>({ query, params = {}, revalidate }: SanityFetchParams): Promise<T> {
  const useCdn = sanityClient.config().useCdn

  return sanityClient.fetch(query, params, {
    next: {
      // Устанавливаем тег для ревалидации по требованию
      tags: ['sanity'],
      // Управляем ревалидацией по времени
      revalidate: revalidate ?? (useCdn ? 3600 : 0), // По умолчанию: 1 час в продакшене, 0 в разработке
    },
  });
}