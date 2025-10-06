import { siteConfig } from '@/config';
import React from 'react'

export function generateMetadata() {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

	return {
		title: 'Orinium - CMS',
		description: siteConfig.description,
	}
}

const LocaleLayout = ({children }: LocaleLayoutProps) => {
	return children
}

export default LocaleLayout