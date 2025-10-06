import { StructureBuilder } from 'sanity/structure'
import { supportedLanguages } from './sanity.language';
import schemaTypes from './sanity.types';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Для каждого переводимого типа создаем свою группу
      ...schemaTypes.map(type =>
        S.listItem()
          .title(getTitleForType(type)) // Получаем красивое название для типа
          .child(
            S.list()
              .title(`${getTitleForType(type)} by Language`)
              .items(
                // Создаем подпункт для каждого языка
                supportedLanguages.map(lang =>
                  S.listItem()
                    .title(`${getTitleForType(type)} (${lang.title})`)
                    .child(
                      // Этот список будет содержать только документы на выбранном языке
                      S.documentTypeList(type)
                        .title(`${getTitleForType(type)} (${lang.title})`)
                        .filter('_type == $type && language == $lang')
                        .params({ type, lang: lang.id })
                    )
                )
              )
          )
      ),

      // Разделитель
      S.divider(),

      // Оставляем стандартный рендеринг для всех остальных типов документов
      ...S.documentTypeListItems().filter(
        listItem => !schemaTypes.includes(listItem.getId()!)
      ),
    ]);

// Вспомогательная функция для получения читаемых названий
function getTitleForType(type: string) {
  switch (type) {
    case 'project':
      return 'Project';
    case 'teamMember':
      return 'Участники команды';
    default:
      return type.charAt(0).toUpperCase() + type.slice(1);
  }
}