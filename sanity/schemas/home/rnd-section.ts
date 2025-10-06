import structureGroups from "@/sanity/config/sanity.structure-groups";

const rndSectionSchema = {
	name: 'rndSection',
	title: 'R&D Section',
	type: 'document',
	structureGroup: structureGroups.singleton,
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
						},
					}	
				}
			],
		}
	],
};

export default rndSectionSchema;