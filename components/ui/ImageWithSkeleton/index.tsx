'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import clsx from 'clsx'

type ImageWithSkeletonProps = ComponentProps<typeof Image>;

export default function ImageWithSkeleton(props: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-200">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}
      <Image
        {...props}
        onLoad={() => setIsLoading(false)}
        className={clsx(
          props.className, 
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      />
    </div>
  );
}