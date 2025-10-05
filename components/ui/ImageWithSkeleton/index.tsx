// components/ui/ImageWithSkeleton.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import clsx from 'clsx'

// Мы хотим, чтобы наш компонент принимал все те же пропсы, что и next/image
// для этого используем ComponentProps<typeof Image>
type ImageWithSkeletonProps = ComponentProps<typeof Image>;

export default function ImageWithSkeleton(props: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // Родительский div нужен для относительного позиционирования
    // Он будет занимать все доступное пространство и задавать форму
    <div className="relative h-full w-full overflow-hidden bg-gray-200">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}
      <Image
        {...props} // Передаем все пропсы (src, alt, width, etc.) в оригинальный Image
        onLoad={() => setIsLoading(false)}
        className={clsx(
          // Применяем оригинальные классы, если они были переданы
          props.className, 
          // Добавляем наши классы для плавного появления
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      />
    </div>
  );
}