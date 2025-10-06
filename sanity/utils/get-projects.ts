import { baseOptions } from '@/sanity.config';
import { createClient, groq } from 'next-sanity';

export async function getProjects(lang: string) {
	const client = createClient({
		...baseOptions,
		useCdn: process.env.NODE_ENV === 'production',
	})

	client.fetch(
		groq`*[_type == "project" && language == "${lang}"] {
			_id,
			"slug": slug.current,
			"name": project_name,
			"title": project_title,
			"subtitle": project_subtitle,
			"imageUrl": image.asset->url,
			"imageAlt": image.alt,
			content
		}`
	)

}