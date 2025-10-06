'use client' // Делаем его клиентским для будущих интерактивных кастомизаций

import { PortableText, PortableTextComponents } from '@portabletext/react'

// (Опционально) Кастомные компоненты для отображения
const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  hardBreak: () => <br />,
  // Вы можете кастомизировать любой элемент, например, ссылки или заголовки
  // block: {
  //   h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
  // },
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