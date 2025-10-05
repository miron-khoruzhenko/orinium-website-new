import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/', // Если есть страницы, которые не нужно индексировать
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}