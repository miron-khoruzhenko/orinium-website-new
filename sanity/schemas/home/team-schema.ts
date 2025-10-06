import structureGroups from "@/sanity/config/sanity.structure-groups";
import { imageRatioValidation } from "@/sanity/utils/image-validator";

const teamSectionSchema = {
	name: 'teamSection',
	title: 'Team Section',
	type: 'document',
	structureGroup: structureGroups.singleton,
	internationalization: true,
	fields: [
		// Обязательное поле языка
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
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
		},
		{
			name: 'founders',
			title: 'Founders',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'name',
							title: 'Name',
							type: 'string',
						},
						{
							name: 'status',
							title: 'Status',
							type: 'string',
						},
						{
							name: 'profilePicture',
							title: 'Profile Picture',
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
							validation: imageRatioValidation({width: 382, height: 382}),
						},
						// {
						// 	name: 'website',
						// 	title: 'Website URL',
						// 	type: 'url',
						// },
					],
				},
			],
		},
		{
			name: 'leads',
			title: 'Leads',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'name',
							title: 'Name',
							type: 'string',
						},
						{
							name: 'status',
							title: 'Status',
							type: 'string',
						},
						{
							name: 'profilePicture',
							title: 'Profile Picture',
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
							validation: imageRatioValidation({width: 382, height: 382}),
						},
						// {
						// 	name: 'website',
						// 	title: 'Website URL',
						// 	type: 'url',
						// },
					],
				},
			],
		}
	],
};

export default teamSectionSchema;