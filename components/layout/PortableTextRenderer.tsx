'use client' // Делаем его клиентским для будущих интерактивных кастомизаций

import { PortableText, PortableTextComponents } from '@portabletext/react'
import ImageWithSkeleton from '../ui/ImageWithSkeleton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Выберите любую тему

// (Опционально) Кастомные компоненты для отображения
const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  hardBreak: () => <br />,
  block: {
    // Кастомизируем стиль для `blockquote`
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-black pl-4 my-8 text-xl italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  types: {
    code: ({ value }) => (
      <SyntaxHighlighter language={value.language || 'text'} style={vscDarkPlus}>
        {value.code}
      </SyntaxHighlighter>
    ),
    // Указываем, как рендерить тип 'image'
    image: ({ value }) => {
      // `value` - это объект с данными изображения из Sanity
      if (!value?.imageUrl) {
        return null;
      }
      return (
        <figure className="my-8 max-w-3xl mx-auto">
          <ImageWithSkeleton
            src={value.imageUrl}
            alt={value.alt || ''}
            width={800} // Укажите дефолтные размеры или получите их из Sanity
            height={450}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: any[] }) {
  if (!value) return null;

  return (
    <div className="prose prose-lg max-w-none"> {/* Используем Tailwind Typography для стилизации */}
      <PortableText
        value={value}
        components={components}
      />
    </div>
  )
}