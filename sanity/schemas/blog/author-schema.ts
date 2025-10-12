const authorSchema = {
  name: 'author',
  title: 'Authors',
  type: 'document',
  // Не делаем его переводимым, так как автор — это сущность, а не контент страницы
  structureGroup: 'list', // Добавляем в список
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
export default authorSchema;