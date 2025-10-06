import languageField from "@/sanity/config/sanity.language";
import { slugify } from "@/sanity/utils/base-lang-slug";
import { imageRatioValidation } from "@/sanity/utils/image-validator";
import { Rule } from "sanity";


const project_schema = {
	name: 'project',
	title: 'Projects',
	type: 'document',
	internationalization: true,
	// actions: {
	// 	delete: true,
	// },
	fields: [
		{
			name: 'project_name',
			title: 'Project Name',
			type: 'string',
			validation: (Rule: any) => Rule.required().min(2).max(100),
		},
		{
			name: 'project_title',
			title: 'Different Project Title',
			type: 'string',
			// validation: (Rule: any) => Rule.min(2).max(100),
		},
		{
			name: 'project_subtitle',
			title: 'Project Subtitle',
			type: 'string',
			// validation: (Rule: any) => Rule.required().min(2).max(100),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'project_name',
				maxLength: 96,
				slugify,
			},
			// validation: (Rule: Rule) => Rule.required().min(2).max(100),
		},
		{
			name: 'image',
			title: 'Project Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					type: 'string',
				},
			],
			validation: imageRatioValidation({ width: 600, height: 400 })
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			// should match 'languageField' plugin configuration setting, if customized
			name: languageField,
			type: 'string',
			readOnly: true,
			hidden: true,
		}
	]
}

export default project_schema