import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

// Тип для данных, которые мы ожидаем от вебхука (из Projection в Sanity)
type WebhookBody = {
  language?: string;
  type?: string;
  slug?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookBody>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    if (!isValidSignature) {
      return new Response('Invalid secret', { status: 401 })
    }

    const { language, type, slug } = body ?? {};

    // Если изменилась любая секция главной страницы, ревалидируем главную для этого языка
    if (type?.endsWith('Section') && language) {
      const path = `/${language}`;
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    }

    // Если изменился конкретный проект, ревалидируем его страницу
    if (type === 'project' && language && slug) {
      const path = `/${language}/projects/${slug}`;
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    }

    return NextResponse.json({ revalidated: false, message: 'No matching path to revalidate' });

  } catch (error: any) {
    console.error('Error in revalidation endpoint:', error);
    return new Response(error.message, { status: 500 })
  }
}