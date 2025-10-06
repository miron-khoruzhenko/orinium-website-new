import { createClient, groq } from 'next-sanity';
import { baseOptions } from '../config/sanity.client';

export type SanityProject = {
  _id: string;
  slug: string;
  name: string;
  title: string | null;
  subtitle: string | null;
  imageUrl: string;
  imageAlt: string | null;
  content: any[];
};

export async function getProjects(lang: Locale) {
	const client = createClient({
		...baseOptions,
		useCdn: process.env.NODE_ENV === 'production',
	})

	return client.fetch(
		groq`*[_type == "project" && language == $lang] {
			_id,
			"slug": slug.current,
			"name": project_name,
			"title": project_title,
			"subtitle": project_subtitle,
			"imageUrl": image.asset->url,
			"imageAlt": image.alt,
			content
		}`, { lang }
	)

}