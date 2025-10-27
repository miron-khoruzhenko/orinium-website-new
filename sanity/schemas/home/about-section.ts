import structureGroups from "@/sanity/config/sanity.structure-groups";
import { imageRatioValidation } from "@/sanity/utils/image-validator";

const aboutSectionSchema = {
	name: 'aboutSection',
	title: 'About Section',
	type: 'document',
	structureGroup: structureGroups.singleton,
	options: {
		singleton: true,
	},
	fields: [
		{
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'image',
			title: 'Image',
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
			validation: imageRatioValidation({ width: 580, height: 330 })
		},
		{
			name: 'subsection_title',
			title: 'Subsection Title',
			type: 'string',
		},
		{
			name: 'subsection_items',
			title: 'Subsection Items',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'item_title',
							title: 'Item Title',
							type: 'string',
						},
						{
							name: 'item_content',
							title: 'Item Content',
							type: 'text',
						}
					],
					preview: {
						select: {
							title: 'item_title',
							subtitle: 'item_content'
						},
					}	
				}
			],
		}
	],
};

export default aboutSectionSchema;