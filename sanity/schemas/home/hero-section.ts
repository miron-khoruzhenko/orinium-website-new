import structureGroups from "@/sanity/config/sanity.structure-groups";

const heroSectionSchema = {
	name: 'heroSection',
	title: 'Hero Section',
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
			name: 'slogan',
			title: 'Slogan',
			type: 'string',
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
	],
};

export default heroSectionSchema;