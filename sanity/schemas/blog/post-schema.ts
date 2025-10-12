import { slugify } from "@/sanity/utils/base-lang-slug";

const postSchema = {
	name: 'post',
	title: 'Blog Posts',
	type: 'document',
	internationalization: true,
	structureGroup: 'list', // Помечаем как список, т.к. постов будет много
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
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference', // ✅ Тип "ссылка"
			to: [{ type: 'author' }], // Указываем, что ссылка ведет на документ типа 'author'
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
				slugify,
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'mainImage',
			title: 'Main Image',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alternative Text', type: 'string' }],
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime', // Специальный тип для даты и времени
			initialValue: () => new Date().toISOString(), // По умолчанию ставит текущую дату
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			description: 'Краткое описание для превью и SEO',
			type: 'text',
			rows: 3,
		},
		{
			name: 'body',
			title: 'Body',
			type: 'array',
			// 👇 КЛЮЧЕВОЕ ИЗМЕНЕНИЕ 👇
			of: [
				{
					type: 'block' // Стандартные текстовые блоки
				},
				{
					type: 'image', // ✅ Разрешаем вставлять изображения
					options: { hotspot: true },
					fields: [
						{
							name: 'alt',
							title: 'Alternative Text',
							type: 'string',
							validation: (Rule: any) => Rule.required(),
						},
						{
							name: 'caption',
							title: 'Caption',
							type: 'string',
						},
					]
				},
				{ type: 'code' }, // ✅ Разрешаем блоки кода
			],
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'mainImage',
		},
	},
};

export default postSchema;