import { defaultLocale } from "@/i18n/locale-list";
import { SlugSourceContext } from "sanity";

const slugify = (input: string, _schemaType: any, context: SlugSourceContext) => {
	const doc = context.parent as Record<string, unknown> | undefined
	const lang = (doc?.language as string) || defaultLocale

	const base = input
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.slice(0, 96)

	return `${base}-${lang}`
}


export { slugify }