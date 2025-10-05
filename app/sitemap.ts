import { locales } from '@/i18n/locale-list';
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

	// Генерируем URL для каждой локали
	const pages = locales.map((locale) => ({
		url: `${siteUrl}/${locale}`,
		lastModified: new Date(),
	}));

	return pages;
}