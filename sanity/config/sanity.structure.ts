import { StructureBuilder } from 'sanity/structure'
import { supportedLanguages } from './sanity.language'
import schemas from '../schemas' // ✅ Импортируем ВСЕ схемы

// Определяем кастомный тип для наших схем с новым свойством
type SchemaTypeWithGroup = {
  name: string;
  title?: string;
  structureGroup?: 'singleton' | 'list';
}

export const structure = (S: StructureBuilder) => {
  // 1. Фильтруем схемы по их группам
  const singletonItems = (schemas as SchemaTypeWithGroup[])
    .filter(schema => schema.structureGroup === 'singleton')
    .map(schema => 
      S.listItem()
        .title(schema.title || schema.name)
        .id(schema.name)
        .child(
          S.document()
            .schemaType(schema.name)
            .documentId(schema.name)
            .title(schema.title || schema.name)
        )
    );

  const listItems = (schemas as SchemaTypeWithGroup[])
    .filter(schema => schema.structureGroup === 'list')
    .map(schema => 
      S.listItem()
        .title(schema.title || schema.name)
        .child(
          S.list()
            .title(`${schema.title || schema.name} by Language`)
            .items(
              supportedLanguages.map(lang =>
                S.listItem()
                  .title(`${schema.title || schema.name} (${lang.title})`)
                  .child(
                    S.documentTypeList(schema.name)
                      .title(`${schema.title || schema.name} (${lang.title})`)
                      .filter('_type == $type && language == $lang')
                      .params({ type: schema.name, lang: lang.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem(`${schema.name}-${lang.id}`)
                      ])
                  )
              )
            )
        )
    );

  // 2. Собираем финальную структуру
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homepage-sections')
        .child(
          S.list()
            .title('Sections of the Homepage')
            .items(singletonItems)
        ),
      S.divider(),
      ...listItems,
    ]);
}