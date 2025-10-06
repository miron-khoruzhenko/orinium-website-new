import structureGroups from "@/sanity/config/sanity.structure-groups";

const partnersSectionSchema = {
	name: 'partnersSection',
	title: 'Partners Section',
	type: 'document',
	structureGroup: structureGroups.singleton,
	internationalization: true,
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
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
		},
		{
			name: 'partners',
			title: 'Partners',
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
						// {
						// 	name: 'logo',
						// 	title: 'Logo',
						// 	type: 'image',
						// 	options: {
						// 		hotspot: true,
						// 	},
						// 	fields: [
						// 		{
						// 			name: 'alt',
						// 			title: 'Alternative Text',
						// 			type: 'string',
						// 		},
						// 	],
						// },
						{
							name: 'website',
							title: 'Website URL',
							type: 'url',
						},
					],
				},
			],
		}
	],
};

export default partnersSectionSchema;