import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import BlogHero from '@/components/sections/Hero/BlogHero';

// Определим тип для данных поста
type Post = {
  _id: string;
  title: string;
  slug: string;
  mainImageUrl: string;
  excerpt: string;
  publishedAt: string;
};

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const posts = await sanityFetch<Post[]>({
    query: POSTS_QUERY,
    params: { lang: locale },
  });

  return (
    <div className="mx-auto">
      <BlogHero />
      <div className="grid gap-8 min-h-screen container mx-auto p-8 lg:p-16 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/${locale}/blog/${post.slug}`}>
            <article className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString(locale)}
              </time>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}