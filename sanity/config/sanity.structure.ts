// import { StructureBuilder } from 'sanity/structure'
// import { supportedLanguages } from './sanity.language';
// import schemaTypes from './sanity.types';

// export const structure = (S: StructureBuilder) =>
//   S.list()
//     .title('Content')
//     .items([
//       // Для каждого переводимого типа создаем свою группу
//       ...schemaTypes.map(type =>
//         S.listItem()
//           .title(getTitleForType(type)) // Получаем красивое название для типа
//           .child(
//             S.list()
//               .title(`${getTitleForType(type)} by Language`)
//               .items(
//                 // Создаем подпункт для каждого языка
//                 supportedLanguages.map(lang =>
//                   S.listItem()
//                     .title(`${getTitleForType(type)} (${lang.title})`)
//                     .child(
//                       // Этот список будет содержать только документы на выбранном языке
//                       S.documentTypeList(type)
//                         .title(`${getTitleForType(type)} (${lang.title})`)
//                         .filter('_type == $type && language == $lang')
//                         .params({ type, lang: lang.id })
//                     )
//                 )
//               )
//           )
//       ),

//       // Разделитель
//       S.divider(),

//       // Оставляем стандартный рендеринг для всех остальных типов документов
//       ...S.documentTypeListItems().filter(
//         listItem => !schemaTypes.includes(listItem.getId()!)
//       ),
//     ]);

// // Вспомогательная функция для получения читаемых названий
// function getTitleForType(type: string) {
//   switch (type) {
//     case 'project':
//       return 'Project';
//     case 'teamMember':
//       return 'Участники команды';
//     default:
//       return type.charAt(0).toUpperCase() + type.slice(1);
//   }
// }
import { StructureBuilder } from 'sanity/structure'
import { supportedLanguages } from './sanity.language' // Убедитесь, что путь к файлу верный

// Типы-синглтоны (секции главной страницы)
const singletonTypes = ['heroSection']; // Добавляйте сюда name других секций
// Типы-списки
const listTypes = ['project'];

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // --- 1. Пункт для управления главной страницей (Синглтоны) ---
      S.listItem()
        .title('Homepage')
        .id('homepage-sections')
        .child(
          S.list()
            .title('Sections of the Homepage')
            .items(
              singletonTypes.map(type =>
                S.listItem()
                  .title(getTitleForType(type))
                  .id(type)
                  .child(
                    // При клике сразу открывается редактор этого синглтона
                    S.document()
                      .title(getTitleForType(type))
                      .schemaType(type)
                      .documentId(type) // ID документа совпадает с его типом
                  )
              )
            )
        ),
      
      S.divider(),

      // --- 2. Пункты для списков документов (Проекты, Команда) ---
      ...listTypes.map(type => 
        S.listItem()
          .title(getTitleForType(type))
          .child(
            S.list()
              .title(`${getTitleForType(type)} по языкам`)
              .items(
                supportedLanguages.map(lang =>
                  S.listItem()
                    .title(`${getTitleForType(type)} (${lang.title})`)
                    .child(
                      S.documentTypeList(type)
                        .title(`${getTitleForType(type)} (${lang.title})`)
                        .filter('_type == $type && language == $lang')
                        .params({ type, lang: lang.id })
                        .initialValueTemplates([
                          // "Умная" кнопка "+", которая знает, какой язык создавать
                          S.initialValueTemplateItem(`${type}-${lang.id}`)
                        ])
                    )
                )
              )
          )
      ),
    ]);

// Вспомогательная функция для получения красивых названий
function getTitleForType(type: string): string {
  switch (type) {
    case 'project': return 'Projects';
    case 'heroSection': return 'Hero section';
    // Добавьте сюда другие названия по мере необходимости
    // case 'aboutSection': return 'Секция "О нас"';
    default: return type.charAt(0).toUpperCase() + type.slice(1);
  }
}