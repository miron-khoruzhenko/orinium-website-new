const heroSectionSchema = {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  // internationalization: true,
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
			name: 'slogan',
			title: 'Slogan',
			type: 'string',
		}
  ],
};

export default heroSectionSchema;