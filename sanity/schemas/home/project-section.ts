const projectSectionSchema = {
  name: 'projectSection',
  title: 'Projects Section',
  type: 'document',
  internationalization: true,
  structureGroup: 'singleton', // Помечаем как синглтон для нашей структуры
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
      title: 'Section Title',
      description: 'Заголовок для секции проектов (например, "Наши Проекты")',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Section Subtitle',
      description: 'Подзаголовок или короткое описание секции',
      type: 'text',
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      description: 'Выберите и расставьте в нужном порядке проекты для отображения на главной',
      type: 'array',
      // 👇 КЛЮЧЕВАЯ ЧАСТЬ 👇
      of: [
        {
          type: 'reference', // Указываем, что это ссылка
          to: [{ type: 'project' }] // Ссылка на документы типа 'project'
        }
      ]
    }
  ],
};

export default projectSectionSchema;