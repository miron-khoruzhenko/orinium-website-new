import { sanityFetch } from '@/sanity/lib/client';
import { POST_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import PortableTextRenderer from '@/components/layout/PortableTextRenderer';
import Image from 'next/image';

type Props = {
  params: { locale: string; slug: string; };
};

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params;

  const post = await sanityFetch<any>({ // Используем `any` для простоты, можно создать тип
    query: POST_BY_SLUG_QUERY,
    params: { lang: locale, slug },
  });

  if (!post) {
    return <h1>Пост не найден</h1>;
  }

  return (
    <article className="container mx-auto p-8 pt-28 max-w-2xl">
      <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
      <time className="text-gray-500 mb-8 block">
        {new Date(post.publishedAt).toLocaleDateString(locale)}
      </time>
      
      {post.mainImageUrl && (
        <div className="relative w-full h-auto mb-8">
          <Image
            src={post.mainImageUrl}
            alt={post.mainImageAlt || post.title}
            // fill
            width={608}
            height={384}
            objectFit="cover"
            className="object-cover rounded-lg"
          />
        </div>
      )}
      
      <div className="prose">
        {post.body && <PortableTextRenderer value={post.body} />}
      </div>
    </article>
  );
}